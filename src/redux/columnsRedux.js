import shortid from 'shortid';
import { columnMaxId } from '../utils/columnMaxId';

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

export default columnsReducer;