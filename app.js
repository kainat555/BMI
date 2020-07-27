function calculate() {
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;
    let value = document.querySelector("#value").value;
    height = height /  3.281;
    let formula = (weight / (Math.pow(height, 2)));

    document.querySelector("#value").value = formula.toFixed(2);
}