function toggle(source) {
    var checkboxes = document.getElementsByClassName('check-item');
   for(var i=0, n=checkboxes.length;i<n;i++) {
   checkboxes[i].checked = source.checked;
}
}
let selectActive = document.getElementById("sellect-all");
selectActive.addEventListener("click", function(event){
  toggle(this);
});