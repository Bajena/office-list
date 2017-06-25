import axios from 'axios';
import Promise from 'promise';

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
      promise: axios.get(`https://api.bt.tn/2014-06/${person.buttonId}/status`)
                 .then((response) => { return { response, person }; })
                 .catch((e) => {
                   e.person = person;
                   return Promise.reject(e);
                 })
    }
  };
}
