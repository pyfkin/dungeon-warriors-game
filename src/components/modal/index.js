import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function ModalMessage({isShowModal, onModalHide})
{
    return (
        <Modal show={isShowModal} onHide={onModalHide} size="sm">
            <Modal.Header closeButton>
                <Modal.Title>Warning.</Modal.Title>
            </Modal.Header>
            <Modal.Body>You must input Player name!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onModalHide}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

ModalMessage.propTypes = {
    isShowModal: PropTypes.bool,
    onModalHide: PropTypes.func,
};

export default ModalMessage;