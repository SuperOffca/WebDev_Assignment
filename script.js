window.onscroll = function() {scrollFunction()};

function scrollFunction() 
{  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
        {
        document.getElementById('main_nav').classList.add('nav_background');
        }
            else 
              {
              document.getElementById('main_nav').classList.remove('nav_background');
              }

  }

