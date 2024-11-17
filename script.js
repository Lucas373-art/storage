const modal = document.getElementById("modal");
const loginButton = document.getElementById("loginButton");
const closeModalButton = document.getElementById("closeModal");
const form = document.getElementById("registrationForm");


loginButton.addEventListener("click", () => {
    modal.style.display = "flex"; 
});


closeModalButton.addEventListener("click", () => {
    modal.style.display = "none"; 
});


window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none"; 
    }
});


form.addEventListener("submit", (event) => {
    event.preventDefault();

    const user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("telefone").value,
        cpf: document.getElementById("cpf").value,
        password: document.getElementById("senha").value,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Seu cadastro foi realizado!");

    modal.style.display = "none"; 
    window.location.href = "profile.html"; 
});
function mascara_telefone() {
    const tel = document.getElementById("telefone").value;
    
    
if (tel[0] != "(") {
    if (tel[0] != undefined) {
        document.getElementById("telefone").value = "(" + tel.slice(0, 2);
    }
}

if (tel[3] != ")") {
    if (tel[3] != undefined) {
        document.getElementById("telefone").value = tel.slice(0, 3) + ") " + tel[3];
    }
}

if (tel[9] != "-") {
    if (tel[9] != undefined) {
        document.getElementById("telefone").value = tel.slice(0, 9) + "-" + tel[9];
    }
}
}
function mascara_cpf() {
    let cpf = document.getElementById("cpf").value;


    if (cpf.length > 14) {
        cpf = cpf.slice(0, 14);
    }

    
    if (cpf.length > 3 && cpf[3] !== ".") {
        cpf = cpf.slice(0, 3) + "." + cpf.slice(3);
    }

    if (cpf.length > 7 && cpf[7] !== ".") {
        cpf = cpf.slice(0, 7) + "." + cpf.slice(7);
    }

    if (cpf.length > 11 && cpf[11] !== "-") {
        cpf = cpf.slice(0, 11) + "-" + cpf.slice(11);
    }

    document.getElementById("cpf").value = cpf;
}