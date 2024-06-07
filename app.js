let getInp = document.getElementById('inp');

function showCard() {
    fetch(`https://api.github.com/users/${getInp.value}`)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            let getDiv = document.querySelector('#showProfile');
            getDiv.innerHTML += `
                <div class="card">
                    <img src="${data.avatar_url}" class="card-img-top" alt="${data.name}">
                    <div class="card-body">
                        <h3 class="card-title">${data.name}</h3>
                        <p class="card-text">${data.bio}</p>
                        <a href="${data.html_url}" class="btn btn-primary">Go To Profile</a>
                    </div>
                        <p class="list-group-item"><a href="https://api.github.com/users/${getInp.value}/followers">Followers</a>: ${data.followers}</p>
                        <p class="list-group-item"><a href="https://api.github.com/users/${getInp.value}/following">Following</a>: ${data.following}</p>
                </div>`;
        })
        .catch(function (err) {
            console.log(err);
        });
}