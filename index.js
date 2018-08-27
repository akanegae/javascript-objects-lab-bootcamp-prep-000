//1
var recipes = new Object();

//2
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, {[key]: value})
}

//3
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
//4
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  return newObj;
}
 //5
 function destructivelyDeleteFromObjectByKey(object, key) {
   delete[key];
   return obj;
 }
