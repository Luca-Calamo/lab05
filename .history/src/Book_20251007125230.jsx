function Book({ book, onSelect }) {
    return (
        <div
            className={`container ${book.selected ? 'selected' : ''}`}
            onClick={onSelect}
        >
            <div className='image'>
                <img src={book.image} alt={book.title} />
            </div>
            <div className='info'>
                <h3>{book.title}</h3>
                <p className='price'>{book.price}</p>
            </div>
            {/* <button className='learn-more'>
                <a
                    className='book-link'
                    href={book.url}
                    target='_blank'
                    rel='noreferrer'
                >
                    Learn More
                </a>
            </button> */}
        </div>
    );
}

export default Book;
