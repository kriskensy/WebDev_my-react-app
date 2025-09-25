import {createStore, combineReducers} from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cards.Redux';
import searchStringReducer from './searchStringsRedux';

//selectors
export const getFilteredCards = ({cards, searchString}, columnId) => cards.filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getAllColumns = (state) => state.columns;
export const getAllCards = (state) => state.cards;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByLists = ({columns}, listId) => columns.filter(column => column.listId === listId);
export const getAllLists = (state) => state.lists;
export const getGlobalSearchStringValue = (state) => state.searchString;
export const getFavoriteCards = ({cards}) => cards.filter(card => card.isFavorite === true);

//action creators
export const addList = payload => ({type: 'ADD_LIST', payload});
export const addColumn = payload => ({type: 'ADD_COLUMN', payload});
export const addCard = payload => ({type: 'ADD_CARD', payload});
export const updateSearchString = payload => ({type: 'UPDATE_SEARCHSTRING', payload});
export const toggleCardFavorite = payload => ({type: 'TOGGLE_CARD_FAVORITE', payload});

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;