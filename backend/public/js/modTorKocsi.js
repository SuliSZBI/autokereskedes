function modosit(id) {
    window.location.href = `/egyedikocsi/${id}`;
}

function torol(id) {
    const torles = async () => {
        try {
            const response = await fetch(`/kocsik/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                window.alert('Sikeres törlés!');
                window.location.href = '/kocsik';
            } else {
                throw new Error();
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    torles();
}
