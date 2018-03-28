import { login, logout, getUserData } from '../services/api/users';

import { dispatcher } from '../store';

export function performLogin(credentials) {
    dispatcher.dispatchPromise(
        login,
        'LOGIN',
        state => state.Users.login.loading,
        [credentials]
    );
}

export function performLogout() {
    dispatcher.dispatchPromise(
        logout,
        'LOGOUT',
        state => state.Users.logout.loading
    );
}

export function performGetUserData(data) {
    dispatcher.dispatchPromise(
        getUserData,
        'GET_USER_DATA',
        state => state.Users.profile.loading
    );
}