$(function() {
    var scrollTop;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
    
        if (scrollTop >= 100) {
            $("#header").removeClass("header").addClass("smallheader");
            $("#logo").removeClass("logo").addClass("smalllogo");
            $("#name").removeClass("name").addClass("smallname");
        } else if (scrollTop < 100) {
            $("#header").removeClass("smallheader").addClass("header");
            $("#logo").removeClass("smalllogo").addClass("logo");
            $("#name").removeClass("smallname").addClass("name");
        } 
    
  }); 
  
});

$(function() {
  $(".gap").hover(function() {
    $("#services").css("color", "black");
  }, function() {
    $("#services").css("color", "");
  });
});