import React from 'react';

export default function Quote(props) {
  return <div className="card">{props.content}</div>;
}

Quote.defaultProps = {
  content: ''
};
