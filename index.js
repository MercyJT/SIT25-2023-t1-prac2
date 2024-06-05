const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.get('/addTwoNumbers', (req, res) => {
  const { num1, num2 } = req.query;

  if (num1 && num2 && !isNaN(num1) && !isNaN(num2)) {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    const sum = number1 + number2;

    res.json({
      data: sum,
      message: 'success',
      statusCode: 200
    });
  } else {
    res.status(400).json({
      message: 'Invalid input. Please provide valid numbers for num1 and num2.',
      statusCode: 400
    });
  }
});

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log("Click ctrl + c to STOP the server ");
});

module.exports = server;
