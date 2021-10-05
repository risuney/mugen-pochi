const btn = document.querySelector('.good'); // Goodのボタンを取得
let number = 0; // 押された回数を0とする

// Goodが押されたときの処理
btn.addEventListener('click', function(){
  number++; // 押された回数をインクリメント（増加）する
  document.querySelector('.good-number').textContent = number; // 画面上の、押された回数を変更
});
