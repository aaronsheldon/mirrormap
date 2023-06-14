const MirrorMap = require("./index");

// Empty constructor
console.log("Empty constructor:");
console.log("");
console.log("> const x = new MirrorMap()");
const x = new MirrorMap();
console.log(x);
console.log("");

// Set key values
console.log("Set Key Values:");
console.log("");
console.log("> x.set(\"a\", 0)");
x.set("a", 0);
console.log(x);
console.log("");
console.log("> x.set(\"b\", 1)");
x.set("b", 1);
console.log(x);
console.log("")
console.log("> x.set(\"a\", 1)");
x.set("a", 1);
console.log(x);
console.log("");

// Get key values
console.log("Get Key Values:");
console.log("");
console.log("> x.get(\"a\")");
console.log(x.get("a"));
console.log("");
console.log("> x.get(\"b\")");
console.log(x.get("b"));
console.log("");
console.log("> x.get(0)");
console.log(x.get(0));
console.log("");
console.log("> x.get(1)");
console.log(x.get(1));
console.log("");

// Copy values
console.log("Copy Values:");
console.log("");
console.log("> x.copy(\"b\", \"c\")");
x.copy("b", "c");
console.log(x);
console.log("");
console.log("> x.copy(0, \"c\")");
x.copy(0, "c");
console.log(x);
console.log("");

// Move values
console.log("Move Values:");
console.log("");
console.log("> x.move(1, 2)");
x.move(1, 2);
console.log(x);
console.log("");
console.log("");
console.log("> x.move(\"b\", 2)");
x.move("b", 2);
console.log(x);
console.log("");

// Self-reference
console.log("Self Reference:");
console.log("");
console.log("> x.reflect(\"d\")");
x.reflect("d");
console.log(x);
console.log("");
console.log("> x.set(3, 3)");
x.set(3, 3);
console.log(x);
console.log("");
console.log("> x.set(\"c\", \"c\")");
x.set("c", "c");
console.log(x);
console.log("");

// Delete key
console.log("Delete Key:");
console.log("");
console.log("> x.delete(2)");
x.delete(2);
console.log(x);
console.log("");
console.log("> x.delete(\"a\")");
x.delete("a");
console.log(x);
console.log("");
console.log("> x.dissect(\"c\")");
x.dissect("c");
console.log(x);
console.log("");
console.log("> x.dissect(\"d\")");
x.dissect("d");
console.log(x);
console.log("");
console.log("> x.delete(3)");
x.delete(3);
console.log(x);
console.log("");

// Iterable constructor
console.log("Iterable Constructor:");
console.log("");
console.log("> const y = new MirrorMap([ [ \"a\", 0 ], [ \"b\", 1 ], [ \"a\", 1 ], [ 2, 2 ], [ 2, 1 ], [ 1, 2 ] ])");
const y = new MirrorMap([ [ "a", 0 ], [ "b", 1 ], [ "a", 1 ], [ 2, 2], [ 2, 1 ], [ 1, 2 ] ]);
console.log(y);
console.log("");

// Clear entries
console.log("Clear Entries:");
console.log("");
console.log("> y.clear()");
y.clear();
console.log(y);

