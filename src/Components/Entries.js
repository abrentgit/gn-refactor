import React from 'react';

//create view entry button
// need actions

// const userEntries = this.props.protectedData.map((entry, index) => (
//     <div className="items-list" key={index}>
//       <a href={entry.title}>
//         <div className="date">{entry.date}</div>

//         <ViewEntryButton />
//           item={entry}
//           onClick={() => this.addToDatabase(entry)}
//         />
//       </a>
//     </div>
//   ));

export default class Entries extends React.Component {
  render() {
    return (
      <div className="entries-list">
        <h1>This is where entries go</h1>
      </div>
    );
  }
}

// <ul>{userEntries}</ul>
