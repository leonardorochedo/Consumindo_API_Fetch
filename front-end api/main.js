const url = "http://localhost:5500/api"

// GET 
function getUsers() {
    fetch(url)
    .then(response => response.json()) // Promisses igual com o axios
    .then(data => renderApiResult.textContent = JSON.stringify(data)) // Data é a resposta do response e colocamos ela no front com textContent = a data em JSON
    .catch(error => console.log(error)) // Caso der erro
}

// GET com parâmetros para o front-end
function getUser(num) {
    fetch(`${url}/${num}`) // Link da api entrando no usuario especifico que seria o 1
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name; // Adicionando o nome do usuario no id userName
        userCity.textContent = data.city; // Adicionando a cidade do usuario no id userCity
        userAvatar.src = data.avatar; // E por ultimo adicionaando o avatar com o .src
    })
    .catch(error => console.log(error))
}

// POST adicionando um usuario na API
function addUser(newUser) {
    fetch(url, {
        method: "POST", // Por padrão precisa falar qual requisição vc vai fazer, nao falei em cima pois o GET é o padrão do fetch
        body: JSON.stringify(newUser), // Passando o newUser para o body formatado em JSON
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
}

// PUT
function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT", // Editar dados
        body: JSON.stringify(updatedUser), // JSON stringfy para virar modelo em JSON
        header: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.log(error))
}

// Usuario do POST
const newUser = {
    name: "Leonardo Rochedo",
    avatar: "https://avatars.githubusercontent.com/u/62243365?v=4",
    city: "Tamarana"
}

// Usuario para alterar do PUT
const updatedUser = {
    name: "Marcelo Clovis",
    avatar: "https://picsum.photos/200/300",
    city: "Recife"
}

addUser(newUser)
getUsers()
getUser(1) // Rodar com o id do user, por padrão vou deixar 1
updateUser(updatedUser, 2)
deleteUser(1)