(function() {

  $(function() {

    let currentContact

    $("#updateContactForm").validate({

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
        },

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

    $("#updateContactForm :input").prop("disabled", true);



    $('#id').on('change', function() {
      // console.log($(this))
      // console.log($(this).find("option:selected"))
      console.log($(this).find("option:selected").val());
      currentContact = $(this).find("option:selected").val();
      $.get("/send/" + currentContact, function(data) {
        $.each(data, function(key, val) {
          let el = $('[name="' + key + '"]');
          let type = el.attr('type');
          el.val(val);
        })
      })
      $("#updateContactForm :input").prop("disabled", false);
    })

    $('#id').on('change', function() {
      // console.log($(this))
      // console.log($(this).find("option:selected"))
      console.log($(this).find("option:selected").val());
      currentContact = $(this).find("option:selected").val();
      $('#updateAddressForm').attr('action', `/send/${currentContact}/addresses`)

      $.get(`/send/${currentContact}/addresses`, function(data) {
        $.each(data, function(key, val) {
          let el = $('[name="' + key + '"]');
          let type = el.attr('type');
          el.val(val);
        })
      })

      $("#updateContactForm :input").prop("disabled", false);
    })



  })

})();
