import React from 'react';
import { connect } from 'react-redux';
import EntryForm from './EntryForm';

export function CreateEntryPage(props) {
  return (
    <div className="text-center bg-dark my-2">
      <div className="mx-5 mt-5">
        <p>
          Submit a your thoughts on today. Journal with empathy, understanding,
          and compassion for yourself and those who you've come across today.
        </p>
      </div>
      <EntryForm />
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(CreateEntryPage);
