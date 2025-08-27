import {createStore} from 'redux';
import initialState from './initialState';

//selectors
export const getFilteredCards = (state, columnId) => state.cards.filter(card => card.columnId === columnId && card.title.toLowerCase().includes(state.searchString.toLowerCase()));

const reducer = (state, action) => {
  if(action.type === 'ADD_COLUMN') return { ...state, columns: [...state.columns, action.newColumn]}
  if(action.type === 'UPDATE_SEARCHSTRING') return { ...state, searchString: action.payload }
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;