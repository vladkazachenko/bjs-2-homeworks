"use strict";

function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return [];
  }

  if (d === 0) {
    return [-b / (2 * a)];
  }

  const x1 = (-b + Math.sqrt(d)) / (2 * a);
  const x2 = (-b - Math.sqrt(d)) / (2 * a);

  return [x1, x2];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = Number(percent);
  contribution = Number(contribution);
  amount = Number(amount);
  countMonths = Number(countMonths);

  if (
    Number.isNaN(percent) ||
    Number.isNaN(contribution) ||
    Number.isNaN(amount) ||
    Number.isNaN(countMonths)
  ) {
    return false;
  }

  const loanBody = amount - contribution;

  if (loanBody <= 0) {
    return 0;
  }

  const monthlyPercent = percent / 100 / 12;

  const monthlyPayment =
    loanBody *
    (monthlyPercent +
      monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));

  const totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}
