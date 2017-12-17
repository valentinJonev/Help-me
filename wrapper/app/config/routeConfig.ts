module MobileWrapper.Config{

  export class RouteConfig{
    private stateProvider: ng.ui.IStateProvider;
    private urlRouterProvider: ng.ui.IUrlRouterProvider;

    static $inject = ['$stateProvider', '$urlRouterProvider'];

    constructor($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
      this.stateProvider = $stateProvider;
      this.urlRouterProvider = $urlRouterProvider;

      this.configureRoutes();
    }

    private configureRoutes = () => {
      var homeState = {
        name: 'home',
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'homeController'
      };

      var registerState = {
        name: 'register',
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'registerController'
      };

      var profileState = {
        name: 'profile',
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'profileController'
      };

      var signalState = {
        name: 'signal',
        url: '/signal',
        templateUrl: 'views/signal.html',
        controller: 'signalController'
      };

      var infoState = {
        name: 'info',
        url: '/info',
        templateUrl: 'views/info.html',
        controller: 'informationController'
      };

      var settingsState = {
        name: 'settings',
        url: '/settings',
        templateUrl: 'views/settings.html',
        controller: 'settingsController',
        controllerAs: 'settings'
      };

      this.urlRouterProvider.otherwise('/')
      this.stateProvider.state(homeState);
      this.stateProvider.state(registerState);
      this.stateProvider.state(profileState);
      this.stateProvider.state(signalState);
      this.stateProvider.state(infoState);
      this.stateProvider.state(settingsState);
    }
  }
}
