var openBtn = document.getElementById('open-btn');
var closeBtn = document.getElementById('close-btn');
var spNav = document.getElementById('sp-nav');

openBtn.addEventListener('click',function(){
  spNav.classList.add('active');
});

closeBtn.addEventListener('click',function(){
  spNav.classList.remove('active');
});



// DOM.addEventListener('イベント名',function(){
//   実行する処理;
// });
//
// DOM.addEventListener('イベント名',plus(){
//   function plus(){
//
//   };
// });
