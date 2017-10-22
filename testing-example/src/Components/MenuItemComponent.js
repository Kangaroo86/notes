import React from 'react';

export default function MenuItemComponent({ item, onAddItem }) {
  if (!item) return null;

  function handleClick(event) {
		// event.preventDefault();
		onAddItem(event.target.id.value);
    // return onAddItem
	}
  return (
    <div className="card">
      <div className="card-image">
        <img src={item.imagePath || '//via.placeholder.com/300x200'} alt="" />
      </div>
      <div className="card-content">
        <span className="card-title ">{item.name || 'N/A'}</span>
        <p>{item.price || 'N/A'}</p>
      </div>
      <div className="card-action">
        <button className="menuChoice #fdd835 yellow darken-1 btn" onClick={handleClick} type="button" name={item.name || 'N/A'} >Order
        </button>
      </div>
    </div>
  )
}
