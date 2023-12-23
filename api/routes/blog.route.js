import express from 'express'
import { createBlog, getSingleBlog } from '../controllers/blog.controller.js'
import { getBlogByCat, getAllBlog  } from '../controllers/blog.controller.js'
import { authVerify } from '../middlewares/authVerify.js'
const router = express.Router()
router.post("/blog", authVerify, createBlog)
router.get("/blog/:catName",  getBlogByCat)
router.get("/blog", getAllBlog)
router.get("/singleblog/:id", getSingleBlog)
export default router