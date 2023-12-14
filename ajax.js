
function loadDoc() {
  alert('loadDoc');
  const xhttp = new XMLHttpRequest();
  
  xhttp.onload = function() {
    alert('onload......');
    console.log(this.responseText);
    document.getElementById("demo").innerHTML =
    this.getAllResponseHeaders();
  }

  xhttp.onreadystatechange = function() {
    alert(this.readyState);
    alert(this.status);
    
    if (this.readyState == 4 && this.status == 200) {
      alert('Ready...');
      document.getElementById("demo2").innerHTML =
      this.responseText;
    }
  };


  let url = new URL('https://google.com/search');
  url.searchParams.set('q', 'test me!');

  //let url = new URL('www.vg.no');
  //url.searchParams.set('q', 'test me!');
  //url='Text.html';


  xhttp.open("GET", url);
  xhttp.send();
}


/*

// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('GET', '/article/xmlhttprequest/example/load');

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) { // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    alert(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    alert(`Received ${event.loaded} bytes`); // no Content-Length
  }

};
*/