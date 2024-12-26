document.addEventListener('DOMContentLoaded', function () {
    let userNickname = localStorage.getItem('userNickname') || null;

    // Если ник выбран, показываем его, если нет — скрываем
    if (userNickname) {
        document.getElementById('userNickname').textContent = userNickname;
        document.getElementById('nicknameDisplay').style.display = 'flex';  // Показываем ник
        document.getElementById('changeAccountBtn').style.display = 'inline-block';  // Показываем кнопку "Изменить аккаунт"
    } else {
        document.getElementById('nicknameDisplay').style.display = 'none';  // Скрываем ник
        document.getElementById('changeAccountBtn').style.display = 'none';  // Скрываем кнопку "Изменить аккаунт"
    }

    // Кнопка "Открыть магазин"
    document.getElementById('openStoreBtn').addEventListener('click', function () {
        if (userNickname) {
            window.open('https://www.google.com', '_blank');  // Открывает страницу Google
        } else {
            document.getElementById('enterNicknameMenu').classList.add('show');
        }
    });

    // Кнопка "Изменить аккаунт"
    document.getElementById('changeAccountBtn').addEventListener('click', function () {
        document.getElementById('changeAccountMenu').classList.add('show');
    });

    // Кнопка "Назад" в меню изменения аккаунта
    document.getElementById('backBtn').addEventListener('click', function () {
        document.getElementById('changeAccountMenu').classList.remove('show');
    });

    // Кнопка "Назад" в меню ввода ника
    document.getElementById('backBtnEnter').addEventListener('click', function () {
        document.getElementById('enterNicknameMenu').classList.remove('show');
    });

    // Подтверждение нового ника
    document.getElementById('confirmNewNicknameBtn').addEventListener('click', function () {
        let newNickname = document.getElementById('newNickname').value;
        if (isValidNickname(newNickname)) {
            localStorage.setItem('userNickname', newNickname);
            document.getElementById('userNickname').textContent = newNickname;
            document.getElementById('changeAccountMenu').classList.remove('show');
            document.getElementById('nicknameDisplay').style.display = 'flex';
            document.getElementById('changeAccountBtn').style.display = 'inline-block';
        } else {
            document.getElementById('errorNewNickname').style.visibility = 'visible';
            document.getElementById('errorNewNickname').textContent = 'Некорректный ник';
        }
    });

    // Подтверждение ввода ника
    document.getElementById('confirmNicknameBtn').addEventListener('click', function () {
        let nickname = document.getElementById('nicknameInput').value;
        if (isValidNickname(nickname)) {
            localStorage.setItem('userNickname', nickname);
            document.getElementById('userNickname').textContent = nickname;
            document.getElementById('enterNicknameMenu').classList.remove('show');
            document.getElementById('nicknameDisplay').style.display = 'flex';
            document.getElementById('changeAccountBtn').style.display = 'inline-block';
        } else {
            document.getElementById('errorNickname').style.visibility = 'visible';
            document.getElementById('errorNickname').textContent = 'Некорректный ник';
        }
    });

    // Функция проверки на валидность ника
    function isValidNickname(nickname) {
        const regex = /^[a-zA-Z0-9_]+$/;
        return nickname.length >= 3 && regex.test(nickname);
    }
});
