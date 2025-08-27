import {createStore} from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({cards, searchString}, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));

export const getAllColumns = (state) => state.columns;

//action creators
export const addColumn = payload => ({type: 'ADD_COLUMN', payload});

const reducer = (state, action) => {
  if(action.type === 'ADD_COLUMN') return { ...state, columns: [...state.columns, action.payload]}
  if(action.type === 'UPDATE_SEARCHSTRING') return { ...state, searchString: action.payload }
  return state;
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;