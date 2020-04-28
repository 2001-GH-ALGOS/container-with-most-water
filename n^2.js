/* --brute force solution-- O(n^2) */
// ex: [1,8,6,2,5,4,8,3,7] length = 9
// (i, ai), (i, 0)
// (1, 1), (1, 0)  => (2, 8)="2nd line" (1, 1)="1st line" 1."shorter y = length" length = 1 2."find width x2 -x1" width = 1
// (2, 8), (2, 0)
// (3, 6), (3, 0)
// (4, 2), (4, 0)
// (5, 5), (5, 0)
// (6, 4), (6, 0)
// (7, 8), (7, 0)
// (8, 3), (8, 0)
// (9, 7), (9, 0)

//LEET CODE BRUTE FORCE SOLUTION
// Time Complexity: O(n^2)
//Space Complexity: O(1)
const maxArea = function(arr){
  let maxArea = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < height.length; j++){
      maxarea = Math.max(maxarea, Math.min(arr[i], arr[j]) * (j - i));
    }
  }
  return maxArea
}


//Our BRUTE FORCE solution using (x,y) coordinates

const maxArea = function(arr) {
  const areas = [];
  for (let i = 0; i < arr.length; i += 1) {
    const x1 = i + 1;
    const y1 = arr[i];
    for (let j = i + 1; j < arr.length; j += 1) {
      const x2 = j + 1;
      const y2 = arr[j];
      const width = x2 - x1;
      let height;
      if (y1 < y2) {
        height = y1;
      } else {
        height = y2;
      }
      const area = width * height;
      areas.push(area);
    }
  }
  // below code is alternative to return Math.max(...areas)
  areas.sort((a, b) => a - b);
  return areas[areas.length - 1];
};
