import shortid from 'shortid';
import { columnMaxId } from '../utils/columnMaxId';

//selectors
export const getAllColumns = (state) => state.columns;
export const getColumnsByLists = ({columns}, listId) => columns.filter(column => column.listId === listId);

//actions
const createActionName = actionName => `app/columns/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

//action creators
export const addColumn = payload => ({type: ADD_COLUMN, payload});

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_COLUMN:
      //TODO how to use my id function, not shortid()?
      // const newColumn = {...action.payload, id: columnMaxId(statePart) + 1};
      // return [...statePart, newColumn];
      return [...statePart, {...action.payload, id: shortid()}];
    default:
      return statePart;
  }
}

export default columnsReducer;