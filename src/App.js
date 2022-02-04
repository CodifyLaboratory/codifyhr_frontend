import './index.css';
import { Header } from "./view/components/header/Header"
import { Footer } from "./view/components/footer/Footer"
import { Main } from "./view/pages/main/Main"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route to="/">
            <Main/>
          </Route>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
