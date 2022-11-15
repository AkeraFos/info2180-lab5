window.onload = function() {

  var httpRequest;
  var sButton = document.getElementById("lookup");
  var ctyLookUpButton = document.getElementById("city");

  sButton.onclick = lookupCountry;
  ctyLookUpButton.onclick = lookupCity;

  function lookupCountry() {
      event.preventDefault();
      httpRequest = new XMLHttpRequest();
      var uInput = document.getElementById("country").value;
      var url = "world.php" + "?country=" + uInput;

      httpRequest.onreadystatechange = recResults;
      httpRequest.open('GET', url);
      httpRequest.send();
  }

  function lookupCity() {
      event.preventDefault();
      httpRequest = new XMLHttpRequest();
      var uInput = document.getElementById("country").value;
      var url = "world.php" + "?country=" + uInput + "&context=cities";

      httpRequest.onreadystatechange = recResults;
      httpRequest.open('GET', url);
      httpRequest.send();
  }

  function recResults() {
      if(httpRequest.readyState === XMLHttpRequest.DONE) {
        if(httpRequest.status === 200) {
          var response = httpRequest.responseText;
          var resultDiv = document.getElementById("result");
          resultDiv.innerHTML = response;
        } else {
          alert("There's a problem with the request");
        }
      }
    }


}