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

let popupthe = document.getElementById("popup");

  window.onload = function() {
    setTimeout(function() {
        let popupthe = document.getElementById("popup");
        popupthe.classList.add("open-warning");
    }, 1000);
};

  function closebutton2(){
  popupthe.classList.remove("open-warning");
  }
