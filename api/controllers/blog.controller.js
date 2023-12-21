import Blog from "../models/blog.model.js";
export const createBlog = async(req, res) => {
  try {
    const newBlog = new Blog({
        userId: req.userId,
        ...req.body
    });
    await newBlog.save();
    res.status(200).send("Blog created successfully")
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const getBlogByCat = async(req, res) => {
    const catName = req.params.catName
    try {
        const blogByCat = await Blog.find({category: catName})
        res.send(blogByCat)
    } catch (error) {
        res.status(404).send("Error has occurred: ")
    }
}