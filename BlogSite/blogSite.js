
function addToDom(user) {
    const userName = document.createElement('div');
    userName.innerText = (`Blogger Name:  ${user.name}`);
    userName.style.padding = "8px";
    document.body.append(userName);
}

async function fetchAndPrint() {
    try {
        const response = await fetch('user.json');

        console.log('Response status:', response.status);

        if (!response.ok) {
            throw new Error(`Failed to fetch user.json. Status: ${response.status}`);
        }

        const users = await response.json();

        users.forEach(user => {
            console.log(user)
            addToDom(user);
        });
    }
    catch (error) {
        console.error('Error fetching and printing users:', error);
    }
};

