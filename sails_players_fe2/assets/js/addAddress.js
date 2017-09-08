

(function() {

  $(function() {

    $("#addAddressForm").validate({

      errorClass: "text-danger",

      rules: {

        address_street: {

          minlength: 2
        },

        address_city: {

          maxlength: 20
        },

        address_state: {

         minlength: 2
        },

        address_zip: {

          minlength: 5
        },

        address_type: {

        },

        phone_number: {
          phoneUS: true
        },

        phone_type: {

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
