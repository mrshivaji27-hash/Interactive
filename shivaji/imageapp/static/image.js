
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.gallery-item img');
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.getElementById('close');

  // Function to open modal
  const openModal = (src, alt) => {
    modal.style.display = 'flex';
    modalImg.src = src;
    modalImg.alt = alt || 'Expanded image';
    modalImg.classList.add('fade-in');
  };

  // Function to close modal
  const closeModal = () => {
    modal.style.display = 'none';
    modalImg.src = '';
    modalImg.alt = '';
    modalImg.classList.remove('fade-in');
  };

  // Open modal on image click
  images.forEach(image => {
    image.addEventListener('click', () => {
      openModal(image.src, image.alt);
    });
  });

  // Close modal on close button
  closeBtn.addEventListener('click', closeModal);

  // Close modal on background click
  modal.addEventListener('click', event => {
    if (event.target === modal) {
      closeModal();
    }
  });
});
