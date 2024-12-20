function feltoltes(event) {
    event.preventDefault();

    const nev = document.querySelector('#nev').value;
    const tipus = document.querySelector('#tipus').value;
    const ar = document.querySelector('#ar').value;
    const kepekTextarea = document.querySelector('#kepek').value;

    const kepek = kepekTextarea.split('\n');

    const toltes = async () => {
        const response = await fetch('/ujkocsi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nev, tipus, ar, kepek }),
        });

        if (response.ok) {
            window.alert('Sikeres feltöltés!');
            window.location.href = '/kocsik';
        }
    };

    toltes();
}
