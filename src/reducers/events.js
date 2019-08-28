export default function events(state = [], action) {
  // action = { type: ADD_EVENT, text: 'Fazer café' }

  switch(action.type) {
    case 'ADD_EVENT':
      return [ ...state, {
        id: Math.random(),
        text: action.text
      }]
    default:
      return state;
  }
}
