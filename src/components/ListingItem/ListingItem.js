import React from 'react';
import './ListingItem.css';
// import PropTypes from 'prop-type';
import {listingShape} from '../../propz/listingProp';

class ListingItem extends React.Component
{

  static propTypes =
  {
    listing: listingShape,
  }

  render ()
  {
    const {listing} = this.props;
    return (
      <li>{listing.price}</li>
    );
  }
}

export default ListingItem;