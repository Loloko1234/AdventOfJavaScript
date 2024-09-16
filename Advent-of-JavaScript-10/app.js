let inputs = document.querySelectorAll('input[type="text"]');
for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function(e) {
        if(this.value.length === this.maxLength) {
            if(i + 1 < inputs.length) {
                inputs[i + 1].focus();
            }
        } else if((e.key === 'Backspace' ) && this.value.length === 0) {
            if(i - 1 >= 0) {
                inputs[i - 1].focus();
            }
        }
    });
    inputs[i].addEventListener('paste', function(e) {
        e.preventDefault();
        let pasteData = e.clipboardData.getData('text');
        console.log(pasteData);
        for(let j = 0; j < pasteData.length; j++) {
            if(i + j < inputs.length) {
                inputs[i + j].value = pasteData[j];
            }
        }
    });
} 
let code = '';
document.querySelector("button").addEventListener('click', function(e) {
    e.preventDefault();
    for(let i = 0; i < inputs.length; i++) {
        code += inputs[i].value;
    }
    if(code === '1234') {
        alert('Correct code!');
    } else {
        alert('Wrong code!');
    }
});