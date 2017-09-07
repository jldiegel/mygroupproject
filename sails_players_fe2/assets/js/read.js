
 (function(){

   $(function(){

     $(document).ready(function(){
       $('#contactTable').DataTable({
         dom: 'Bfrtip',
         buttons: [
           'copy', 'excel', 'pdf', 'csv', 'print'
         ],
         colReorder: true,
         scroller: true
       })
     });


     });

 })();
