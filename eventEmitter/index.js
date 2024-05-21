const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myEmitter = new Emitter();

myEmitter.on("foo", () => {
  console.log("\nFOO Event Ocurred");
});

myEmitter.on("foo", () => {
  console.log("FOO Event Ocurred");
});

myEmitter.on("foo", (X = "Hello world!") => {
  console.log("FOO Event WITH PARAMETER Ocurred\n", X);
});

myEmitter.on("bar", () => {
  console.log("A bar event ocurred.");
});

myEmitter.emit("foo");
myEmitter.emit("foo", "Olá, Mundo!");

myEmitter.emit("bar");
