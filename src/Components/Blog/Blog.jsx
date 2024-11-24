import PropTypes from "prop-types";

const Blog = ({blog}) => {
    const {cover, title, author, author_img, posted_date, reading_time, 
        hashtags} = blog;

    return (
        <div>
            <img src={cover} alt={`Cover Picture Of the Title ${title}`} />
            <h2>{title}</h2>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img className="rounded-full :" src={author_img} alt={`No author are here${author}`} />
                    <div className="ml-4">
                        <h2>{author}</h2>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div className="flex">
                    <span>{reading_time} min read</span>

                </div>
            </div>
            {
                hashtags.map((hash, idx)=><span key={idx}><a href=""> <br />{hash}</a></span>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;