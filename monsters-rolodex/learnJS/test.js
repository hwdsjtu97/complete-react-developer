function f() {
  console.log("f", this);
  const run = () => {
    console.log(this);
    console.log(this.a);
  };
  return run;
}

var a = {
  a: 1,
  f: f,
};

var b;

// a.f()();

let A = {
  a: 1,
  f: () => {
    console.log(this);
  },
};

A.f();
