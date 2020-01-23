import React from "react";
import CardItem from "./components/Card";
import CardDetailContainer from "./components/cardDetail/CardDetailContainer";
import { Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="light-blue lighten-1" role="navigation">
          <div className="nav-wrapper container">
            <a
              id="logo-container"
              href="/img/nasa-logo.png"
              className="brand-logo"
            >
              <img
                id="siteLogo"
                src="/img/nasa-logo-small.png"
                alt="some description"
              ></img>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="/tosomepage">Navbar Link</a>
              </li>
            </ul>

            <ul id="nav-mobile" className="sidenav">
              <li>
                <a href="/tosomepage">Navbar Link</a>
              </li>
            </ul>
            <a
              href="/tosomepage"
              data-target="nav-mobile"
              className="sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </a>
          </div>
        </nav>
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

        {/* <!--  Scripts--> */}
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="js/materialize.js"></script>
        <script src="js/init.js"></script>
      </div>
    );
  }
}

export default App;
