import React from 'react';

import { Link } from 'react-router-dom';

import UpdateFormComponent from './UpdateFormComponent';

export default function EditableWidgetComponent({ hostInfo, onDelete }) {
  function handleDelete(event) {
    event.preventDefault();
    onDelete(hostInfo);
  }
  //let tempState = { form: false };

  function handleEdit(event) {
    event.preventDefault();
    console.log('inside handleEdit');
    //onUpdate(hostInfo);
  }

  return (
    <div className="row">
      <div className="col s12 m9">
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
          </div>
          <div className="card-content">
            {/* <ul> */}
            <p>
              {/* // style={styles.details} */}
              {`Available starting ${hostInfo.date}`}
            </p>
            <p>
              {/* // style={styles.details} */}
              {`Amenities include access to ${hostInfo.amenities}`}
            </p>
            {/* </ul> */}
          </div>
          <div className="card-action">
            <Link
              id="submit-button"
              type="submit"
              name="action"
              // style={styles.edit}
              className="btn-large waves-effect waves-light green lighten-1"
              // onClick={handleEdit}
              to="/registration/update">
              EDIT LISTING
            </Link>
            <button
              id="submit-button"
              type="submit"
              name="action"
              // style={styles.delete}
              className="btn-large waves-effect waves-light green lighten-1"
              onClick={handleDelete}>
              DELETE LISTING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  edit: {
    float: 'left'
    // fontWeight: 'bold'
  },
  delete: {
    float: 'right'
    // fontWeight: 'bold'
  },
  details: {
    paddingLeft: '25px',
    paddingRight: '25px'
  }
};
