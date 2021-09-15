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

   //hover function for the portfolio images
   $("#work4").hover(function(){
    $(".grey").toggle();
   });

   $("#work3").hover(function(){
    $(".ontario").toggle();
   });

   $("#work2").hover(function(){
    $(".orange").toggle();
   });

   $("#work1").hover(function(){
    $(".jim").toggle();
   });

   $("#work5").hover(function(){
    $(".health").toggle();
   });

   $("#work6").hover(function(){
    $(".mac").toggle();
   });

   $("#work7").hover(function(){
    $(".burned").toggle();
   });

   $("#work8").hover(function(){
    $(".giraffe").toggle();
   });
});

