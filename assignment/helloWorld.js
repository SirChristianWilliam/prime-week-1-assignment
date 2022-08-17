function hideIt(event) {
    document.getElementById("btn").style.display = "none";
      if(confirm("If you like this webpage, select 'Ok'!") == true) {
        return good();
      } else{
        return notGood();
      }
      }
 
      function notGood() {
        document.getElementById("hiddenBad").style.visibility = "visible";
      }

      function good() {
        document.getElementById("hiddenGood").style.visibility = "visible";
      }
    console.log("Hello World!");

 