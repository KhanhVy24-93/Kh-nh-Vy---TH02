
 const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    // Gửi dữ liệu đến server
    // ...

    // Hiển thị thông báo thành công
    alert('Tin nhắn của bạn đã được gửi đi.');

    // Xóa nội dung form
    form.reset();
});

