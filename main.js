
var pineTraits = {
	height: 8,
	character: '#'
}


var submitButton = document.getElementById('submit');


function tree(treeTraits) {
	//set variables to user inputs
	// treeTraits.height = document.getElementById('height').value;
	// treeTraits.character = document.getElementById('char').value;	
	
	for (var i = 0; i < treeTraits.height; i++) {

		var branch = i*2 + 1;
		var middle = (treeTraits.height);
		var godsPlan = [];
		for (var y = 0; y < branch; y++) {
			godsPlan.push.call(godsPlan, treeTraits['character']);
		};
		console.log(godsPlan)


	}
}

tree(pineTraits);