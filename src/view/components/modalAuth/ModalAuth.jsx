import { useState } from "react";
import API from "../../../api/API";
import css from "./modalAuth.module.css";
import { useHistory } from "react-router-dom";

export const ModalAuth = (props) => {
  const [error, setError] = useState("")
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [incorrect, setIncorrect] = useState(false)
  const history = useHistory();
  
  const submit = (e) => {
    e.preventDefault()
    const user = {
      username,
      password,
    };
    API.createUser(user)
    .then((res) => {
      localStorage.setItem("user", JSON.stringify(res))
      props.setIsAuth(res.data.token)
      console.log(props.isAuth);
      if (res.status === 200) {
        props.setModal(false)
        history.push("/personal/")
      }
    })
    .catch((error) => {
      if (error.status === 400) {
        setError("Логин или пароль ввели не правильно");
      }else if(username === ""){
        setError("Это обязательное поле")
      }
      else {
        setError("Логин или пароль ввели не правильно")
      }
    })
  };
  return (
    <div className={props.isAuth === null ? "modal active" : "modal"}>
      <div className={css.content} onClick={(e) => e.stopPropagation()}>
        <h1 className={css.contentH1}>Вход</h1>
        <div className={css.line}></div>
        <form onSubmit={submit} className={css.form}>
          <input 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={css.input}
            placeholder="Логин"
            type="text"
            style={{boxShadow: `0 1px 10px 0 ${ error?'red':'white'}`, border: `1px solid ${error?'red':'black'}`, transition: "all 0.3s ease"}}
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={css.input}
            placeholder="Пароль"
            type="password"
            style={{boxShadow: `0 1px 10px 0 ${ error?'red':'white'}`, border: `1px solid ${error?'red':'black'}`, transition: "all 0.3s ease"}}
          />
           <p style={{transition: "all 0.3s ease"}} className={css.errorText}>{error}</p>
          <p className={css.forgotLink}>Забыли пароль?</p>
          <button>ВОЙТИ</button>
        </form>
      </div>
    </div>
  );
};
