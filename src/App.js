import './index.css';
import { Personal } from "./view/pages/personal/Personal"
import { Header } from "./view/components/header/Header"
import { Footer } from "./view/components/footer/Footer"
import { Main } from "./view/pages/main/Main"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Resume } from './view/pages/resume/Resume';
import { UserResume } from './view/pages/userResume/UserResume';
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/userResume">
            <UserResume/>
          </Route>
          <Route path="/resume">
            <Resume/>
          </Route>
          <Route path="/personal">
            <Personal/>
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        
          <Route path="*">
            <p className='error'>404 error! Тако страницы нет!</p>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
