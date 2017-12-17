module MobileWrapper.Controllers {
    interface RegisterScope extends ng.IScope{
      name: any,
      mail: any,
      idCard: any,
      egn: any,
      address: any,
      drugs: any,
      alergies: any,
      height: any,
      bloodType: any,
      birthDate: any,
      photo: any
    }

    export class RegisterController {
        private scope: RegisterScope;
        private commonService: Services.CommonService;
        private state: any;

        static $inject = ['$scope', '$state', 'commonService'];

        constructor($scope: RegisterScope, $state: any, commonService: Services.CommonService) {
            this.scope = $scope;
            this.state = $state;
            this.commonService = commonService;
            this.commonService.SetMenuVisibility(false);
        }

        public RegisterUser(){
            var userInfo = {Name: this.scope.name, Email: this.scope.mail,
              BloodType: this.scope.bloodType, EGN: this.scope.egn, PhoneNumber: "+359000000000",
              Alergies: (this.scope.alergies | "None"), DrugsUsed: (this.scope.drugs | "None"),
               Sex: "Male", CurrentAddress: this.scope.address, IdCardNumber: this.scope.idCard,
               Photo: this.scope.photo, Height: this.scope.height}

            $.ajax({type: "POST", data: userInfo, url: "192.168.43.151:3000/api/User/Register?imei=dszfgyt37rff87ew"})
            .then(() => {
              this.commonService.NavigateToPage('home', this.state, this.scope)
            })
        }
    }
}
