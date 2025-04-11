import importedDefaultFunction, {a as aVariable, myFunction} from './modules/module.js'

import * as allObj from './modules/module.js'


console.log(aVariable);
myFunction();

importedDefaultFunction();

console.log(allObj)
allObj.default() //eftersom det finns en default export 