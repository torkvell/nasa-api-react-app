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
    fetch(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=BNhPJtnZK474mPjmaH2nBhjX5YjkQkMdCPHV3x7e&camera=NAVCAM"
    )
      .then(response => response.json())
      // converted to json
      .then(response => {
        //turn response object into array
        const dataArray = Object.values(response.photos);
        console.log(dataArray);
        // put it in component local state
        this.setState({
          loading: false,
          data: dataArray
        });
      }).catch = error => {
      // if the loading fails, set an error state
      this.setState({ error: error });
    };
  };

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else if (this.state.error) {
      return <div>{this.state.error}</div>;
    } else {
      const cardArray = this.state.data.map(dataItem => (
        <div className="row" key={dataItem.id}>
          <div className="col s12 m7">
            <div className="card">
              <div className="card-image">
                <img src={dataItem.img_src} alt="data item" />
                <span className="card-title">{dataItem.rover.name}</span>
              </div>
              <div className="card-content">
                <p>Camera name: {dataItem.camera.full_name}</p>
              </div>
              <CardFooter roverId={dataItem.id} />
            </div>
          </div>
        </div>
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
