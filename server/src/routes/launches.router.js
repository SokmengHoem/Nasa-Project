const express = require('express');
const { httpGetAllLaunches,  httpAndNewLaunch, httpAbortLaunch} = require('../controllers/launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/',  httpAndNewLaunch );
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = launchesRouter;