function submit_commit() {
  user_commitments.innerHTML +="<table><tr><th>Name: "+document.querySelector('#Name').value+"</th><td></td></tr><tr><th>Message: "+document.querySelector('#Message').value+"</th><td></td></tr></table>";
}
var user_commitments = document.querySelector("#user_commitments");
var node = document.querySelector("#commitments");
node.addEventListener("submit", function(event) {
  submit_commit();
})
