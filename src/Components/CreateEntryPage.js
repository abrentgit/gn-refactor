import React from 'react';
import { connect } from 'react-redux';
import EntryForm from './EntryForm';
import './Dashboard.css';

export function CreateEntryPage(props) {
  return (
    <div className="text-center bg-dark my-2">
      <EntryForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CreateEntryPage);
