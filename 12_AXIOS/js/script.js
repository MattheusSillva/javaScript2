// 1 - Instalacão
console.log(axios);

// 2 - Primeiro request
const getData = async () => {
    try {
        const response = await postsFetch.get("/users", {
            headers: {
                "Content-Type": "application/json",
                custom: "header",
            }
        });
        console.log(response);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// getData();

// 3 - Imprimindo dados na tela
const container = document.querySelector('#user-container');

getData();

const printData = async () => {
    const data = await getData();

    data.forEach((user) => {
        const div = document.createElement("div");

        const nameElement = document.createElement("h2");
        
        nameElement.textContent = user.name;

        div.appendChild(nameElement);

        const emailElement = document.createElement("p");

        emailElement.textContent = user.email;

        const userName = document.createElement("p");

        userName.textContent = user.username;

        const userAdress = document.createElement("p");

        userAdress.textContent = user.address.suite
        
        div.appendChild(userAdress);

        div.appendChild(userName);

        div.appendChild(emailElement);

        container.appendChild(div);
    })
}

printData();

// 5 - Form
const form = document.querySelector("#post-form")
const titleInput = document.querySelector("#title")
const bodyInput = document.querySelector("#body")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    postsFetch.post("/posts", {
        title: titleInput.value,
        body: bodyInput.value,
        userId: 1
    })
})
