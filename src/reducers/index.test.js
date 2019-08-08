import { quotesReducer } from './quotesReducer';
import { getQuoteSuccess, getQuoteError } from '../actions/quotesActions';

describe('quotesReducer', () => {
  const quote1 = {
    author: 'Phil Knight',
    quote: 'Just do it'
  };
  const quote2 = {
    author: 'Michael Jordan',
    quote: 'Six Rings'
  };

  it('Should set the initial state when nothing is passed in', () => {
    const state = quotesReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({
      quotes: [],
      error: null
    });
  });

  it('Should return the current state on an unknown action', () => {
    let currentState = {};
    const state = quotesReducer(currentState, { type: '_UNKNOWN' });
    expect(state).toBe(currentState);

    desceribe('getQuoteSucesss', () => {
      let state;
      state = quotesReducer(state, getQuoteSuccess(quotes));
      expect(state).toEqual({
        quotes: [quote1, quote2]
      });
    });
  });
});
