'use strict';

{

  // header js


  window.addEventListener("scroll", function() {

    const scroll = window.pageYOffset;
    const header = document.getElementById('header');
    const pcMenuItem = document.getElementById('pcMenuItem');


    if( scroll > 30 ){ 
      header.style.backgroundColor = 'crimson';    //hoverの色を修正＠
      header.style.color = 'white';
      header.style.transition = '.3s';
    } else {
      header.style.backgroundColor = "transparent";
    }
  });
  

  // menu js
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    close.classList.remove('hide');
  });

  // modal window js  (read more)

  const openModal = document.getElementById('openModal');
  const closeModal = document.getElementById('closeModal');
  const modal = document.getElementById('modal-content');
  const mask = document.getElementById('mask');


  
  openModal.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    closeModal.click()
  });

  //modal window js (works)


  var modalBtns = document.querySelectorAll('.modal-open');

  modalBtns.forEach(function(btn) {
    btn.onclick = function() {
      var modal = btn.getAttribute('data-modal');

      document.getElementById(modal).style.display = 'block';
    }
  });

  var closeBtns = document.querySelectorAll('.modal-close');

  closeBtns.forEach(function(btn) {
    btn.onclick = function() {
      var modal = (btn.closest('.modals').style.display = "none");
    };
  });

  window.onclick = function(e) {
    if(e.target.className === 'modals') {
      e.target.style.display = "none";
    }
  };







  // const worksTitle = document.querySelectorAll('.modal-open' )
  // const modals = document.querySelectorAll('modal' )
  // const modalCover = document.querySelectorAll('modal-mask' )

  // let modalCloseAction;
  // let dataModalOpen;
  // let targetModal;

  // const TIMEOUT_SPEED = 500;

  // for (let i = 0; i < worksTitle.length; i++) {
  //   modalCloseAction = function(e) {
  //     targetModal = e.currentTarget.closest('.modals');
  //     targetModal.classList.add('is-close');

  //     setTimeout(function(e) {
  //       targetModal.classList.remove('hide');
  //       targetModal.classList.remove('hide');
  //     }, TIMEOUT_SPEED);
  //   };

  //     const modalWrapClose = function() {
  //       modalCover[i].addEventListener('click',function(e){
  //         modalCloseAction(e);
  //      },false);
  //   };

  //    // modalをあげる
  //    const modalWrapOpen = function(e) {
  //     dataModalOpen = e.currentTarget.getAttribute('data-modal-open');
  //     for (var b = 0; b < modals.length; b++) {
      
  //       if (modals[b].getAttribute('data-modal') === dataModalOpen) {
  //         modals[b].classList.remove('hide');
  //         modalWrapClose();
  //         return false;
  //       }
  //     }
  //   };
    
  //   worksTitle[i].addEventListener('click', function(e) {
  //     modalWrapOpen(e);
  //   }, false);
    
  //   // modalを下げる
  //   const modalBtnClose = document.querySelectorAll('.btn-close');
  //   for (let n = 0; n < modalBtnClose.length; n++) {
  //   modalBtnClose[n].addEventListener('click', function(e) {
  //     modalCloseAction(e);
  //     return false;
  //   }, false);
  //  }


  // }




  // worksTitle.forEach(workTitle => {
  //   workTitle.addEventListener('click', e => {
  //     e.preventDefault();
      
  //     workTitle.classList.remove('hide');

  //     modal.forEach(item => {
  //       item.classList.remove('hide');
  //     })


  //   });
  // })



}