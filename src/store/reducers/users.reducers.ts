import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from '../actions/users.actions';

export const initialState = {};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => (
    {type:"increase"}
  )),
  on(decrement, (state) =>  ( {type:"increase"}) ),
  on(reset, (state) => ({}))
);