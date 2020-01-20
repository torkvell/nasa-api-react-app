import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CardItem extends Component {
  render() {
    return (
      <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src={this.props.imgSrc} />
              <span class="card-title">{this.props.cardTitle}</span>
            </div>
            <div class="card-content">
              <p>{this.props.cardDescription}</p>
            </div>
            <div class="card-action">
              <a href={this.props.cardLink}>MORE INFO</a>
            </div>
          </div>
        </div>
      </div>
    );
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