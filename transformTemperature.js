function celsiusToFahrenheit(C, accuracy) {
  let F = (parseFloat(C) * 9) / 5 + 32;
  F = F.toFixed(accuracy);

  return F;
}

function celsiusToKelvin(C, accuracy) {
  let K = parseFloat(C) + 273.15;
  K = K.toFixed(accuracy);

  return K;
}

function kelvinToCelsius(K, accuracy) {
  let C = parseFloat(K) - 273.15;
  C = C.toFixed(accuracy);

  return C;
}

function kelvinToFahrenheit(K, accuracy) {
  let F = (parseFloat(K) * 9) / 5 - 459.67;
  F = F.toFixed(accuracy);

  return F;
}

function fahrenheitToCelsius(F, accuracy) {
  let C = ((parseFloat(F) - 32) * 5) / 9;
  C = C.toFixed(accuracy);

  return C;
}

function fahrenheitToKelvin(F, accuracy) {
  let K = ((parseFloat(F) + 459.67) * 5) / 9;
  K = K.toFixed(accuracy);

  return K;
}
