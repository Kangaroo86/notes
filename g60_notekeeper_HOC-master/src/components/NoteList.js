import React, { Component } from 'react';
import NoteListItem from './NoteListItem';


function renderLoadingIfNeeded(WrappedComponent) {
  return (props) => {
    const { notes } = props;

    if (!Array.isArray(notes)) {
      return (
        <div className="NoteList">
          <p className="NoteList-loadingMessage">Loading...</p>
        </div>
      );
    }
    return <WrappedComponent {...props}/>
  }
}

// function renderLoadingIfNeeded(listOfProps) {
//   return (WrappedComponent) => {
//     return (props) => {
//       const propValueNotProvided = listOfProps.find((propName) => {
//         const propValue = props[propName]
//         return (propValue === null)
//       })
//
//       if (propValueNotProvided) {
//         return (
//           <div className="NoteList">
//             <p className="NoteList-loadingMessage">Loading...</p>
//           </div>
//         );
//       }
//
//       return <WrappedComponent {...props}/>
//     }
//   }
// }

//
// function renderLoadingIfNeeded(WrappedComponent) {
//   return (props) => {
//     const { notes } = props;
//
//     if (!Array.isArray(notes)) {
//       return (
//         <div className="NoteList">
//           <p className="NoteList-loadingMessage">Loading...</p>
//         </div>
//       );
//     }
//     return <WrappedComponent {...props}/>
//   }
// }

//another way of doing the same thing:
// function renderLoadingIfNeeded(WrappedComponent) {
//   return class Enhancer extends WrappedComponent {
//     render() {
//       const { notes } = this.props;
//
//       if (!Array.isArray(notes)) {
//         return (
//           <div className="NoteList">
//             <p className="NoteList-loadingMessage">Loading...</p>
//           </div>
//         );
//       }
//
//       return super.render()
//     }
//   }
// }

class NoteList extends Component {
  static defaultProps = {
    notes: [],
    onSelect: () => {}
  };
  render() {
    const { notes, selectedNoteId, onSelect } = this.props;
    // if (!Array.isArray(notes)) {
    //   return (
    //     <div className="NoteList">
    //       <p className="NoteList-loadingMessage">Loading...</p>
    //     </div>
    //   );
    // }
    return (
      <div className="NoteList">
        {notes.length === 0
          ? <p className="NoteList-emptyMessage">
              No notes availabe at this time.
            </p>
          : notes.map(note =>
              <NoteListItem
                key={note.id}
                note={note}
                onSelect={onSelect}
                selected={note.id === selectedNoteId}
              />
            )}
      </div>
    );
  }
}

export default renderLoadingIfNeeded(NoteList)
