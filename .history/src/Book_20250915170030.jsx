function Book({ book }) {
    return (
        <div className='container'>
            <a href={book.url} target='_blank' rel='noreferrer'>
                <div className='image'>
                    <img src={book.image} alt={book.title} />
                </div>
                <div className='title'>
                    <h2>{book.title}</h2>
                </div>
            </a>
        </div>
    );
}

export default Book;
