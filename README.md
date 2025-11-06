# Ex.08 Design of Interactive Image Gallery
## Date:05-11-25

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```
image.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Interactive Photo Gallery</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(to right, #fdfbfb, #ebedee);
      color: #333;
    }

    h1 {
      text-align: center;
      padding: 40px 10px 20px;
      font-size: 2.5rem;
      background: linear-gradient(90deg, #ff6a00, #ee0979);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
    }

    .gallery-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 20px;
      padding: 20px;
      max-width: 1200px;
      margin: auto;
    }

    .gallery-item img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 15px;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
      transition: transform 0.35s ease, box-shadow 0.35s ease;
      cursor: pointer;
    }

    .gallery-item img:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    .modal {
      display: none;
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.85);
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }

    .modal-content {
      max-width: 90%;
      max-height: 80%;
      border-radius: 12px;
      box-shadow: 0 0 30px rgba(255, 255, 255, 0.15);
      animation: fadeIn 0.3s ease-in-out;
    }

    .close {
      position: absolute;
      top: 20px;
      right: 30px;
      font-size: 40px;
      color: #fff;
      cursor: pointer;
      font-weight: bold;
      transition: color 0.3s ease;
    }

    .close:hover {
      color: #ffcccc;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @media (max-width: 600px) {
      .gallery-item img {
        height: 180px;
      }
    }
  </style>
</head>
<body>

  <h1>Interactive Photo Gallery</h1>

  <div class="gallery-container">
    <div class="gallery-item">
      <img src="Ferrari.jpg" alt="Image 1">
    </div>
    <div class="gallery-item">
      <img src="mercedes.jpg" alt="Image 2">
    </div>
    <div class="gallery-item">
      <img src="mclaren.jpg" alt="Image 3">
    </div>
    <div class="gallery-item">
      <img src="Bugatti.jpg" alt="Image 4">
    </div>
    <div class="gallery-item">
      <img src="BMW.jpg" alt="Image 5">
    </div>
  </div>

  <div class="modal" id="modal">
    <span class="close" id="close">&times;</span>
    <img class="modal-content" id="modal-img" alt="Expanded view">
  </div>

  <script>
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close');
    const images = document.querySelectorAll('.gallery-item img');

    images.forEach(img => {
      img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImg.src = img.src;
        modalImg.alt = img.alt;
      });
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  </script>

</body>
</html>

image.js


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

style.css


body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(120deg, #f9c5d1, #fce4ec, #ffdde1);
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1{
    color: #000000;
    text-align: center;
    margin-top: 20px;
    font-size: 48px;
    text-decoration: underline;
    
}
h3{
    color: #000000;
    text-align: center;
    margin-top: 20px;
    font-size: 28px;
    background-color: rgb(255, 255, 255); 
    padding: 10px 20px; 
    border-radius: 10px; 
    display: inline-block;


}

.gallery {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 20px;
    flex-wrap: nowrap;
    overflow-x: auto;
    margin-top: 150px; 
}

.gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    flex: 0 0 auto;
}

.gallery-item img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
    border-radius: 10px;
}

.gallery-item:hover img {
    transform: scale(1.5);
}

.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal img {
    width: 500px;
    height: 500px;
    object-fit: contain;
    border: 6px solid #ffb6c1;
    border-radius: 10px;
}

.modal span {
    position: absolute;
    top: 20px;
    right: 40px;
    font-size: 30px;
    color: white;
    cursor: pointer;
    font-weight: bold;
}
```

## OUTPUT:
![alt text](1.png)
![alt text](2.png)
![alt text](3.png)

## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
