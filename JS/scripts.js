// Functionality for the page like the hover properties

//toggle between the images and the content
$(document).ready(function(){
   $(".design").click(function(){
    $(".design-logo").toggle();
    $(".design-cont").toggle();
   });
    
   $(".management").click(function(){
    $(".mgmnt-logo").toggle();
    $(".mgmnt-cont").toggle();
   });

   $(".development").click(function(){
    $(".dev-logo").toggle();
    $(".dev-cont").toggle();
   });
});

