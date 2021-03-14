



1. ```.then(value => value + "!")``` .then() method will wrap the result inside of a resolve promise that way we can chain .then() on it with the result value.

2. this in function

   一般函数的this 根据其运行环境决定指向

   1. 普通的函数调用this指向全局变量(window, global object)

      ```js
      func test() {
      	this.a = 1;
      	clg(this) // window
      }
      test()
      ```

   2. 对象的函数调用，this指向调用者

      ```javascript
      var obj = {
      	a: 10,
      	test: function() {
      		clg(this); // obj
      		clg(this.a); // 10
      	}
      }
      obj.test() //
      ```

      如果把调用甩出来：相当于普通的函数调用

      ```
      var res = obj.test
      res() // window
       			// undefined
      ```

   3. 绑定this，使用call, apply, bind能把函数的this强制绑定

   4. new 关键字使得 this指向构造函数本身创建出来的对象

      

   箭头函数的this，由定义它的外部函数作用域决定

   f()是普通函数的调用，f中的this指向global obj

   ```javascript
   function f() {
     console.log("f", this);
     const run = () => {
       console.log(this);
       console.log(this.a);
     };
     run();
   }
   f() 
   //f global obj
   //global obj
   //undefined
   ```

   f()是obj的方法调用，this指向调用者，继而run中的this也和调用者一致

   ```javascript
   function f() {
     console.log("f", this);
     const run = () => {
       console.log(this);
       console.log(this.a);
     };
     run();
   }
   
   var a = {
     a: 1,
     f: f,
   };
   
   a.f();
   //f { a: 1, f: [Function: f] }
   //{ a: 1, f: [Function: f] }
   //1
   ```

   即使被甩出来，依然指向外部函数的this：

   ```javascript
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
   
   a.f()();
   //f { a: 1, f: [Function: f] }
   //{ a: 1, f: [Function: f] }
   //1
   ```

   注意，js中的obj是没有作用域的，所以这里的箭头函数的外部环境的this不是A，而是window

   ```javascript
   let A = {
     a: 1,
     f: () => {
       console.log(this);
     },
   };
   A.f();
   ```

   虽然obj没有this，但是class中是有this的，它与function 作为构造函数中的this更像，指向这个class构造出来的obj，这也就是为什么在react class component中可以使用箭头函数不需要bind的原因

   箭头函数很适用于定义这样的class methods

   A good rule of thumb is this: Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()).

   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

3. 











