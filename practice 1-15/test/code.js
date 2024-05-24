let questions = [
    {
      text: 'Сколько ZoV в году?',
      variants: ['0', '1', 'гойда', 'мизулина'],
      right: 2
    },
    {
      text: 'гойда?',
      variants: ['гойда', 'гойда', 'гойда', 'гойда'],
      right: 2
    },
    {
      text: 'СВО?',
      variants: ['ZV', 'Z', 'V', 'sVo'],
      right: 1
    }
];

let html = '';

  questions.forEach((question, index) => {
    html += `<div>
      <p>${question.text}</p>
      ${question.variants.map((variant, i) => `
        <label>
          <input type="radio" name="question${index}" value="${i}">
          ${variant}
        </label>
      `).join('')}
    </div>`;
  });

  document.getElementById('test').innerHTML = html;

  document.getElementById('button').addEventListener('click', function() {
    let answers = questions.map(question => question.right);
    const questionsDivs = document.querySelectorAll('#test > div');
    questionsDivs.forEach((questionDiv, index) => {
      const inputs = questionDiv.querySelectorAll('input[type="radio"]');
      inputs.forEach((input, i) => {
        if (input.checked) {
          if (i === answers[index]) {
            input.parentElement.classList.add('right');
          } else {
            input.parentElement.classList.add('wrong');
          }
        }
      });
    });
  });