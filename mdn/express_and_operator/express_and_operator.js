/*
2025-01-03 22:28
 */


/*
 赋值运算法
 x = y; x += y; x -= y; x *= y; x /= y;
 x %= y; x **= y; x <<= y; x >>=y; x >>>= y;
 x &= y; x |= y; x ^= y;
  x &&= f(), x && (x = f())   x为真时  赋值 x = f()   如 x为假 不会执行后半句
  x ||= f(), x || (x = f())   x为假时  赋值 x = f()   如 x为真 不会执行后半句
  x ??= f(), x ?? (x = f())   x = null或undefined    x = f()
 */

// 解构赋值
//  var/let/const   arr = new Array("10", "20", "30");
//  var [a, b] = arr;



/*
  比较运算符
  x > y; x >= y; x < y; x <= y; x == y; x === y; x !== y; x != y;
  === strict equal 类型也相同
 */


// 字符串运算   +

// 三元运算符  condition ? trueCondition : falseCondition

// 关系操作符 in  numberOrProperty in object  numberOrProperty 下标或对象的属性字符串

// instanceof 判断对象是不是指定的类型  objectName instanceof objectType

/*
表达式
[for (x of y) x]
this
super
 */