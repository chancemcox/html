function testButton() {
  var name = document.getElementById("name").value;
  name = "Hello " + name;
  
  document.getElementById("helloTag").innerHTML = name;
}
