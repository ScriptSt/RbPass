document.addEventListener('DOMContentLoaded', function () {
    // Массив данных для кубов
    const gameData = [
        {
            title: "Blox Fruit",
            logo: "https://tr.rbxcdn.com/180DAY-c5196093d6526a0227660b3a3a17c316/512/512/Image/Webp/noFilter",
            link: "https://scriptst.github.io/RbPass/blox-fruit"
        },
        {
            title: "Brookhaven",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfG-47LWosOrVZayxHbVkBjsxaH-m0FzejVw&s",
            link: "https://scriptst.github.io/RbPass/brookhaven"
        },
        {
            title: "Adopt Me",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRANDOM12345",
            link: "https://scriptst.github.io/RbPass/adopt-me"
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
