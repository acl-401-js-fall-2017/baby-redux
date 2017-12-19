import { CHECKED_TOKEN, GOT_TOKEN, FETCHED_USER, LOGOUT, AUTH_FAILED  } from './constants';
import AuthApi from '../services/authApi';
import { getStoredToken } from '../services/request';