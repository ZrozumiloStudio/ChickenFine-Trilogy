        // Отримання елементу canvas та його контексту
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');

        // Ініціалізація об'єкта гравця
        const player = {
            x: 50,
            y: 50,
            direction: Math.PI / 4, // Початковий напрямок (45 градусів)
            speed: 1,
            rotationSpeed: Math.PI / 120, // Швидкість обертання
        };
		
		var grivni = 0;
		
		function bogati() {
            grivni++;
			console.log(`Money: ${grivni}`);
		}
		
		setInterval(bogati, 1000);
		
function updateDisplay() {
  document.getElementById('grivni-display').textContent = `Money: ${grivni}`;
}

setInterval(updateDisplay, 1000);

	function basement() {
		window.location.href = 'Basement/index.html';
	}
	
	
function muzik() {
    var audio = new Audio('Sounds/geiger.mp3');
    audio.addEventListener('ended', function() {
        this.currentTime = 1;
        this.play();
    }, false);
    audio.play();
}

window.addEventListener('load', function() {
    setTimeout(muzik, 1000);
});

const wallTexture = new Image();
wallTexture.src = 'images/wallb.png';

        // Ініціалізація карти гри
        var map = [
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
[1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
[1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1],
[1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
[1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1],
[1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
[1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1],
[1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
[1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
[1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
[1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ];

        // Довжина променя від гравця для raycasting
        var rayLength = 230;

        // Додавання слухачів подій для обробки натискань клавіш
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        // Об'єкт для відстеження стану натискань клавіш
        const keys = {
            forward: false,
            backward: false,
            left: false,
            right: false,
        };

        // Обробник натискань клавіш
        function handleKeyDown(event) {
            if (event.key === 'w') keys.forward = true;
            if (event.key === 's') keys.backward = true;
            if (event.key === 'a') keys.left = true;
            if (event.key === 'd') keys.right = true;
        }

        function handleKeyUp(event) {
            if (event.key === 'w') keys.forward = false;
            if (event.key === 's') keys.backward = false;
            if (event.key === 'a') keys.left = false;
            if (event.key === 'd') keys.right = false;
        }

        // Функція для оновлення стану гри
        function update() {
            // Обробка введення та оновлення стану гравця
            if (keys.forward) {
                player.x += player.speed * Math.cos(player.direction);
                player.y += player.speed * Math.sin(player.direction);
				spriteWidth *= (1 + scaleStep);
                spriteHeight *= (1 + scaleStep);
            }
            if (keys.backward) {
                player.x -= player.speed * Math.cos(player.direction);
                player.y -= player.speed * Math.sin(player.direction);
            }
            if (keys.left) {
                player.direction -= player.rotationSpeed;
				spriteWidth *= (1 + scaleStep);
                spriteHeight *= (1 + scaleStep);
            }
            if (keys.right) {
                player.direction += player.rotationSpeed;
				spriteWidth *= (1 + scaleStep);
                spriteHeight *= (1 + scaleStep);
            }

            // Raycasting
for (let i = 0; i < canvas.width; i++) {
    const angle = player.direction - Math.PI / 6 + (i / canvas.width) * (Math.PI / 3);
    let rayX = player.x;
    let rayY = player.y;
    let rayDistance = 0;

    while (rayDistance < rayLength) {
        rayX += Math.cos(angle);
        rayY += Math.sin(angle);

        if (map[Math.floor(rayY / 50)][Math.floor(rayX / 50)] === 1) {
            break; 
        }
        rayDistance += 1;
    }

    const lineHeight = (canvas.height / rayDistance) * 60;

    // Устанавливаем альфа-канал для тумана
    const fogIntensity = 1 - Math.min(1, rayDistance / rayLength);
    ctx.globalAlpha = fogIntensity; // Задаём интенсивность тумана

    // Отрисовка текстуры с применением тумана
    const textureX = Math.floor((rayX % 50) / 50 * wallTexture.width); // Вычисляем горизонтальное смещение текстуры
    ctx.drawImage(wallTexture, textureX, 0, 1, wallTexture.height, i, (canvas.height - lineHeight) / 2, 1, lineHeight);

    // Восстанавливаем прозрачность для остальных элементов
    ctx.globalAlpha = 1.0;

    // Отрисовка тени под стеной
    const shadowIntensity = Math.max(0.3, fogIntensity); // Используем интенсивность тумана для тени
    const shadowLength = lineHeight * 0.5; 

    ctx.fillStyle = `rgba(0, 0, 0, ${shadowIntensity * 0.5})`; 
    ctx.fillRect(i, (canvas.height + lineHeight) / 2, 1, shadowLength); 
}

            // Малювання гравця
            // ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(player.x, player.y, 5, 0, 2 * Math.PI);
            // ctx.fill();
        }
		
		
		function removefog() {
            rayLength+=20;
			console.log(rayLength)
        }
		
		function addfog() {
            rayLength-=20;
			console.log(rayLength)
        }

// Определяем карту для спрайтов: 1 - спрайт, 0 - пустта
var mapsprites = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
];

// Загрузка изображения спрайта
const spriteImage = new Image();
spriteImage.src = 'sprite.png';

const cellSize = 50;

function renderSprites() {
    mapsprites.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell === 1) { // Спрайт ты тут?
                const spriteX = x * cellSize + cellSize / 2;
                const spriteY = y * cellSize + cellSize / 2;

                // Рассчитываем расстояние от игрока до спрайта
                const dx = spriteX - player.x;
                const dy = spriteY - player.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Угол между направлением игрока и спрайтом
                const angleToSprite = Math.atan2(dy, dx);
                const angleDifference = angleToSprite - player.direction;

                // Если спрайт находится в поле зрения игрока
                if (Math.abs(angleDifference) < Math.PI / 4) {
                    const fogIntensity = 1.2 - Math.min(1.2, distance / rayLength);

                    // Спрайт нарисовался
                    const screenX = (canvas.width / 2) * (1 + Math.tan(angleDifference) / Math.tan(Math.PI / 6));
                    const spriteHeight = (canvas.height / distance) * 60; // Масштабируем спрайт в зависимости от расстояния

                    // Прозрачность
                    ctx.globalAlpha = fogIntensity;

                    // Отрисовываем спрайт на экране
                    ctx.drawImage(
                        spriteImage,
                        0, 0, spriteImage.width, spriteImage.height,
                        screenX - spriteHeight / 2, (canvas.height - spriteHeight) / 2,
                        spriteHeight, spriteHeight
                    );

                    // Прозрачность откинула копыта
                    ctx.globalAlpha = 1.0;
                }
            }
        });
    });
}

const spriteImage2 = new Image();
spriteImage2.src = 'images/chill.png';

var mapsprites2 = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const cellSize2 = 1;

function renderSprites2() {
    mapsprites2.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell === 1) { 
                const spriteX = x * cellSize + cellSize / 2;
                const spriteY = y * cellSize + cellSize / 2;

                const dx = spriteX - player.x;
                const dy = spriteY - player.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                const angleToSprite = Math.atan2(dy, dx);
                const angleDifference = angleToSprite - player.direction;

                if (Math.abs(angleDifference) < Math.PI / 4) {
                    const fogIntensity = 1.6 - Math.min(1.6, distance / rayLength);

                    const screenX = (canvas.width / 2) * (1 + Math.tan(angleDifference) / Math.tan(Math.PI / 6));
                    const spriteHeight = (canvas.height / distance) * 300; // Масштабируем спрайт в зависимости от расстояния
					
                    ctx.globalAlpha = fogIntensity;

                    ctx.drawImage(
                        spriteImage2,
                        0, 240, spriteImage2.width, spriteImage2.height,
                        screenX - spriteHeight / 2, (canvas.height - spriteHeight) / 2,
                        spriteHeight, spriteHeight
                    );

                    ctx.globalAlpha = 1.0;
                }
            }
        });
    });
}

