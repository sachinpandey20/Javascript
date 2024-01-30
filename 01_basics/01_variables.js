const accountId = 3242
let accountEmail = "sachinpandey@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur" //also possible
let accountState;
//accountId = 2 // not allowed

accountEmail = "pandeysachin@gmail.com"
accountPassword = "34242"
accountCity = "Delhi"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])