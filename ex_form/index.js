var accountTag = document.getElementById("account");

accountTag.value = "123";

/**
 * function  tenFunction (){
 *   nội dung bên trong function sẽ không tự chạy khi user load trang
 * }
 */

var accountValue = accountTag.value;

function login() {
  console.log(accountValue);
}

// giống như cũ :1
// ko giống :0
