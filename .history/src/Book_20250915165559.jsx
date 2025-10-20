function Book({ book }) {
    return (
        <div className='container'>
            <img className='img' src={props.img} alt='Book cover' />
            <div className='details'>
                <span>By:</span>
                <span className='author'>{props.author}</span>
                <a className='link' href={props.link} target='_blank'>
                    Learn More
                </a>
            </div>
        </div>
    );
}

export default Book;
