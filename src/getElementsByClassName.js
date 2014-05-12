// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentNode){
  // your code here
  //If no currentNode specified,currentNode = document.body;
	var results = [];
	if (!currentNode){
		currentNode = document.body;
	}
	//check the nodes' classlist and if it contains className, push that node to results
	var checkNode = function(node){
	if(node.classList){
		if (node.classList.contains(className)){
			results.push(node);
		}
		//If it has child nodes, call checkNode on each child
		if (node.hasChildNodes){
			_.each(node.childNodes, checkNode);
		}
	}
	};
  checkNode(currentNode);
  return results;
};
