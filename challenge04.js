/* *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/ * 
 */
let nums1 = [1, 2, 3];
let nums2 = [2,4,6];

function findDifference(nums1, nums2){  
    let onlyInNums1 = []; //array of only numbers in the first array
    let onlyInNums2 = []; //array of only numbers in the second array

    for (let num of nums1) {
        if ( !nums2.includes(num) && !onlyInNums1.includes(num)){ // Si el número no se encuentra en nums2 y tampoco está en onlyInNums1, se agrega a onlyInNums1.
            onlyInNums1.push(num);
        }
    }
    for (let num of nums2) {
        if ( !nums1.includes(num) && !onlyInNums2.includes(num)){ //Si el número no se encuentra en nums1 y tampoco está en onlyInNums2, se agrega a onlyInNums2.
            onlyInNums2.push(num);
        }
    }
    let listDiff = [onlyInNums1, onlyInNums2]; // devuelve un arreglo que contiene onlyInNums1 y onlyInNums2.
    console.log(listDiff);
    return listDiff;            
}

findDifference(nums1, nums2);


