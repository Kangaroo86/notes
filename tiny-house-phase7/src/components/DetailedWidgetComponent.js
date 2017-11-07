import React from 'react';

import { Link } from 'react-router-dom';

export default function DetailedWidgetComponent({ hostInfo, onClear }) {
  //{ hostInfo, onClear }
  //props
  //console.log('LE PROPS', props);
  function handleClear(event) {
    onClear();
  }

  return (
    // !error ? {
    <div className="row">
      <div className="col s12 m8">
        <div className="card">
          <div className="card-image">
            <img src="https://i.pinimg.com/736x/17/d6/fb/17d6fbf77448ad0c2fe0d7b8d19dceea--moss-lawn-backyard-trees.jpg" />
            <div className="card-title">
              <h4>
                {hostInfo.location}
              </h4>
              <p>
                {`$${hostInfo.rent}/month for ${hostInfo.dimensions}sqft`}
              </p>
            </div>
            <Link
              onClick={handleClear}
              to={'/'}
              className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">clear</i>
            </Link>
          </div>
          <div class="card-content">
            {/* <ul> */}
            <p style={styles.details}>
              {`Available starting ${hostInfo.date}`}
            </p>
            <p style={styles.details}>
              {`Amenities include access to ${hostInfo.amenities}`}
            </p>
            {/* </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
  // } : <p>{error}</p>
}

const styles = {
  details: {
    paddingLeft: '25px',
    paddingRight: '25px'
  }
};
