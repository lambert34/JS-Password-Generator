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

mainEl.appendChild(passwordEl);