import fetch from "node-fetch";
require("dotenv").config();
exports.handler = async function (event, context) {
  console.log(event.body);

  const getData = async () => {
    const res = await fetch("https://reicpe-9cc2.restdb.io/rest/babybox", {
      method: "POST",
      headers: {
        "x-apikey": process.env.APIKEY,
        "Content-Type": "application/json",
      },
      body: JSON.parse(event.body),
    });
    const data = await res.json();

    return {
      statusCode: 200,
      body: event.body,
    };
  };
  return getData();
};
