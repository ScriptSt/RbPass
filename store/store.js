document.addEventListener('DOMContentLoaded', function () {
    // Массив данных для кубов
    const gameData = [
        {
            title: "Blox Fruit",
            logo: "https://tr.rbxcdn.com/180DAY-c5196093d6526a0227660b3a3a17c316/512/512/Image/Webp/noFilter",
            link: "https://scriptst.github.io/RbPass/blox-fruit"
        },
        {
            title: "Pet Simulator X",
            logo: "https://tr.rbxcdn.com/180DAY-9b372a72aedaf771f524c8e9ff40ac27/512/512/Image/Webp/noFilter",
            link: "https://scriptst.github.io/RbPass/PetX"
        },
        {
            title: "Shindo Life",
            logo: "https://tr.rbxcdn.com/180DAY-26b2cce6b2dbbf203ff01105d05e7eb4/512/512/Image/Webp/noFilter",
            link: "https://scriptst.github.io/RbPass/ShindoLife"
        }
        {
            title: "Anime Adventures",
            logo: "https://tr.rbxcdn.com/180DAY-a4dda77cbeb2a02523deb6c49ece2ce4/512/512/Image/Webp/noFilter",
            link: "https://scriptst.github.io/RbPass/AnimeAdventures"
        }
        {
            title: "King Legacy",
            logo: "https://tr.rbxcdn.com/180DAY-92d9d99c07ff5a56ac4ab1e23914c7a8/512/512/Image/Webp/noFilter",
            link: "https://scriptst.github.io/RbPass/KingLegacy"
        }
        {
            title: "Project Slayers",
            logo: "https://tr.rbxcdn.com/180DAY-f71e9da041d76bbc685d3035ed2e9a31/512/512/Image/Webp/noFilter",
            link: "https://scriptst.github.io/RbPass/ProjectSlayers"
        }
    ];

    const gameBoxes = document.querySelectorAll('.game-box');

    // Применяем данные к каждому кубу
    gameBoxes.forEach((box, index) => {
        if (index < gameData.length) {
            const gameTitle = box.querySelector('.game-title');
            const gameLogo = box.querySelector('.game-logo');
            const { title, logo, link } = gameData[index];

            gameTitle.textContent = title; // Устанавливаем название
            gameLogo.src = logo; // Устанавливаем иконку

            // Добавляем обработчики для перехода
            box.addEventListener('mousedown', () => {
                box.classList.add('active');
                gameBoxes.forEach(otherBox => {
                    if (otherBox !== box) {
                        otherBox.classList.add('inactive');
                    }
                });

                // Задержка перед переходом на сайт (0.2 секунды)
                setTimeout(() => {
                    window.location.href = link; // Переход на ссылку
                }, 200);
            });

            box.addEventListener('mouseup', () => {
                box.classList.remove('active');
                gameBoxes.forEach(otherBox => {
                    otherBox.classList.remove('inactive');
                });
            });

            box.addEventListener('mouseleave', () => {
                box.classList.remove('active');
                gameBoxes.forEach(otherBox => {
                    otherBox.classList.remove('inactive');
                });
            });
        }
    });
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
