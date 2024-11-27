import sum from './js/sum';
import add from './js/add';
import './css/index.less';
import './css/style.css';

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 78, 345));
console.log(add(1, 2));

let obj = {
    name: 'why',
    age: 18,
};

const { age } = obj;
console.log(age);