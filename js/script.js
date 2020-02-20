'use strict'

function col(i, j, k = 9) {
    let num = (i * j) % k;
    switch (num) {
        case 0: return '#ffffff'; 
        break;
        case 1: return '#00bfff'; 
        break;
        case 2: return 'blue'; 
        break;
        case 3: return 'yellow'; 
        break;
        case 4: return 'violet'; 
        break;
        case 5: return 'red'; 
        break;
        case 6: return '#fffacd'; 
        break;
        case 7: return '#00ffff'; 
        break;
        case 8: return 'gray'; 
        break;
        default: return "#ffffff";
    }
}
function Spec(size = 30) {
    size = size - 1
    let k = parseInt(prompt('Введите число от 2 до 9'));
    if (k < 2 || k > 9) {
        alert("неверно значение");
        return 0;
    }
    let tablece = "<table align='center' border='1' cellspacing='0'>";
    for (var y = size; y >= 0; y = y - 1) {
        tablece = tablece + "<tr>";
        for (var x = 0; x <= size; x = x + 1) {
            let color = col(y, x, k);
            tablece = tablece + "<td style='height:15px; width:15px; " + "background-color:" + color + ";'>";
        }
    }
    tablece = tablece + "<tr>";
    document.write(tablece);
}

