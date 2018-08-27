//1
var recipes = new Object();

//2
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, {[key]: value})
}

//3
function deleteFromObjectByKey(object, key) {
  delete object[key];
}
