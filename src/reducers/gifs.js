export function gifs(state=[], action) {
  switch(action.type) {
    case 'ALL_GIFS':
      return [action.payload]
    default:
     return state;
  }
}
