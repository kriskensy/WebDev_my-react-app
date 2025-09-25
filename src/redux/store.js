import {createStore, combineReducers} from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
import { cardMaxId } from '../utils/cardMaxId';
import { columnMaxId } from '../utils/columnMaxId';
import { listMaxId } from '../utils/listMaxId';
import shortid from 'shortid';

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

const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_LIST': 
      //TODO how to use my id function, not shortid()?
      // const newList = {...action.payload, id: listMaxId(statePart) + 1};
      // return [...statePart, newList];
      return [...statePart, {...action.payload, id: shortid()}];
    default:
      return statePart;
  }
}

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      //TODO how to use my id function, not shortid()?
      // const newColumn = {...action.payload, id: columnMaxId(statePart) + 1};
      // return [...statePart, newColumn];
      return [...statePart, {...action.payload, id: shortid()}];
    default:
      return statePart;
  }
}

const cardsReducer =(statePart = [], action) => {
  switch(action.type) {
    case 'ADD_CARD':
      //TODO how to use my id function, not shortid()?
      // const newCard = {...action.payload, id: cardMaxId(statePart) + 1};
      // return [...statePart, newCard];
      return [...statePart, {...action.payload, id: shortid()}];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  }
}

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'UPDATE_SEARCHSTRING':
      return action.payload;
    default:
      return statePart;
  }
}

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