var pattern = [];
var actualColor = 0;
var patternNum = -1;
var position = 0;
var blueSound = new Audio('sounds/blue.mp3');
var greenSound = new Audio('sounds/green.mp3');
var redSound = new Audio('sounds/red.mp3');
var yellowSound = new Audio('sounds/yellow.mp3');
var wrongSound = new Audio('sounds/wrong.mp3');


$(document).keydown(function (event){
    if(patternNum === -1){
        newSequence();
        $(".btn").click(function(event){
            switch (this.attributes.item(1).value) {
                case "green":
                    if(actualColor === 1){
                        patternNum++;
                        $("#green").addClass("pressed");
                        greenSound.play();
                        setTimeout(function(){$("#green").removeClass("pressed");}, 100);
                        nextLevel();
                    } else {
                        $("body").addClass("game-over");
                        wrongSound.play();
                        setTimeout(function(){$("body").removeClass("game-over");}, 200)
                        gameOver();
                    }
                break;
                    
                case "red":
                    if(actualColor === 2){
                        patternNum++;
                        $("#red").addClass("pressed");
                        redSound.play();
                        setTimeout(function(){$("#red").removeClass("pressed");}, 100);
                        nextLevel();
                    } else {
                        $("body").addClass("game-over");
                        wrongSound.play();
                        setTimeout(function(){$("body").removeClass("game-over");}, 200)
                        gameOver();
                    }
                break;
        
                case "yellow":
                    if(actualColor === 3){
                        patternNum++;
                        $("#yellow").addClass("pressed");
                        yellowSound.play();
                        setTimeout(function(){$("#yellow").removeClass("pressed");}, 100);
                        nextLevel();
                    } else {
                        $("body").addClass("game-over");
                        wrongSound.play();
                        setTimeout(function(){$("body").removeClass("game-over");}, 200)
                        gameOver();
                    }
                break;
        
                case "blue":
                    if(actualColor === 4){
                        patternNum++;
                        $("#blue").addClass("pressed");
                        blueSound.play();
                        setTimeout(function(){$("#blue").removeClass("pressed");}, 100);
                        nextLevel();
                    } else {
                        $("body").addClass("game-over");
                        wrongSound.play();
                        setTimeout(function(){$("body").removeClass("game-over");}, 200)
                        gameOver();
                    }
                break;
            }
        });
    }     
});


function nextLevel(){
    if(patternNum === pattern.length){
        newSequence();
    } else {
        actualColor = pattern[patternNum];
    }
}

function gameOver(){
    $("h1").text("Game Over, Press Any Key to Restart");
    pattern.splice(0, pattern.length);
    $(".btn").off("click");
    patternNum = -1;
}

function newSequence(){
    var newNum = Math.floor(Math.random() * 4 + 1);
    pattern.push(newNum);
    patternNum = 0;
    setTimeout(function(){$("h1").text("Level " + pattern.length);}, 100);
    
    var timer = setInterval(showPattern, 500);
    setTimeout(function(){clearInterval(timer); position = 0;}, pattern.length * 500);
    
    actualColor = pattern[0];
}

function showPattern(){
    
    switch (pattern[position]) {
        case 1:
            $("#green").addClass("pressed");
            greenSound.play();
            setTimeout(function(){$("#green").removeClass("pressed");}, 100);
        break;
        case 2:
            $("#red").addClass("pressed");
            redSound.play();
            setTimeout(function(){$("#red").removeClass("pressed");}, 100);
        break;
        case 3:
            $("#yellow").addClass("pressed");
            yellowSound.play();
            setTimeout(function(){$("#yellow").removeClass("pressed");}, 100);
        break;
        case 4:
            $("#blue").addClass("pressed");
            blueSound.play();
            setTimeout(function(){$("#blue").removeClass("pressed");}, 100);
        break;
    }
    position++;
    
}