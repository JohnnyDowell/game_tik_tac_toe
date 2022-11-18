var last = "o";
var matrix = [[,,,],[,,,],[,,,]];
function play(element){
    last = last == "o" ? "x" : "o";
    element.innerHTML = last;
    const x = element.dataset.row;
    const y = element.dataset.column;
    matrix[x][y] = last;
    checkIfWin();
}
function checkIfWin(){
    if(
        // Check vertical Wins
        [ matrix[0][0] + matrix[1][0] + matrix[2][0],
          matrix[0][1] + matrix[1][1] + matrix[2][1],
          matrix[0][2] + matrix[1][2] + matrix[2][2],
        ].includes(last.repeat(3)) |
        // Check Horizontal Wins
        [ matrix[0][0] + matrix[0][1] + matrix[0][2],
          matrix[1][0] + matrix[1][1] + matrix[1][2],
          matrix[2][0] + matrix[2][1] + matrix[2][2],
        ].includes(last.repeat(3)) |
        // Check Diagonal Wins
        [ matrix[0][0] + matrix[1][1] + matrix[2][2],
          matrix[0][2] + matrix[1][1] + matrix[2][0],
        ].includes(last.repeat(3))
    ){
        setTimeout( ()=>{
            alert("Ha ganado" + (last == "o" ? " el circulo " : " la equis "));
        },1)
    }
}
