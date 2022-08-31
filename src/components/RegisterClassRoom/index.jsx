
import React, { useState, useEffect } from "react";
import style from './RegisterClassRoom.module.css';
import SampleButton from "../ButtonSample";
import Button from "../Button"
import Errors from "../Errors/Errors";
import api from "../../api/api";
import Modal from "react-modal";

Modal.setAppElement('#root');

const RegisterClassRoom = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [filename, setFileName] = useState("");
    const [errors, setErrors] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [modal, setModal] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [courses, setCourses] = useState([]);
    const [selectCourses, setSelectCourses] = useState([]);

    useEffect(() => {
        const getCourses = () => {
            let allCourses = []
            api
              .get("course")
              .then(({data}) => {
                data.map(value => {
                    allCourses.push(value);
                })

                setCourses(allCourses)
              })
              .catch((e) => console.log(e));
        }

        getCourses();

    }, []);

    const handleOpenModel = () => {
        setIsOpen(true);
    }
    
    const handleCloseModel = () => {
        setIsOpen(false);
    }
    
    const handleChooseModal = () => {

    }

    const customStyles = {
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "rgb(62, 62, 77)",
      },
      overlay: {
        backgroundColor: "rgb(7, 7, 7)",
      },
    };

     const handleForm = (e) => {
       e.preventDefault();
       const data = new FormData();
       data.append("title", name);
       data.append("description", description);
       data.append("file", filename);


       const register = async (data) => {
         let create = api
           .post("classroom", data)
           .then(({data}) => {
             setSuccess("Aula criado com sucesso");
             setErrors(null);
             setError(null);
             setName("");
             setDescription("");
             setFileName("");

            let teste = {
                course: [
                    {
                        id: 1
                    }
                ]
            }

             let addCourse = api
               .put(`classroom/${data.id}`, teste)
               .then((data) => {
                 console.log(data);
               })
               .catch((err) => {
                 console.log(err);
               });
           })
           .catch(({ response }) => {
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
           });
       };



       register(data);
     };

    return (
      <main className="corpo">
        <div className="formContainer">
          <div className={style.formContainer}>
            <form className={style.form} onSubmit={handleForm}>
              <h3>REGISTRE-SE</h3>
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
                    placeholder="Informe o titulo da aula"
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
                    placeholder="Informe a descrição"
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  ></input>
                </label>
              </div>
              <div className={style.formGroup}>
                <input
                  type="file"
                  name="filename"
                  id="filename"
                  onChange={(e) => setFileName(e.target.files[0])}
                />
              </div>

              <div className={`${style.formGroup} ${style.transparent}`}>
                <div
                  onClick={(e) => handleOpenModel()}
                  className={style.openModal}
                >
                  Atribuir Cursos
                </div>
              </div>

              <div className={`${style.formGroup} ${style.transparent}`}>
                <Button text="Adicionar Aula" />
              </div>
            </form>
          </div>
        </div>

        {/* ==================MODAL===================== */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModel}
          style={customStyles}
        >
          <div className={style.formContainer}>
            <form className={style.form} onSubmit={handleForm}>
              <h3>INFORME QUAIS CURSOS TERÃO ESTA AULA</h3>
              <div className={style.containerCheckbox}>
                {courses.map((value) => (
                  <div className={style.checkboxDiv}>
                    <label Key={value.id} className={style.container}>
                      <input type="checkbox" className={style.checkbox}></input>
                      <span className={style.checkmark}></span>
                      <span className={style.name}>{value.name}</span>
                    </label>
                  </div>
                ))}
              </div>
            </form>
          </div>

          <div className={style.btnContainer}>
            <div>
              <button onClick={() => handleChooseModal()} className={style.success}>Selecionar</button>
            </div>
            <div>
              <button className={style.danger} onClick={() => handleCloseModel()}>Cancelar</button>
            </div>
          </div>
        </Modal>
      </main>
    );
}


export default RegisterClassRoom;