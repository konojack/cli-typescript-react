import { bundlerMiddleware } from './middlewares/bundler-middleware';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionType } from './action-types';

export const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk, bundlerMiddleware as any)
);

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: 'dupskooo',
    type: 'code',
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: 'dupa',
    type: 'text',
  },
});
