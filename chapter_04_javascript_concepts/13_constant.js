const BASE_URL = "https://app.thetestingacademy.com";
BASE_URL = "https://staging.app.thetestingacademy.com"; //TypeError: Assignment to constant variable.

let name = "akshay";
//let name = "akshay"; //two times same let is not allowed but in the scope it is allowed as 
// it is block scoped so value is not gone outside of the scope
name = "dhiman";
{
    let name = "Mahi";
}
