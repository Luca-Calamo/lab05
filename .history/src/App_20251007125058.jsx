import { useState } from 'react';
import Book from './Book';
import Header from './Header';
import New from './New';
import Footer from './Footer';
import './App.css';

function App() {
    const [books, setBooks] = useState([]);
    const [selectedBookId, setSelectedBookId] = useState(null);

    const handleBookSubmit = (formData) => {
        const newBook = {
            ...formData,
            isbn13: Date.now().toString(),
            price: '$0.00',
            image: 'https://via.placeholder.com/150',
            url: 'https://example.com',
            selected: false,
        };
        setBooks((prevBooks) => [newBook, ...prevBooks]);
    };

    const handleBookSelect = (isbn13) => {
        setBooks((prevBooks) =>
            prevBooks.map((book) => ({
                ...book,
                selected: book.isbn13 === isbn13 ? !book.selected : false,
            }))
        );
        setSelectedBookId((prevSelectedId) =>
            prevSelectedId === isbn13 ? null : isbn13
        );
    };

    const handleDeleteBook = () => {
        if (selectedBookId) {
            setBooks((prevBooks) =>
                prevBooks.filter((book) => book.isbn13 !== selectedBookId)
            );
            setSelectedBookId(null);
        }
    };

    const handleUpdateBook = () => {
        // No-op for now
    };

    return (
        <div className='page'>
            <Header />
            <div className='content'>
                <div className='sidebar'>
                    <New title='New' onSubmit={handleBookSubmit} />
                </div>
                <div className='main-content'>
                    <div className='book-controls'>
                        <button
                            className='btn secondary'
                            onClick={handleUpdateBook}
                            disabled={!selectedBookId}
                        >
                            Update
                        </button>
                        <button
                            className='btn danger'
                            onClick={handleDeleteBook}
                            disabled={!selectedBookId}
                        >
                            Delete
                        </button>
                    </div>
                    <div className='books-grid'>
                        {books.map((book) => (
                            <Book
                                key={book.isbn13}
                                book={book}
                                onSelect={() => handleBookSelect(book.isbn13)}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Footer text='Luca Calamo 2025' />
        </div>
    );
}

export default App;
