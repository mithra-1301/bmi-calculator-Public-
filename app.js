function calc(){
  const w = parseFloat(document.getElementById('w').value);
  const hcm = parseFloat(document.getElementById('h').value);

  if (!w || !hcm) {
    document.getElementById('out').textContent = 'Please enter numbers 🙂';
    return;
  }

  const h = hcm / 100;
  const bmi = w / (h * h);

  let category;
  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';

  document.getElementById('out').textContent = BMI: ${bmi.toFixed(1)} (${category});
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('calc-btn');
  if (btn) btn.addEventListener('click', calc);
});
