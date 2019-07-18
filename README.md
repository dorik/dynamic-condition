## Install

`npm i -s dynamic-condition`

## Is it a doc?

```js
import condition from 'dynamic-condition'

const statement = [["5", "==", 5], "&&", ["1", "==", true]];
// equivalent to (("5" == 5) && ("1" == true))

if (condition(statement).matches) {
  // do stuff
}
```


#### More detailed documentation coming soon...
