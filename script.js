const btnSelect = document.querySelector('#submit');
btnSelect.addEventListener('click', pwCheck);

function pwCheck () {
    let inputSelect = document.getElementById('pw');
    let inputSelect2 = document.getElementById('conf-pw');
    let pass1 = document.getElementById('pw').value;
    let pass2 = document.getElementById('conf-pw').value;
    let message = document.querySelector('#message');
    if (pass1 != pass2) {
        inputSelect.classList.add('error');
        inputSelect2.classList.add('error');
        message.style.visibility('visible');
    }
    else {
        return;
    }
};

