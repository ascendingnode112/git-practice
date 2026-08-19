// Shared quiz widget for git-practice lessons.
// Markup contract:
//   <div class="quiz">
//     <div class="quiz-q" data-explain="Shown after answering.">
//       <p class="prompt">Question text</p>
//       <button class="opt" data-correct>Right answer</button>
//       <button class="opt">Wrong answer</button>
//     </div>
//   </div>
// On click: locks the question, marks the chosen option and the correct one,
// reveals the explanation. Immediate feedback, one attempt per question.

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.quiz-q').forEach(function (q) {
    var explain = document.createElement('p');
    explain.className = 'explain';
    q.appendChild(explain);

    q.querySelectorAll('button.opt').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (q.classList.contains('answered')) return;
        q.classList.add('answered');

        var right = btn.hasAttribute('data-correct');
        q.querySelectorAll('button.opt').forEach(function (b) {
          if (b.hasAttribute('data-correct')) b.classList.add('correct');
          else if (b === btn) b.classList.add('wrong');
          b.disabled = true;
        });

        explain.innerHTML =
          '<span class="verdict ' + (right ? 'good' : 'bad') + '">' +
          (right ? 'Correct. ' : 'Not quite. ') + '</span>' +
          (q.dataset.explain || '');
      });
    });
  });
});
