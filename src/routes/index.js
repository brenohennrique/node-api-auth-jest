import express from 'express'

import authMiddleware from '../app/middleware/auth'

// controllers
import SessionController from '../app/controllers/SessionController'

const router = express.Router()

router.post('/sessions', SessionController.store)

router.use(authMiddleware)

router.get('/dashboard', (req, res) => {
  return res.status(200).send()
})

module.exports = router
