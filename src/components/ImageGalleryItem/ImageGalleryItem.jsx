import React, {useState} from 'react'
import {StyledItem} from './ImageGalleryItem.styled'
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root');

const ImageGalleryItem = ({ large, small}) => {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    document.body.style.overflow = 'hidden';
    setModalOpen(true);
  }

 

  const closeModal= () => {
    document.body.style.overflow = 'unset';
    setModalOpen(false);
  }

  return (
    <div>
      <StyledItem className="gallery-item">
        <img src={small} alt="" onClick={openModal}/>

        <Modal
          isOpen={modalOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <img src={large} alt=""/>
        </Modal>
    </StyledItem>
    </div>
  )
}

export default ImageGalleryItem
