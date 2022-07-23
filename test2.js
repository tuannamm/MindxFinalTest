/*

  Có một nhóm người đang đứng thành một hàng, để chia ra làm 2 đội từ hàng người thì quản trò chia như sao. Người đứng thứ nhất vào Team 1, người đúng thứ hai vào Team 2, người đứng thứ ba vào lại Team 1, cứ tiếp tục như thế cho đến người cuối cùng.
  Viết chương trình có đầu vào là một mảng chưa cân nặng của tất cả mọi người theo thứ tự hàng ban đầu và yêu cầu trả về mảng chưa tổng cân nặng của 2 team.
  Ví dụ: INPUT [60, 40, 55, 75, 64] thì OUTPUT là [179, 115]
  [JavaScript] Syntax Tips
*/

function alternatingSums(arr) {
  if (!Array.isArray(arr)) return false;

  let results = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      results[0] += arr[i];
    } else {
      results[1] += arr[i];
    }
  }
  return results;
}

console.log(alternatingSums([1, 2, 3, 4, 5, 6]));
