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
    MENU_CLICK,
    MENU_CLICK_TARGETS,
    MENU_CLICK_PAGES,
    MENU_CLICK_EMAIL,
    MENU_CLICK_SCRAPE,

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

    CLIENT_CHANGE_NAME_INPUT,
    CLIENT_CHANGE_URL_INPUT,
    CLIENT_SELECT_TIMEZONE,

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

    EMAIL_SERVER_CHANGE_USE_TLS_INPUT,
    EMAIL_SERVER_CHANGE_TEST_RECIPIENT_INPUT,
    EMAIL_SERVER_CHANGE_HOST_INPUT,
    EMAIL_SERVER_CHANGE_LOGIN_INPUT,
    EMAIL_SERVER_CHANGE_PASSWORD_INPUT,
    EMAIL_SERVER_CHANGE_PORT_INPUT,

    PHISHING_DOMAIN_CHANGE_DOMAIN_NAME_INPUT,

    SCHEDULE_CHANGE_NAME_INPUT,
    SCHEDULE_CHANGE_BATCH_SIZE_INPUT,
    SCHEDULE_CHANGE_BATCH_INTERVAL_INPUT,
    SCHEDULE_CHANGE_SLEEP_TIME_INPUT,
    SCHEDULE_CHANGE_START_SENDING_INPUT
}   