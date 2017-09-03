function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let noms = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
    let changeArr = [];
    let total = cid.reduce(function (sum, value) {
	  return sum + value[1];
        }, 0).toFixed(2);
 
    if (total == change) {
      return "Closed";
    }
 
    if (total < change) {
      return "Insufficient Funds";
    }
  
    for (var i = cid.length - 1; i > -1; i--) {
      var value = 0;
      while (cid[i][1] > 0 && change >= noms[i]) {
        change -= noms[i];
	change = Math.round(change * 100) / 100;
	cid[i][1] -= noms[i];
	value += noms[i];
      }

      if (value > 0) {
         changeArr.push([cid[i][0], value]);
       }
     }
  
     let left = changeArr.reduce(function (sum, value) {
        return sum + value[1];
     }, 0).toFixed(2);
  
     if (left < change) {
        return "Insufficient Funds";
     }
  
  return changeArr;
  }

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
