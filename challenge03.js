/* *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode.com/problems/two-sum/ * 
 */
let nums = [3,4,9,6,4];
let target = 8;
//let answer = [1,4];

/* let nums = [3,2,4];
 let target = 6
//let answer = [1,2] */

/* let nums = [3,3],
 target = 6;
//let answer = [0,1] */


let twoSum = function(nums, target) {
    //la suma de los indices del array nums deben dar como resultado el target x+y = target   /target-y=x/ 
    //primer sugerencias es crear un nuevo array con map con el resultado de x y comparar ese resultado con el array original y ver coincidencias.
    for(let i = 0; i < nums.length; i++ ){
        for( let j = (i + 1) ; j < nums.length; j++){
            let suma = nums[i] + nums[j];
            if (suma === target){
                answer = [ i , j ];
            }            
        }
    } 
    return answer  
};
twoSum(nums, target);
console.log('aca va el return', answer);