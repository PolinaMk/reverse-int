module.exports = function reverse (num) {
   let result = '';
   num = Math.abs(num); //math.abs() - абсолютное число
   num = String(num);
   for (let i = 0; i < num.length; i++) {
     result = `${num[i]}${result}`
   };
   result = Number(result);
   return result;

}

console.log(module.exports);
