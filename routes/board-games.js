import { Router } from 'express'
import * as boardGamesCtrl from '../controllers/board-games.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', boardGamesCtrl.index)

/*---------- Protected Routes ----------*/

export {
  router
}