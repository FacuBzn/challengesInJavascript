# challengesInJavascript
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1] 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 
## Explicación de Resolucion:
ste código busca encontrar un par de elementos en un array nums cuya suma sea igual al valor target.
Primero se define el array nums y el valor target. Luego se define una función twoSum que toma como argumentos el array nums y el valor target.
Dentro de la función twoSum, hay dos bucles for. El primer bucle for recorre cada elemento del array nums. 
El segundo bucle for recorre cada elemento del array nums a partir de la posición i+1.
Dentro del segundo bucle for, se suma el elemento actual en la posición i con el elemento actual en la posición j.
Si la suma es igual al valor target, se asigna el par de índices [i, j] a la variable answer.

Finalmente, se devuelve la variable answer que contiene el par de índices [i, j] que suman target o, si no hay tal par, devuelve undefined.

![image](https://user-images.githubusercontent.com/33848453/235188358-cc3aa415-644b-4db3-bb15-3fc541860891.png)





