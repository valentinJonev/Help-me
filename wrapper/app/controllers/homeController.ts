module MobileWrapper.Controllers {
    interface HomeScope extends ng.IScope{
    }

    export class HomeController {
        private scope: HomeScope;
        private state: any;
        private commonService: Services.CommonService;

        static $inject = ['$scope', '$state', 'commonService'];

        constructor($scope: HomeScope, $state: any, commonService: Services.CommonService) {
            this.scope = $scope;
            this.state = $state;
            this.commonService = commonService;
            this.commonService.SetMenuVisibility(true);
        }

        public SendSignal(service: string){
          var signal = {
            Service: service,
            ThreatLevel: 3,
            Location: "Sofia",
            TimeSent: Date.now(),
            Victim: true,
            IMEI: "28bdd989ba275457"
          }

          $.ajax({type: "POST", data: signal, url: "http://192.168.43.151:3000/api/Signal/SendSignal?imei=28bdd989ba275457"})
          .then(() => {
            this.commonService.NavigateToPage('signal', this.state, this.scope);
          })
        }
    }
}
