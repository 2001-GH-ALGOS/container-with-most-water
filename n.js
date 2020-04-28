// param and goal: given an array of non negative numbers representing heights, return the max area possible bettween two heights
// approach: set up two pointers on the outer heights (beginning and end of input array)
// calculate the area bettween the two heights and store that value
// move the lesser height inwards of the array until the two pointers are pointing to the same height
// compare the new area calculations as you move the pointer to the area value stored and only replacing it with the higher value
// return the area stored

// edge cases: if input was length 2, the while loop would only run once
//Time Complexity O(n)
//Space Complexity O(1)
const maxArea = function(arr) {
  let area = 0;
  let leftP = 0;
  let rightP = arr.length - 1;
  while (leftP !== rightP) {
    // calculate the area
    const height = Math.min(arr[leftP], arr[rightP]);
    const width = rightP - leftP;
    const newArea = height * width;
    // if new area calculation is greater, replace the area
    if (area < newArea) {
      area = newArea;
    }
    // move the pointer pointing to the lesser height inward
    if (height === arr[leftP]) {
      leftP += 1;
    } else {
      rightP -= 1;
    }
  }
  return area;
};
