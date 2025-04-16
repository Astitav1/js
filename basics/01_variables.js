const accountId = 14453      /* another value with accountId = any value is not allowed */
let accountEmail = "Astitav@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; //not necessay to use semi-colon

// we can update or change the value of let

accountEmail = "abab@gmail.com"
accountPassword = "2121212"
accountCity = "Benguluru"
/*
Prefer not to use var 
because of issue in block scope and functional scope.
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

// output
// 14453
// ┌─────────┬──────────────────┐
// │ (index) │ Values           │
// ├─────────┼──────────────────┤
// │ 0       │ 14453            │
// │ 1       │ 'abab@gmail.com' │
// │ 2       │ '2121212'        │
// │ 3       │ 'Benguluru'      │
// │ 4       │ undefined        │
// └─────────┴──────────────────┘