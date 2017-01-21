
// where my ahbjkts @
var pineTraits = {
	height: 8,
	character: '#'
}

// show me whatcha workin for
var submitButton = document.getElementById('submit');


// all the funkshuns be like
function tree(treeTraits) {
	var spaces = ' ';
	var char = treeTraits.character;
	var numSpaces = treeTraits.height - 1;
	for (var i = 0; i < numSpaces; i++) {
		console.log(spaces.repeat(numSpaces - i), char.repeat(1 + 2*i));
	}
}

tree(pineTraits);
