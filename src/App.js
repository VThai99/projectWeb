import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import DefaultLayout from "./assets/pages/DefaultLayout";
import Login from "./assets/pages/Login";
import "./assets/scss/style.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <DefaultLayout />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
