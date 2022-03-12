"usestric";

const star = () => {
  const btnSubmit = document.querySelector(".btn");
  btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const payLoad = formInfo();
    postData(payLoad);
  });
};

const formInfo = () => {
  const customer = {};
  customer.name = document.querySelector("#customer-name").value;
  customer.email = document.querySelector("#customer-email").value;
  console.log(customer);
  return JSON.stringify(customer);
};

const postData = (payLoad) => {
  //   console.log(payLoad);
  fetch("https://reicpe-9cc2.restdb.io/rest/babybox", {
    method: "POST",
    headers: {
      "x-apikey": "606d5dcef5535004310074f4",
      "Content-Type": "application/json",
    },
    body: payLoad,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      alert("your mail was save");
    })
    .catch((err) => {
      console.error(err);
    });
};

window.addEventListener("load", star);
