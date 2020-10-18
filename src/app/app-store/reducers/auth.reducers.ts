import { User } from '../../models/user-models';
import { Merchant } from '../../models/merchant-models';
import { Admin } from '../../models/admin-models';
import { All, AuthActionTypes } from '../actions/auth.actions';



export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user/admin/merchant object
  user: User | null;
  merchant: Merchant | null;
  admin: Admin | null;
  // error message
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  merchant: null,
  admin: null,
  errorMessage: null
}

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          token: action.payload.token,
          email: action.payload.email
        },
        errorMessage: null
      };
    }
    default: {
      return state;
    }
  }
}
