import React from 'react';
import PropTypes from 'prop-types';
import ListingItem from '../ListingItem/ListingItem';
import {listingShape} from '../../propz/listingProp';
import './Listings.css';

class Listings extends React.Component
{
  static propTypes =
  {
    listings: PropTypes.arrayOf(listingShape),
  };

  render ()
  {
    const {listings} = this.props;

    const listingsItemComponents = listings.map((listing, index) =>
    {
      return (
        <ListingItem listing={listing} key={listing.id} index={index}/>
      );
    });

    return (
      <div className="Listings">
        <h2>Listings</h2>
        <ul>{listingsItemComponents}</ul>
      </div>
    );
  }
}

export default Listings;
