import React, { useEffect } from 'react';

const Home = () => {
    const kocsik = [
        { tipus: 'Lamborghini', kep: '/images/lamborghini-04-1.jpg' },
        { tipus: 'Ferrari', kep: '/images/ferrari-03-1.jpg' },
        { tipus: 'Porsche', kep: '/images/porsche-01-1.jpg' },
        { tipus: 'Maserati', kep: '/images/maserati-02-1.jpg' },
        { tipus: 'Koenigsegg', kep: '/images/koenigsegg-02-1.jpg' },
        { tipus: 'Bugatti', kep: '/images/bugatti-02-1.jpg' },
    ];

    const hatterKocsik = [
        { tipus: 'Lamborghini', kep: '/images/lamborghini-04.jpg' },
        { tipus: 'Ferrari', kep: '/images/ferrari-03.jpg' },
        { tipus: 'Porsche', kep: '/images/porsche-01.jpg' },
        { tipus: 'Maserati', kep: '/images/maserati-02.jpg' },
        { tipus: 'Koenigsegg', kep: '/images/koenigsegg-02.jpg' },
        { tipus: 'Bugatti', kep: '/images/bugatti-02.jpg' },
    ];

    const kattintas = (index) => {
        let homeContainer = document.querySelector('.home-container');
        homeContainer.style.backgroundImage = `url('${hatterKocsik[index].kep}')`;
        let homeContent = document.querySelector('.home-content');
        homeContent.innerHTML = `<h1>${kocsik[index].tipus}</h1>`;
    };

    useEffect(() => {
        let homeSlider = document.querySelector('.home-slider');
        homeSlider.innerHTML = '';

        for (let i = 0; i < kocsik.length; i++) {
            let homeSliderKepTarto = document.createElement('div');
            homeSliderKepTarto.setAttribute('class', 'home-slider-kep-tarto');
            homeSliderKepTarto.style.backgroundImage = `url('${kocsik[i].kep}')`;
            homeSlider.appendChild(homeSliderKepTarto);

            homeSliderKepTarto.addEventListener('click', () => {
                kattintas(i);
            });
        }
    }, []);

    return (
        <div className="home-container">
            <div className="home-inner-container">
                <div className="home-content">
                    <h1>Lamborghini</h1>
                </div>
                <div className="home-slider"></div>
            </div>
        </div>
    );
};

export default Home;
