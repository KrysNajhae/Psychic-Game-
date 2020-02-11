

      
    // Here we are provided an initial array of letters.
    // Use this array to dynamically create buttons on the screen.
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];
    var numberOfguesses = 9;
    var wins = 0;
    var losses = 0;
    var letterGuesses = [];
    var letterToguess = "";
    var computerChoices = [letters]

    function updateGuesses(){
        document.getElementById("guesses_left").innerHTML = numberOfguesses
    }
    function updateLettertoguess(){
        letterToguess = Math.floor(Math.random() * letters.length);
        console.log(letterToguess)
    }
    function guessedSofar(){
        document.getElementById("guessed_so_far")
    }
    function reset(){
        updateLettertoguess()
        letterGuesses = []

    }

    updateGuesses();
    guessedSofar();
    
    document.onkeyup = function(event) {  // Determines which key was pressed.
        var letterGuessed = event.key;

        
         updateGuesses();
        
        for (let letterindex = 0; letterindex < letters.length; letterindex++) {
            const singleLetter = letters[letterindex];
            console.log(singleLetter)
            
        }

        if (letterGuessed === letters){
            wins++
            document.getElementById("win_count").innerHTML = wins

         }
         if (letterGuesses === computerChoices) {
            numberOfguesses--
            document.getElementById("loss_count").innerHTML = losses

         }
            
        if(numberOfguesses === 0){
            
            reset()
        }
        
    }

        

    