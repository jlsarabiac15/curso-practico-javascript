// const ladoCuadrado = 5;

function perimetroCuadrado(lado) {
    return lado*4;
}

function areaCuadrado(lado) {
    return lado*lado;
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert (perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("ladoCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert (area);
}


