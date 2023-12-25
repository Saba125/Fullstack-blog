import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "@/pages/CreateBlog/CreateBlog.module.css";
import { InputFormData } from "@/types";
import axios from "axios";
type User = {
  _id: string;
  username: string;
};
const CreateBlog: React.FC = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Food");
  const [content, setContent] = useState("");
  const storedUser = localStorage.getItem("user");
  let userData: User | null = null;
  try {
    userData = storedUser !== null ? JSON.parse(storedUser) : null;
  } catch (error) {
    console.error("Error parsing stored user data:", error);
  }
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(title, category, content);
    try {
      const res = await axios.post(
        "http://localhost:8800/api/blog",
        { userId: userData?._id, title, content, category },
        {
          method: "POST",
          withCredentials: true,
        }
      );
      console.log("Blog created");
    } catch (error) {
      console.log("Error creating blog", error);
    }
  };
  return (
    <div className="add">
      <div className="container">
        <h1 className={styles.heading}>Add New Gig</h1>
        <form className={styles.sections}>
          <div className={styles.info}>
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="e.g. I will do something I'm really good at"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="cats"
              id="cats"
            >
              <option value="Food">Food</option>
              <option value="Coding">Coding</option>
              <option value="Fashion">Fashion</option>
              <option value="Culture">Culture</option>
              <option value="Travel">Travel</option>
              <option value="Styles">Styles</option>
            </select>
            <label htmlFor="">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="">Description</label>
            <textarea
              onChange={(e) => setContent(e.target.value)}
              placeholder="Brief descriptions to introduce your service to customers"
            ></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
