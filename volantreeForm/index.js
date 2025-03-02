const MsgBox = document.querySelector("#msg-box");
const countrySelector = document.querySelector("#country");
const countrySelector_error = document.querySelector("#country-error");
const name_error = document.querySelector("#name-error");
const lastName_error = document.querySelector("#last-error");
const email_error = document.querySelector("#email-error");
const termCondition_error = document.querySelector("#term-error");
const form = document.querySelector("form");

const country = async () => {
  try {
    const res = await fetch("https://api.first.org/data/v1/countries");
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

country()
  .then((datas) => {
    const country = Object.values(datas.data);
    for (const item of country) {
      const option = document.createElement("option");
      option.value = item.country;
      option.innerText = item.country || "...loading";
      countrySelector.append(option);
    }
  })
  .catch((err) => {
    countrySelector.innerHTML =
      '<option selected value="error">Error occurred</option>';
  });

const validForm = (field) => {
  const { name, value } = field;
  let isValid = true;

  switch (name) {
    case "name":
      if (!value) {
        name_error.classList.add("show-error");
        isValid = false;
      } else {
        name_error.classList.remove("show-error");
      }
      break;

    case "country":
      if (!value) {
        countrySelector_error.classList.add("show-error");
        isValid = false;
      } else {
        countrySelector_error.classList.remove("show-error");
      }
      break;

    case "email":
      if (!value.includes("@gmail.com")) {
        email_error.classList.add("show-error");
        isValid = false;
      } else {
        email_error.classList.remove("show-error");
      }
      break;

    case "term":
      if (!field.checked) {
        termCondition_error.classList.add("show-error");
        isValid = false;
      } else {
        termCondition_error.classList.remove("show-error");
      }
      break;

    default:
      break;
  }
  return isValid;
};

form.addEventListener("change", (e) => {
  if (e.target.tagName == "INPUT" || e.target.tagName == "SELECT") {
    if (["name", "country", "email", "term"].includes(e.target.name)) {
      validForm(e.target);
    }
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  let isFormValid = true;

  const formFields = form.querySelectorAll("input, select");
  formFields.forEach((field) => {
    if (!validForm(field)) {
      isFormValid = false;
    }
  });

  if (isFormValid) {
    MsgBox.classList.add("show");
    form.reset();
  } else {
    MsgBox.classList.remove("show");
  }
});
