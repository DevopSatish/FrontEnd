document
  .getElementById("uploadForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var fileInput = document.getElementById("fileInput");
    var fileNameDisplay = document.getElementById("fileName");
    var proceedBtn = document.getElementById("proceedBtn");

    if (fileInput.files.length > 0) {
      var fileName = fileInput.files[0].name;
      fileNameDisplay.textContent = "File uploaded: " + fileName;
      fileNameDisplay.style.display = "block";
      proceedBtn.style.display = "block";
    } else {
      alert("Please select a file.");
    }
  });

document.getElementById("proceedBtn").addEventListener("click", function () {
  // Generate and display random text (You can replace this with your desired functionality)
  var randomText = "This is random text.";
  alert(randomText);
});
