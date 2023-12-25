import axios from "axios";

const upload = async(file: File) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "jeblog");
    try {
      const res = await axios.post("https://api.cloudinary.com/v1_1/dobivcvi5/image")
      const {url} = res.data
      return url
    } catch (error) {
      console.log(`Cloudinary ${error}`)
    }
  };
  export default upload