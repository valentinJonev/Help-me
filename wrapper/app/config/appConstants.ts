module MobileWrapper.Constants {
    export class ApiConstants{

        constructor() {
            this.configure();
        }

        private configure(){
            this.API_URL = 'http://192.168.43.151:3000/api';
        }

        public API_URL;

        private AUTH_SERVICE = '/User/Authenticate';
        private REGISTER_SERVICE = '/User/Register';
        private USER_SERVICE = '/User/GetUser';
        private EDIT_USER_SERVICE = '/User/EditUser';
        private SEND_SIGNAL_SERVICE = '/Signal/SendSignal'

        public GetAuthService(){
            return this.API_URL + this.AUTH_SERVICE;
        }

        public GetRegisterService(){
            return this.API_URL + this.REGISTER_SERVICE;
        }

        public GetUserService(){
            return this.API_URL + this.USER_SERVICE;
        }

        public GetEditUserService(){
            return this.API_URL + this.EDIT_USER_SERVICE;
        }

        public GetSignalService(){
            return this.API_URL + this.SEND_SIGNAL_SERVICE;
        }
    }

    export class TemplateConstants{
        public LOGIN_TEMPLATE = 'login';
        public MENU_TEMPLATE = 'menu';
        public HOME_TEMPLATE = 'test';
        public ERROR_TEMPLATE = 'error';
        public INFO_TEMPLATE = 'info';
        public DASHBOARD_TEMPLATE = 'widget';
        public SETTINGS_TEMPLATE = 'settings'
    }

    export class CacheConstants{
        public OAUTH_TOKEN = 'oauthToken';
        public LOGGED_IN = 'loggedIn';
    }

    export class CommonConstants{
        public TRUE = true;
        public FALSE = false;
        public APP_LOGO = 'misc/images/logo.png';
        public APP_NAME = 'Help me'
    }
}
