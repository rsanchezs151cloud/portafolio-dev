 // Smooth scrolling for navigation links

 document.querySelectorAll('.floating-sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });


  // Toggle menu for mobile
  function toggleMenu() {
    const menuMobile = document.getElementById('menuMobile');
    menuMobile.classList.toggle('active');
  }

  // Close menu for mobile
  function closeMenu() {
    const menuMobile = document.getElementById('menuMobile');
    menuMobile.classList.remove('active');
  }

  function openPopup() {
      const popup = document.getElementById("popupOverlay");
      popup.classList.add("active");
    }
    
    function closePopup() {
      const popup = document.getElementById("popupOverlay");
      popup.classList.remove("active");
    }

    
    var elementos = document.querySelectorAll('.more-btn');
                                    
    // Agregar eventos a los botones "Más"
    document.querySelectorAll('.more-btn').forEach(button => {
        button.addEventListener('click', () => {
            const popup = document.querySelector(button.getAttribute('data-target'));
            if (popup) {
                popup.style.display = 'flex';
            } else {
                console.log('Popup no encontrado');
            }
        });
    });
    
    // Agregar eventos a los botones de cerrar en los popups
    document.querySelectorAll('.popup .close').forEach(close => {
        close.addEventListener('click', () => {
            close.parentElement.parentElement.style.display = 'none';
        });
    });

    // Cerrar el popup si se hace clic fuera de él
    window.addEventListener('click', event => {
        if (event.target.classList.contains('popup')) {
            event.target.style.display = 'none';
        }
    });