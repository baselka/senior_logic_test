/* 
2. A task was assigned to you to trace a bug that is causing the increment function to fail. The increment function should log from 0 to 9 every 10 seconds.



function increment() {

    for (var i = 0; i < 10;i++) { 

        setTimeout(function() {

           console.log(i) 

        }, 10)

     }     

}



What is the output of the current increment function?
Identify and describe what is causing the above function to fail.
Modify the above function to perform the desired behavior.
*/

/* CURRENT OUTPUT OF THE increment FUNCTION :
undefined
10
10
10
10
10
10
10
10
10
10
*/

/* The function was failing because of 2 factors:
    - The setTimeout function should contain the for loop to increment instead of having it inside the for loop
    - The setTimeout second parameter is 10 which is invalid we should pass the 10 seconds in miliseconds 10000
    - To have the increment function to log from 0 - 9 every 10 seconds we should use setInterval instead of setTimeout,
      since setTimeout allows us to run a function once after the interval of time. setInterval allows us to run a function repeatedly,  */
function increment() {
    // uncomment settimeout and comment setInterval to run the increment once.
  /* setTimeout(function () {
    for (var i = 0; i < 10; i++) {
      console.log(i);
    }
  }, 10000); */
  setInterval(function () {
    for (var i = 0; i < 10; i++) {
      console.log(i);
    }
  }, 10000);
}

increment();
