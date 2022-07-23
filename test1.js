/* 
Nhập vào một mảng các số nguyên, tìm cặp hai số liền kề có tích lớn nhất và trả về kết quả của phép nhân 2 số đó.
Ví dụ: INPUT là [2, 3, -5, -2, 4] thì OUTPUT là 10 (cặp -5 và -2 có tích là 10)
[JavaScript] Syntax Tips
*/
function adjacentElementsProduct(arr) {
  if (!Array.isArray(arr)) return false;

  let max = 0;

  for (let i = 1; i < arr.length; i++) {
    max = Math.max(arr[i] * arr[i - 1], max);
  }

  return max;
}

console.log(adjacentElementsProduct([1, 2, 3, 4, 5, 6]));
