import {createStore} from 'redux';
import initialState from './initialState';
import { strContains } from '../utils/strContains';
import { cardMaxId } from '../utils/cardMaxId';
import { columnMaxId } from '../utils/columnMaxId';
import { listMaxId } from '../utils/listMaxId';

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

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LIST':
      const newList = {...action.payload, id: listMaxId(state) + 1};
      return {...state, lists: [...state.lists, newList]}
    case 'ADD_COLUMN':
      //TODO po zmianie id w initialState na stringi trzeba tu przerobić funkcje bo karty i kolumny są dodawane z id jako liczba
      // return { ...state, columns: [...state.columns, action.payload]} 
      const newColumn = {...action.payload, id: columnMaxId(state) + 1};
      return { ...state, columns: [...state.columns, newColumn]}
    case 'ADD_CARD':
      const newCard = {...action.payload, id: cardMaxId(state) + 1};
      return { ...state, cards: [...state.cards, newCard]}
    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload }
    case 'TOGGLE_CARD_FAVORITE':
      return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card)};
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;