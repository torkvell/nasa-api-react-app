import React, { Component } from "react";
import CardDetail from "./CardDetail";

export default class CardDetailContainer extends Component {
  state = {
    cardData: null
  };

  componentDidMount() {
    fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=BNhPJtnZK474mPjmaH2nBhjX5YjkQkMdCPHV3x7e`
    )
      .then(res => res.json())
      .then(response => {
        const { id } = this.props.match.params;
        console.log("ID", id);
        console.log("response.photos", response.photos);
        console.log("response.photos[0].id", response.photos[0].id);
        console.log(
          "FILTER",
          response.photos.filter(obj => (obj.id === id ? obj : 5))
        );
        // const dataArray = Object.values(response.photos[id]);
        // console.log(dataArray);
        // this.updateState(dataArray);
      })
      .catch(console.error);
  }

  updateState(dataArray) {
    this.setState({
      cardData: dataArray
    });
  }

  render() {
    const { id } = this.props.match.params;
    console.log(id);
    return <CardDetail id={id} cardData={this.state.cardData} />;
  }
}
