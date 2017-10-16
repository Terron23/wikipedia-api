$(document).ready(function() {
  $('#search').click(function(){
   var searchbar = $("#search-bar").val();
    //API url
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchbar + "&format=json&callback=?";
    
    $.ajax({
      type: "GET",
      url: url,
      dataType:"json",
      success: function(input) {
      //console.log(input[1][0]);
      //console.log(input[2][0]);

        $('#output').html(' ');
        for(var i = 0; i< input[1].length; i++) {
        $('#output').prepend("<br><li><h4><a href= " + input[3][i]+">"+input[1][i]+"</a></h4><p>"+input[2][i]+"</p></li><br>");
        }
        $("#search-bar").val(" ");
                
    },
       error: function(errorstuff) {
      alert("Error");
    }     
      
    });
         

    });
    
              $("#search-bar").keypress(function(e){
      if(e.which==13) {
        $('#search').click();
      } }); 
  
});