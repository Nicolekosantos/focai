let resultType = "";

function calculateResult() {
    const desatenção = document.querySelectorAll('input[name="desatenção"]:checked').length;
    const hiperatividade = document.querySelectorAll('input[name="hiperatividade"]:checked').length;

    let resultText = "";
    let bgColor = "";

    if (desatenção >= 3 && hiperatividade < 3) {
        resultText = "Subtipo: Desatento- O azul é frequentemente associado à calma, serenidade e foco. Usar azul claro pode transmitir uma sensação de tranquilidade e concentração, que é relevante para um subtipo onde a dificuldade de manter a atenção é a principal característica.";
        bgColor = "lightblue";
        resultType = "desatento";
    } else if (hiperatividade >= 3 && desatenção < 3) {
        resultText = "Subtipo: Hiperativo/Impulsivo- A cor coral é vibrante e energética, representando bem a hiperatividade e a impulsividade. Tons de coral ou vermelho são frequentemente associados a excitação, energia e ação, que correspondem aos comportamentos observados nesse subtipo de TDAH.";
        bgColor = "lightcoral";
        resultType = "hiperativo";
    } else if (desatenção >= 3 && hiperatividade >= 3) {
        resultText = "Subtipo: Combinado- O verde é frequentemente associado ao equilíbrio e harmonia. Verde claro pode transmitir uma sensação de frescor e tranquilidade. No contexto do subtipo combinado, ele pode simbolizar a necessidade de encontrar um equilíbrio entre a desatenção e a hiperatividade/impulsividade.";
        bgColor = "lightgreen";
        resultType = "combinado";
    } else {
        resultText = "Nenhum subtipo identificado";
        bgColor = "white";
        resultType = "";
    }

    document.body.style.backgroundColor = bgColor;
    document.getElementById('result').innerText = resultText;

    // Mostrar o botão de cadastre-se se um subtipo for identificado
    const registerButton = document.getElementById('register');
    if (resultType) {
        registerButton.style.display = 'block';
    } else {
        registerButton.style.display = 'none';
    }
}

function redirectUser() {
    if (resultType === "desatento") {
        window.location.href = "perfil-desatento.html";
    } else if (resultType === "hiperativo") {
        window.location.href = "perfil-hiperativo.html";
    } else if (resultType === "combinado") {
        window.location.href = "perfil-combinado.html";
    } else {
        alert("Nenhum subtipo identificado, por favor preencha o questionário corretamente.");
    }
}