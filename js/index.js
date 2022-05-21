function showPassword(){
    const eyeOpen = document.getElementById('eye-open');
    const eyeClose = document.getElementById('eye-close');
    const fieldPassword = document.getElementById('field-password');

    if(eyeOpen.style.display === 'none'){
        eyeOpen.style.display = 'block';
        eyeClose.style.display = 'none';
        fieldPassword.type = 'text';
    } else{
        eyeOpen.style.display = 'none';
        eyeClose.style.display = 'block';
        fieldPassword.type = 'password';
    }
}

document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    alert("Checked!");
})