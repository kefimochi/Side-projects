(function() {
  document.querySelector("#frm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop page refresh.

    var form = document.querySelector("#frm");
    var data = new URLSearchParams(new FormData(form));

    fetch("/", {
      method: "post",
      body: data
    });
  });
})();

function validateForm() {
  alert("valdated");
}
