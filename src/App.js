import React from "react";
import NavigationBar from "./components/navBar/NavBar";
import CardItem from "./components/card/Card";
import CardDetailContainer from "./components/cardDetail/CardDetailContainer";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <div className="container">
          <div className="section">
            {/* <!--   Card Section   --> */}
            <Route exact path="/" component={CardItem} />
            <Route path="/card-detail/:id" component={CardDetailContainer} />
          </div>
          <br />
          <br />
        </div>

        <footer className="page-footer orange">
          <div className="container">
            <div className="row"></div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Made by
              <a
                className="orange-text text-lighten-3"
                href="http://materializecss.com"
              >
                &nbsp;&nbsp;Toralf & Viktoria
              </a>
            </div>
          </div>
        </footer>

        {/* <!--  Scripts here--> */}
        <script
          src="https://unpkg.com/react/umd/react.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        ></script>

        <script>var Alert = ReactBootstrap.Alert;</script>
      </div>
    );
  }
}

export default App;

// imgSrc: PropTypes.string,
// cardTitle: PropTypes.string,
// cardDescription: PropTypes.string,
// cardLink: PropTypes.string
