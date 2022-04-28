import "./index.css";
import {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Personal} from "./view/pages/personal/Personal";
import {Header} from "./view/components/header/Header";
import {Footer} from "./view/components/footer/Footer";
import {Main} from "./view/pages/main/Main";
import {Resume} from "./view/pages/resume/Resume";
import {UserResume} from "./view/pages/userResume/UserResume";
import {PrivateRoute} from "../src/route/PrivateRoute";
import Marker from "./view/pages/marker/Marker";
import {Partners} from "./view/pages/partnenrs/Partners";

function App() {

    const [modal, setModal] = useState(false);

    const [isAuth, setIsAuth] = useState(() =>
        JSON.parse(localStorage.getItem("user"))
    );

    const authUser = (obj) => {
        localStorage.setItem("user", JSON.stringify(obj));
        setIsAuth(obj)
    }
    return (
        <Router>
            <div className="App">
                <Header setModal={setModal} modal={modal} isAuth={isAuth} setIsAuth={setIsAuth} authUser={authUser}/>
                <Switch>
                    <PrivateRoute
                        exact
                        path="/user-resume/:id"
                        user={isAuth}
                        Component={UserResume}
                    />
                    <PrivateRoute path="/personal/" user={isAuth} Component={Personal}/>
                    <PrivateRoute path="/marker-list/" user={isAuth} Component={Marker}/>
                    <PrivateRoute path="/resume/" user={isAuth}
                                  Component={Resume}/>
                    <Route exact path="/partners/">
                        <Partners isAuth={isAuth} setIsAuth={setIsAuth}/>
                    </Route>
                    <Route exact path="/">
                        <Main isAuth={isAuth} modal={modal} setModal={setModal}/>
                    </Route>
                    <Route path="*">
                        <p className="error">404 error! Такой страницы нет!</p>
                    </Route>
                </Switch>
                <Footer modal={modal} setModal={setModal} isAuth={isAuth}/>
            </div>
        </Router>
    );
}

export default App;
