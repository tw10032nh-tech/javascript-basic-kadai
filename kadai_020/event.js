const outputBtn  = document.getElementById('btn');
const outputText = document.getElementById('text');

outputBtn.addEventListener('click', () => {
 console.log('ボタンがクリックされました！');
 outputText.textContent = 'ボタンをクリックしました';
});