import React from 'react';
import './ListingForm.css';

class ListingForm extends React.Component
{
  state =
  {
    newListing:
    {
      address: '',
      city: '',
      state: '',
      squareFootage: 0,
    },
  }

  formSubmit = (e) =>
  {
    const {onSubmit} = this.props;
    e.preventDefault();
    onSubmit(this.state.newListing);
  }

  formFieldStringState = (name, e) =>
  {
    const tempListing = {...this.state.newListing};
    tempListing[name] = e.target.value;
    this.setState({newListing: tempListing});
  }

  formFieldNumberState = (name, e) =>
  {
    const tempListing = {...this.state.newListing};
    tempListing[name] = e.target.value * 1;
    this.setState({newListing: tempListing});
  }

  addressChange = (e) =>
  {
    this.formFieldStringState('address', e);
  }

  cityChange = (e) =>
  {
    this.formFieldStringState('city', e);
  }

  stateChange = (e) =>
  {
    this.formFieldStringState('state', e);
  }

  squareFootageChange = (e) =>
  {
    this.formFieldNumberState('squareFootage', e);
  }

  render ()
  {

    const {newListing} = this.state;

    return (
      <div className="ListingForm col-xs-8 col-xs-offset-2">
        <h2 className="text-center">Submit new property</h2>
        <form onSubmit={this.formSubmit}>
          <div className="row">
            <fieldset className="col-xs-3">
              <label htmlFor="address">Address:</label>
              <br />
              <input
                type="text"
                className="col-xs-12"
                id="address"
                placeholder="1234 Main St."
                value={newListing.address}
                onChange={this.addressChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="city">City:</label>
              <br />
              <input
                type="text"
                className="col-xs-12"
                id="city"
                placeholder="Nashville"
                value={newListing.city}
                onChange={this.cityChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="state">State:</label>
              <br />
              <input
                type="text"
                className="col-xs-12"
                id="state"
                placeholder="BumTown"
                value={newListing.state}
                onChange={this.stateChange}
              />
            </fieldset>
          </div>
          <div className="row">
            <fieldset className="col-xs-3">
              <label htmlFor="squareFootage">Square Footage:</label>
              <br />
              <input
                type="number"
                className="col-xs-12"
                id="squareFootage"
                placeholder="33"
                value={newListing.squareFootage}
                onChange={this.squareFootageChange}
              />
            </fieldset>
          </div>
          <button className="btn btn-danger col-xs-6 col-xs-offset-3">Save House</button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
