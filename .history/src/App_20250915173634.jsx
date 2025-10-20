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
                <New title='New' />
                <div>
                    {' '}
                    {books.map((book) => (
                        <Book key={book.id} book={book} />
                    ))}
                </div>
            </div>
            <Footer text='Luca Calamo 2025' />
        </div>
    );
}
export default App;
