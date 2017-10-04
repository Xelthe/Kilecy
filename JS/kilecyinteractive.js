$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top -50
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
      $("section , header").each(function(){
         
          var sectionHeight = $(this).position().top;
          var currentScrollHeight = scrollbarLocation + 25;

          if (currentScrollHeight >= (sectionHeight - 50)){
              
              var id = $(this).attr("id");
              $(".scroll").removeClass("active");
              $("a[href='#" + id + "']").addClass("active");
          }
      });
      
  });
  
});