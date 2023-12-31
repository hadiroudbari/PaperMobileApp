import { showToast } from "./general.js";

("user strict");

const form = document.querySelector("#form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = Object.fromEntries(new FormData(form).entries());

  validateUser(formData);
});

const validateUser = function (data) {
  const getUsers = JSON.parse(localStorage.getItem("users"));
  const getUsersArr = getUsers ?? [];

  if (getUsersArr.length > 0) {
    const user = getUsersArr.find(
      (item) =>
        item.username === data.username && item.password__1 === data.password
    );
    if (user) {
      showToast("Login Successfully", "green", "select");
    } else {
      showToast("Invalid Username or Password", "red");
    }
  } else {
    showToast("No User Exist Please Create One", "blue", "signup");
  }
};
