const form = document.forms.signup
const inputs = form.querySelectorAll('input')
const errorcurr = document.querySelector('#errorcurr')
const errortotal = document.querySelector('#errortotal')
let countError = 0


form.onsubmit = (event) => {
    event.preventDefault()
    let error = false

    inputs.forEach(inp => {
        let isRequired = inp.parentNode.classList.contains('req')

        if (isRequired === true && inp.value.length === 0) {
            countError++
            error = true
            inp.parentNode.classList.add('error')
        } else {
            inp.parentNode.classList.remove('error')
        }
    })

    
    if (error === true) {
        alert('Error fill all fields!')
        return
    }

    submit(event.target)
}


function submit(form) {
    const fm = new FormData(form)
    const user = {}

    fm.forEach((val, key) => user[key] = val)

    console.log(user);

}

