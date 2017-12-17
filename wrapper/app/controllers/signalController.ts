module MobileWrapper.Controllers {
    interface SignalScope extends ng.IScope{
    }

    export class SignalController {
        private scope: SignalScope;
        private commonService: Services.CommonService;

        static $inject = ['$scope', 'commonService'];

        constructor($scope: SignalScope, commonService: Services.CommonService) {
            this.scope = $scope;
            this.commonService = commonService;
            this.commonService.SetMenuVisibility(true);
        }
    }
}
