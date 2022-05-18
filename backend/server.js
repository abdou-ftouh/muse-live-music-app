const express = require('express')

const app = express()


app.get('/',(req,res)=>{
    res.send('Welcome to our World!')
})

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Music app is running on port ${port}`);
  });