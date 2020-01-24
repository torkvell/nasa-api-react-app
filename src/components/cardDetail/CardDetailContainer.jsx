import React, { Component } from "react";
import CardDetail from "./CardDetail";
import { Carousel } from "react-responsive-carousel";
import "./cardDetail.css";

export default class CardDetailContainer extends Component {
  state = {
    roverData: null,
    roverName: null,
    loading: true,
    roverPictures: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const urls = [
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=BNhPJtnZK474mPjmaH2nBhjX5YjkQkMdCPHV3x7e",
      "https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=BNhPJtnZK474mPjmaH2nBhjX5YjkQkMdCPHV3x7e",
      "https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=BNhPJtnZK474mPjmaH2nBhjX5YjkQkMdCPHV3x7e"
    ];
    Promise.all(urls.map(url => fetch(url).then(resp => resp.json()))).then(
      respArray => {
        //create variables from dataArray
        const roverData = respArray[id].photos;
        console.log(roverData);
        const roverName = respArray[id].photos[id].rover.name;
        const roverPictures = respArray[id].photos.map(item => {
          return item.img_src;
        });

        // put it in component local state
        this.setState({
          loading: false,
          roverData: roverData,
          roverName: roverName,
          roverPictures: roverPictures
        });
      }
    ).catch = error => {
      // if the loading fails, set an error state
      this.setState({ error: error });
    };
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else if (this.state.error) {
      return <div>{this.state.error}</div>;
    } else {
      const { id } = this.props.match.params;
      return (
        <CardDetail
          id={id}
          roverName={this.state.roverName}
          roverPictures={this.state.roverPictures}
          roverData={this.state.roverData}
        />
      );
    }
  }
}
