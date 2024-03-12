const express = require('express');

const app = express();
const port = 3000;

let message = "This is the initial message";

app.get('/update-message', (req, res) => {
  // Update the message on the server-side (simulate some logic)
  message = "Message updated!";
  res.send(message);
});

app.listen(port, () => {
  console.log("Server listening on port ${port}");
});