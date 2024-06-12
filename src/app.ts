import express from 'express';
import userRoutes from '../src/routes/userRoutes';
import postRoutes from '../src/routes/postRoutes';
import commentRoutes from '../src/routes/commentRoutes';

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

export default app;
