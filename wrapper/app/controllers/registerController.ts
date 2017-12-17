module MobileWrapper.Controllers {
    interface RegisterScope extends ng.IScope{
    }

    export class RegisterController {
        private scope: RegisterScope;
        private commonService: Services.CommonService;

        static $inject = ['$scope', 'commonService'];

        constructor($scope: RegisterScope, commonService: Services.CommonService) {
            this.scope = $scope;
            this.commonService = commonService;
            this.commonService.SetMenuVisibility(false);
        }
    }
}
