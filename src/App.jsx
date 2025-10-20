import { useState } from 'react';
import Book from './Book';
import Header from './Header';
import New from './New';
import Footer from './Footer';
import './App.css';

function App() {
    const [books, setBooks] = useState(() => {
        const savedBooks = localStorage.getItem('books');
        return savedBooks ? JSON.parse(savedBooks) : [];
    });
    const [selectedBookId, setSelectedBookId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterLanguage, setFilterLanguage] = useState('all');

    const handleBookSubmit = (formData) => {
        const newBook = {
            ...formData,
            isbn13: Date.now().toString(),
            price: '$0.00',
            url: formData.image || '',
            image: formData.image || '',
            selected: false,
        };
        setBooks((prevBooks) => {
            const newBooks = [newBook, ...prevBooks];
            localStorage.setItem('books', JSON.stringify(newBooks));
            return newBooks;
        });
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
            setBooks((prevBooks) => {
                const newBooks = prevBooks.filter(
                    (book) => book.isbn13 !== selectedBookId
                );
                localStorage.setItem('books', JSON.stringify(newBooks));
                return newBooks;
            });
            setSelectedBookId(null);
        }
    };

    const handleUpdateBook = (formData) => {
        if (selectedBookId) {
            setBooks((prevBooks) => {
                const newBooks = prevBooks.map((book) => {
                    if (book.isbn13 === selectedBookId) {
                        return {
                            ...book,
                            ...formData,
                            image: formData.image || book.image,
                            url: formData.image || book.url,
                        };
                    }
                    return book;
                });
                localStorage.setItem('books', JSON.stringify(newBooks));
                return newBooks;
            });
            setSelectedBookId(null);
        }
    };

    return (
        <div className='page'>
            <Header />
            <div className='content'>
                <div className='new_grid'>
                    <New title='New' onSubmit={handleBookSubmit} />
                    <div className='filters'>
                        <input
                            type='text'
                            placeholder='Search books...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='search-input'
                        />
                        <select
                            value={filterLanguage}
                            onChange={(e) => setFilterLanguage(e.target.value)}
                            className='language-filter'
                        >
                            <option value='all'>All Languages</option>
                            {[...new Set(books.map((book) => book.language))]
                                .filter(Boolean)
                                .sort()
                                .map((lang) => (
                                    <option key={lang} value={lang}>
                                        {lang}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <button
                        className='btn secondary'
                        onClick={() => {
                            if (selectedBookId) {
                                const book = books.find(
                                    (b) => b.isbn13 === selectedBookId
                                );
                                if (book) {
                                    const formContainer =
                                        document.createElement('div');
                                    formContainer.className = 'form-container';

                                    const form = document.createElement('form');
                                    form.id = 'edit-form';

                                    const formContent = `
                                        <h2>Edit Book</h2>
                                        <div class="form-control">
                                            <label>Title:</label>
                                            <input name="bk-title" type="text" value="${
                                                book.title
                                            }" />
                                        </div>
                                        <div class="form-control">
                                            <label>Author:</label>
                                            <input name="bk-author" type="text" value="${
                                                book.author
                                            }" />
                                        </div>
                                        <div class="form-control">
                                            <label>Publisher:</label>
                                            <input name="bk-publisher" type="text" value="${
                                                book.publisher
                                            }" />
                                        </div>
                                        <div class="form-control">
                                            <label>Publication Year:</label>
                                            <input name="bk-pub-year" type="number" value="${
                                                book.year
                                            }" />
                                        </div>
                                        <div class="form-control">
                                            <label>Language:</label>
                                            <input name="bk-language" type="text" value="${
                                                book.language
                                            }" />
                                        </div>
                                        <div class="form-control">
                                            <label>Pages:</label>
                                            <input name="bk-pages" type="number" value="${
                                                book.pages
                                            }" />
                                        </div>
                                        <div class="form-control">
                                            <label>URL (book cover):</label>
                                            <input name="bk-image" type="url" value="${
                                                book.image || ''
                                            }" />
                                        </div>
                                        <button type="submit" class="btn primary">Save</button>
                                        <button type="button" class="btn secondary">Cancel</button>
                                    `;

                                    form.innerHTML = formContent;

                                    // Add cancel button handler
                                    const cancelButton =
                                        form.querySelector('.btn.secondary');
                                    cancelButton.onclick = () =>
                                        formContainer.remove();

                                    formContainer.appendChild(form);
                                    document.body.appendChild(formContainer);

                                    form.onsubmit = (e) => {
                                        e.preventDefault();
                                        const formData = new FormData(e.target);
                                        handleUpdateBook({
                                            title: formData.get('bk-title'),
                                            author: formData.get('bk-author'),
                                            publisher:
                                                formData.get('bk-publisher'),
                                            year: formData.get('bk-pub-year'),
                                            language:
                                                formData.get('bk-language'),
                                            pages: formData.get('bk-pages'),
                                            image: formData.get('bk-image'),
                                        });
                                        formContainer.remove();
                                    };
                                }
                            }
                        }}
                        disabled={!selectedBookId}
                    >
                        Edit
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
                    {books
                        .filter(
                            (book) =>
                                (filterLanguage === 'all' ||
                                    book.language === filterLanguage) &&
                                (searchTerm === '' ||
                                    book.title
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase()) ||
                                    book.author
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase()) ||
                                    book.publisher
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase()))
                        )
                        .map((book) => (
                            <Book
                                key={book.isbn13}
                                book={book}
                                onSelect={() => handleBookSelect(book.isbn13)}
                            />
                        ))}
                </div>
            </div>
            <Footer text='Luca Calamo 2025' />
        </div>
    );
}

export default App;
