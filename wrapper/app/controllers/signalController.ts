module MobileWrapper.Controllers {
    interface SignalScope extends ng.IScope{
      timer: any
    }

    export class SignalController {
        private scope: SignalScope;
        private state: any;
        private commonService: Services.CommonService;


        static $inject = ['$scope', 'commonService', '$state'];

        constructor($scope: SignalScope, commonService: Services.CommonService, $state: any) {
            this.scope = $scope;
            this.state = $state;
            this.commonService = commonService;
            this.commonService.SetMenuVisibility(true);
            setInterval(function(){
              this.scope.timer++;
            }, 1000);
        }

        public SendSignal(service: string){
          var signal = {
            Service: service,
            ThreatLevel: 2,
            Location: "Sofia, FMI / 42.674247, 23.330349",
            TimeSent: new Date().toLocaleTimeString(),
            Victim: true,
            IMEI: "28bdd989ba275457"
          }

          $.ajax({type: "POST", data: signal, url: "http://192.168.43.151:3000/api/Signal/SendSignal?imei=28bdd989ba275457"})
          .then(() => {
            this.commonService.NavigateToPage('signal', this.state, this.scope);
          })
        }

        public SetSignalLevel(threatLevel: any){
          var signal = {
            Service: "Police",
            ThreatLevel: threatLevel,
            Location: "Sofia, FMI / 42.674247, 23.330349",
            TimeSent: new Date().toLocaleTimeString(),
            Victim: true,
            IMEI: "28bdd989ba275457"
          }

          $.ajax({type: "POST", data: signal, url: "http://192.168.43.151:3000/api/Signal/SendSignal?imei=28bdd989ba275457"})
          .then(() => {
            this.commonService.NavigateToPage('signal', this.state, this.scope);
          })
        }

        public CancelSignal(){
          var signal = {
            Service: "Police",
            ThreatLevel: 0,
            Location: "Sofia, FMI / 42.674247, 23.330349",
            TimeSent: new Date().toLocaleTimeString(),
            Victim: true,
            IMEI: "28bdd989ba275457"
          }

          $.ajax({type: "POST", data: signal, url: "http://192.168.43.151:3000/api/Signal/SendSignal?imei=28bdd989ba275457"})
          .then(() => {
            this.commonService.NavigateToPage('home', this.state, this.scope);
          })
        }
    }
}
