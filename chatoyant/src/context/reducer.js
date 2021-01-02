const user = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).data.user
  : '';
const token = localStorage.getItem('currentUser')
  ? JSON.parse(localStorage.getItem('currentUser')).token
  : '';

export const initialState = {
  userDetails: '' || user,
  token: '' || token,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (action) => {
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...initialState,
        loading: true,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        user: action.payload.data.user,
        token: action.payload.token,
        loading: false,
      };
    case 'LOGOUT':
      return {
        ...initialState,
        user: '',
        token: '',
      };
    case 'LOGIN_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    case 'REQUEST_SIGNUP':
      return {
        ...initialState,
        loading: true,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...initialState,
        user: action.payload.data.user,
        loading: false,
      };
    case 'SIGNUP_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      return 'error';
  }
};
