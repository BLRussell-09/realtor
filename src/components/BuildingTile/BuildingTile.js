import React from 'react';
import './BuildingTile.css';
import PropTypes from 'prop-types';

class BuildingTile extends React.Component
{

  static propTypes =
  {
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    pTagText: PropTypes.string.isRequired,
  }

  render ()
  {
    const {imageSrc, altText, pTagText} = this.props;
    const image = require(`./images/${imageSrc}.png`);
    return (
      <div className="BuildingTile col-xs-3">
        <div className="image-detail">
          <img src={image} alt={altText}/>
          <p>{pTagText}</p>
        </div>
      </div>
    );
  }
}

export default BuildingTile;
