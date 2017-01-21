
// where my ahbjkts @
var pineTraits = {
	height: 8,
	character: '#'
}

// show me whatcha workin for
var submitButton = document.getElementById('submit');


// all the funkshuns be like
function tree(treeTraits) {

	// set variables to user inputs
	// treeTraits.height = document.getElementById('height').value;
	// treeTraits.character = document.getElementById('char').value;	

	var middle = (treeTraits.height);
	var roots = middle*2 + 1;
	
	//Gaia establishes her intention
	var godsPlan = [];

	for (var why = 0; why < roots; why++) {
		godsPlan.push.call(godsPlan, treeTraits['character']);
	};
	console.log('length of loop: ', godsPlan.length)

	//grow...
	//
	//loop is set to run eight times: i'm doing things across
	//the instance of the array that I want to print to the 
	//console.
	// for (var eye = 0; eye < middle; eye++){

		//godsPlan is obviously immutable, so I tell a branch
 		//of the tree about it. The branches are different
 		//every time the loop runs.
 		var branch = godsPlan;
 		console.log(godsPlan)

 		//this loop iterates over array 'branch' and replaces
 		//the output character with empty space.
 		//
 		//first is the first half.
		for (var q = 0; q < middle - eye; q++) {
			branch[q] = ' ';
		}
		
		//second is the second half.
		for (q = middle + (eye + 1);  q < branch.length; q++) {
			branch[q] = ' ';
			// console.log(branch)
			
		}
 	// 	console.log(branch.toString());
	}
// }

tree(pineTraits);


		// var branch = godsPlan;
		// // console.log(branch)
		// //make way for the goddess
		// for (let q = 0; q < middle - eye; q++){

		// 	branch.shift();
		// 	branch.pop();
		// }
		// // console.log(branch)

		// //the goddess has her way
		// for ( q = 0; q < middle - eye; q++){

		// 	branch.push(' ');
		// 	branch.unshift(' ');
		// }
		// 