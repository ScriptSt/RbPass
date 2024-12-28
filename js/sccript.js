document.addEventListener('DOMContentLoaded', function () {
    let userNickname = localStorage.getItem('userNickname') || null;

    // Инициализация отображения ника
    updateNicknameDisplay();

    // Кнопка "Открыть магазин"
document.getElementById('openStoreBtn').addEventListener('click', function () {
    if (!isMenuOpen()) {
        if (userNickname) {
            window.location.href = 'https://scriptst.github.io/RbPass/store/';  // Перенаправление на новый URL
        } else {
            openNicknameMenu();
        }
    }
});


    // Кнопка "Изменить аккаунт"
    document.getElementById('changeAccountBtn').addEventListener('click', function () {
        if (!isMenuOpen()) {
            openNicknameMenu();
        }
    });

    // Кнопка "Назад" в меню ввода ника
    document.getElementById('backBtnEnter').addEventListener('click', function () {
        closeNicknameMenu();
    });

    // Подтверждение ввода нового ника
    document.getElementById('confirmNicknameBtn').addEventListener('click', function () {
        let nickname = document.getElementById('nicknameInput').value;
        if (isValidNickname(nickname)) {
            setNickname(nickname);  // Устанавливаем новый ник
        } else {
            showErrorMessage('Некорректный ник. Используйте только латинские буквы, цифры или _ (минимум 3 символа).');
        }
    });

    // Функция для установки нового ника
    function setNickname(nickname) {
        localStorage.setItem('userNickname', nickname);  // Сохраняем ник в localStorage
        userNickname = nickname;
        updateNicknameDisplay();
        document.getElementById('nicknameInput').value = ''; // Очищаем поле ввода
        closeNicknameMenu();  // Закрываем меню
    }

    // Обновление отображения ника
    function updateNicknameDisplay() {
        if (userNickname) {
            document.getElementById('userNickname').textContent = userNickname;
            document.getElementById('nicknameDisplay').style.display = 'flex';  // Показываем ник
            document.getElementById('changeAccountBtn').style.display = 'inline-block';  // Показываем кнопку изменения аккаунта
        } else {
            document.getElementById('nicknameDisplay').style.display = 'none';  // Прячем ник, если его нет
            document.getElementById('changeAccountBtn').style.display = 'none';  // Прячем кнопку изменения аккаунта
        }
    }

    // Проверка на валидность ника
    function isValidNickname(nickname) {
        const regex = /^[a-zA-Z0-9_]+$/;  // Ник может содержать только латинские буквы, цифры и подчеркивания
        return nickname.length >= 3 && regex.test(nickname);  // Проверка на минимальную длину и допустимые символы
    }

    // Открыть меню изменения ника
    function openNicknameMenu() {
        const menu = document.getElementById('enterNicknameMenu');
        menu.classList.add('show');
        menu.style.width = '300px';  // Исправляем ширину окна для большей читаемости
        menu.style.height = '200px';  // Исправляем высоту окна
        disableMainButtons();  // Отключаем кнопки на главной странице
    }

    // Закрыть меню изменения ника
    function closeNicknameMenu() {
        document.getElementById('enterNicknameMenu').classList.remove('show');
        enableMainButtons();  // Включаем кнопки на главной странице
    }

    // Проверка, открыто ли меню изменения ника
    function isMenuOpen() {
        return document.getElementById('enterNicknameMenu').classList.contains('show');
    }

    // Отключить кнопки на главной странице
    function disableMainButtons() {
        document.getElementById('openStoreBtn').disabled = true;
        document.getElementById('changeAccountBtn').disabled = true;
    }

    // Включить кнопки на главной странице
    function enableMainButtons() {
        document.getElementById('openStoreBtn').disabled = false;
        document.getElementById('changeAccountBtn').disabled = false;
    }

    // Показать сообщение об ошибке
    function showErrorMessage(message) {
        const errorElement = document.getElementById('errorNickname');
        errorElement.textContent = message;
        errorElement.style.visibility = 'visible';
    }

    // Скрыть сообщение об ошибке
    function hideErrorMessage() {
        const errorElement = document.getElementById('errorNickname');
        errorElement.style.visibility = 'hidden';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const background = document.createElement('div');
    background.classList.add('background-cubes');
    document.body.appendChild(background);

    const maxCubes = 10; // Максимальное количество кубов
    const minCubes = 3; // Минимальное количество кубов
    const minSize = 30; // Минимальный размер куба
    const maxSize = 80; // Максимальный размер куба
    let currentCubes = 0;

    // Функция для создания нового куба
    function createCube() {
        const cube = document.createElement('div');
        cube.classList.add('cube');

        // Установка случайного размера
        const size = Math.random() * (maxSize - minSize) + minSize;
        cube.style.width = `${size}px`;
        cube.style.height = `${size}px`;

        // Установка случайного положения
        setRandomPosition(cube);

        // Установка случайной траектории
        setRandomTrajectory(cube);

        // Добавление случайной задержки для появления
        cube.style.animationDelay = `${Math.random() * 5}s`;

        background.appendChild(cube);
        currentCubes++;

        // Удаление куба после завершения анимации
        cube.addEventListener('animationend', () => {
            cube.remove();
            currentCubes--;

            // Создаем новый куб, если текущее количество меньше минимального
            if (currentCubes < minCubes) {
                createCube();
            }
        });
    }

    // Установка случайного положения
    function setRandomPosition(cube) {
        const width = window.innerWidth;
        const height = window.innerHeight;

        cube.style.left = `${Math.random() * width}px`;
        cube.style.top = `${Math.random() * height}px`;
    }

    // Установка случайной траектории движения
    function setRandomTrajectory(cube) {
        const maxTrajectory = 60; // Максимальное отклонение в пикселях
        const maxRotation = 30; // Максимальный угол поворота

        cube.style.setProperty('--x-trajectory', `${Math.random() * maxTrajectory - maxTrajectory / 2}px`);
        cube.style.setProperty('--y-trajectory', `${Math.random() * maxTrajectory - maxTrajectory / 2}px`);
        cube.style.setProperty('--rotation', `${Math.random() * maxRotation - maxRotation / 2}deg`);
    }

    // Первоначальное создание кубов
    for (let i = 0; i < maxCubes; i++) {
        createCube();
    }

    // Проверка и добавление кубов, если их меньше минимального
    setInterval(() => {
        while (currentCubes < minCubes) {
            createCube();
        }
    }, 1000);
});

// JS - Отключение копирования текста
document.addEventListener('copy', function(e) {
    e.preventDefault();
});
