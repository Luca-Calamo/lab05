import Book from './Book';
import Header from './Header';
import New from './New';
import Footer from './Footer';
import books from '../data/books.json';

function App() {
    return (
        <div className='page'>
            <Header />

            <div className='content'>
                <div className='new-book'>
                    <New title='New' />
                </div>
                <div className='books-catalog'></div>
                {books.map((book) => (
                    <Book key={book.id} book={book} />
                ))}
            </div>
            <Footer text='Luca Calamo 2025' />
        </div>
    );
}
export default App;
