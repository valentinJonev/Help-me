module MobileWrapper.Controllers {
    interface RegisterScope extends ng.IScope{
    }

    export class RegisterController {
        private scope: RegisterScope;
        private commonService: Services.CommonService;
        private picture: any;

        static $inject = ['$scope', 'commonService'];

        constructor($scope: RegisterScope, commonService: Services.CommonService) {
            this.scope = $scope;
            this.commonService = commonService;
            this.commonService.SetMenuVisibility(false);
            this.setup();
        }

        private setup(){

          var fileInput  = document.getElementsByClassName( "input-file" )[0],
              button     = document.getElementsByClassName( "input-file-trigger" )[0],
              the_return = document.getElementsByClassName("file-return")[0],
              preview    = document.getElementById('preview');

          button.addEventListener( "keydown", function( event ) {
              if ( event.keyCode == 13 || event.keyCode == 32 ) {
                  fileInput.focus();
              }
          });
          button.addEventListener( "click", function( event ) {
             fileInput.focus();
             return false;
          });
          fileInput.addEventListener( "change", function( event ) {
              this.picture = this;
              this.readURL(this);
          });
        }

        private readURL(input) {

          if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function(e) {
              $('#preview').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
          }
        }
    }
}
