export enum ActionType {
    LOGOUT,

    LOGIN_CHANGE_HOST_INPUT,
    LOGIN_CHANGE_PORT_INPUT,
    LOGIN_CHANGE_USERNAME_INPUT,
    LOGIN_CHANGE_PASSWORD_INPUT,
    LOGIN_INVALID_SUBMIT,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGIN_CLOSE_ALERT,

    MENU_CLICK_ID,
    MENU_CLICK_CONFIG,

    USER_INIT,
    USER_OPEN_EDIT,
    USER_CANCEL_EDIT,
    USER_CANCEL_ADD,
    USER_OPEN_ADD,
    USER_TOGGLE_VIEW,
    USER_CHANGE_USERNAME_INPUT,
    USER_CHANGE_PASSWORD_INPUT,
    USER_CHANGE_CONFIRM_INPUT,
    USER_CHANGE_FIRSTNAME_INPUT,
    USER_CHANGE_LASTNAME_INPUT,
    USER_CHANGE_EMAIL_INPUT,
    USER_INVALID_SUBMIT,
    USER_ADD_SUCCESS,
    USER_EDIT_SUCCESS,
    USER_REMOVE_SUCCESS,

    PROFILE_CHANGE_PASSWORD_INPUT,
    PROFILE_CHANGE_NEW_PASSWORD_INPUT,
    PROFILE_CHANGE_CONFIRM_INPUT,
    PROFILE_INVALID_SUBMIT,

    CRUD_INIT,
    CRUD_OPEN_EDIT,
    CRUD_CANCEL_EDIT,
    CRUD_OPEN_ADD,
    CRUD_CANCEL_ADD,
    CRUD_TOGGLE_VIEW,
    CRUD_ADD_SUCCESS,
    CRUD_INVALID_SUBMIT,
}   