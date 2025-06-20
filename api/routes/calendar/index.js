import express from 'express'
import verifyToken from '../../middlewares/verifyToken.js'

const jsonBodyParser = express.json()

const router = express.Router()

import getEvents from './getEvents.js'
import postEvents from './postEvents.js'
import authRoutes from './auth.js'

router.use(authRoutes)

router.get('/events', getEvents)
router.post('/events', verifyToken, jsonBodyParser, postEvents)

export default router
