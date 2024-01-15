// import NP from "number-precision";
const NP = require("number-precision");
// export default
function calculateResultSum(purchases, discount) {
  // export default при одиночном вызове
  let total = purchases.reduce((acc, pur) => NP.plus((acc, pur)), 0);

  total = NP.times(total, discount);
  return total;
}

module.exports = calculateResultSum; // Есть еще такой вариант експорта функции
