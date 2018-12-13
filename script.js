
var johnFam = {
	bills: [124, 48, 268, 180, 42],
	tipCalc: function() {
		var allTips = [];
		var totalAmounts = [];
		var bills = johnFam.bills;
		for (var i = 0; i < bills.length; i++) {
			if (bills[i] < 50) {
				var tip = bills[i] * .2;
				allTips.push(tip);
				totalAmounts.push(tip + bills[i]);
			} else if (bills[i] >= 50 && bills[i] < 200){
				var tip = bills[i] * .15;
				allTips.push(tip);
				totalAmounts.push(tip + bills[i]);
			} else {
				var tip = bills[i] * .10;
				allTips.push(tip);
				totalAmounts.push(tip + bills[i]);
			}
		}
		console.log(allTips, totalAmounts);
	}
}

johnFam.tipCalc();