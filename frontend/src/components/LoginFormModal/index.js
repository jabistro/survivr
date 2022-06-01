import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import '../LoginFormPage/LoginForm.css'

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button className='splash-login-button' onClick={() => setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;
