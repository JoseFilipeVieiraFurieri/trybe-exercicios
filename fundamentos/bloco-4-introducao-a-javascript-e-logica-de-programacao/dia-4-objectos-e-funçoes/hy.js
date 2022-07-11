let palavra = "ava";
let pali = "";
function transform (palavra, pali) {
for (let index = palavra.length - 1; (index = 0); index -= 1) {
  pali.push(index);
}
}
function verificaPalindrome(palavra, pali) {
  if (palavra === pali) {
    console.log(true)
  } else {
    console.log(false)
  }
    return verificaPalindrome();
}