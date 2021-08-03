//翻转字符串
//思路一：反向遍历字符串
function reverseString(str){
    var tmp = '';
    for(var i=str.length-1; i>=0; i--)
      tmp += str[i];
    return tmp
  }

//思路二：转化成array操作

function reverseString(str){
    var arr = str.split("");
    var i = 0,j = arr.length-1;
    while(i<j){
      tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
      i++;
      j--;
    }
    return arr.join("");
  }


  //生成指定长度随机字符串
function randomString(n){
    var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var tmp = '';
    for(var i=0; i<n; i++) {
      tmp += str.charAt(Math.round(Math.random()*str.length));
    }
    return tmp;
  }

  //统计字符串中次数最多字母
  function findMaxDuplicateChar(str) {
    if(str.length == 1) {
      return str;
    }
    var charObj = {};
    for(var i = 0; i < str.length; i++) {
      if(!charObj[str.charAt(i)]) {
        charObj[str.charAt(i)] = 1;
      } else {
        charObj[str.charAt(i)] += 1;
      }
    }
    var maxChar = '',
        maxValue = 1;
    for(var k in charObj) {
      if(charObj[k] >= maxValue) {
        maxChar = k;
        maxValue = charObj[k];
      }
    }
    return maxChar + '：' + maxValue;
  }