
var markFam = {
	bills: [77, 375, 110, 45],
	markTips: [],
	markTotals: [],
	tipCalc: function() {
		
		for (var i = 0; i < this.bills.length; i++) {
			var bill = this.bills[i];
			if (bill < 100) {
				var tip = bill * .2;
				this.markTips.push(tip);
				this.markTotals.push(tip + bill);
			} else if (bill >= 100 && bill < 300){
				var tip = bill * .10;
				this.markTips.push(tip);
				this.markTotals.push(tip + bill);
			} else {
				var tip = bill * .25;
				this.markTips.push(tip);
				this.markTotals.push(tip + bill);
			}
		}
		console.log(this.markTips, this.markTotals);
	}
}


var johnFam = {
	bills: [124, 48, 268, 180, 42],
	tipCalc: function() {
		// Refactored version
		this.johnTips = [];
		this.johnTotals = [];
	
		for (var i = 0; i < this.bills.length; i++) {
			var bill = this.bills[i];
			var percent;
			
			if (bill < 50) {
				percent = .2;
			} else if (bill >= 50 && bill < 200){
				percent = .15;
			} else {
				percent = .10;
			}
			this.johnTips[i] = bill * percent;
			this.johnTotals[i] = bill + bill * percent;
		}
		console.log(this.johnTips, this.johnTotals);
	}
}

var aveTips = function(famBills) {
	var currentSum = 0;
	for (var i = 0; i < famBills.length; i++) {
		currentSum = currentSum + famBills[i];
	}
	return currentSum / famBills.length;
}
johnFam.tipCalc();
markFam.tipCalc();

johnFam.average = aveTips(johnFam.johnTips);
markFam.average = aveTips(markFam.markTips);

if (johnFam.average > markFam.average) {
	console.log('John has the highest average');
} else if (markFam.average > johnFam.average) {
	console.log('Mark has the highest average');
} else {
	console.log('they have the same average');
}























