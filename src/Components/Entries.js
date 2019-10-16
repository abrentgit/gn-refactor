import React from 'react';

// will need load quotes
// will need entry component
// will need Entry Page Navigation: 1) includes 'create new entry button', 'Dashboard', 'Logout outside'

export class Entries extends React.Component {
  // **EVENTUAL CODE ONCE REDUX IS SETUP**
  // componentDidMount() {
  //   this.props.dispatch(loadEntries());
  //   console.log(this.props, 'entry props loaded');
  // }

  // render() {
  //   const entriesList = this.props.entries.map((entry, index) => (
  //     <li key={index}>
  //       <Entry {...entry} />
  //     </li>
  //   ));

  render() {
    return (
      <div className="entries-list">
        <h1>This is where entries go</h1>
        {/* {entriesList} */}
      </div>
    );
  }
}

export default Entries;

// const mapStateToProps = state => {
//   const { currentUser } = state.auth;
//   return {
//     email: state.auth.currentUser.email,
//     name: `${currentUser.name}`,
//     quotes: state.quotes.quotes
//   };
// };

// export default requiresLogin()(connect(mapStateToProps)(Entries));

//create view entry button
// need actions

// const entriesList = this.props.protectedData.map((entry, index) => (
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
