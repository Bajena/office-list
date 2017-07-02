import { createReducer } from '../helpers/store';
import { SlackUsersActionTypes } from '../actions/slack-users';

export function listRefreshed(state, action) {
  return action.payload.data.members;
}

export const slackUsersReducer = createReducer([], {
  [`${SlackUsersActionTypes.REFRESH_LIST}_FULFILLED`]: listRefreshed
});
