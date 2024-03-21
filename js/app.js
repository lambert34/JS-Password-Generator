// создаем input
// добавляем класс
// добавляем placeholder
// убрать/сбросить стандартное поведение input

// интегрировать обработчик по клику

// создать кнопку "скопировать"
// создать кнопку "сгенерировать"
// создать функцию генерации пароля

const mainEl = document.querySelector(".main");
const passwordEl = document.createElement("input");
passwordEl.classList.add(".password");
passwordEl.setAttribute("placeholder", "Сгенерировать пароль");
passwordEl.addEventListener("keypress", (e) => {
    e.preventDefault();
});

passwordEl.addEventListener("focus", (e) => {

});

const copyBtn = document.createElement('button');
copyBtn.classList.add("password-button");
copyBtn.innerText = "Скопировать";
copyBtn.addEventListener('click', (e) => {

});

const generateBtn = document.createElement('button');
generateBtn.classList.add('password-button');
generateBtn.innerText = "Сгенерировать";
generateBtn.addEventListener('click', (e) => {
    // вызов функции генерации пароля
});

function generatePassword(passwordLength) {
    const numberChars = "0123456789";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const symbolChars = "!#$%&'()*+,-./:;<=^_`{|}~";
    const allChars = numberChars + upperChars + lowerChars + symbolChars;

    let randomString = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Mach.floor(Mach.random() * allChars.length);
        randomString += allChars[randomNumber];
    }

    return randomString;
}

mainEl.appendChild(passwordEl);
mainEl.appendChild(copyBtn);
mainEl.appendChild(generateBtn);