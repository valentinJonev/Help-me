module MobileWrapper.Controllers {
    interface InformationScope extends ng.IScope{
    }

    export class InformationController {
        private scope: InformationScope;
        private commonService: Services.CommonService;

        static $inject = ['$scope', 'commonService'];

        constructor($scope: InformationScope, commonService: Services.CommonService) {
            this.scope = $scope;
            this.commonService = commonService;
            this.commonService.SetMenuVisibility(true);
        }
    }
}
