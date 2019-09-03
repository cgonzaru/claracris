# Sesión 1
## Métodos funcionales de array

### map
Nos permite aplicar una función a todos los elementos de un array
y devuelve otro array de la misma longitud con los resultados de aplicar esa función 
sobre cada elemento.

~~~
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
/* const capitalNames = []; */

/* for (let i=0; i<names.length; i++){
    const capitalName = names[i].toUpperCase();
    capitalNames.push(capitalName);
} */

const capitalNames = names.map(name => name.toUpperCase());

console.log(capitalNames);
~~~

En este ejemplo hemos pasado de recorrer el array con el for y aplicarle a cada uno
de los elementos la función toUpperCase(), y posteriormente añadiendo en un nuevo array los elementos resultantes (push()), a recorrer el array con la función map()
aplicandole directamente una función.

### filter
filtra un array dado un criterio