
// where my ahbjkts @
var pineTraits = {
	height: 8,
	character: '8'
}

// show me whatcha workin for
var submitButton = document.getElementById('submit');
submitButton.addEventListener("click", tree);

// all the funkshuns be like
function tree(treeTraits) {

	var spaces = ' ';
	var char = document.getElementById('char').value;
	var numSpaces = document.getElementById('height').value - 1;
	for (var i = 0; i < numSpaces; i++) {
		console.log(spaces.repeat(numSpaces - i), char.repeat(2*i + 1));
	}
}
