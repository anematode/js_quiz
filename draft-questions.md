13. Alice says she made a function that clones functions.
    ```js
    function cloneFunction(fn) {
      return Function('return ' + String(fn));
    }
    ```
    For which of the following functions will her function work as expected?
    1. `alert`
    2. `(a => b => ++a)(0)`

12. Why should one not use `Date.prototype.getYear`?

32. What is printed in the following code:
    ```js
    var val = 3;
    const obj = {
      val: 2,
      returnVal() {
        return this.val;
      }
    };
    const {returnVal} = obj;
    console.log(obj.returnVal(), returnVal());
    ```

1. What will the following output?
    ```js
    let span1 = document.createElement('span');
    span1.setAttribute("id", "cu");
    span1.innerText = "0";
    document.body.appendChild(span1);
    let span2 = document.createElement('span');
    span2.setAttribute("id", "cu");
    span1.innerText = "1";
    document.body.appendChild(span2);

    document.body.innerHTML += `<span>2</span id="cu">`;
    console.log(document.getElementById("cu").innerHTML);
    ```
    1. `0`
    2. `1`
    3. `2`
    4. undefined/implementation-defined behavior
    5. `<span>1</span>`

1. What will the following output?
    ```js
    console.log((0 == null)[0]);
    ```
    1. `t`
    2. it will have an error
    3. `f`
    4. `undefined`
    5. `null`
    6. none of the above

2. ```js
    let a;
    a = {a};
    console.log(a.a);
    ```
    what will this output?

3. ```js
    setTimeout(() => console.log("cow"), 0);
    setTimeout(() => console.log("chicken"), 0);
    ```
    What will this output?
    1. `cow chicken`
    2. `chicken cow`
    3. implementation defined
    4. random

49. Which of the following will give a syntax error?
    1. `1_1`
    2. `{t:;}`
    3. `;;;;;`
    4. `/.///./`
    5. `() => (1, 2, )`

26. Which of the following returns `false`?
    1. `delete 0;`
    2. `delete '';`
    3. `delete NaN;`
    4. `delete false;`
    5. `delete null;`

34. What is the output of the following?
    ```js
    a = 3;
    ((a = a) => a)()
    ```

16. What is the output of the following expression?
    ```js
    (t = 1, ((t = 2) => t)(undefined))
    ```
    1. `1`
    2. `2`
    3. `undefined`
    4. An arrow function
    5. A `ReferenceError`

1. ```js
    console.log(2 ** 3 ** 2);
    console.log(2 - 2 - 3);
    ```
    What will this output?

25. Which of the following characters cannot be used as part of JavaScript code outside of strings and regex literals in Chrome 75?
    1. `~`
    2. <code>`</code>
    3. `@`
    4. `#`
    5. `^`

37. Which of the following will cause a syntax error?
    1. `class {}`
    2. `(class A {})`
    3. `new class A {}`
    4. `(class {})()`
    5. `class A {}`

30. Which of the following returns `"number"`?
    1. `typeof Number`
    2. `typeof Number()`
    3. `typeof new Number()`
    4. `typeof number`
    5. `typeof 10n`

14. Which of the following will put a `<div>` element inside a `<p>` element?

    1.
    ```html
    <p><div></div></p>
    ```
    2.
    ```html
    <p id="p"></p>
    <script>
    p.innerHTML = `<div></div>`;
    </script>
    ```
    3.
    ```html
    <script>
    document.body.innerHTML = `<p><div></div></p>`;
    </script>
    ```

3. Given the following HTML document:
    ```html
    <style>
    div {
      position: fixed;
      top: 0;
      left: 0;
      width: 100px;
      height: 100px;
    }
    #b {
      transform: translate(100px, 100px);
      border-radius: 5px;
    }
    #c {
      top: 50px;
      left: 50px;
      pointer-events: none;
    }
    </style>
    <div id="a"></div>
    <div id="b"></div>
    <div id="c"></div>
    ```
    Which element will `document.elementFromPoint(100, 100)` return?
    1. `<div id="a">`
    2. `<div id="b">`
    3. `<div id="c">`
    4. `<html>`
    5. None of the above

1. In an iframe with scripting enabled, but no other parameters specified, where the parent (top) page has URL "sink.example.com," which of the following operations is permitted?
    1. `top.location.href = "example.com/sink.html";`
    2. `top.location.href = "cow.example.com/sink.html";`
    3. `top.location.href = "cow.example.com";`
    4. `top.location.href = "file:///C:\Windows\System32";`
    5. `top.location.href = "google.com";`
    6. None are permitted

9. Which of the following global variables will not be defined in a web worker scope?

    1. `self`
    2. `this`
    3. `global`
    
    1. I only
    2. II only
    3. I and II only
    4. I, II, and III only
    5. None are true

1. As of 2019-06-02, which of the following major browsers supports `AudioWorklet`?
    1. Firefox
    2. Chrome
    3. Opera
    4. Internet Explorer
    5. GNU IceCat

1. In ECMAScript.Next, which of the following is defined?
    1. `Array.prototype.flat`
    2. `Array.prototype.flatten`
    3. `Array.prototype.flattenArray`
    4. `Array.prototype.smoosh`
    5. `Array.prototype.join`

47. If one chooses to omit semicolons in their code, which of the following lines would NOT require a semicolon preceding it to prevent unintended side effects? (assume all variables are defined)
    1. `\`sheep\``
    2. `{sheep: 'good'}`
    3. `(sheep)`
    4. `[sheep]`
    5. All of the above

11. What is the value of `alert + ''` in Chrome 75?

60. Celerio, a JavaScript developer, writes the following class.
    ```js
    function Animal (params = { species = 'Animalia', name = 'Billy' } = {}) {
      this.species = species
      this.name = name
    }
    ```
    What is wrong with his implementation?
    1. It declares a function, not a class.
    2. `params` remains unused.
    3. The constructor throws an error.
    4. The constructor creates global variables.
    5. There is nothing wrong with his implementation.

61. Celeria, a JavaScript developer, writes the following class.
    ```js
    class Animal {
      constructor (params = { species = 'Animalia', name = 'Billy' } = {}) {
        this.species = species
        this.name = name
      }
    }
    ```
    What is wrong with her implementation?
    1. It uses special syntax that is not supported by many browsers.
    2. `params` remains unused.
    3. The constructor throws an error.
    4. The constructor creates global variables.
    5. There is nothing wrong with his implementation.
