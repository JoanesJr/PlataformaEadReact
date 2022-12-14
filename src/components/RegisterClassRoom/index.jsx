import React, { useState, useEffect } from "react";
import style from "./RegisterClassRoom.module.css";
import SampleButton from "../ButtonSample";
import Button from "../Button";
import Errors from "../Errors/Errors";
import api from "../../api/api";
import Modal from "react-modal";

Modal.setAppElement("#root");

const RegisterClassRoom = ({ id, labelButton, edit }) => {
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
      let allCourses = [];
      api
        .get("course")
        .then(({ data }) => {
          data.map((value) => {
            allCourses.push(value);
          });

          setCourses(allCourses);
        })
        .catch((e) => console.log(e));
    };

    getCourses();

      const get = () => {
        let courseSelect = [];
        api
          .get(`classroom/${id}`)
          .then(({ data }) => {
            setName(data[0].title);
            setDescription(data[0].description);
            setFileName(data[0].fileStorage);

            data[0].course.map((value) => {
              courseSelect.push(value);
            });

            setSelectCourses(courseSelect);
          })
          .catch((err) => console.log(err));
      };

      get();
    
  }, []);

  const handleOpenModel = () => {
    setIsOpen(true);
  };

  const handleCloseModel = () => {
    setIsOpen(false);
    setSelectCourses([]);
  };

  const handleChooseModal = () => {
    setIsOpen(false);
  };

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
      let id = [];
      let create = api
        .post("classroom", data)
        .then(({ data }) => {
          setSuccess("Aula criado com sucesso");
          setErrors(null);
          setError(null);
          setName("");
          setDescription("");
          setFileName("");
          setSelectCourses([]);
          selectCourses.map((value) => {
            let trasnform = { id: value };
            id.push(trasnform);
          });

          let courses = {
            course: id,
          };

          let addCourse = api
            .put(`classroom/${data.id}`, courses)
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

    const update = async (data) => {
      let id = [];
      let create = api
        .put(`classroom/${id}`, data)
        .then(({ data }) => {
          setSuccess("Aula atualizada com sucesso");
          setErrors(null);
          setError(null);
          setName("");
          setDescription("");
          setFileName("");
          setSelectCourses([]);
          selectCourses.map((value) => {
            let trasnform = { id: value };
            id.push(trasnform);
          });

          let courses = {
            course: id,
          };

          let addCourse = api
            .put(`classroom/${data.id}`, courses)
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

    if (edit) {
      update(data);
    } else {
      register(data);
    }
  };

  const handleCheckbox = ({ target }) => {
    let listCourse = [...selectCourses];
    if (target.checked) {
      listCourse.push(target.value);
      setSelectCourses(listCourse);
    } else {
      let newListCourse = selectCourses.filter(
        (element, index, arr) => arr[index] != target.value
      )
        ? true
        : false;
      setSelectCourses(newListCourse);
    }
  };

  return (
    <main className="corpo">
      <div className="formContainer">
        <div className={style.formContainer}>
          <form className={style.form} onSubmit={handleForm}>
            <h3>CADASTRAR AULA</h3>
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
                Descri????o:{" "}
                <input
                  type="text"
                  placeholder="Informe a descri????o"
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
              <Button text={labelButton} />
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
            <h3>INFORME QUAIS CURSOS TER??O ESTA AULA</h3>
            <div className={style.containerCheckbox}>
              {courses.map((value) => (
                <div className={style.checkboxDiv}>
                  <label Key={value.id} className={style.container}>
                    <input
                      type="checkbox"
                      className={style.checkbox}
                      onChange={(event) => handleCheckbox(event)}
                      value={value.id}
                    ></input>
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
            <button
              onClick={() => handleChooseModal()}
              className={style.success}
            >
              Selecionar
            </button>
          </div>
          <div>
            <button className={style.danger} onClick={() => handleCloseModel()}>
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default RegisterClassRoom;
