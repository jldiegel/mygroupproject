/**
 * Use the jQuery Validate plugin to add validation to the form
 *
 * Here's what this you will need to do:
 *
 * 1. Include the following jQuery Validate JavaScript in layout.ejs
 *    <script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.15.0/jquery.validate.min.js"></script>
 *
 * 2. Use jQuery validate and add validation to the form with the following requirements
 *    First Name - required, at least 2 characters
 *    Last Name  - required, at least 2 characters
 *	  start_date - make sure date is yyyy-mm-dd
 *	  ADD any other validation that makes you happy
 *
 * 3. Use a custom message for one validation
 *
 * 4. Make the color of the error text red
 *
 *
 *
 * Here's the documentation you need:
 * https://jqueryvalidation.org/validate/
 * https://jqueryvalidation.org/documentation/#link-list-of-built-in-validation-methods
 *
 */


(function() {

  $(function() {

    $("#addContactForm").validate({

      errorClass: "text-danger",

      rules: {

        first_name: {
          type: 'string',
          required: true,
          minlength: 2
        },

        last_name: {
          type: 'string',
          required: true,
          minlength: 2
        },

        person_title: {
          type: 'string',
          required: true,
          minlength: 2
        },

        person_co: {
          type: 'string',
          required: true,
          minlength: 2
        },

        // address_street: {
        //   type: 'string',
        //   required: true,
        //   minlength: 2
        // },
        //
        // address_city: {
        //   type: 'string',
        //   required: true,
        //   maxlength: 20
        // },
        //
        // address_state: {
        //   required: true,
        // },
        //
        // address_zip: {
        //   type: 'string',
        //   minlength: 5
        // },
        //
        // address_type: {
        //   required: true
        // },
        //
        // phone_number: {
        //   required: true,
        //   phoneUS: true
        // },
        //
        // phone_type: {
        //   required: true
        // }


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
