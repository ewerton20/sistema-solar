const planets = document.querySelectorAll('.planet');

const planetData = [
    { name: 'mercury', speed: 39, distance: 90 },
    { name: 'venus', speed: 39.8, distance: 130 },
    { name: 'earth', speed: 399, distance: 160 },
    { name: 'mars', speed: 499.2, distance: 190 },
    { name: 'jupiter', speed: 399.9, distance: 230 },
    { name: 'saturn', speed: 499.9, distance: 260 },
    { name: 'uranus', speed: 599.5, distance: 300 },
    { name: 'neptune', speed: 799, distance: 330 },
];

function animatePlanets() {
    const currentTime = new Date().getTime();

    planetData.forEach(planet => {
        const { name, speed, distance } = planet;
        const element = document.getElementById(name);

        const angle = (currentTime / speed) % 360;
        const x = Math.cos((angle * Math.PI) / 180) * distance;
        const y = Math.sin((angle * Math.PI) / 180) * distance;

        // Posições relativas ao centro do Sol (que está no centro da janela)
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        element.style.left = `${centerX + x}px`;
        element.style.top = `${centerY + y}px`;
    });

    requestAnimationFrame(animatePlanets);
}
animatePlanets();

function updatePlanetTrails() {
    planetData.forEach(planet => {
        const { name } = planet;
        const planetElement = document.getElementById(name);
        const trailElement = document.getElementById(`${name}-trail`);

        if (trailElement) {
            // Atualize a posição da trilha com base na posição do planeta
            const planetRect = planetElement.getBoundingClientRect();
            trailElement.style.left = planetRect.left + planetRect.width / 2 + 'px';
            trailElement.style.top = planetRect.top + planetRect.height / 2 + 'px';
        }
    });
}

// Chame a função para criar ou atualizar as trilhas dos planetas
updatePlanetTrails();

// Adicione um intervalo para atualizar as trilhas periodicamente (ajuste conforme necessário)
setInterval(updatePlanetTrails, 100); // Atualiza a cada 100 milissegundos