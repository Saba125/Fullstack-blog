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
export type FormData = {
  username: string;
  password: string;
};
export type TUser = {
  _id: string;
  username: string
}
export type InputFormData =  {
  title: string;
  category: string;
  images: FileList | null;
  description: string;
}