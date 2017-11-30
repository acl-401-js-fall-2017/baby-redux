export const ERROR = 'ERROR';
export const CLEAR_ERROR = 'CLEAR_ERROR';

export default function error(state = null, { type, payload }) {
  switch (type) {
    case ERROR:
      return payload;
    case CLEAR_ERROR:
      return null;
    default:
      return state;
  }
}