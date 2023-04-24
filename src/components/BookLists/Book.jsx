import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import './Lists.css';

const Book = ({ id, title, author, edition_count, first_publish_year, cover_img, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTitleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={cover_img} alt='cover' />
      </div>
      <div className='book-item-info text-center'>
        <div className='book-item-info-item title fw-7 fs-18' onClick={handleTitleClick}>
          <span>{title}</span>
        </div>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{author.join(', ')}</span>
        </div>
        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{first_publish_year}</span>
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel={title}
          className='modal'
        >
          <div className='modal-content'>
            <div className='modal-header'>
              <h2>{title}</h2>
            </div>
            <div className='modal-body'>
              <div className='modal-img'>
                <img src={cover_img} alt='cover' />
              </div>
              <div className='modal-text'>
                <p>{`Author: ${author.join(', ')}`}</p>
                <p>{`Total Editions: ${edition_count}`}</p>
                <p>{`First Publish Year: ${first_publish_year}`}</p>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Book;
