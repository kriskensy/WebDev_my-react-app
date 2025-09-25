import shortid from 'shortid';
import { listMaxId } from '../utils/listMaxId';

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

export default listsReducer;