/* *
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

const candies = [12,1,12];
let extraCandies = 10;
let result = [];


let kidsWithCandies = function(candies, extraCandies) {

    const maxCandies = Math.max(...candies);
    //si una vez sumado el extraCandies a los candies del niño es mayor que el del resto de los niños
    output = candies.map( candyCount => candyCount + extraCandies >= maxCandies)
    console.log(output);
    return output;

};

kidsWithCandies(candies, extraCandies);
