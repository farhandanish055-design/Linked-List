const LinkedList = require("./linkedlist");

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
// ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null

console.log("Size:", list.size());
console.log("Head:", list.head());
console.log("Tail:", list.tail());

console.log("Index 2:", list.at(2));
console.log("Contains cat:", list.contains("cat"));
console.log("Find snake:", list.findIndex("snake"));

list.insertAt(1, "lion", "tiger");
console.log(list.toString());

list.removeAt(2);
console.log(list.toString());

list.pop();
console.log(list.toString());