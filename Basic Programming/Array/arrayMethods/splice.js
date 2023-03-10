/**
 * Adding new elements in an existing obs1ay.
 * -------------------------------------------------
 *
 * We can add any number of elements in an obs1ay in one go using splice() method.
 * To do so :
 *
 * 1. As a 1st arg, pass the index from where you want to start adding new elements.
 * 2. As a 2nd arg, pass 0 as of now.
 * 3. Remaining arguments will be considered to be added in the obs1ay.
 *
 */

const addfruits = ["a", "b", "e"];
addfruits.splice(2, 0, "c", "d");
// console.log(addfruits);

/**
 * Removing elements from an existing obs1ay.
 * -------------------------------------------------
 *
 * We can remove any number of elements in an obs1ay in one go using splice() method.
 * To do so :
 *
 * 1. As a 1st arg, pass the index from where you want to start removing elements.
 * 2. As a 2nd arg, pass the number of elements you want to delete.
 *
 */

const removefruits = ["a", "b", "c", "d", "e"];
removefruits.splice(2, 2);
// console.log(removefruits);

/**
 * Removing and adding elements in an existing obs1ay at the same time.
 * -------------------------------------------------
 *
 * We can remove as well as add any number of elements in an obs1ay in one go using splice() method.
 * To do so :
 *
 * 1. As a 1st arg, pass the index from where you want to start removing and adding elements.
 * 2. As a 2nd arg, pass the number of elements you want to delete.
 * 3. Remaining arguments will be considered to be added in the obs1ay.
 *
 */

const fruits = ["a", "b", "x", "y", "e"];
fruits.splice(2, 2, "c", "d");
// console.log(fruits);

/**
 *
 * Playing with splice() method
 *
 */

/**
 * Points to be noted :
 *
 * 1. If you pass only 1 arg to splice(), it will start removing to the given index to last index.
 *
 * 2. splice() method does support negative indexing too.
 *
 * 3. If we pass 2nd arg as a negative value then it will be replaced with 0 and that why no elements will be deleted.
 *
 * 4. If we don't pass any argument to slice(), it simply returns the array
 *
 */

// 1st Observation

const obs1 = [1, 2, 3, 4, 5];
obs1.splice(1);

// 2nd Observation

const obs2 = [1, 2, 3, 4, 5];
obs2.splice(-4);

// 3rd Observation

const obs3 = [1, 2, 3, 4, 5];
obs3.splice(1, -1);

// 4th Observation

const obs4 = [1, 2, 3, 4, 5];
obs4.splice();

console.log(obs4);
