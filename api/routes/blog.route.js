import express from 'express'
import { createBlog } from '../controllers/blog.controller.js'
import { getBlogByCat  } from '../controllers/blog.controller.js'
import { authVerify } from '../middlewares/authVerify.js'
const router = express.Router()
router.post("/blog", authVerify, createBlog)
router.get("/blog/:catName",  getBlogByCat)

export default router