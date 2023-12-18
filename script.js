const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const message = document.querySelector('#result-message')


    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = 'Please give a valid height';
        results.style.color = "red";
    }
    else if (weight === '' || weight <= 0 || isNaN(weight)) {
        results.innerHTML = 'Please give a valid weight';
        results.style.color = "red";
    }
    else {
        let result = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = result
        results.style.color = "green";
        message.style.color = "green";
        if (result < 18.6) {
            message.innerHTML = "You are Under Weight"
        }
        else if (result < 24.9) {
            message.innerHTML = "You have normal weight"
        }
        else {
            message.innerHTML = "You are Over Weight"
        }
    }

});









