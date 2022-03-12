"usestric";

const star = () => {
  const btnSubmit = document.querySelector(".btn");
  const inputName = document.querySelector("#customer-name");
  const inputEmail = document.querySelector("#customer-email");
  const checkBox = document.querySelector('[type="checkbox"]');
  btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const payLoad = formInfo(inputName, inputEmail);
    postData(payLoad, inputName, inputEmail, checkBox);
  });
};

const formInfo = (inputName, inputEmail) => {
  const customer = {};
  customer.name = inputName.value;
  customer.email = inputEmail.value;
  console.log(customer);
  return customer;
};

const postData = (payLoad, inputName, inputEmail, checkBox) => {
  //   console.log(payLoad);
  fetch("https://reicpe-9cc2.restdb.io/rest/babybox", {
    method: "POST",
    headers: {
      "x-apikey": "606d5dcef5535004310074f4",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payLoad),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
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
