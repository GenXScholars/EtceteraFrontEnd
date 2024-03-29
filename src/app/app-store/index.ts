import { UserEffects } from './effects/user.effects';
import { UserReducer } from './reducers/user.reducers';


export * from './effects/user.effects';
export * from './reducers/user.reducers';
export * from './actions/auth.actions';


export const appReducer = {
  auth: UserReducer,
};

export const appEffects = [
  UserEffects];
