function modositas(event) {
    event.preventDefault();

    const id = document.querySelector('#hidden').value;
    const nev = document.querySelector('#nev').value;
    const tipus = document.querySelector('#tipus').value;
    const ar = document.querySelector('#ar').value;
    const kepekTextarea = document.querySelector('#kepek').value;

    const kepek = kepekTextarea.split('\n');

    const modosit = async () => {
        try {
            const response = await fetch(`/egyedikocsi/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nev, tipus, ar, kepek }),
            });

            if (response.ok) {
                window.alert('Sikeres módosítás!');
                window.location.href = '/kocsik';
            } else {
                throw new Error();
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    modosit();
}
