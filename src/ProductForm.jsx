function ProductForm({ onSubmit, onClose, initialData }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const bookData = {
            title: formData.get('bk-title'),
            author: formData.get('bk-author'),
            publisher: formData.get('bk-publisher'),
            year: formData.get('bk-pub-year'),
            language: formData.get('bk-language'),
            pages: formData.get('bk-pages'),
            image: formData.get('bk-image'),
        };

        onSubmit(bookData);
        e.target.reset(); // Reset the form
        if (onClose) onClose();
    };

    return (
        <div className='form-container'>
            <h2>{initialData ? 'Edit Book' : 'New Book'}</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label>Title</label>
                    <input
                        name='bk-title'
                        type='text'
                        placeholder='Book Title...'
                        defaultValue={initialData?.title || ''}
                    />
                </div>
                <div className='form-control'>
                    <label>Author</label>
                    <input
                        name='bk-author'
                        type='text'
                        placeholder='Author...'
                        defaultValue={initialData?.author || ''}
                    />
                </div>
                <div className='form-control'>
                    <label>Publisher</label>
                    <input
                        name='bk-publisher'
                        type='text'
                        placeholder='Publisher...'
                        defaultValue={initialData?.publisher || ''}
                    />
                </div>
                <div className='form-control'>
                    <label>Publication Year</label>
                    <input
                        name='bk-pub-year'
                        type='number'
                        defaultValue={initialData?.year || ''}
                    />
                </div>
                <div className='form-control'>
                    <label>Language</label>
                    <input
                        name='bk-language'
                        type='text'
                        placeholder='Language...'
                        defaultValue={initialData?.language || ''}
                    />
                </div>
                <div className='form-control'>
                    <label>Pages</label>
                    <input
                        name='bk-pages'
                        type='number'
                        defaultValue={initialData?.pages || ''}
                    />
                </div>
                <div className='form-control'>
                    <label>URL (book cover)</label>
                    <input
                        name='bk-image'
                        type='url'
                        placeholder='Optional: Enter image URL'
                        defaultValue={initialData?.image || ''}
                    />
                </div>
                <button type='submit' className='btn primary'>
                    Save
                </button>
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
