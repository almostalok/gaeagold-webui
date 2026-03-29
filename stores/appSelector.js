const makeAppSelector = (state) => state.app;

export const getAppMenu = (state) => makeAppSelector(state).menu.data;
export const getUserDetails = (state) => makeAppSelector(state).user.data;
export const getAuthData = (state) => makeAppSelector(state).auth.data;
export const getPermissionData = (state) => makeAppSelector(state).config.data.permissions || [];
export const getAppConfig = (state) => makeAppSelector(state).config;
