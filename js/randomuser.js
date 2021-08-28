const userButton = () => {
    fetch('https://randomuser.me/api/?results=500')
        .then(res => res.json())
        .then(data => loadData(data.results[0]))
}

const loadData = (user) => {
    console.log(user)
    const userParrent = document.getElementById('random-user');
    userParrent.textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="text-center"><img class="rounded-circle" src="${user.picture.medium}" alt=""></div>
        <h2 class="text-center">My name is</h2>
        <h2 class="text-center text-info"> ${user.name.first} ${user.name.last}</h2>  
        <h4 class="text-center">City: ${user.location.city}</h4>
        <h4 class="text-center">State: ${user.location.state}</h4>
        <h4 class="text-center">Country: ${user.location.country}</h4>
        <h4 class="text-center">Postcode: ${user.location.postcode}</h4>
    `;
    userParrent.appendChild(div);
}