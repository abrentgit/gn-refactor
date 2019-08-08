import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadQuotes } from '../actions/quotesActions';

class QuotePage extends React.Component {
  componentWillMount() {
    // this.props.dispatch(loadQuotes());
    console.log(this.props.loadQuotes);
    console.log(this.props, 'this is the props');
  }
  render() {
    return (
      <div className="list">
        <h1>Quotes</h1>
        {this.props.quotes}
      </div>
    );
  }
}

QuotePage.propTypes = {
  quotes: PropTypes.array.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    quotes: quotes => dispatch(loadQuotes(quotes))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(QuotePage);
