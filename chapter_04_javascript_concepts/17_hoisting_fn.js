function getUserStatus() {
    // var status_Code;  it was not there but JS Engine will create
    // automatically to optimised the code
    //
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);
}

getUserStatus();

//Note: var is function-scoped, so status is hoisted to the top of getUserStatus(), Not the
// global scope