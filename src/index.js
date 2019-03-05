module.exports = function getZerosCount(number, base) {
  var bases = [];

      for (i=2; i < base;){
          if(base % i == 0){
            bases.push(i);
            base /= i;
            }
          else {
            i++;
            }
        }
      
      bases.push(base);

      var solve = Infinity;

      while(bases.length > 0) {
        var x = bases[0];
        var y = bases.filter(item => item === x).length;
        
        var numberR = number;
        var zeros = 0;
        while (Math.floor(numberR) > 0) {
          numberR /= x;
          zeros += Math.floor(numberR);
        }

        zeros /= y;

        if (zeros < solve) {
          solve = Math.floor(zeros);
        }

        bases = bases.filter(element => element !== x);

      }
     return solve;
    }
