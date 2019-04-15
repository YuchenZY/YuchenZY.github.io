window.onload = function() {
    var ifcheck = false; //identify whether the card clicked is the first card or the second card
    var firstImage; //Used to store the first card
    var secondImage; //Used to store the second card
    var level = 0; //Illustrate game level
    var correctToPass = 2; //How many pairs of cards should the user find to pass the current level?
    var points = 0; //Score
    var timeLeft = 60;
    var canPlay = true; //Whether the user still have time to play the game
    var timeBarWidth = 550;

    //For every second, the timeleft minus 1 and timeBarWidth minus 9
    function timeCount (){
        if(timeLeft >= 0){
            document.getElementsByClassName("game-timer__bar")[0].innerHTML = timeLeft;
            timeBarWidth -= 9;
            document.getElementsByClassName("game-timer__bar")[0].style.width = timeBarWidth + "px";
            timeLeft--;
            setTimeout(timeCount, 1000)
        }
        else{
            alert("Your score is " + points);
            canPlay = false;
            return;
        }
    }

    /*
        click function for "start game" button
        if the game has not been started before, enter into level 1
        if not, restart the game after telling the user his/her score
     */
    document.getElementsByClassName("game-stats__button")[0].onclick = function () {
        if(level == 0){
            document.getElementsByClassName("game-instruction")[0].style.display = "none";
            document.getElementsByClassName("game_level_1")[0].style.display = "block";
            level += 1;
            timeLeft = 60;
            timeBarWidth = 550;
            timeCount();
        }
        else{
            alert("Your score is " + points);
            document.location.href = "index.html";
        }
    }

    /*
        if the timeleft is larger than 0, the card will have some reactions
             if this is the first card, record it; if it is the second card, compare it with the first card
                if the two cards' classname are the same, add score for the user, correctToPass --; if not the same, revert the two cards
                    if correctToPass is larger than 0 at this time, the game will continue; if not, enter into the next level
         parameter "e" is the demo which represent the card which is clicked in HTML
     */
    function onclickImage (e){
        if(canPlay == true){
            if(ifcheck == false){
                firstImage = e;
                ifcheck = true;
                firstImage.style.transform = "rotateY(180deg)";
                firstImage.nextElementSibling.style.transform = "rotateX(0deg)";
                setTimeout(function () {
                    firstImage.style.display = "none";
                    firstImage.nextElementSibling.style.display = "block";
                }, 321);
            }
            else{
                document.getElementById("layer_unseen").style.display = "block";
                secondImage = e;
                ifcheck = false;
                secondImage.style.transform = "rotateY(180deg)";
                firstImage.nextElementSibling.style.transform = "rotateX(0deg)";
                secondImage.nextElementSibling.style.transform = "rotateX(0deg)";
                setTimeout(function () {
                    secondImage.style.display = "none";
                    secondImage.nextElementSibling.style.display = "block";
                }, 321);
                if(secondImage == firstImage){
                    setTimeout(function () {
                        firstImage.nextElementSibling.style.transform = "rotateX(180deg)";
                        setTimeout(function () {
                            firstImage.nextElementSibling.style.display = "none";
                            firstImage.style.display = "block";
                        }, 321);
                        secondImage.nextElementSibling.style.transform = "rotateX(180deg)";
                        setTimeout(function () {
                            secondImage.nextElementSibling.style.display = "none";
                            secondImage.style.display = "block";
                        }, 321);
                        document.getElementById("layer_unseen").style.display = "none";
                        firstImage.style.transform = null;
                        secondImage.style.transform = null;
                    }, 1500);
                }
                else{
                    if(secondImage.className !== firstImage.className){
                        setTimeout(function () {
                            firstImage.nextElementSibling.style.transform = "rotateX(180deg)";
                            setTimeout(function () {
                                firstImage.nextElementSibling.style.display = "none";
                                firstImage.style.display = "block";
                            }, 321);
                            secondImage.nextElementSibling.style.transform = "rotateX(180deg)";
                            setTimeout(function () {
                                secondImage.nextElementSibling.style.display = "none";
                                secondImage.style.display = "block";
                            }, 321);
                            document.getElementById("layer_unseen").style.display = "none";
                            firstImage.style.transform = null;
                            secondImage.style.transform = null;
                        }, 1500);
                    }
                    else{
                        document.getElementById("layer_unseen").style.display = "none";
                        var pointToAdd = timeLeft * 2 * level;
                        points += pointToAdd;
                        document.getElementsByClassName("game-stats__score--value")[0].innerHTML = points;
                        correctToPass--;
                        if(correctToPass == 0){
                            setTimeout(function () {
                                document.getElementsByClassName("game_level_1")[0].style.display = "none";
                                document.getElementsByClassName("game_level_2")[0].style.display = "none";
                                document.getElementsByClassName("game_level_3")[0].style.display = "none";
                                if(level == 1){
                                    level = 2;
                                    correctToPass = 8;
                                    document.getElementsByClassName("game_level_2")[0].style.display = "block";
                                }
                                else if(level == 2){
                                    level = 3;
                                    correctToPass = 18;
                                    document.getElementsByClassName("game_level_3")[0].style.display = "block";
                                }
                                else if(level == 3){
                                    alert("Congretulations! You have passed all level!");
                                }
                                timeLeft = 60;
                                timeBarWidth = 550;
                            }, 1000);
                        }
                    }
                }
            }
        }
    }

    //setup click function for each card
    for(var i = 0; i < 99; i++){
        if(document.getElementsByClassName("front_html5")[i] != undefined){
            document.getElementsByClassName("front_html5")[i].onclick = function(){
                onclickImage(this);
            }
        }
        if(document.getElementsByClassName("front_linkedin")[i] != undefined) {
            document.getElementsByClassName("front_linkedin")[i].onclick = function () {
                onclickImage(this);
            }
        }
        if(document.getElementsByClassName("front_aws")[i] != undefined) {
            document.getElementsByClassName("front_aws")[i].onclick = function () {
                onclickImage(this);
            }
        }
        if(document.getElementsByClassName("front_css3")[i] != undefined) {
            document.getElementsByClassName("front_css3")[i].onclick = function () {
                onclickImage(this);
            }
        }
        if(document.getElementsByClassName("front_github")[i] != undefined) {
            document.getElementsByClassName("front_github")[i].onclick = function () {
                onclickImage(this);
            }
        }
        if(document.getElementsByClassName("front_heroku")[i] != undefined) {
            document.getElementsByClassName("front_heroku")[i].onclick = function () {
                onclickImage(this);
            }
        }
        if(document.getElementsByClassName("front_js")[i] != undefined) {
            document.getElementsByClassName("front_js")[i].onclick = function () {
                onclickImage(this);
            }
        }
        if(document.getElementsByClassName("front_node")[i] != undefined) {
            document.getElementsByClassName("front_node")[i].onclick = function () {
                onclickImage(this);
            }
        }
        if(document.getElementsByClassName("front_react")[i] != undefined) {
            document.getElementsByClassName("front_react")[i].onclick = function () {
                onclickImage(this);
            }
        }
        if(document.getElementsByClassName("front_sass")[i] != undefined) {
            document.getElementsByClassName("front_sass")[i].onclick = function () {
                onclickImage(this);
            }
        }
    }
}
