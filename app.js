        const userForm = document.getElementById('userForm');
        const userList = document.getElementById('userList');

        userForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fname = document.getElementById('fname').value;
            const lname = document.getElementById('lname').value;
            const age = document.getElementById('age').value;
            const profession = document.getElementById('profession').value;
            const gender = document.getElementById('gender').value;
            const country = document.getElementById('country').value;

            const userCard = document.createElement('div');
            userCard.classList.add('user-card');
            userCard.innerHTML = `
                <p><strong>Ism:</strong> ${fname}</p>
                <p><strong>Familiya:</strong> ${lname}</p>
                <p><strong>Yosh:</strong> ${age}</p>
                <p><strong>Kasb:</strong> ${profession}</p>
                <p><strong>Jinsi:</strong> ${gender}</p>
                <p><strong>Davlat:</strong> ${country}</p>
            `;

            userList.appendChild(userCard);
            userForm.reset();
        });