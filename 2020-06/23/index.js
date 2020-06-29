function foo() {
  console.log(length)
}

function bar() {
  var length = "嘻嘻嘻";
  foo();
}

bar()