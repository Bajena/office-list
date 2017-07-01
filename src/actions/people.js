import axios from 'axios';
import Promise from 'promise';
import moment from 'moment';

export const PeopleActionTypes = {
  CHECK_STATUS: 'CHECK_STATUS'
};

export function checkStatus(person) {
  return {
    type: PeopleActionTypes.CHECK_STATUS,
    payload: {
      data: {
        person: person
      },
      promise: axios.get(`https://api.bt.tn/2014-06/${person.buttonId}/feed`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        params: {
          after: moment().startOf('day').format('X')
        }
      }).then((response) => { return { response, person }; })
        .catch((e) => {
          e.person = person;
          return Promise.reject(e);
        })
    }
  };
}
