import "./index.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Personal } from "./view/pages/personal/Personal";
import { Header } from "./view/components/header/Header";
import { Footer } from "./view/components/footer/Footer";
import { Main } from "./view/pages/main/Main";
import { Resume } from "./view/pages/resume/Resume";
import { UserResume } from "./view/pages/userResume/UserResume";
import {PrivateRoute} from "../src/route/PrivateRoute"
import Marker from "./view/pages/marker/Marker";
function App() {
  // const [isAuth, setIsAuth] = useState(() =>
  //   JSON.parse(localStorage.getItem("user"))
  // );
  // const authUser = (obj) => {
  //   localStorage.setItem("user", JSON.stringify(obj))
  // }
  const [isAuth, setIsAuth] = useState(() => JSON.parse(localStorage.getItem("user")));
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(isAuth))
    }, [isAuth])
  return (
    <Router>
      <div className="App">
        <Header isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Switch>
        <PrivateRoute exact path="/user-resume/:id" isAuth={isAuth} Component={UserResume}/>
        <PrivateRoute path="/personal/" isAuth={isAuth} Component={Personal}/>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/marker-list">
            <Marker />
          </Route>
          <Route path="/">
            <Main />
          </Route>
          <Route path="*">
            <p className="error">404 error! Такоe страницы нет!</p>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
