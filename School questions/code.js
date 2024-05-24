let questions = [
    {
      text: 'Какой самый короткий месяц в году?',
      variants: ['Январь', 'Сентябрь', 'Февраль'],
      right: 2
    },
    {
      text: 'Кто написал Мона Лизу?',
      variants: ['Лев Толстой', 'Сальвадор Дали', 'Леонардо да Винчи'],
      right: 2
    },
    {
      text: 'Сколько дней в високосном году?',
      variants: ['366', '365', 'Столько же, как в обычном'],
      right: 0
    },
    {
      text: 'Температура кипения воды?',
      variants: ['60°C', '100°C', '80°C'],
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