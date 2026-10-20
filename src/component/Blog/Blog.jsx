import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog,handleAddToBookmark,handleMarkAsRead}) => {
    const {title,'cover-image':cvrimg , reading_time,author_img,posted_date,author,hashtags} = blog;
    return (
        <div className='mb-10'>
            <img className='w-full  mb-4' src={cvrimg} alt={`cover-picture of the title: ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center mr-4'>
                    <span>{reading_time} min read</span>
                    <button className='ml-2 text-blue-600' onClick={()=>handleAddToBookmark(blog)}><FaRegBookmark />
                    </button>
                </div>
            </div>
            <h2 className="text-3xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button 
            onClick={()=>handleMarkAsRead(reading_time)}
            className='text-purple-700 font-bold underline'>Mark as read</button>
        </div>
    );
};

Blog.propTypes ={
    blog : PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blog;
