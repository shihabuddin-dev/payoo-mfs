handleToggle('login-option', 'block');
handleToggle('forgotPassword', 'none');

document.getElementById('btn-forgot')
    .addEventListener('click', function () {
        handleToggle('forgotPassword', 'block');
        handleToggle('login-option', 'none');
        alert('Are You Willing to forgot Password')
    });
document.getElementById('btn-home').addEventListener('click', function () {
    handleToggle('login-option', 'block');
    handleToggle('forgotPassword', 'none');

});
document.getElementById('btn-contact').addEventListener('click', function (event) {
    event.preventDefault()
    window.location.href = 'https://github.com/shihabuddin-dev';
})