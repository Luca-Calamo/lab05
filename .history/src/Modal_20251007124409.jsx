import { useRef } from 'react';

function Modal({ btnLabel, btnClassName, children }) {
    const modalRef = useRef();

    function openModal() {
        modalRef.current.showModal();
    }

    function closeModal() {
        modalRef.current.close();
    }

    return (
        <>
            <button onClick={openModal} className={btnClassName}>
                {btnLabel}
            </button>
            <dialog ref={modalRef}>
                {typeof children === 'function'
                    ? children(closeModal)
                    : children}
            </dialog>
        </>
    );
}
export default Modal;
