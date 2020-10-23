import { User } from '../../models/user-models';
import { All, AuthActionTypes } from '../actions/auth.actions';



export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user/admin/merchant object
  user: User;
  // error message
  errorMessage: string | null;
}

export const UinitialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
}

export function UserReducer(state = UinitialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email,
          firstname: action.payload.firstname,
          walletBalance: action.payload.walletBalance,
          role: action.payload.role,
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        errorMessage: 'Incorrect email and/or password.'
      };
    }
    case AuthActionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          username:action.payload.username,
          firstname:action.payload.firstname,
          token: action.payload.token,
          email: action.payload.email,
          walletBalance: action.payload.walletBalance,
        },
        errorMessage: null
      }
    }
    case AuthActionTypes.SIGNUP_FAILURE: {
      return {
        ...state,
        errorMessage: 'That email is already in use.'
      };
    }
    case AuthActionTypes.LOGOUT: {
      return UinitialState;
    }
    default: {
      return state;
    }
  }
}
