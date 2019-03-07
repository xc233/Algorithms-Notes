/* 
替换空格
将一个字符串中的空格替换成 "%20"。

Input:
"A B"

Output:
"A%20B" 
*/

function replaceSpace(str)
{
    return str.replace(/ /g,"%20");
}

var a = " Str a";

console.log(replaceSpace(a));

//使用正则表达式