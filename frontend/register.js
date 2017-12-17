var picture;

function preview_loaded() {
  console.log("asd");
    window.scrollTo(0,document.body.scrollHeight);
}

$(document).ready(function() {

    document.querySelector("html").classList.add('js');

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
        picture = this;
        readURL(this);
    });

    function readURL(input) {

      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
          $('#preview').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
      }
    }
});
