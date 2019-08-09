import React from 'react';

export default function Quote(props) {
  return (
    <div className="card">
      <i>{props.content}</i> - <b>{props.author}</b>
    </div>
  );
}

Quote.defaultProps = {
  author: '',
  content: ''
};
