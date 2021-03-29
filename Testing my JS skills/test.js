var TestScore = 85;
var RequiredScore = 85;
var Result;
var Message = "You + Result + TheTest";

function displayPassOrFail() {
  if (TestScore > RequiredScore) {
    Result = "Passed";
    Message = "You + Result + TheTest";
    console.log(Message);
  }
  if (TestScore < RequiredScore) {
    Result = "Failed";
    Message = "You + Result + TheTest";
   console.log(Message);
  }
  if (TestScore = RequiredScore) {
    Result = "Passed";
    Message = "You + Result + TheTest";
    console.log(Message);
  }
}
displayPassOrFail();
