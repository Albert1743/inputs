let inputs = document.querySelectorAll('.main-input, .not-main-input');
let error = true



function saveChanges() {
    let user = {}

    inputs.forEach(input => {
        if (input.classList.contains('main-input') && !input.value.trim()) {
            error = false
            input.classList.add('error')
        } else {
            input.classList.remove('error')
        }
    });

    if (error) {
        inputs.forEach(input => {
            user[input.name] = input.value
        });
        console.log(user);
    } else {
        console.log('Zapolni polya!');
    }
}