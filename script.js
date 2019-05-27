$(function(){

    $('.gallery').mauGallery();
  
  });

  $('.gallery').mauGallery({

    // default: columns: 3
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 6
    }
    
  });

  $('.gallery').mauGallery({

    lightBox: true,
    lightboxId: null,
  
  });

  $('.gallery').mauGallery({

    showTags: true,
    tagsPosition: 'bottom' // or 'top'
  
  });

  <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
  <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>  