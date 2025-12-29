document.addEventListener('DOMContentLoaded', () => {

    const artistData = [
        { name: 'Felipe Ret', Image: './assets/artista-ret.PNG' },
        { name: 'Post Malone', Image: './assets/artista-post.PNG' },
        { name: 'Travis Scott', Image: './assets/artista-scott.PNG' },
        { name: 'Orochi', Image: './assets/artista-orochi.PNG' },
        { name: 'MC IG', Image: './assets/artista-ig.PNG' },
        { name: 'Luan Santana', Image: './assets/artista-luan-santana.PNG' },
        { name: 'Jorge e Mateus', Image: './assets/artista-jorge-mateus.PNG' }
    ];

    const albunsData = [
        { name: 'Xtranho', artist: 'Matuê', image: './assets/xtranho.PNG' },
        { name: 'MNNEI', artist: 'MC IG', image: './assets/MNNEI.PNG' },
        { name: 'Vivaz', artist: 'Felipe Ret', image: './assets/vivaz.PNG' },
        { name: 'Avisa que é o Funk', artist: 'MC Hariel', image: './assets/hariel.PNG' },
        { name: 'CAOS', artist: 'Alee', image: './assets/alee.PNG' },
        { name: 'Liberdade', artist: 'Oruam', image: './assets/oruam.PNG' },
        { name: 'Nada como um dia após o outro', artist: 'Racionais MC´s', image: './assets/RACIONAIS.PNG' }
    ];

    const popularAlbuns = [
        { name: "White Noise (Sleep & Relaxation Sounds)", artist: "Sleepy John", image: "./assets/WHITE.png" },
        { name: "Manifesto Musical 2 (Ao Vivo / Vol.1)", artist: "Henrique & Juliano", image: "./assets/MANIFESTO.png" },
        { name: "MAYHEM", artist: "Lady Gaga", image: "./assets/MAYHEN.png" },
        { name: "333", artist: "Matuê", image: "./assets/333.png" },
        { name: "Bem-Vindo ao Meu Mundo", artist: "Wesley Safadão", image: "./assets/SAFADAO.png" },
        { name: "Nada Como Um Dia...", artist: "Racionais MC's", image: "./assets/RACIONAIS.png" },
        { name: "Tubarões (Ao Vivo)", artist: "Diego & Victor Hugo", image: "./assets/TUBA.png" }
    ];

    const artistsGrid = document.querySelector('.artists-grid');
    const albumsGrid = document.querySelector('.albums-grid');
    const popularGrid = document.querySelector('.popular-grid');

    // ------------------- ARTISTAS -------------------
    artistData.forEach(artist => {
        const card = document.createElement('div');
        card.classList.add('artist-card');

        card.innerHTML = `
            <div class="img-box">
                <img src="${artist.Image}">
                <div class="play-btn">
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>

            <div class="card-info">
                <h3>${artist.name}</h3>
            </div>
        `;

        artistsGrid.appendChild(card);
    });

    // ------------------- ÁLBUNS -------------------
    albunsData.forEach(album => {
        const card = document.createElement('div');
        card.classList.add('album-card');

        card.innerHTML = `
            <div class="img-box">
                <img src="${album.image}">
                <div class="play-btn">
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>

            <div class="card-info">
                <h3>${album.name}</h3>
                <p>${album.artist}</p>
            </div>
        `;

        albumsGrid.appendChild(card);
    });

    // ------------------- POPULARES -------------------
    popularAlbuns.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('album-card');

        card.innerHTML = `
            <div class="img-box">
                <img src="${item.image}">
                <div class="play-btn">
                    <i class="fa-solid fa-play"></i>
                </div>
            </div>

            <div class="card-info">
                <h3>${item.name}</h3>
                <p>${item.artist}</p>
            </div>
        `;

        popularGrid.appendChild(card);
    });

});
