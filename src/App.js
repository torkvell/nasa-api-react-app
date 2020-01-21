import React from "react";
import CardItem from "./components/Card";

class App extends React.Component {
  render() {
    return (
      // <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1.0"
          />
          <title>Starter Template - Materialize</title>

          {/* <!-- CSS  --> */}
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
        </head>
        <body>
          <nav class="light-blue lighten-1" role="navigation">
            <div class="nav-wrapper container">
              <a
                id="logo-container"
                href="/img/nasa-logo.png"
                class="brand-logo"
              >
                <img id="siteLogo" src="/img/nasa-logo-small.png"></img>
              </a>
              <ul class="right hide-on-med-and-down">
                <li>
                  <a href="#">Navbar Link</a>
                </li>
              </ul>

              <ul id="nav-mobile" class="sidenav">
                <li>
                  <a href="#">Navbar Link</a>
                </li>
              </ul>
              <a href="#" data-target="nav-mobile" class="sidenav-trigger">
                <i class="material-icons">menu</i>
              </a>
            </div>
          </nav>
          <div class="container">
            <div class="section">
              {/* <!--   Card Section   --> */}
              <CardItem
                imgSrc="https://materializecss.com/images/sample-1.jpg"
                cardTitle="Test Title"
                cardDescription="Description goes here"
                cardLink="./someotherpage.html"
              />
            </div>
            <br />
            <br />
          </div>

          <footer class="page-footer orange">
            <div class="container">
              <div class="row"></div>
            </div>
            <div class="footer-copyright">
              <div class="container">
                Made by
                <a
                  class="orange-text text-lighten-3"
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
        </body>
      </html>
    );
  }
}

export default App;

// imgSrc: PropTypes.string,
// cardTitle: PropTypes.string,
// cardDescription: PropTypes.string,
// cardLink: PropTypes.string
