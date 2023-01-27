const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("ol");
const check = document.querySelector(".check");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();

  if (text) {
    list.innerHTML += `
    <li class="item">
      <p>${input.value}</p>
      <div class="btns">
        <button class="check"><i class="fa-solid fa-check"></i></button>
        <button class="remove"><i class="fa-solid fa-trash"></i></button>
      </div>
  </li>`;

    input.value = " ";
  } else {
    alert("Please enter the text!");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.className == "check") {
    e.target.parentElement.parentElement.classList.toggle("active");
  }

  if (e.target.className == "remove")
    e.target.parentElement.parentElement.remove();
});
