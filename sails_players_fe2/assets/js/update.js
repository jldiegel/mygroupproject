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


        messages: {

          first_name: {
            required: "You must enter a first name"
          },

          last_name: {
            required: "You must enter a last name"
          },

        }
      }

    });



    $("#updateContactForm :input").prop("disabled", true);
    $("#updateAddressForm :input").prop("disabled", true);
    $("#updatePhoneForm :input").prop("disabled", true);


    $("#updateAddressForm").validate({

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
          // phoneUS: true
        },

        phone_type: {

        }

      }

    });



    $('#selectContactId').selectpicker({
        liveSearch: true,
        header: "Choose Contact",
        title: "Select"
    });


    $('#selectContactId').on('change', function() {


      console.log($(this).find("option:selected").val());
      currentContact = $(this).find("option:selected").val();
      $.get(`/send/${currentContact}`, function(data) {
        $.each(data, function(key, val) {
          let el = $('[name="' + key + '"]');
          let type = el.attr('type');
          el.val(val);
          console.log(data);

          $("#updateContactForm :input").prop("disabled", false);
        })

        const contactObj = data;

        const addressObj = data.addresses[0];
        $('#address_type').val(addressObj.address_type);
        $('#address_street').val(addressObj.address_street);
        $('#address_city').val(addressObj.address_city);
        $('#address_state').val(addressObj.address_state);
        $('#address_zip').val(addressObj.address_zip);

        addressUpdateEndpoint = `/cards/${contactObj.id}/addresses/${addressObj.id}`
        $('#updateAddressForm').attr('action', addressUpdateEndpoint);
        $('#addressId').val(addressObj.id)


        const phoneObj = data.phoneNumbers[0]
        $('#phone_type').val(phoneObj.phone_type);
        $('#phone_number').val(phoneObj.phone_number);

        phoneUpdateEndpoint = `/cards/${contactObj.id}/phones/${phoneObj.id}`
        $('#updatePhoneForm').attr('action', phoneUpdateEndpoint);
        $('#phoneId').val(phoneObj.id)

      })

      $("#updateAddressForm :input").prop("disabled", false);
      $("#updatePhoneForm :input").prop("disabled", false);
    })

  })

})();
