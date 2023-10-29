export const selectUser = state => state.auth.user;
export const selectIsLoggedIn = state => Boolean(state.auth.token);
export const selectIsRefreshing = state => state.auth.isRefreshing;