export default function jobs(state = [], action) {
  // action = { type: ADD_JOB, text: 'Fazer café' }

  switch(action.type) {
    case 'ADD_JOB':
      return [ ...state, {
        id: Math.random(),
        text: action.text
      }]
    default:
      return state;
  }
}
