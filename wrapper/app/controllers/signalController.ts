module MobileWrapper.Controllers {
    interface SignalScope extends ng.IScope{
      timer: integer
    }

    export class SignalController {
        private scope: SignalScope;
        private commonService: Services.CommonService;
        private signal: any;


        static $inject = ['$scope', 'commonService', 'signall'];

        constructor($scope: SignalScope, commonService: Services.CommonService, signall: any) {
            this.scope = $scope;
            this.commonService = commonService;
            this.commonService.SetMenuVisibility(true);
            this.signal = signall;
            setInterval(function(){
              this.scope.timer++;
            }, 1000);
        }

        public SendSignal(service: string){
          var signal = {
            Service: service,
            ThreatLevel: 2,
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

        public SetSignalLevel(threatLevel: int){
          this.signal.ThreatLevel = threatLevel;

          $.ajax({type: "POST", data: this.signal, url: "http://192.168.43.151:3000/api/Signal/SendSignal?imei=28bdd989ba275457"})
          .then(() => {
            this.commonService.NavigateToPage('signal', this.state, this.scope);
          })
        }

        public CancelSignal(){
          this.signal.ThreatLevel = 0;

          $.ajax({type: "POST", data: this.signal, url: "http://192.168.43.151:3000/api/Signal/SendSignal?imei=28bdd989ba275457"})
          .then(() => {
            this.commonService.NavigateToPage('home', this.state, this.scope);
          })
        }
    }
}
