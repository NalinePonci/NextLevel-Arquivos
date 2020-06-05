import express from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import PointsController from './controllers/pointsControllers';
import ItemsController from './controllers/itemsControllers';
//se eu usar await preciso do async
//index , show, create , update, delete 
const routes = express.Router();
const itemsController = new ItemsController();
const pointsControllers = new PointsController();
const upload = multer(multerConfig);

//esse routs e para buscar o nome e a imagem dos itens ja feitos no banco 

routes.get('/items', itemsController.index);
routes.get('/points/:id', pointsControllers.show)
routes.get('/points', pointsControllers.index)
routes.post('/points', pointsControllers.create);

routes.post('/points', upload.single('image'),pointsControllers.create);

export default routes;