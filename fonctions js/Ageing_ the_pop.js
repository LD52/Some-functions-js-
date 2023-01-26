function afterNYears(names, n) {
	for ( var i in names){
		names[i]= names[i] + Math.abs(n);
	} return names;
}