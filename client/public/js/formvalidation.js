export const formValidation = function () {
    const form = document.getElementById('form');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const checkbox = document.getElementById('checkbox');
    const submit = document.getElementById('submit');
    const errMsgsNodeList = document.querySelectorAll('#errmsg');
    const errMsgs = Array.from(errMsgsNodeList);
    checkbox.addEventListener('click', () => {
        const checkboxStatus = checkbox.checked;
        checkboxStatus ? submit.disabled = false : submit.disabled = true;
    });
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!name.value) {
            errMsgs[0].classList.remove('hidden');
            name.classList.add('err');
        }
        else {
            errMsgs[0].classList.add('hidden');
            name.classList.remove('err');
            name.value = "";
        }
        if (!email.value) {
            errMsgs[1].classList.remove('hidden');
            email.classList.add('err');
        }
        else {
            errMsgs[1].classList.add('hidden');
            email.classList.remove('err');
            email.value = "";
        }
        checkbox.checked = false;
    });
};
