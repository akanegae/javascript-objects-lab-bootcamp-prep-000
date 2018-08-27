//1
var recipes = new Object();

//2
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, {[key]: value})
}

//3
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return obj;
}
