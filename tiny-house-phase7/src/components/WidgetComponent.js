import React from 'react';

import { Link } from 'react-router-dom';

export default function WidgetComponent({ hostInfo, onLove }) {
  function handleLove(event) {
    //event.preventDefault();
    console.log('inside WidgetComponent', event);
    //Technically don't need onLove because somewhere in ownProps is backyardId
    onLove(hostInfo);
  }
  return (
    <div className="col s12 m4">
      <div className="card">
        <div className="card-image">
          <img src="https://i.pinimg.com/736x/17/d6/fb/17d6fbf77448ad0c2fe0d7b8d19dceea--moss-lawn-backyard-trees.jpg" />
          {/* <a
              onClick={handleLove}
              className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">favorite</i>
            </a> */}
          <Link
            onClick={handleLove}
            to={`/backyards/${hostInfo.id}`}
            className="btn-floating halfway-fab waves-effect waves-light red">
            <i className="material-icons">favorite</i>
          </Link>
          <div className="card-title">
            <h4>
              {hostInfo.location}
            </h4>
            <p>
              {`$${hostInfo.rent}/month for ${hostInfo.dimensions}sqft`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
