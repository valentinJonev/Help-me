module MobileWrapper.Controllers {
    interface ProfileScope extends ng.IScope{
    }

    export class ProfileController {
        private scope: ProfileScope;
        private commonService: Services.CommonService;

        static $inject = ['$scope', 'commonService'];

        constructor($scope: ProfileScope, commonService: Services.CommonService) {
            this.scope = $scope;
            this.commonService = commonService;
            this.commonService.SetMenuVisibility(true);
        }
    }
}
