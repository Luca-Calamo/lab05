function ProductForm({ onSubmit, onClose }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        
        const newBook = {
            title: formData.get('bk-title'),
            author: formData.get('bk-author'),
            publisher: formData.get('bk-publisher'),
            year: formData.get('bk-pub-year'),
            language: formData.get('bk-language'),
            pages: formData.get('bk-pages'),
        };

        onSubmit(newBook);
        e.target.reset();
        if (onClose) onClose();
    };

    return (
        <div className='form-container'>
            <h2>New Book</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label>Title</label>
                    <input
                        name='bk-title'
                        type='text'
                        placeholder='Book Title...'
                        required
                    />
                </div>
                <div className='form-control'>
                    <label>Author</label>
                    <input 
                        name='bk-author' 
                        type='text' 
                        placeholder='Author...'
                        required 
                    />
                </div>
                <div className='form-control'>
                    <label>Publisher</label>
                    <input
                        name='bk-publisher'
                        type='text'
                        placeholder='Publisher...'
                        required
                    />
                </div>
                <div className='form-control'>
                    <label>Publication Year</label>
                    <input 
                        name='bk-pub-year' 
                        type='number'
                        required 
                    />
                </div>
                <div className='form-control'>
                    <label>Language</label>
                    <input
                        name='bk-language'
                        type='text'
                        placeholder='Language...'
                        required
                    />
                </div>
                <div className='form-control'>
                    <label>Pages</label>
                    <input 
                        name='bk-pages' 
                        type='number'
                        required 
                    />
                </div>
                <button type="submit" className='btn primary'>Save</button>
            </form>
        </div>
    );
}
export default ProductForm;

// function ProductForm({ onAdd, onClose }) {
//     function handleSubmit(e) {
//         // e.preventDefault();
//         // const data = new FormData(e.target);

//         const newBook = {
//             id: nanoid(),
//             title: data.get('bk-title'),
//             author: data.get('bk-author'),
//             publisher: data.get('bk-publisher'),
//             publicationYear: data.get('bk-pub-year'),
//             language: data.get('bk-language'),
//             pages: data.get('bk-pages'),
//         };

//         onAdd(newBook); // add book to state
//         e.target.reset();

//         if (onClose) onClose(); // close modal if available
//     }

//     return (
//         <div className='form-container'>
//             <h2>New Book</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='form-control'>
//                     <label>Title</label>
//                     <input
//                         name='bk-title'
//                         type='text'
//                         placeholder='Book Title...'
//                     />
//                 </div>
//                 <div className='form-control'>
//                     <label>Author</label>
//                     <input name='bk-author' type='text' placeholder='...' />
//                 </div>
//                 <div className='form-control'>
//                     <label>Publisher</label>
//                     <input
//                         name='bk-publisher'
//                         type='text'
//                         placeholder='Publisher...'
//                     />
//                 </div>
//                 <div className='form-control'>
//                     <label>Publication Year</label>
//                     <input name='bk-pub-year' type='number' />
//                 </div>
//                 <div className='form-control'>
//                     <label>Language</label>
//                     <input
//                         name='bk-language'
//                         type='text'
//                         placeholder='Language...'
//                     />
//                 </div>
//                 <div className='form-control'>
//                     <label>Pages</label>
//                     <input name='bk-pages' type='number' />
//                 </div>
//                 <button className='btn primary'>Save</button>
//             </form>
//         </div>
//     );
// }

// export default ProductForm;
