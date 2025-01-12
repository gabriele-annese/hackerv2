window.onload = function() {
    const promptElement = document.getElementById("prompt");
    const targetText = "root@malware-ops:~$"; // La stringa da indovinare
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@.-_$"; // Possibili caratteri
    let currentText = "";
    let index = 0;

    // Funzione per simulare il brute force
    function bruteForce() {
      if (index < targetText.length) {
        let randomText = "";
        // Generiamo una stringa casuale per ogni carattere mancante
        for (let i = 0; i <= index; i++) {
          if (targetText.charAt(i) !== randomText[i]) {
            // Aggiungi caratteri casuali fino a che non corrispondono al carattere corretto
            randomText += characters.charAt(Math.floor(Math.random() * characters.length));
          } else {
            // Se il carattere è giusto, lascia il carattere corretto
            randomText += targetText.charAt(i);
          }
        }
        promptElement.textContent = randomText; // Mostra il testo aggiornato
        index++;
        setTimeout(bruteForce, 80); // Continuare con un ritardo
      } else {
        // Quando la stringa è completa, mostra la stringa giusta
        promptElement.innerHTML = `<a href="https://gabriele-annese.github.io/MalwareOpsBlog/">root@malware-ops:~$</a>`;
      }
    }

    bruteForce(); // Avvia l'effetto brute force
  };