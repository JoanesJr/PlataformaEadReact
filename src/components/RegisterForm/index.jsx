import React, {useEffect, useState} from "react";
import style from "./form.module.css";
import Button from "../Button/index.jsx";
import Errors from '../Errors/Errors';
import api from "../../api/api";

const RegisterForm = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState(5);
  const [errors, setErrors] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


  const handleForm = e => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      password,
      birth,
      email,
    };

    const register = data => {
      let create = api.post("user", data).then(data => {
        setSuccess("Usuário criado com sucesso");
        setErrors(null);
        setError(null);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setBirth("");
      }).catch(({response}) => {
        console.log(response.data)
        if (response.data.errors) {
        setErrors(response.data.errors);
        setSuccess(null)
        setError(null);
      }else {
        if (response.data.error) {
        setErrors(null);
        setSuccess(null);
        setError(response.data.error);
        }}
      });
      
    }


    register(data);
  }

  return (
    <main className="corpo">
      <div className={style.containerLogo}>
        <div className={style.logo}>
          <div className={style.imgContainer}>
            <img
              src="https://logosmarcas.net/wp-content/uploads/2021/11/Transformers-Logo.png"
              className={style.imgLogo}
              alt="logo"
            ></img>
          </div>
        </div>
      </div>
      <div className={style.containerForm}>
        <div className={style.formContainer}>
          <form className={style.form} onSubmit={handleForm}>
            <h3>REGISTRE-SE</h3>
            {errors && (
              <div className={style.errors}>
                <Errors errors={errors} error={error}/>
              </div>
            )}
            {error && (
              <div className={style.errors}>
                <Errors errors={errors} error={error}/>
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
                  placeholder="Informe seu nome"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                ></input>
              </label>
            </div>
            <div className={style.formGroup}>
              <label>
                Sobrenome:{" "}
                <input
                  type="text"
                  placeholder="Informe seu sobrenome"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                ></input>
              </label>
            </div>
            <div className={style.formGroup}>
              <label>
                E-mail:{" "}
                <input
                  type="email"
                  placeholder="Informe seu email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                ></input>
              </label>
            </div>
            <div className={style.formGroup}>
              <label>
                Senha:{" "}
                <input
                  type="password"
                  placeholder="Informe sua senha"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                ></input>
              </label>
            </div>
            <div className={style.formGroup}>
              <label>
                Nascimento:{" "}
                <input
                  type="date"
                  onChange={(e) => setBirth(e.target.value)}
                  value={birth}
                ></input>
              </label>
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

export default RegisterForm;
