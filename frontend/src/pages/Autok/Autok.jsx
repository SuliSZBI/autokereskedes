import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';

const Autok = () => {
    const [cars, setCars] = useState([]);
    const [szurok, setSzurok] = useState([]);
    const [arszuro, setArszuro] = useState(100000000000);

    useEffect(() => {
        const autokLeker = async () => {
            try {
                const response = await fetch('http://localhost:5000/autok');

                if (response.ok) {
                    const adatok = await response.json();
                    let duduk = adatok.autok;

                    if (szurok.length === 0) {
                        duduk = duduk.filter(
                            (elem) => elem.ar <= Number(arszuro)
                        );
                        setCars(duduk);
                    } else {
                        duduk = duduk.filter(
                            (elem) => elem.ar <= Number(arszuro)
                        );
                        duduk = duduk.filter((elem) => {
                            let ertek = false;
                            for (let i = 0; i < szurok.length; i++) {
                                ertek ||= elem.tipus === szurok[i];
                            }

                            return ertek;
                        });

                        setCars(duduk);
                    }
                }
            } catch (error) {
                console.log(error.message);
            }
        };

        autokLeker();
    }, [szurok, arszuro]);

    function valogat(ertek) {
        if (!szurok.includes(ertek)) {
            setSzurok([...szurok, ertek]);
        } else {
            setSzurok(szurok.filter((elem) => elem !== ertek));
        }
    }

    let szamlalo = 0;

    function felfed() {
        const autokBalBelso = document.querySelector('.autok-bal-belso');
        const autokMainContainer = document.querySelector(
            '.autok-main-container'
        );
        const autokJobbBelso = document.querySelector('.autok-jobb-belso');

        if (szamlalo % 2 === 0) {
            autokBalBelso.classList.add('flex-stilus');
            autokBalBelso.classList.remove('none-stilus');
            autokMainContainer.style.paddingTop = '400px';
            autokJobbBelso.classList.add('flex-stilus');
            autokJobbBelso.classList.remove('none-stilus');
        } else {
            autokBalBelso.classList.add('none-stilus');
            autokBalBelso.classList.remove('flex-stilus');
            autokMainContainer.style.paddingTop = '0px';
            autokJobbBelso.classList.add('none-stilus');
            autokJobbBelso.classList.remove('flex-stilus');
        }

        szamlalo++;
    }

    function megtekint(id) {
        window.location.href = `/egyediauto/${id}`;
    }

    return (
        <>
            <Navbar aktiv="Autok" />
            <div className="autok-container">
                <span
                    className="material-symbols-outlined szuro"
                    onClick={felfed}
                >
                    filter_alt
                </span>
                <div className="autok-bal-container">
                    <div className="autok-bal-belso">
                        <h3>Árkategóriák</h3>
                        <div className="marka">
                            <input
                                type="radio"
                                id="10000000000"
                                value="10000000000"
                                name="arkategoria"
                                onChange={(e) => setArszuro(e.target.value)}
                            />
                            <label htmlFor="10000000000">Nincs</label>
                        </div>
                        <div className="marka">
                            <input
                                type="radio"
                                id="100000000"
                                value="100000000"
                                name="arkategoria"
                                onChange={(e) => setArszuro(e.target.value)}
                            />
                            <label htmlFor="100000000">100.000.000-ig</label>
                        </div>
                        <div className="marka">
                            <input
                                type="radio"
                                id="200000000"
                                value="200000000"
                                name="arkategoria"
                                onChange={(e) => setArszuro(e.target.value)}
                            />
                            <label htmlFor="200000000">200.000.000-ig</label>
                        </div>
                        <div className="marka">
                            <input
                                type="radio"
                                id="300000000"
                                value="300000000"
                                name="arkategoria"
                                onChange={(e) => setArszuro(e.target.value)}
                            />
                            <label htmlFor="300000000">300.000.000-ig</label>
                        </div>
                        <div className="marka">
                            <input
                                type="radio"
                                id="400000000"
                                value="400000000"
                                name="arkategoria"
                                onChange={(e) => setArszuro(e.target.value)}
                            />
                            <label htmlFor="400000000">400.000.000-ig</label>
                        </div>
                        <div className="marka">
                            <input
                                type="radio"
                                id="500000000"
                                value="500000000"
                                name="arkategoria"
                                onChange={(e) => setArszuro(e.target.value)}
                            />
                            <label htmlFor="500000000">500.000.000-ig</label>
                        </div>
                        <div className="marka">
                            <input
                                type="radio"
                                id="600000000"
                                value="600000000"
                                name="arkategoria"
                                onChange={(e) => setArszuro(e.target.value)}
                            />
                            <label htmlFor="600000000">600.000.000-ig</label>
                        </div>
                        <div className="marka">
                            <input
                                type="radio"
                                id="700000000"
                                value="700000000"
                                name="arkategoria"
                                onChange={(e) => setArszuro(e.target.value)}
                            />
                            <label htmlFor="700000000">700.000.000-ig</label>
                        </div>
                        <div className="marka">
                            <input
                                type="radio"
                                id="800000000"
                                value="800000000"
                                name="arkategoria"
                                onChange={(e) => setArszuro(e.target.value)}
                            />
                            <label htmlFor="800000000">800.000.000-ig</label>
                        </div>
                        <div className="marka">
                            <input
                                type="radio"
                                id="900000000"
                                value="900000000"
                                name="arkategoria"
                                onChange={(e) => setArszuro(e.target.value)}
                            />
                            <label htmlFor="900000000">900.000.000-ig</label>
                        </div>
                        <div className="marka">
                            <input
                                type="radio"
                                id="1000000000"
                                value="1000000000"
                                name="arkategoria"
                                onChange={(e) => setArszuro(e.target.value)}
                            />
                            <label htmlFor="1000000000">1.000.000.000-ig</label>
                        </div>
                    </div>
                </div>
                <div className="autok-main-container">
                    {cars.map((elem) => (
                        <div
                            className="autok-auto-container"
                            key={elem._id}
                        >
                            <h1>{elem.nev}</h1>
                            <p>Típus: {elem.tipus}</p>
                            <p>
                                Ár:
                                {new Intl.NumberFormat('de-DE').format(
                                    elem.ar
                                )}{' '}
                                Ft
                            </p>
                            <img src={`/images/${elem.kepek[0]}`} />
                            <button onClick={() => megtekint(elem._id)}>
                                Megtekint
                            </button>
                        </div>
                    ))}
                </div>
                <div className="autok-jobb-container">
                    <div className="autok-jobb-belso">
                        <h3>Márkák</h3>
                        <div className="marka">
                            <input
                                type="checkbox"
                                id="Bugatti"
                                value="Bugatti"
                                onChange={(e) => valogat(e.target.value)}
                            />
                            <label htmlFor="Bugatti">Bugatti</label>
                        </div>
                        <div className="marka">
                            <input
                                type="checkbox"
                                id="Ferrari"
                                value="Ferrari"
                                onChange={(e) => valogat(e.target.value)}
                            />
                            <label htmlFor="Ferrari">Ferrari</label>
                        </div>
                        <div className="marka">
                            <input
                                type="checkbox"
                                id="Koenigsegg"
                                value="Koenigsegg"
                                onChange={(e) => valogat(e.target.value)}
                            />
                            <label htmlFor="Koenigsegg">Koenigsegg</label>
                        </div>
                        <div className="marka">
                            <input
                                type="checkbox"
                                id="Lamborghini"
                                value="Lamborghini"
                                onChange={(e) => valogat(e.target.value)}
                            />
                            <label htmlFor="Lamborghini">Lamborghini</label>
                        </div>
                        <div className="marka">
                            <input
                                type="checkbox"
                                id="Maserati"
                                value="Maserati"
                                onChange={(e) => valogat(e.target.value)}
                            />
                            <label htmlFor="Maserati">Maserati</label>
                        </div>
                        <div className="marka">
                            <input
                                type="checkbox"
                                id="Porsche"
                                value="Porsche"
                                onChange={(e) => valogat(e.target.value)}
                            />
                            <label htmlFor="Porsche">Porsche</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Autok;
