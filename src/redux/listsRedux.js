import shortid from 'shortid';
import { listMaxId } from '../utils/listMaxId';

//selectors
export const getAllLists = (state) => state.lists;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);

//actions
const createActionName = actionName => `app/lists/${actionName}`;
const ADD_LIST = createActionName('ADD_LIST');

//action creators
export const addList = payload => ({type: ADD_LIST, payload});

const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_LIST: 
      //TODO how to use my id function, not shortid()?
      // const newList = {...action.payload, id: listMaxId(statePart) + 1};
      // return [...statePart, newList];
      return [...statePart, {...action.payload, id: shortid()}];
    default:
      return statePart;
  }
}

export default listsReducer;