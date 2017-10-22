import React from 'react';

const Loading = props  => {
  const { width, height, altText } = styles;
  return (
    <div className="loading">
      <img src={props.image} width={width} height={height} alt={altText} />
    </div>
  )
};

export default Loading

const styles = {
  width: '600px',
  height: '450px',
  altText: 'loading...'
}
