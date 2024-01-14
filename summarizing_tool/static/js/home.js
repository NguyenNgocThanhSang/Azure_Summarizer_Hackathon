// script.js
function summarizeText() {
    // Lấy nội dung từ textarea
    var textInput = document.getElementById('from-text').value;
    // var summarizeUrl = '{% url "summarize" %}';
    // Gửi dữ liệu lên server Django
    fetch(summarizeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCookie('csrftoken'), // Đảm bảo gửi CSRF token
      },
      body: JSON.stringify({
        text: textInput,
      }), 
    })
    .then(response => response.json())
    .then(data => {
      // Hiển thị kết quả tóm tắt trên trang web
      document.getElementById('to-text').value = data.summary;
    })
    .catch(error => console.error('Error:', error));
  }
  
  // Hàm để lấy CSRF token từ cookie
  function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
  return cookieValue;
}

function toggleNote() {
  var note = document.getElementById("note_hide");
  note.classList.toggle("hidden");
}

function displayFileName() {
  var fileInput = document.getElementById("fileInput");
  var fileList = document.getElementById("fileList");
  
  fileList.innerHTML = ""; // Xóa danh sách trước khi hiển thị lại

  if (fileInput.files.length > 0) {
    for (var i = 0; i < fileInput.files.length; i++) {
      var fileName = fileInput.files[i].name;
      var listItem = document.createElement("li");
      listItem.textContent = fileName;
      fileList.appendChild(listItem);
    }
  }
}
