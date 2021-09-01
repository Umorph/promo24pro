// Header burger
let burgerButton = document.querySelector('.page-navigation__burger-button'),
burgerMenu = document.querySelector('.page-navigation__nav-list')

burgerButton.addEventListener('click', function() {
  burgerButton.classList.toggle('page-navigation__burger-button--opened')
  burgerMenu.classList.toggle('page-navigation__nav-list--opened')
})

$(document).ready(function(){
    $("a.nav-link, button.more").click(function(){
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top - 150 + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
});

"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const callBack = document.getElementById('contacts');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            callBack.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
                callBack.classList.remove('_sending');

            } else {
                alert ('Ошибка! Попробуйте связаться по телефону/почте');
                callBack.classList.remove('_sending');
            }
        } else {
            alert('Заполните обязательные поля!')
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }

        }

        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }

    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    //Функция текста email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});
