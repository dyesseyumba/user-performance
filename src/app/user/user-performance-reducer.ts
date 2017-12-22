import { PerformanceAction, PerformanceActions } from './user-performance-actions';
import { Action } from 'redux';
import { Performance } from './../user';

/**
 * The redux performance reducer
 *
 * @export
 * @param {Performance[]} [state=[]]
 * @param {Action} a
 * @returns {Performance[]} The updated state
 */
export function performanceReducer(state: Performance = {} as Performance, a: Action): Performance {

  const action = a as PerformanceAction;

  switch (action.type) {
    case PerformanceActions.LOAD_PERFORMANCES_SUCCEEDED:
      return Object.assign({}, state, action.payload);

    case PerformanceActions.LOAD_PERFORMANCES_FAILED:
    return state;
  }

  return state;
}
