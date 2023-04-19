# challengesInJavascript
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d
 

Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.

### Explicación de Resolucion:

Este es un código en lenguaje JavaScript que concatena dos palabras de manera alternada.
Se define una función llamada mergeAlternately que recibe dos parámetros, word1 y word2, que contienen las palabras a concatenar.
Se inicializan las variables m, n, i y j en cero. Luego se asigna a m la longitud de word1 y a n la longitud de word2.
Se inicializa la variable newWord en una cadena vacía, donde se irá almacenando la palabra concatenada.
Se inicia un bucle while que se ejecutará mientras i sea menor que m o j sea menor que n.
Dentro del bucle, se usa una estructura condicional if para verificar si i es menor que m. 
Si se cumple la condición, se concatena el carácter de word1 en la posición i a la variable newWord mediante el operador +=.
Luego, se incrementa el valor de i en una unidad mediante el operador ++.
Se utiliza otra estructura condicional if para verificar si j es menor que n.
Si se cumple la condición, se concatena el carácter de word2 en la posición j a la variable newWord mediante el operador +=.
Luego, se incrementa el valor de j en una unidad mediante el operador ++.
Una vez concluido el bloque if dentro del bucle, se repite el proceso hasta que la condición del bucle while sea falsa.
Por último, se devuelve la variable newWord que contiene la palabra concatenada de forma alternada.


![image](https://user-images.githubusercontent.com/33848453/233098728-ba2db9b8-cb15-494e-b278-0c2b1fafeb10.png)




