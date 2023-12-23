export type TCategory = {
  _id: string;
  catName: string;
  image: string;
};
export type TBlog = {
  _id: string;
  userId: string;
  title: string;
  content: string;
  category: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};