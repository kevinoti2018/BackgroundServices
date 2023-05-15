import express from "express"
import cron from 'node-cron'
import sendWelcomeEmail from "./Email";
const app =  express()
app.use(express.json())

cron.schedule('*/5 * * * * *', async() => {
    console.log('running a task every 5 Seconds');
    await sendWelcomeEmail()
  });
  app.listen(8080,()=>{console.log("app is running")})