const spriteImage3 = new Image();
spriteImage3.src = 'images/cat.png';

var mapsprites3 = [
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const cellSize3 = 1;

function renderSprites3() {
    mapsprites3.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell === 1) { 
                const spriteX = x * cellSize + cellSize / 2;
                const spriteY = y * cellSize + cellSize / 2;

                const dx = spriteX - player.x;
                const dy = spriteY - player.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                const angleToSprite = Math.atan2(dy, dx);
                const angleDifference = angleToSprite - player.direction;

                if (Math.abs(angleDifference) < Math.PI / 4) {
                    const fogIntensity = 1.8 - Math.min(1.8, distance / rayLength);

                    const screenX = (canvas.width / 2) * (1 + Math.tan(angleDifference) / Math.tan(Math.PI / 6));
                    const spriteHeight = (canvas.height / distance) * 300; // Масштабируем спрайт в зависимости от расстояния
					
                    ctx.globalAlpha = fogIntensity;

                    ctx.drawImage(
                        spriteImage3,
                        0, 60, spriteImage3.width, spriteImage3.height,
                        screenX - spriteHeight / 2, (canvas.height - spriteHeight) / 2,
                        spriteHeight, spriteHeight
                    );

                    ctx.globalAlpha = 1.0;
                }
            }
        });
    });
}

		function GilzaSound() {
			var audio2 = new Audio('Sounds/gilza.mp3');
            audio2.play();	
		}
		
        function PistolSound() {
            var audio = new Audio('Sounds/shoot.mp3');
            audio.play();
			setTimeout(GilzaSound, 600);
        }
		
