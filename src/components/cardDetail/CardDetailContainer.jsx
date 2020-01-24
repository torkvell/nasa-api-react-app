import React, { Component } from "react";
import CardDetail from "./CardDetail";

export default class CardDetailContainer extends Component {
  state = {
    cardData: null
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
        // put it in component local state
        this.setState({
          loading: false,
          data: respArray[id]
        });
        console.log(this.state.data);
      }
    ).catch = error => {
      // if the loading fails, set an error state
      this.setState({ error: error });
    };
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
