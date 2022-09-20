const buttonCalculate = document.querySelector('.btn-calculate')
buttonCalculate.addEventListener('click', calculateAmount)

function calculateAmount(e) {
    e.preventDefault()
    const bill = document.querySelector('.bill').value
    const people = document.querySelector('.people').value
    const addTips = document.querySelector('#tip').value

    if (bill === "" || people === "" || people < 1) {
        Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Please enter your information!'
        })
    }
    else if (isNaN(bill, people)) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
        text: 'Please enter your correct information!'
        }) 
    }

    let amountPerPerson = bill / people
    let tipPerPerson = (bill * addTips) / people
    let totalSum = amountPerPerson + tipPerPerson

    amountPerPerson = amountPerPerson.toFixed(2)
    tipPerPerson = tipPerPerson.toFixed(2)
    totalSum = totalSum.toFixed(2)

    document.querySelector("#dividedBill").textContent = amountPerPerson;
    document.querySelector("#dividedTip").textContent = tipPerPerson;
    document.querySelector("#billAndTip").textContent = totalSum;
}