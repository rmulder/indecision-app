// Given an array of n integers where n > 1, nums, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
//
// Solve it without division and in O(n).
//
// For example, given [1,2,3,4], return [24,12,8,6].
//
// Follow up:
// Could you solve it with constant space complexity? (Note: The output array does not count as extra space for the purpose of space complexity analysis.)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelfOld = (nums) => {
  const len = nums.length;
  let leftProd = [];
  let i;
  leftProd[0] = 1;

  for (i = 1; i < len; ++i) {
    leftProd[i] = leftProd[i - 1] * nums[i - 1];
  }

  const result = [];
  let rightProd = 1;
  for (i = len - 1; i >= 0; i--) {
    result[i] = leftProd[i] * rightProd;
    rightProd *= nums[i];
  }

  return result;
};

const array = [1, 2, 3, 4];
const timerStart = Date.now();
console.log(productExceptSelfOld(array));
console.log('Time to complete call to productExceptSelfOld: ', Date.now() - timerStart + 'ms');

function productExceptSelf(nums) {
  const temp = [];
  let product = 1;
  let i;

  for (i = 0; i < nums.length; i++) {
    temp[i] = product;
    product *= nums[i];
    console.log(temp[i], product);
  }
  
  console.log(temp);
  product = 1;
  for (i = nums.length - 1; i >= 0; i--) {
    temp[i] *= product;
    product *= nums[i];
    console.log(temp[i], product);
  }

  return temp;
}

const timerStart1 = Date.now();
console.log(productExceptSelf(array));
console.log('Time to complete call to productExceptSelf: ', Date.now() - timerStart1 + 'ms');

const productExceptSelfMapReduce = (nums) => {
  return nums.map((_, i) => {
    return nums.reduce((product, val, j) => {
      return product * (i === j ? 1 : val);
    }, 1);
  });
};

const timerStart2 = Date.now();
console.log(productExceptSelfMapReduce(array));
console.log('Time to complete call to productExceptSelfMapReduce: ', Date.now() - timerStart2 + 'ms');
