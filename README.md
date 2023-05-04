# challengesInJavascript

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

 

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4,6]
Output: [[1,3],[4,6]]
Explanation:
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
Example 2:

Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
Output: [[3],[]]
Explanation:
For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
-1000 <= nums1[i], nums2[i] <= 1000

### Explicacion de la Resolucion:
Esta función recibe dos matrices de números enteros, nums1 y nums2, y devuelve una lista con dos elementos. El primer elemento de la lista contiene todos los números que están en nums1 pero no en nums2, mientras que el segundo elemento contiene todos los números que están en nums2 pero no en nums1.
Ahora, paso a explicar el código:
* La función findDifference toma como parámetros dos matrices de enteros, nums1 y nums2.
* Las variables onlyInNums1 y onlyInNums2 se inicializan como arreglos vacíos que contienen los números que están solo en nums1 y los números que están solo en nums2, respectivamente.
* El primer ciclo for recorre cada número en nums1 utilizando un for...of loop. Si el número no se encuentra en nums2 y tampoco está en onlyInNums1, se agrega a onlyInNums1.
* El segundo ciclo for es similar al primero, pero recorre cada número en nums2 en lugar de nums1. Si el número no se encuentra en nums1 y tampoco está en onlyInNums2, se agrega a onlyInNums2.
* Finalmente, la función devuelve un arreglo que contiene onlyInNums1 y onlyInNums2.

En resumen, esta función toma dos arreglos de números y crea dos nuevos arreglos que contienen los números que no se encuentran en ambos arreglos. Es importante destacar que la función no modifica los arreglos de entrada originales, sino que crea nuevos arreglos.



![image](https://user-images.githubusercontent.com/33848453/236262664-b234e199-8534-4585-8003-95272e3ec9d6.png)




