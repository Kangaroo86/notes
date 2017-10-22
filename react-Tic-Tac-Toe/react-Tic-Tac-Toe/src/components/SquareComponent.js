import React from 'react';

export default function SquareComponent() {
  // let playerOne = 'X';
  // let playerTwo = 'Y';
  // let currentTurn = playerOne;
  //let boarder = document.querySelector('.boarder');
  //console.log('boarder---------->', boarder); //returned null. how does eventhandleer work?

  let state = {
    currentTurn: 'X',
    gameEnded: false
  };

  function clicking(event) {
    event.preventDefault();
    console.log('i clicked'); //debugging
    event.target.innerHTML = state.currentTurn;
    state.setState({ currentTurn: state.currentTurn === 'X' ? 'O' : 'X' });
  }

  // boarder.addEventListener('click', function() {
  //   /* eslint-disable */
  //   let box = event.target;
  //   /* eslint-enable */
  //   box.innerHTML = playerOne;
  //   if (currentTurn === playerOne) {
  //     currentTurn = playerTwo;
  //   } else {
  //     currentTurn = playerOne;
  //   }
  // });

  return (
    <div className="boarder" onClick={clicking}>
      <div className="square">
        <i className="hovicon effect-1 sub-a" />
      </div>
      <div className="square">
        <i className="hovicon effect-1 sub-a" />
      </div>
      <div className="square">
        <i className="hovicon effect-1 sub-a" />
      </div>
      <div className="square">
        <i className="hovicon effect-1 sub-a" />
      </div>
      <div className="square">
        <i className="hovicon effect-1 sub-a" />
      </div>
      <div className="square">
        <i className="hovicon effect-1 sub-a" />
      </div>
      <div className="square">
        <i className="hovicon effect-1 sub-a" />
      </div>
      <div className="square">
        <i className="hovicon effect-1 sub-a" />
      </div>
      <div className="square">
        <i className="hovicon effect-1 sub-a" />
      </div>
    </div>
  );
  //
}
