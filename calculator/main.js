const form = document.forms.form;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = this.elements.height.value;
  const weight = this.elements.weight.value;
  const imb = document.querySelector(".imb");
  const cmt = document.querySelector(".comment");
  const result = weight / height ** 2;

  
  imb.textContent = `Your BMI: ${result}`;
  if (result < 18.5) cmt.textContent = `Very thin`;
  if (result > 18.5 && result < 22.9) cmt.textContent = `Normal`;
  if (result < 18.5) cmt.textContent = `Very thin`;
  if (result < 18.5) cmt.textContent = `Very thin`;
  if (result < 18.5) cmt.textContent = `Very thin`;
});
