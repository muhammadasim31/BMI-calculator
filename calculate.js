const button = document.getElementById("btn");
button.addEventListener('click', function () {
    if (validation()) {
        calculate();
    }

})
function validation() {
    const age = document.getElementById("age").value;
    if (age.trim() === "") {
        alert("Please enter your age");
        return false;
    }

    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert("Please select your gender");
        return false;
    }

    const weight = document.getElementById("weight").value;
    if (weight.trim() === "") {
        alert("Please enter your weight");
        return false;
    }

    const height = document.getElementById("height").value;
    if (height.trim() === "") {
        alert("Please enter your height");
        return false;
    }

    return true;
}






function calculate() {
    const age = document.getElementById("age").value;

    const gender = document.querySelector('input[name="gender"]:checked');

    const weight = document.getElementById("weight").value;

    const height = document.getElementById("height").value;

    let result = document.getElementById("result")
    let BMI = (weight * 10000) / (height * height)
    let category
    if (BMI < 18.5) category = "Underweight"
    else if (BMI < 25) category = "Normal"
    else if (BMI < 30) category = "Overweight"
    else category = "Obese";
    result.innerHTML = `${BMI}` + "    " + category;




}