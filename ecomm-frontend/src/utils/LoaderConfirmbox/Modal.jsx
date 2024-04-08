import React, { useContext, useState } from 'react'
import { ProductContext } from '../HttpServiceStore/ContextStoreData/ProductContextProvider';

import "./Modal.css";

export const Modal = ({ productId, onCancel, closeModal }) => {

    const { deleteAction } = useContext(ProductContext);


    return (
        <div
            className="modal-container"
            onClick={(e) => {
                if (e.target.className === "modal-container")
                    closeModal();
            }}
        >
            <div className="modal">
                <div
                    className="modal-header"
                    onClick={() => closeModal()}
                >
                    <p className="close">&times;</p>
                </div>

                <div className="modal-content text-center">
                    <h3>{`Are you sure you want to delete product ${productId} ?`}</h3>
                    <p></p>
                </div>
                <div className="modal-footer">
                    <button
                        type="submit"
                        className="btn-success"
                        onClick={() => deleteAction(productId)}
                    >
                        Submit
                    </button>
                    <button
                        type="submit"
                        className='btn-error'
                        onClick={() => onCancel()}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};