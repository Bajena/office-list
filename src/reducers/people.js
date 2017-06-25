import { createReducer } from '../helpers/store';
import { PeopleActionTypes } from '../actions/people';
import moment from 'moment';

function initPerson(args) {
  return {
    lastSeenAt: null,
    isChecking: false,
    checkError: false,
    ...args
  };
}

const PEOPLE = {
  1: initPerson({
    id: 1,
    name: 'Szymon Tymiński',
    photoUrl: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/13439193_1310043972359134_922822888142315783_n.jpg?oh=bba8fbc682ea19fb06bf540bdbc3e3f2&oe=59E5870B',
    buttonId: null
  }),
  2: initPerson({
    id: 2,
    name: 'Jan Bajena',
    photoUrl: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/3/005/040/119/1c7be58.jpg',
    buttonId: '7709'
  }),
  3: initPerson({
    id: 3,
    name: 'Konrad Oleksiuk',
    photoUrl: 'https://s3.amazonaws.com/zerply-profile-images/0/5467/big.jpg?1388490409',
    buttonId: null
  })
};

const initialState = {
  people: PEOPLE
};

function updatePerson(state, personId, changes) {
  let person = state.people[personId];

  if (!person) {
    return state;
  }

  person = { ...person, ...changes };

  const newPeople = { ...state.people, [personId]: person };

  return { ...state, people: newPeople };
}

export function checkStatusPending(state, action) {
  return updatePerson(state, action.payload.person.id, { isChecking: true });
}

export function checkStatusFailed(state, action) {
  return updatePerson(state, action.payload.person.id, { isChecking: false, checkError: true });
}

export function statusChecked(state, action) {
  let lastSeenAt = moment.unix(action.payload.response.data.lastHeard);

  return updatePerson(state, action.payload.person.id, { lastSeenAt, isChecking: false });
}

export const peopleReducer = createReducer(initialState, {
  [`${PeopleActionTypes.CHECK_STATUS}_PENDING`]: checkStatusPending,
  [`${PeopleActionTypes.CHECK_STATUS}_FULFILLED`]: statusChecked,
  [`${PeopleActionTypes.CHECK_STATUS}_REJECTED`]: checkStatusFailed
});
