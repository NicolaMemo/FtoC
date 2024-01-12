// Questa riga introduce una funzione denominata celsiusToFahrenheit che accetta
// un parametro celsius, rappresentante la temperatura in gradi Celsius da convertire.
function celsiusToFahrenheit(celsius) {

  // Qui, la temperatura in gradi Celsius passata alla funzione viene memorizzata
  // in una variabile chiamata tempCelsius per facilitare ulteriori calcoli senza
  // modificare il valore di input.
  var tempCelsius = celsius;

  // Viene eseguito il calcolo per convertire la temperatura da Celsius a
  // Fahrenheit utilizzando la formula comune.
  var celsiusToFahrenheit = tempCelsius * 9 / 5 + 32;

  // Una stringa messaggio viene creata per fornire una descrizione chiara del
  // risultato della conversione, utilizzando i valori originali e convertiti.
  var messaggio = tempCelsius + '\xB0C corrisponde a ' + celsiusToFahrenheit + ' \xB0F.';

  // Infine, il messaggio viene stampato sulla console, consentendo all'utente
  // di vedere il risultato della conversione.
  console.log(messaggio);
}
// Chiama la funzione celsiusToFahrenheit con una temperatura Celsius di 60
celsiusToFahrenheit(60);

// Il commento iniziale introduce la dichiarazione della funzione fahrenheitToCelsius,
// indicando chiaramente la sua finalità: convertire una temperatura da
// Fahrenheit a Celsius.
function fahrenheitToCelsius(fahrenheit) {

  // Viene memorizzata la temperatura di input in gradi Fahrenheit nella variabile
  // tempFahrenheit per utilizzarla successivamente nei calcoli.
  var tempFahrenheit = fahrenheit;

  // Qui viene eseguito il calcolo per convertire la temperatura da Fahrenheit a 
  // Celsius, utilizzando la formula comune.
  var fahrenheitToCelsius = (tempFahrenheit - 32) * 5 / 9;

  // Una stringa messaggio viene creata per fornire una descrizione chiara del
  // risultato della conversione, utilizzando i valori originali e convertiti.
  var messaggio = tempFahrenheit + '\xB0F corrisponde a ' + fahrenheitToCelsius + '\xB0C.';

  // Infine, il messaggio viene stampato sulla console, permettendo all'utente
  // di visualizzare il risultato della conversione.
  console.log(messaggio);
}
// Chiama la funzione fahrenheitToCelsius con una temperatura Fahrenheit di 45
fahrenheitToCelsius(45);
