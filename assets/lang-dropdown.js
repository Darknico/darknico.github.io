/* Language dropdown behavior moved from inline header script */
(function(){
  function init(){
    var container = document.querySelector('.lang-dropdown-container');
    if(!container) return;
    var btn = container.querySelector('.lang-btn');
    var menu = container.querySelector('.lang-menu');

    function closeMenu(){
      if(!btn || !menu) return;
      btn.setAttribute('aria-expanded','false');
      menu.hidden = true;
    }
    function openMenu(){
      if(!btn || !menu) return;
      btn.setAttribute('aria-expanded','true');
      menu.hidden = false;
    }

    if(btn){
      btn.addEventListener('click', function(e){
        var expanded = btn.getAttribute('aria-expanded') === 'true';
        if(expanded) closeMenu(); else openMenu();
      });
    }

    document.addEventListener('click', function(e){
      if(!container.contains(e.target)) closeMenu();
    });

    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape') closeMenu();
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
