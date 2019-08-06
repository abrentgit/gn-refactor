import { API_BASE_URL } from '../config';
// import { normalizeResponseErrors } from './utils';

// QUOTE ACTIONS

export const GET_QUOTE = 'GET_QUOTE';
export const getQuote = quote => {
  return {
    type: 'GET_QUOTE',
    quote: quote
  };
};

export const GET_QUOTE_ERROR = 'GET_QUOTE_ERROR';
export const getQuoteError = error => {
  return {
    type: 'GET_QUOTE_ERROR',
    error: error
  };
};

export const fetchQuotes = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/quotes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(response => {
      const quotes = response.quotes;
      // now inside quotes array
      console.log(quotes);
      quotes.forEach(function(quote) {
        console.log(quote, 'this is the single quote');
        console.log(quote.content, 'this is the content');

        const singleQuote = quotes.content;
        dispatch(getQuote(singleQuote));
      });
    });
};

/// dispatch it, but need new function that will take the individual quote and break it up on dispatch

// create a filter

// function getDishes() {

//   const token = localStorage.getItem('token');

//   const headers = {
//       'Authorization': `Bearer ${token}`,
//       'Content-Type': 'application/json'
//   };

//   return fetch('https://orderinn.herokuapp.com/dishes', {
//       headers: headers
//   }).then(rawResponse => {
//       return rawResponse.json();
//   }).then(response => {
//       let dishesHtml = '';
//       dishes = response.dishes;
//       response.dishes.forEach(dish => {
//           let dishHtml = renderDish(dish);
//           dishesHtml = dishesHtml.concat(dishHtml);
//       });
//       $('.dishes').append(dishesHtml);
//       return response.dishes;
//   }).catch(error => {
//       throw error;
//   });
// }
