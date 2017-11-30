export const LOADING = 'LOADING';
export const LOADED = 'LOADED';

export default function loading(state = false, { type }) {
  switch(type) {
    case LOADING:
      return true;
    case LOADED:
      return false;
    default:
      return state;
  }
}