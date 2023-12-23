import styles from '@/pages/SinglePost/postPage.module.css'
import { TBlog } from '@/types';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
const PostPage = () => {
    const params = useParams()
    const {id} = params
    const { data, isError, isLoading } = useQuery<TBlog>("singleblog", () =>
    fetch(`http://localhost:8800/api/singleblog/${id}`, {
      method: "GET",
    }).then((res) => res.json())
  );
  console.log(data)
    return ( 
        <div>
        </div>
     );
}
 
export default PostPage;