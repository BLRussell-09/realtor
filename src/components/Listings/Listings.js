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
    onListingSelection: PropTypes.func,
  };

  render ()
  {
    const {listings, onListingSelection} = this.props;

    const listingsItemComponents = listings.map((listing, index) =>
    {
      return (
        <ListingItem
          listing={listing}
          key={listing.id}
          index={index}
          onSelect={onListingSelection}
        />
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
