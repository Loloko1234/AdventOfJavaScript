let percentage = 15;

document.querySelectorAll('.tip-percentages input').forEach(button => {
    button.addEventListener('click', function() {
        percentage = parseFloat(button.value.replace('%', ''));
    });
});

document.querySelector('#calculate').addEventListener('click', function() {
    let bill = parseFloat(document.querySelector('#bill-amount').value);
    let number = parseFloat(document.querySelector('#number-of-people').value);

    let tip = bill * (percentage / 100);
    let tipFormatted = tip.toFixed(2);
    let total = ((bill + tip) / number).toFixed(2);

    document.querySelector('#tip-amount').innerHTML = tipFormatted;
    document.querySelector('#total-per-person').innerHTML = total;

    console.log(percentage, bill, number, tipFormatted, total);
});