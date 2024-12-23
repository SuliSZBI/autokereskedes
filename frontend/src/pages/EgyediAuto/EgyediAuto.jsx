import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';

const EgyediAuto = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});

    useEffect(() => {
        const egyediAutoContainer = document.querySelector(
            '.egyedi-auto-container'
        );
        const autoLeker = async () => {
            try {
                const response = await fetch('http://localhost:5000/autok');

                if (response.ok) {
                    const adatok = await response.json();
                    let duduk = adatok.autok;

                    const kocsi = duduk.filter((elem) => elem._id === id);

                    console.log(kocsi[0]);

                    egyediAutoContainer.style.backgroundImage = `url('/images/${kocsi[0].kepek[0]}')`;

                    let sliderContainer =
                        document.querySelector('.slider-container');
                    let kep = document.createElement('img');
                    kep.src = `/images/${kocsi[0].kepek[0]}`;

                    let i = 0;

                    setInterval(() => {
                        if (i % 4 === 0) {
                            kep.src = `/images/${kocsi[0].kepek[0]}`;
                        } else if (i % 4 === 1) {
                            kep.src = `/images/${kocsi[0].kepek[1]}`;
                        } else if (i % 4 === 2) {
                            kep.src = `/images/${kocsi[0].kepek[2]}`;
                        } else if (i % 4 === 3) {
                            kep.src = `/images/${kocsi[0].kepek[3]}`;
                        }

                        i++;
                    }, 3000);
                    sliderContainer.appendChild(kep);

                    setCar(kocsi[0]);
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        autoLeker();
    }, []);

    return (
        <>
            <Navbar aktiv="Autok" />
            <div className="egyedi-auto-container">
                <h1>{car.nev}</h1>
                <h3>Típus: {car.tipus}</h3>
                <p>Ár: {new Intl.NumberFormat('de-DE').format(car.ar)} Ft</p>
                <div className="slider-container"></div>
                <button>Vásárlás</button>
            </div>
        </>
    );
};

export default EgyediAuto;
