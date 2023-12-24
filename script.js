function setUsername() {
    //var x = document.getElementsByName("username");
    const collection = document.getElementsByClassName("ng-pristine ng-invalid ng-touched");

    let elements = document.querySelectorAll('ul > li:last-child');

    //const collection = document.getElementsByName("username");
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].tagName == "IFRAME") {
            collection[i].innerText = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
        }
    }

    var iframe = document.getElementById("IF1");
    var elmnt = iframe.contentWindow.document.getElementsByName("username");

    //var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
    //elmnt.style.display = "none";
    //document.getElementsByName("username").innerHTML = "xxx";
  }

  function findText() {
    //var x = document.getElementsByName("username");
    //const collection = document.innerText;    //.findText("Ingen varslinger tilgjengelig."); //   .getElementsByClassName("ng-pristine ng-invalid ng-touched");

    const collection = document.getElementsByName("username");
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].tagName == "IFRAME") {
            collection[i].innerText = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
        }
    }

    var iframe = document.getElementById("IF2");
    var elmnt = iframe.contentWindow.document.findText("Ingen varslinger tilgjengelig.");
    
    //var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
    //elmnt.style.display = "none";
    //document.getElementsByName("username").innerHTML = "xxx";
  }