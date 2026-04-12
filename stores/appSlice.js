import { createSlice } from '@reduxjs/toolkit';

import {
  GET_MENU_REQUESTING,
  GET_MENU_SUCCESS,
  GET_MENU_ERROR,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_REQUESTING,
  GET_USER_DETAILS_ERROR,
  SET_AUTH_DATA,
  GET_CONFIG_REQUESTING,
  GET_CONFIG_SUCCESS,
  GET_CONFIG_ERROR,
} from '../constants/actionTypes';

// create a slice
export const appSlice = createSlice({
  name: 'app',
  initialState: {
    auth: {
      data: null,
    },
    config: {
      requesting: false,
      error: false,
      data: {
        issues: [],
        permissions: ['view_dashbord', 'view_form'],
        roles: '',
      },
    },
    user: {
      requesting: false,
      error: false,
      data: { name: 'default', image: '' },
    },
    menu: {
      error: false,
      requesting: false,
      data: undefined,
    },
  },
  reducers: {
    [GET_USER_DETAILS_REQUESTING]: (state) => {
      state.user.requesting = true;
      state.user.error = false;
    },
    [GET_USER_DETAILS_SUCCESS]: (state, { payload }) => {
      state.user.requesting = false;
      state.user.error = false;
      state.user.data = payload;
    },
    [GET_USER_DETAILS_ERROR]: (state) => {
      state.user.requesting = false;
      state.user.error = true;
    },
    [GET_MENU_REQUESTING]: (state) => {
      state.menu.error = false;
      state.menu.requesting = true;
    },
    [GET_MENU_SUCCESS]: (state, { payload }) => {
      state.menu.error = false;
      state.menu.requesting = false;
      state.menu.data = payload.menu;
    },
    [GET_MENU_ERROR]: (state) => {
      state.menu.error = true;
      state.menu.requesting = false;
    },
    [SET_AUTH_DATA]: (state, { payload }) => {
      state.auth.data = payload;
    },
    //
    [GET_CONFIG_REQUESTING]: (state) => {
      state.config.requesting = true;
      state.config.error = false;
    },
    [GET_CONFIG_SUCCESS]: (state, { payload }) => {
      state.config.error = false;
      state.config.requesting = false;
      state.config.data = payload;
    },
    [GET_CONFIG_ERROR]: (state) => {
      state.config.error = true;
      state.config.requesting = false;
    },
  },
});

// export the action
export const appActions = appSlice.actions;
