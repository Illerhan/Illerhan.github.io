document.addEventListener('DOMContentLoaded', () => {
    console.log("Portfolio chargé avec succès !");

    // Optionnel : Agrandir les images au clic dans les pages projets
    const images = document.querySelectorAll('.tech-card img');

    images.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100vw';
            overlay.style.height = '100vh';
            overlay.style.backgroundColor = 'rgba(0,0,0,0.85)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = '1000';

            const enlargedImg = document.createElement('img');
            enlargedImg.src = img.src;
            enlargedImg.style.maxWidth = '90%';
            enlargedImg.style.maxHeight = '90%';
            enlargedImg.style.borderRadius = '8px';

            overlay.appendChild(enlargedImg);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', () => {
                overlay.remove();
            });
        });
    });
});