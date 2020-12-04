
    
    document.getElementById("countButton").onclick = function() {  
        clear();
        letterCounter();
        wordsCounter(); 
    }
    
    function filterText() { 
        let typedText = document.getElementById("textInput").value;
        typedText = typedText.toLowerCase(); 
        typedText = typedText.replace(/[^a-z'\s]+/g, "");
        return typedText;
    }

    function letterCounter() {
        const letterCounts = {};

        typedText = filterText();
        
        for (let i = 0; i < typedText.length; i++) {
            let currentLetter = typedText[i];
            
            if (letterCounts[currentLetter] === undefined) {
                letterCounts[currentLetter] = 1; 
             } else { 
                letterCounts[currentLetter]++; 
             }
         }

         for (let letter in letterCounts) { 
            const span = document.createElement("span"); 
            const textContent = document.createTextNode('"' + letter + "\": "); 
            const spanNumber = document.createElement("span");
            const numberContent = document.createTextNode(letterCounts[letter] + ", ");
            span.appendChild(textContent); 
            spanNumber.style.color = '#ff8000';
            spanNumber.appendChild(numberContent);            
            document.getElementById("lettersDiv").appendChild(span); 
            document.getElementById('lettersDiv').appendChild(spanNumber);
         }
    }

    function wordsCounter() {
        const wordsCounts = {};

        typedText = filterText();
        words = typedText.split(/\s/);

        for (let i = 0; i < words.length; i++) {
            let currentWord;

            if (words[i].length > 1) {
                currentWord = words[i];

                if (wordsCounts[currentWord] === undefined) {
                    wordsCounts[currentWord] = 1; 
                 } else { 
                    wordsCounts[currentWord]++; 
                 }
                }
            }  

            for (let word in wordsCounts) { 
                const span = document.createElement("span"); 
                const spanNumber = document.createElement("span");
                const textContent = document.createTextNode('"' + word + "\": "); 
                const numberContent = document.createTextNode(wordsCounts[word] + ", ")
                span.appendChild(textContent); 
                spanNumber.style.color = '#ff8000';
                spanNumber.appendChild(numberContent);
                document.getElementById("wordsDiv").appendChild(span);
                document.getElementById("wordsDiv").appendChild(spanNumber); 
            }
    }

    function clear() {
        const divLetter = document.getElementById('lettersDiv');
        const divWords = document.getElementById('wordsDiv');

        divLetter.innerHTML = '';
        divWords.innerHTML = '';
    }