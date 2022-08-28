/* 
1.  There are 4 baskets of eggs in a row. 
    The first basket contains 20 eggs,
    the second basket contains 31 eggs,
    the third basket contains 10 eggs and the fourth basket contains 40 eggs. 

We need to sort the baskets based on the number of eggs from smallest to highest.

Identify the simplest sorting algorithm to be used on the problem.
Explain how you would sort the baskets programmatically in words.
Using pseudocode, create the most efficient way on how to sort the baskets. You can use javascript but don't use the builtin sort method.
*/

/* Since we have a known number of elements and it's small, only 4. 
Then we can use INSERTION SORTING it's known as the best for sorting small lists and less required  resources to implement, yet it's not one of the fastest . */

// EXPLAINATION :
    /*   We compare the key element with the previous elements. If the previous elements are greater than the key element, then we move the previous element to the next position.
         Therefore we have to iterate in the baskets row/array and we start from the second element which is index 1 */

const baskets = [20, 31, 10, 40];

// Insertion Sort
function insertionSort(basketsArray) {
    // Iterate Over Baskets (Starts At 1 Because Nothing Left Of Index 0)
    for (let i = 1; i < basketsArray.length; i++) {
      // Selected Element + Comparison Index
      let selectedElement = basketsArray[i];
      let comparisonIndex = null;
      console.log(`Selected Element: ${selectedElement}`);
      // Iterate Over Baskets Backwards (Comparison Index Must Be Greater Or Equal To 0 And Greater Than The Selected Element)
     for (comparisonIndex = i - 1; comparisonIndex >= 0 && basketsArray[comparisonIndex] > selectedElement; comparisonIndex--) {
       console.log(`Comparison Index: ${comparisonIndex}`);
       // Swap Index Values
       console.log(`Swapping ${basketsArray[comparisonIndex + 1]} for ${basketsArray[comparisonIndex]}`);
       basketsArray[comparisonIndex + 1] = basketsArray[comparisonIndex];
     }
      // Insert Selected Element
      console.log(`Selected Element (${selectedElement}) inserted at index ${comparisonIndex + 1}`);
      basketsArray[comparisonIndex + 1] = selectedElement;
    }
    // Return Baskets
    return basketsArray;
  };

  // additionally we can also use the selection sort algorithm ..
function selectionSort(inputArr) { 
    let n = inputArr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subbasketsArray
        let min = i;
        for(let j = i+1; j < n; j++){
            if(inputArr[j] < inputArr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             // Swapping the elements
             let tmp = inputArr[i]; 
             inputArr[i] = inputArr[min];
             inputArr[min] = tmp;      
        }
    }
    return inputArr;
}
console.log(`INSERTION SORT -> `, insertionSort(baskets));
console.log(`SELECTION SORT -> `, selectionSort(baskets));