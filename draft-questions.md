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

26. Which of the following returns false?
    1. `delete 0;`
    2. `delete '';`
    3. `delete undefined;`
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
