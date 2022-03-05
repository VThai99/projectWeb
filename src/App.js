import "./App.scss";
import "./assets/scss/style.scss";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./assets/common/Header";
import Footer from "./assets/common/Footer";
function App() {
  return (
    <div className="App">
      {" "}
      <Router>
        <div className="shopmobile-main">
          <Header />
          <Routes />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
