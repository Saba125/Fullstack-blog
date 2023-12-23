import styles from '@/components/SinglePost/SinglePost.module.css' 
import { TBlog } from '@/types';
interface SinglePostProps {
  item: TBlog
}
const SinglePost = ({item}: SinglePostProps) => {
    return ( 
        <div className={styles.posts}>
        <div className={styles.imgContainer}>
          <img src={item.image} />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.date}>
            {item.createdAt.substring(0, 10)} - <span className={styles.category}>{item.category}</span>
          </p>
          <div className={styles.details}>
            <h3 className={styles.title}>
              {item.title}
            </h3>
            <p className={styles.desc}>
                {item.content}
            </p>
          </div>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
     );
}
 
export default SinglePost;