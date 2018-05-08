function numberCheck(text) {
    let newText = '';
    let numbers = '0123456789.';

    for (var i = 0; i < text.length; i++) {
        if (numbers.indexOf(text[i]) > -1) {
            newText = newText + text[i];
        }
    }
    return newText; 
}