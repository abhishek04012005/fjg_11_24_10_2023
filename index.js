



function handleClick() {


    var n = document.getElementById("userInput").value;
    let l = document.getElementById("userInput2").value;
    for (let i = 1; i <= l; i++) {

        document.getElementById("demo").innerHTML += `${n} × ${i} = ${n * i}<br>`;

    }
}





document.querySelector("#btn").addEventListener("click", function () {

    if (document.getElementById("userInput").value == 0 && document.getElementById("userInput2").value == 0) {
        alert("Please fill!");
    }
    else if (document.getElementById("userInput").value == 0) {
        alert("Please fill your Number!");
    }
    else if (document.getElementById("userInput2").value == 0) {
        alert("Please fill multiple")
    }
    else {
        document.querySelector(".multiplication").style.display = "none";
        document.querySelector(".table").style.display = "block";
        document.querySelector("h1").style.display = "none";
    }
}

);

function myHand() {
    location.reload();
}



document.querySelector("#btn2").addEventListener("click", function() {
    document.querySelector(".multiplication").style.display = "none";
    document.querySelector(".table1").style.display = "block";
    document.querySelector(".h1").style.display = "none";
})

const num = [1, 2, 3, 4, 14];
document.getElementById("demo1").innerHTML = num.filter(checkNum);
function checkNum(num) {
    return num > 3;
}

const num2 = [1, 2, 3, 4, 14];
document.getElementById("demo2").innerHTML = num2.find(checkNum2);
function checkNum2(num2) {
    return num2 > 3;
}

const num3 = [1, 2, 3, 4, 14];
document.getElementById("demo3").innerHTML = num3.map(checkNum3);
function checkNum3(num3) {
    return num3 / 2;
}



