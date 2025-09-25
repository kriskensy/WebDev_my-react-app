import shortid from 'shortid';
import { cardMaxId } from '../utils/cardMaxId';

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

export default cardsReducer;