import express, { Express, Request, Response, NextFunction }  from 'express';
// import dotenv from 'dotenv';

var router = express.Router();
 
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('Hello v1.0 GET API from TechBrij.com');
});
 
router.post('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('Hello v1.0 POST API from TechBrij.com');
});
 
module.exports = router;