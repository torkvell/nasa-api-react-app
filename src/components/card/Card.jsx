import React, { Component } from "react";
import PropTypes from "prop-types";
import CardFooter from "./CardFooter";
import { Card } from "react-bootstrap";
import "./card.css";
import Spinner from "react-bootstrap/Spinner";

export default class CardItem extends Component {
  // const { loading, data, error } = this.state;
  // the initial state of the component
  state = {
    loading: true,
    data: [],
    error: false
  };
  //activates once the component has been rendered/mounted the first time
  componentDidMount = () => {
    const urls = [
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=BNhPJtnZK474mPjmaH2nBhjX5YjkQkMdCPHV3x7e",
      "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=BNhPJtnZK474mPjmaH2nBhjX5YjkQkMdCPHV3x7e",
      "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=BNhPJtnZK474mPjmaH2nBhjX5YjkQkMdCPHV3x7e"
    ];
    Promise.all(urls.map(url => fetch(url).then(resp => resp.json()))).then(
      respArray => {
        console.log(respArray);
        // put it in component local state
        this.setState({
          loading: false,
          data: respArray
        });
      }
    ).catch = error => {
      // if the loading fails, set an error state
      this.setState({ error: error });
    };
  };

  render() {
    if (this.state.loading) {
      return (
        <div>
          <Spinner class="spinner" animation="border" role="status">
            <span className="sr-only"></span>
          </Spinner>
          <div class="nasaFetchText">Fetching data from NASA</div>
        </div>
      );
    } else if (this.state.error) {
      return <div>{this.state.error}</div>;
    } else {
      const cardArray = this.state.data.map((rover, index) => (
        <Card style={{ width: "18rem" }} key={index}>
          <Card.Img variant="top" src={rover.photos[index].img_src} />
          <Card.Body>
            <Card.Title>{rover.photos[index].rover.name}</Card.Title>
            <Card.Text>Status: {rover.photos[index].rover.status}</Card.Text>
          </Card.Body>
          <CardFooter roverId={index} />
        </Card>
      ));
      return <div>{cardArray}</div>;
    }
  }
}

CardItem.propTypes = {
  imgSrc: PropTypes.string,
  cardTitle: PropTypes.string,
  cardDescription: PropTypes.string,
  cardLink: PropTypes.string
};

// TeamItem.defaultProps = {
//   itemStyle: { width: `auto` },
//   itemTitle: null
// };
