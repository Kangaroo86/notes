import React, { Component } from 'react';

export default class UpdateFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBody: true,
      hasValidationErrors: false
      // hostInfo: hostInfo
      // {
      //   rent: 500,
      //   dimensions: 300,
      //   location: 'Berkeley, CA',
      //   date: 'September 23, 2017',
      //   amenities: 'washer/dryer, water hose, compost/recycling/trash bins'
      //   //   imagePath: '//via.placeholder.com/300x200'
      // }
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    //console.log(updatedHostInfo, 'Ahhhhhhhhhhhh');

    const $form = event.target;

    const location = $form.location.value
      ? $form.location.value.trim()
      : this.props.hostInfo.location;

    const dimensions = $form.dimensions.value
      ? Number($form.dimensions.value.trim())
      : this.props.hostInfo.dimensions;

    const rent = $form.rent.value
      ? Number($form.rent.value.trim())
      : this.props.hostInfo.rent;

    const date = $form.date.value
      ? $form.date.value.trim()
      : this.props.hostInfo.date;

    const amenities = $form.amenities.value
      ? $form.amenities.value.trim()
      : this.props.hostInfo.amenities;

    const id = this.props.hostInfo.id;

    const updatedHostInfo = {
      id,
      location,
      dimensions,
      rent,
      date,
      amenities
    };
    // this.props.onSubmit(hostInfo);

    console.log(updatedHostInfo, 'Ahhhhhhhhhhhh');
    this.props.onUpdate(updatedHostInfo);

    //let regPhone = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
    // let regPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    //
    // if (phone.match(regPhone) || name !== null || address !== null) {
    //   this.props.onSubmit({ name, phone, address });
    // } else {
    //   this.setState({ hasValidationErrors: true });
    // }
  };

  render() {
    console.log(this.state, 'these are the props');
    console.log('this is hostInfo', this.props.hostInfo);
    return (
      <form id="form" className="col s12 m12" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">home</i>
            <input
              id="location"
              type="text"
              className="validate"
              // placeholder="Host location"
              placeholder={this.props.hostInfo.location}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">crop_landscape</i>
            <input
              id="dimensions"
              type="tel"
              className="validate"
              // placeholder="Backyard dimensions"
              placeholder={this.props.hostInfo.dimensions}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">attach_money</i>
            <input
              id="rent"
              type="text"
              className="validate"
              // placeholder="Desired rent"
              placeholder={this.props.hostInfo.rent}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">date_range</i>
            <input
              id="date"
              type="text"
              className="validate"
              // placeholder="Projected earliest move-in date"
              placeholder={this.props.hostInfo.date}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix green-text">
              format_list_numbered
            </i>
            <input
              id="amenities"
              type="text"
              className="validate"
              //placeholder="Available amenities"
              placeholder={this.props.hostInfo.amenities}
              //value="WATER"
            />
          </div>
        </div>

        <div className="row center">
          <button
            id="submit-button"
            type="submit"
            name="action"
            className="btn-large waves-effect waves-light green lighten-1">
            UPDATE
          </button>
          {this.state.hasValidationErrors &&
            <p style={styles.errorStyle}>Please submit valid inputs</p>}
        </div>
      </form>
    );
  }
}

const styles = {
  errorStyle: {
    color: 'red',
    fontWeight: 'bold'
  }
};
