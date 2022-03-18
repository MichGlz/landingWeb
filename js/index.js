"usestric";

const star = () => {
  const btnSubmit = document.querySelector(".btn");
  const inputName = document.querySelector("#customer-name");
  const inputEmail = document.querySelector("#customer-email");
  const checkBox = document.querySelector('[type="checkbox"]');
  btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const payLoad = formInfo(inputName, inputEmail);
    postData(payLoad, inputName, inputEmail, checkBox, btnSubmit);
  });
};

const formInfo = (inputName, inputEmail) => {
  const customer = {};
  customer.name = inputName.value;
  customer.email = inputEmail.value;
  console.log(customer);
  return customer;
};

const postData = (payLoad, inputName, inputEmail, checkBox, btnSubmit) => {
  btnSubmit.classList.add("thincking");

  fetch("/api/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payLoad),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      btnSubmit.classList.remove("thincking");
      alert(`${payLoad.name} thank you for your preference!
       your email was save`);
      inputName.value = "";
      inputEmail.value = "";
      checkBox.checked = false;
    })
    .catch((err) => {
      console.error(err);
    });
};

window.addEventListener("load", star);
