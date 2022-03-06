import "./index.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Personal } from "./view/pages/personal/Personal";
import { Header } from "./view/components/header/Header";
import { Footer } from "./view/components/footer/Footer";
import { ModalAuth } from "./view/components/modalAuth/ModalAuth";
import { Main } from "./view/pages/main/Main";
import { Resume } from "./view/pages/resume/Resume";
import { UserResume } from "./view/pages/userResume/UserResume";
import {PrivateRoute} from "../src/route/PrivateRoute"
function App() {
  const [modalAuthActive, setModalAuthActive] = useState(false);
  const [auth, setAuth] = useState(() =>
    JSON.parse(localStorage.getItem("user"))
  );
  const authUser = (obj) => {
    localStorage.setItem("user", JSON.stringify(obj))
  }
  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(auth));
  // }, [auth]);
  return (
    <Router>
      <div className="App">
        <Header auth={auth} setAuth={setAuth} />

        <ModalAuth
          active={modalAuthActive}
          setActive={setModalAuthActive}
          authUser={authUser}
          auth={auth}
        />
        <Switch>
        <PrivateRoute path="/personal" user={auth} Component={Personal}/>
          <Route path="/userResume">
            <UserResume />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Main />
          </Route>

          <Route path="*">
            <p className="error">404 error! Тако страницы нет!</p>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
