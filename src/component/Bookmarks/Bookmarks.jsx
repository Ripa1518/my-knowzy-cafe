import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        
        <div className="md:w-1/3 ml-4 border border-blue-800 rounded-lg">
            <div className="text-4xl m-4">Reading time : {readingTime}</div>
        <h4 className="text-3xl ml-3">Bookmarked Blogs : {bookmarks.length}</h4>
        {
            bookmarks.map(bookmark=>
                <Bookmark key={Bookmark.id} bookmark={bookmark}></Bookmark>
            )
        }
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
}

export default Bookmarks;


