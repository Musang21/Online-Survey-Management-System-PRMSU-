function baropen(x) {
  x.classList.toggle("change");
}


function openmenu(){
            if(openlink.style.maxHeight == "0px")
            {
                openlink.style.maxHeight = "300px";
            }
            else{
                openlink.style.maxHeight = "0px";
            }
        }

let popup = document.getElementById("popup");


  function closebutton(){
  popup.classList.add("open-warning");
  }

let popup2 = document.getElementById("popup2");

  window.onload = function() {
    setTimeout(function() {
        let popup2 = document.getElementById("popup2");
        popup2.classList.add("open-warning2");
    }, 1000);
};

  function closebutton2(){
  popup2.classList.remove("open-warning2");
  }