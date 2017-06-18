  var text = document.querySelector("#test");
  var output = document.querySelector("#length");
  text.addEventListener("input", function() {
    output.textContent = text.value;
  });
  var text2 = document.querySelector("#test2");
  var output2 = document.querySelector("#length2");
  text2.addEventListener("input", function() {
    output2.textContent = text2.value;
  });