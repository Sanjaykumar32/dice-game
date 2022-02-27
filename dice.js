// alert('hello')
var turn = 1
var score1 = 0
var score2 = 0

document.getElementById('btn').addEventListener("click", function () {
    var rand = parseInt(Math.random() * 1000) % 6 + 1
    var img = document.getElementById("img")
    img.src = `${rand}.png`
    var box1 = document.getElementById("box1")
    var box2 = document.getElementById("box2")

    if (turn == 1) {
        score1 += rand
        box1.innerText = score1
        if (winner(score1)) {
            box1.innerText = "Player 1 is Winner"
        } else {
            turn = 2
        }

    } else {
        score2 += rand
        box2.innerText = score2
        if (winner(score2)) {
            box2.innerText = "Player 2 is Winner"
        } else {
            turn = 1
        }
    }
})

function winner(won) {
    if (won >= 25) {
        return true
    } else {
        return false
    }
}

// tic tac too

var ActivePlayer = "X"
var action = Array(9).fill(null)

function run(e, Indexbtn) {
    // console.log(e)
    var btnText = e.target.innerText
    action[Indexbtn] = ActivePlayer
    var err = document.getElementById("err")
    if (btnText != "X" && btnText != "O") {
        e.target.innerText = ActivePlayer
        // console.log(e.target.innerText)
        if (checkWinner(ActivePlayer)) {
            err.innerText = `${ActivePlayer} is winner`
            resetGame()
        } else if(isDrow()){
            err.innerText = "Game Over"
            resetGame()
        }else{
            ActivePlayer = ActivePlayer == "X" ? "O" : "X"
        }


    }
}

function isDrow(){
    return !action.includes(null)
}


function checkWinner(player) {
    var winningPos = [
        [0, 4, 8],
        [2, 4, 6],
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]

    ]
    var isWinner = false
    winningPos.forEach(function (pos) {
        if (action[pos[0]] == player && action[pos[1]] == player && action[pos[2]] == player) {
            isWinner = true
        }
    })
    return isWinner
}

function resetGame(){
    var btn = document.getElementsByTagName("button")
    // console.log(btn)
   var arrbtn = Array.from(btn)
   arrbtn.forEach(function(bt){
       bt.innerText = "?"
   })
   action = Array(9).fill(null)
}