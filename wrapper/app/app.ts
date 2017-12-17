module MobileWrapper {
    'use strict'

    var wrapper: ng.IModule = angular.module('mobile-wrapper', ['ui.router', 'ngCordova', 'angular-loading-bar', 'ngAnimate', 'ui.bootstrap', 'onsen', 'ui-notification']);

    wrapper.controller('indexController', MobileWrapper.Controllers.IndexController);
    wrapper.controller('homeController', MobileWrapper.Controllers.HomeController);
    wrapper.controller('errorController', MobileWrapper.Controllers.ErrorController);
    wrapper.controller('infoController', MobileWrapper.Controllers.InfoController);
    wrapper.controller('settingsController', MobileWrapper.Controllers.SettingsController);
    wrapper.controller('registerController', MobileWrapper.Controllers.RegisterController);
    wrapper.controller('informationController', MobileWrapper.Controllers.InformationController);
    wrapper.controller('profileController', MobileWrapper.Controllers.ProfileController);
    wrapper.controller('signalController', MobileWrapper.Controllers.SignalController);

    wrapper.directive('dynamic', MobileWrapper.Directives.DynamicHtml.Factory())

    wrapper.service('httpService', MobileWrapper.Services.HttpService);
    wrapper.service('cacheService', MobileWrapper.Services.CacheService);
    wrapper.service('templatingService', MobileWrapper.Services.TemplatingService);
    wrapper.service('commonService', MobileWrapper.Services.CommonService);
    wrapper.service('authService', MobileWrapper.Services.AuthService);
    wrapper.service('modalService', MobileWrapper.Services.ModalService);
    wrapper.service('updateService', MobileWrapper.Services.UpdateService);

    wrapper.config(MobileWrapper.Config.RouteConfig);

    wrapper.service('apiConstants', MobileWrapper.Constants.ApiConstants);
    wrapper.service('templateConstants', MobileWrapper.Constants.TemplateConstants);
    wrapper.service('cacheConstants', MobileWrapper.Constants.CacheConstants);
    wrapper.service('commonConstants', MobileWrapper.Constants.CommonConstants);

    let httpConfig = ($httpProvider: ng.IHttpProvider) => {
        $httpProvider.interceptors.push(Config.AuthInterceptor.Factory);
    };

    let appConfig = ($qProvider: ng.IQProvider) => {
        $qProvider.errorOnUnhandledRejections(false);
    }

    wrapper.config(httpConfig);
    wrapper.config(appConfig);

    wrapper.run(Config.AppConfig);
}
