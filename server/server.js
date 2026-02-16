import express from 'express';
import cors from 'cors';
<<<<<<< HEAD
import dotenv from 'dotenv'
=======
import 'dotenv/config';
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5
import connectDB from './config/db.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"
<<<<<<< HEAD
import { showRouter } from './routes/showRoutes.js';
import { bookingRouter } from './routes/bookingRouter.js';
import { adminRouter } from './routes/adminRoutes.js';
import { userRouter } from './routes/userRoutes.js';
import { stripeWebhooks } from './controllers/stripeWebhooks.js';

dotenv.config();

const app= express();
const port= 3000;

await connectDB();

// stripe  webhooks route
app.use('/api/stripe', express.raw({type: 'application/json'}), stripeWebhooks)

=======

const app= express();
const port= 3000;
await connectDB();

>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5
//middleware
app.use(express.json())
app.use(cors())
app.use(clerkMiddleware())

//api routes
app.get('/', (req, res)=> res.send("server is Live!"));
app.use('/api/inngest', serve({client: inngest, functions}))
<<<<<<< HEAD
app.use('/api/show',showRouter)
app.use('/api/booking',bookingRouter)
app.use('/api/admin',adminRouter)
app.use('/api/user',userRouter)

=======
>>>>>>> 15deb85855f6bd6d6b0556a28c71976c2e380cf5

//starting server
app.listen(port, ()=> console.log(`server is listennig at http://localhost:${port}`))