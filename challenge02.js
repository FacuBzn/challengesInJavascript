/* *
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 * https://leetcode.com/problems/merge-strings-alternately/editorial/
 * 
 */
let word1 = "ab";
let word2 = "pqrs";

let mergeAlternately = function(word1, word2) {
    let m =0, n=0, i=0, j=0;

    m = word1.length;
    n = word2.length;
    let newWord = "";
    
    while ( i < m || j < n ) {
        if (i < m){
            newWord += word1[i];
        }        
        if( j < n){           
            newWord += word2[j];           
        }  
        i++, j++;      
    }
    console.log(newWord);  
    return newWord;  
};

mergeAlternately(word1, word2);