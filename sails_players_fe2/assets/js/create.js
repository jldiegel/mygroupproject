

(function() {

  $(function() {

    $("#addContactForm").validate({

      errorClass: "text-danger",

      rules: {

        first_name: {

          required: true,
          minlength: 2
        },

        last_name: {

          required: true,
          minlength: 2
        },

        person_title: {

          required: true,
          minlength: 2
        },

        person_co: {

          required: true,
          minlength: 2
        }

      },

      messages: {

        first_name: {
          required: "You must enter a first name"
        },

        last_name: {
          required: "You must enter a last name"
        },

      }

    });


  })

})();
