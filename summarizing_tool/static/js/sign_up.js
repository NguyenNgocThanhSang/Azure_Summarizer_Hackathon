document.getElementById('passwordField').addEventListener('input', function () {
    // Lấy giá trị từ ô textarea
    let inputValue = this.value;

    // Thay thế mỗi ký tự trong giá trị bằng dấu chấm
    let hiddenValue = inputValue.replace(/./g, '●');

    // Gán giá trị ẩn cho ô textarea
    this.value = hiddenValue;
});

document.getElementById('confirmpasswordField').addEventListener('input', function () {
    // Lấy giá trị từ ô textarea
    let inputValue = this.value;

    // Thay thế mỗi ký tự trong giá trị bằng dấu chấm
    let hiddenValue = inputValue.replace(/./g, '●');

    // Gán giá trị ẩn cho ô textarea
    this.value = hiddenValue;
});