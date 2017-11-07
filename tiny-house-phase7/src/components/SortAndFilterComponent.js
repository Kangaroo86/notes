import React, { Component } from 'react';

export default class SortAndFilterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBody: true,
      hasValidationErrors: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const $form = event.target;

    const filter = $form.filter.value.trim();
    console.log('filter', filter);
    const sort = $form.sort.value.trim();
    console.log('sort', sort);
    //const sortAndFilter = { sort, filter };
    //console.log('sort n filter', sortAndFilter);

    this.props.onSearch(sort, filter);
    // this.props.onSearch(sortAndFilter);

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
    //console.log(this.state, 'these are the props');
    return (
      <form id="form" className="col s12 m12" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="input-field col s12 m6">
            <i className="material-icons prefix green-text">filter_list</i>
            <input
              id="filter"
              type="text"
              className="validate"
              placeholder="Filter by (e.g. Berkeley, CA)"
            />
            <div className="row center">
              <button
                id="submit-button"
                type="submit"
                name="action"
                className="btn-large waves-effect waves-light green lighten-1">
                FILTER
              </button>
              {this.state.hasValidationErrors &&
                <p style={styles.errorStyle}>Please submit valid inputs</p>}
            </div>
          </div>

          <div className="input-field col s12 m6">
            <i className="material-icons prefix green-text">sort</i>
            <input
              id="sort"
              type="text"
              className="validate"
              placeholder="Sort by (e.g. rent)"
            />
          </div>
          <div className="row center">
            <button
              id="submit-button"
              type="submit"
              name="action"
              className="btn-large waves-effect waves-light green lighten-1">
              SORT
            </button>
            {this.state.hasValidationErrors &&
              <p style={styles.errorStyle}>Please submit valid inputs</p>}
          </div>
        </div>

        {/* <div className="row center">
          <button
            id="submit-button"
            type="submit"
            name="action"
            className="btn-large waves-effect waves-light green lighten-1">
            SUBMIT LISTING
          </button>
          {this.state.hasValidationErrors &&
            <p style={styles.errorStyle}>Please submit valid inputs</p>}
        </div> */}
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
