import React, { Component } from "react";
import PropTypes from "prop-types";
import CardFooter from "./CardFooter";

export default class CardItem extends Component {
  // const { loading, data, error } = this.state;
  // the initial state of the component
  state = {
    loading: true,
    data: [],
    error: false
  };
  // activates once the component has been rendered/mounted the first time
  componentDidMount = () => {
    // fetch some data
    const response = (fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=BNhPJtnZK474mPjmaH2nBhjX5YjkQkMdCPHV3x7e"
    )
      .then(response => response.json())
      // converted to json
      .then(response => {
        //turn response object into array
        const dataArray = response.photos.reduce((array, item) => {
          array.push(item);
          return array;
        }, []);
        console.log(dataArray);
        // put it in component local state
        this.setState({
          loading: false,
          data: dataArray
        });
      }).catch = error => {
      // if the loading fails, set an error state
      this.setState({ error: error });
    });
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else if (this.state.error) {
      return <div>{this.state.error}</div>;
    } else {
      const cardArray = this.state.data.map(dataItem => (
        <div class="row" key={dataItem.id}>
          <div class="col s12 m7">
            <div class="card">
              <div class="card-image">
                <img src={dataItem.img_src} />
                <span class="card-title">{dataItem.rover.name}</span>
              </div>
              <div class="card-content">
                <p>Camera name: {dataItem.camera.full_name}</p>
              </div>
              <CardFooter />
            </div>
          </div>
        </div>
      ));
      console.log(cardArray);
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
