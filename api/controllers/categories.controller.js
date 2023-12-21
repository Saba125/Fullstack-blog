import Category from '../models/categories.model.js'
export const createCategories = async(req, res) => {
    try {
        const newCategory = await new Category(req.body) 
        await newCategory.save()
        res.status(200).send("Category created successfully")
    } catch (error) {
        res.status(404).send("Error has occurred: " + error.message)
    }
}
export const getCategories = async(req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).send(categories)
    } catch (error) {
        res.status(404).send("Error has occurred: " + error.message)
    }
}
