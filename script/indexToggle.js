document.getElementById('login-option').style.display = 'block'
document.getElementById('forgotPassword').style.display = 'none';

document.getElementById('btn-forgot')
    .addEventListener('click', function () {
        document.getElementById('forgotPassword').style.display = 'block';
        document.getElementById('login-option').style.display = 'none';
        alert('Are You Willing to forgot Password')
    });
document.getElementById('btn-home').addEventListener('click', function () {
    document.getElementById('login-option').style.display = 'block'
    document.getElementById('forgotPassword').style.display = 'none';
});
document.getElementById('btn-contact').addEventListener('click', function (event) {
    event.preventDefault()
    window.location.href = 'https://github.com/shihabuddin-dev';
})