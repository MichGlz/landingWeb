import fetch from "node-fetch";
require("dotenv").config();
exports.handler = async function (event, context) {
  const getData = async () => {
    console.log(user);
    const res = await fetch(endpoint + `?q={"sub":"${user.sub}"}`, {
      headers: {
        "x-apikey": process.env.APIKEY,
      },
    });
    const data = await res.json();
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  };
  return getData();
};
