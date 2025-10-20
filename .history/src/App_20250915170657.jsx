import Book from './Book';
import Header from './Header';
import New from './New';
import Footer from './Footer';

function App() {
    return (
        <div className='page'>
            <div>
                <Header />
                <div className='content'>
                    <New title='New' />
                    {/* <Book
                        img='https://itbook.store/img/books/9780470275191.png'
                        author='Eric Geier'
                        link='https://itbook.store/books/9780470275191-home-networking-all-in-one-desk-reference-for-dummies'
                    />
                    <Book
                        img='https://itbook.store/img/books/9781789139396.png'
                        author='	Koshik Raj'
                        link='https://itbook.store/books/9781789139396'
                    /> */}
                </div>
                <Footer text='Luca Calamo 2025' />
            </div>
        </div>
    );
}
export default App;
