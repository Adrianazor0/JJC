window.onclick = function(e) {
  var id =  e.target.id;
  if (id==='sent')
  {
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;

    $( "#commentsInfo" ).append( "<h3>"+ name + "</h3>" + "<p>"+ comment + "</p>");
  }
} 
