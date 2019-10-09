module.exports = function makeExchange(x) {
  let fractional = 0;
  let cents = x;
  let object = {};
  let er = {};

  if (cents <= 0) {
    return {};
  }
  if (cents >= 10000) {
    er.error = "You are rich, my friend! We don't have so much coins for exchange";
    return er;
  }

  if (cents >= 50) {
    object.H = Math.floor(cents / 50);
    fractional = cents % 50;
  }
  else {
    fractional = cents;
  }

  if (fractional >= 25) {
    object.Q = Math.floor(fractional / 25);
    fractional = fractional % 25;
  }

  if (fractional >= 10) {
    object.D = Math.floor(fractional / 10);
    fractional = fractional % 10;
  }

  if (fractional >= 5) {
    object.N = Math.floor(fractional / 5);
    fractional = fractional % 5;
  }

  switch (fractional) {
    case 4:
      object.P = 4;
      break;
    case 3:
      object.P = 3;
      break;
    case 2:
      object.P = 2;
      break;
    case 1:
      object.P = 1;
  }

return object;
}
