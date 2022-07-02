import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Cell } from '../cell';

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const reducer = (
  state: CellsState = initialState,
  action: Action
): CellsState => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionType.MOVE_CELL:
        const { direction } = action.payload;
        const index = draft.order.findIndex(id => id === action.payload.id);
        const targetIndex = direction === 'up' ? index - 1 : index + 1;

        if (targetIndex < 0 || targetIndex > draft.order.length - 1) {
          return draft;
        }

        draft.order[index] = draft.order[targetIndex];
        draft.order[targetIndex] = action.payload.id;

        return draft;
      case ActionType.DELETE_CELL:
        delete draft.data[action.payload];
        draft.order = draft.order.filter(id => id !== action.payload);
        return draft;
      case ActionType.INSERT_CELL_BEFORE:
        const cell: Cell = {
          id: randomId(),
          type: action.payload.type,
          content: 'content',
        };

        draft.data[cell.id] = cell;
        const foundIndex = draft.order.findIndex(
          id => id === action.payload.id
        );

        if (foundIndex < 0) {
          draft.order.push(cell.id);
        } else {
          draft.order.splice(foundIndex, 0, cell.id);
        }

        return draft;
      case ActionType.UPDATE_CELL:
        const { id, content } = action.payload;
        draft.data[id].content = content;
        return draft;
      default:
        return draft;
    }
  });
};

const randomId = () => {
  return Math.random().toString(36).substring(2, 5);
};

export default reducer;
