(function() {

  $(function() {

    $(document).ready(function() {
      $('#contactTable').DataTable({
        dom: 'Bfrtip',
        buttons: [
          'copy', 'excel', 'pdf', 'csv', 'print'
        ],
        colReorder: true,
        scroller: true
      })
    });

//
//     ('#contactTable').onClick()
//     $('#id').on('change', function() {
//       // console.log($(this))
//       // console.log($(this).find("option:selected"))
//       console.log($(this).find("option:selected").val());
//       currentContact = $(this).find("option:selected").val();
//       $.get("/send/" + currentContact, function(data) {
//         $.each(data, function(key, val) {
//           let el = $('[name="' + key + '"]');
//           let type = el.attr('type');
//           el.val(val);
//         })
//       })
//       $("#updateContactForm :input").prop("disabled", false);
//     })

  });

})();
