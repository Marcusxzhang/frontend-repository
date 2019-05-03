# Map, Reduce和Filter数组方法 #
map，reduce和filter是三个非常实用的JavaScript数组方法。  
  
## Array.map() ##
`map()`根据传递的转换函数，更新给定数组的每个值，并返回一个相同长度的新数组。  
  
```javascript
let newArray = oldArray.map((value, index, array) => {
    // ...
});
```  
  
一个帮助记住map的方法：**Morph Array Piece by Piece**。  
  
可以使用map代替for-each循环，来遍历并对每个值应用转换函数。  
```javascript
[1, 4, 6, 14, 32, 78].map(val => val * 10);

// [10, 40, 60, 140, 320, 780]
```  
  
![map](https://mmbiz.qpic.cn/mmbiz_jpg/meG6Vo0MevjdVBZZdaJyYlCiaju1VVD3ciaT7nZjIGMIbGFNICic7RviclOS5GxLdv7GpRyibiaECic3wqMQ0JvqVDCeg/640 "map")  
  
## Array.filter() ##
`filter()`是过滤数组到另一个数组，每个值都要通过一个特定检查。  
  
```javascript
[1, 4, 6, 14, 32, 78].filter(val => val > 10)

// [14, 32, 78]
```  
  
![filter](https://mmbiz.qpic.cn/mmbiz_jpg/meG6Vo0MevjdVBZZdaJyYlCiaju1VVD3cRxnlpsHCldCJibic2SHcwoISpAsB8b6ngsEushywhyDqDT9fIvJSsIew/640 "filter")  
  
#### 代码 ####
```javascript
const students =  [
    {
        name: "Boops",
        finalGrade: 80
    },
    {
        name: "Kitten",
        finalGrade: 45
    },
    {
        name: "Taco",
        finalGrade: 100
    }
];

const passingDogs_1 = students.filter((student) => {
    return student.finalGrade >= 70
});
const passingDogs_2 = students.filter(student => student.finalGrade >= 70);
```  
  
## Array.reduce() ##
`reduce()`方法接受一个数组作为输入值并返回一个值。  
  
`reduce()`接受一个**回调函数**，包括：  
* 累计器（数组每一段的累加值，他会像雪球一样增长）
* 当前值
* 索引
* 初始值 
  
```javascript
let finalVal = oldArray.reduce((accumulator, currentValue, currentIndex, array) => {
    // ...
}, initalValue);
```  
  
![reduce](https://mmbiz.qpic.cn/mmbiz_jpg/meG6Vo0MevjdVBZZdaJyYlCiaju1VVD3cGhJKK0QJLmz3nX8jQpiaibNaQ4OHFO55oROy759T1DfbllnbhibgoibxGw/640 "reduce")  
  
#### 代码 ####
写一个炒菜函数和一个佐料清单：  
```javascript
// our list of ingredients in an array
const ingredients = ['wine', 'tomato', 'onion', 'mushroom'];

// a cooking function
const cook = (ingredient) => {
    return `cooked ${ingredient}`;
}
```  
  
把这些佐料做成调味汁，用`reduce()`来归约：  
```javascript
const wineReduction = ingredients.reduce((sauce, item) => {
    return sauce += cook(item) + ', '
}, '');

// wineReduction = "winecooked tomato, cooked onion, cooked mushroom, "
```  
  
最后，确保新字符串没有额外的空白，我们可以传递索引和数组执行转换：  
```javascript
const wineReduction = ingredients.reduce((sauce, item, index, array) => {
    sauce += cook(item);
    if(index < array.length -1) {
        sauce += ', ';
    }
    return sauce;
}, '');

// wineReduction = "winecooked tomato, cooked onion, cooked mushroom"
```  
  
可以使用三目运算符：  
```javascript
const wineReduction = ingredients.reduce((sauce, item, index, array) => {
    return (index < array.length - 1) ? sauce += `${cook(item)}, ` : sauce += `${cook(item)}`; 
}, '');
```