## Install

`npm i -s dynamic-condition`

## Quicky

Check validity of an array of conditions (JSON format):

```js
import condition from 'dynamic-condition'

const statement = [["5", "==", 5], "&&", ["1", "==", true]];
// equivalent to (("5" == 5) && ("1" == true))

if (condition(statement).matches) {
  // do stuff
}
```


#### More detailed documentation coming soon...
