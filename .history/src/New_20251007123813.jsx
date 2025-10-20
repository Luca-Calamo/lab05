// import Modal from './Modal';
// import ProductForm from './ProductForm';

// function New(props) {
//     return (
//         <div className='new_grid'>
//             <Modal btnLabel='New' btnClassName='new_container'>
//                 <ProductForm></ProductForm>
//             </Modal>

//             <button className='edit-btn'>Edit</button>
//             <button className='delete-btn'>Delete</button>
//         </div>
//     );
// }

// export default New;
import Modal from './Modal';
import ProductForm from './ProductForm';

function New({ title, onSubmit }) {
    return (
        <div className='new_grid'>
            <Modal btnLabel={title} btnClassName='new_container'>
                <ProductForm onSubmit={onSubmit} />
            </Modal>
        </div>
    );
}

export default New;
