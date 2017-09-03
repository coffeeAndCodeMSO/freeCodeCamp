function permAlone(str) {
        var regex = /(.)\1+/g;
	      var arrayStr = str.split('');
      	function perm(array) {
      	        var res = [];

      		for(var i=0; i<array.length; i++){
      			var restA = array.slice(0,i).concat(array.slice(i+1));
      			var rest  = perm(restA);
      			if(rest.length === 0){
      				res.push([array[i]]);
      			} else {
      				for(var j=0; j<rest.length; j++){
      					res.push([array[i]].concat(rest[j]))
      				}
      			}
      		}
      		return res;
      	}
	     var done = perm(arrayStr);
	     var stringsArray = done.map(function(value) { return value.join('') });
        var filtered = stringsArray.filter(function(string) {
            return !string.match(regex);
        });

        return filtered.length;
}

module.exports.permAlone = permAlone;
