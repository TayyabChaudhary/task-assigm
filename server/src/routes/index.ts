import { Router } from 'express';
import { healthRouter } from './health.routes';

const router = Router();

// Health check route
router.use('/health', healthRouter);

// Add more routes here
// router.use('/hotels', hotelRouter);
// router.use('/bookings', bookingRouter);
// router.use('/users', userRouter);

export default router;
