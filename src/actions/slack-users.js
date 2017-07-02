import axios from 'axios';

/*eslint no-unused-expressions: 0*/
/*eslint no-undef: 0*/

export const SlackUsersActionTypes = {
  REFRESH_LIST: 'REFRESH_LIST'
};

export function refreshList() {
  return {
    type: SlackUsersActionTypes.REFRESH_LIST,
    payload: {
      promise: axios.get('https://slack.com/api/users.list', {
        params: {
          presence: true,
          token: SLACK_TOKEN
        }
      })
    }
  };
}
