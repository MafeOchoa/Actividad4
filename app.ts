import express from 'express';

import indexRouter from './src/infrastructure/routes/index';
import libroRouter from './src/infrastructure/routes/libroRouter';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/libro', libroRouter);

// error handler
// app.use(function(err, req: Request, res: Response, next) {
//   res.status(err.status || 500).send('error');
// });

export default app;
