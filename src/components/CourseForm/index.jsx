import React, { useState } from "react";
import style from "./userForm.module.css";
import Button from "../Button";
import Errors from "../Errors/Errors";
import api from "../../api/api";

const UserForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [filename, setFileName] = useState("");
    const [errors, setErrors] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleForm = (e) => {
      e.preventDefault();
      const data = new FormData();
      data.append('name', name);
      data.append("description", description);
      data.append("file", filename);

      const register = async (data) => {
        // let create = await Course.create(data);
        let create = api.post("course", data).then(data => {
          setSuccess("Usuário criado com sucesso");
          setErrors(null);
          setError(null);
          setName("");
          setDescription("");
          setFileName("");
        }).catch(({response}) => {
          if (response.data.errors) {
            setErrors(response.data.errors);
            setSuccess(null);
            setError(null);
          } else {
            if (response.data.error) {
              setErrors(null);
              setSuccess(null);
              setError(response.data.error);
            }
}
        })
      };

      register(data);
    };

  return (
    <main className="corpo">
      
      <div className="formContainer">
        <div className={style.formContainer}>
          <form className={style.form} onSubmit={handleForm}>
            <h3>CADASTRAR CURSO</h3>
            {errors && (
              <div className={style.errors}>
                <Errors errors={errors} error={error} />
              </div>
            )}
            {error && (
              <div className={style.errors}>
                <Errors errors={errors} error={error} />
              </div>
            )}
            {success && (
              <div className={style.errors}>
                <small className={style.text_success}>{success}</small>
              </div>
            )}
            <div className={style.formGroup}>
              <label>
                Nome:{" "}
                <input
                  type="text"
                  placeholder="Informe a nome do curso"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                ></input>
              </label>
            </div>
            <div className={style.formGroup}>
              <label>
                Descrição:{" "}
                <input
                  type="text"
                  placeholder="Informe a descrição do curso"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                ></input>
              </label>
            </div>
            <div className={style.formGroup}>
             <input type="file" name="filename" id="filename" onChange={e=> setFileName(e.target.files[0])} />
            </div>
           
            <div className={`${style.formGroup} ${style.transparent}`}>
              <Button text="Cadastre-se" />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default UserForm;
