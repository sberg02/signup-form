const btnSelect = document.querySelector('button');
btnSelect.addEventListener('click', pwCheck);

function pwCheck (pw1, pw2) {
    if (pw1===pw2) {
        
    }
    else {
        alert("Passwords do not match!");
    }
}