function drawNumbers() {
  const numbers = Array.from({ length: 25 }, (_, i) => i + 1);
  const selected = [];

  while (selected.length < 5) {
    const index = Math.floor(Math.random() * numbers.length);
    selected.push(numbers.splice(index, 1)[0]);
  }

  selected.sort((a, b) => a - b);

  const resultText = `청소 당번 번호는\n${selected.join(', ')}입니다!`;

  // SweetAlert2 모달로 표시
  Swal.fire({
    title: '✨ 추첨 완료!',
    text: resultText,
    icon: 'success',
    confirmButtonText: '확인',
    confirmButtonColor: '#10b981',
    backdrop: true
  });

  // 화면 하단에도 표시
  document.getElementById('result').innerText = `이번 당번: ${selected.join(', ')}`;
}
