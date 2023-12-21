import express from 'express'
import { createCategories } from '../controllers/categories.controller.js'
import { getCategories } from '../controllers/categories.controller.js'

import { authVerify } from '../middlewares/authVerify.js'
const router = express.Router()
router.post("/categories",  createCategories)
router.get("/categories",  getCategories)

export default router