function rollDice() {
    var img1 = document.querySelector(".img1");
    var img2 = document.querySelector(".img2");
    
    img1.classList.add("rolling");
    img2.classList.add("rolling");
    
    setTimeout(function() {
      img1.classList.remove("rolling");
      img2.classList.remove("rolling");
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      var randomNumber2 = Math.floor(Math.random() * 6) + 1;
      var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
      var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
  
      img1.setAttribute("src", randomDiceImage1);
      img2.setAttribute("src", randomDiceImage2);
      var resultText = document.querySelector("h1");
      if (randomNumber1 > randomNumber2) {
        resultText.innerHTML = "Player 1 wins! 🚩";
      } else if (randomNumber1 < randomNumber2) {
        resultText.innerHTML = "Player 2 wins! 🚩";
      } else {
        resultText.innerHTML = "Match Draw!";
      }
    }, 500);
  }
  