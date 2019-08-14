import {
  FETCH_ENTRIES_SUCCESS,
  FETCH_ENTRIES_ERROR,
  POST_ENTRY_SUCCESS,
  POST_ENTRY_ERROR
} from '../actions/entryActions';

const initialState = {
    entries: [],
    entry: {
        title: null,
        date: null,
        content: null
    },
    error: null
  };

  export default entriesReducer(state = initialState, action) {
      if (action.type === FETCH_ENTRIES_SUCCESS) {
          return Object.assign({}, state, {
              entries: action.entries,
              error: null
          });
      } else if (action.type === FETCH_ENTRIES_ERROR) {
          return Object.assign({}, state, {
              error: action.error
          });
      } else if (action.type === POST_ENTRY_SUCCESS) {
          return Object.assign({}, state, {
            entries: [...state.entries, action.entry]
              // copy existing entries, new entry added
          });
      } else if (action.type === POST_ENTRY_ERROR) {
          return Object.assign({}, state, {
              error: action.error // entry error
          })
      }
      return state;
  }
  

//   export default function budgetReducer(state=initialState, action ) {
// 	if (action.type === actions.ADD_LEDGER_ENTRY) {
// 		return Object.assign({}, state, {
// 			ledgerEntries: [...state.ledgerEntries, action.ledgerEntry]
// 		});
// 	}

// 	else if (action.type === actions.UPDATE_SUMMARIES) {
// 		return Object.assign({}, state, {
// 			monthlySummaries: action.summary
// 		})
// 	}
// 	else if (action.type === actions.FETCH_BOARD_SUCCESS) {
// 		return Object.assign({}, state, {
// 			ledgerEntries: action.budget
// 		})
// 	}
// 	return state;
// }