function drawSprites() {
    for (const sprite of sprites) {
        ctx.drawImage(document.getElementById('spriteImage'), sprite.x, sprite.y);
    }
}

let spriteWidth = 0.0000001; // Початкова ширина спрайта
let spriteHeight = 0.0000001; // Початкова висота спрайта
const scaleStep = 0.1; // Крок зміни масштабу
		
		function KlinSound() {
            var audio = new Audio('Sounds/klin.mp3');
            audio.play();
        }
		
		function ReloadSound() {
            var audio = new Audio('Sounds/reload.mp3');
            audio.play();
        }
		
		function reloadanimation() {
	      var Reload = document.getElementById("gun");
          Reload.src = "images/gunreload2.png";		
		}
		
		function reloadanimation2() {
	      var Reload = document.getElementById("gun");
          Reload.src = "images/gun.png";		
		}

var ammo = 15

function reload() {
    var Reload = document.getElementById("gun");
    Reload.src = "images/gunreload.png";
    KlinSound();
	setTimeout(reloadanimation, 600);
	setTimeout(reloadanimation2, 900);
    ammo+=10;
    ReloadSound();	
}
		
function shoot() {
    const randomNumber = Math.random() < 0.25 ? 1 : 0;

    if (randomNumber === 0 && ammo >= 1) {
        var newImages = document.getElementById("gun");
        newImages.src = "images/gunshoot.png";
		ammo--;	

        var newImages2 = document.getElementById("gun");
        setTimeout(function() {
            newImages2.src = "images/gun.png";
        }, 590);

        player.x -= player.speed * Math.cos(player.direction);
        player.y -= player.speed * Math.sin(player.direction);
        player.x -= player.speed * Math.cos(player.direction);
        player.y -= player.speed * Math.sin(player.direction);
		var debilubil = document.getElementById("spriteImage");
        debilubil.src = "images/corpse1.png";

        PistolSound();
        CrushWall();

        var newImage2 = document.getElementById("gun");
        setTimeout(function() {
            newImage2.src = document.getElementById("gun").src;
        }, 1000);
    } else {
        var Klin = document.getElementById("gun");
        Klin.src = "images/gunklin.png";
		KlinSound();
		ammo++;
    }
}

function updateAmmo() {
    let ammoElement = document.getElementById("ammoui");
    ammoElement.textContent = "Ammo: " + ammo;
}

setInterval(updateAmmo, 600);

		 
		 function burst() {
			setTimeout(shoot, 100);
			setTimeout(shoot, 250);
			setTimeout(shoot, 350);
			setTimeout(shoot, 450);
		 }
		 
document.addEventListener("keydown", function(event) {
    if (event.key === "x" || event.key === "X") {
        shoot();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "y" || event.key === "Y") {
        burst();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "r" || event.key === "R") {
        reload();
    }
});

function CrushWall() {
    const distance = 50;

    const nextX = Math.floor((player.x + Math.cos(player.direction) * distance) / 50);
    const nextY = Math.floor((player.y + Math.sin(player.direction) * distance) / 50);

    if (nextY >= 0 && nextY < map.length && nextX >= 0 && nextX < map[0].length) {
        map[nextY][nextX] = 0;
		destroyingg();
    }
}

		
        // Функція головного циклу гри
        function gameLoop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            update();
			renderSprites();
			renderSprites2();
			renderSprites3();
			ctx.drawImage(document.getElementById('spriteImage'), 600, 250, spriteWidth, spriteHeight);
            requestAnimationFrame(gameLoop);
        }

        // Запуск головного циклу гри
        gameLoop();