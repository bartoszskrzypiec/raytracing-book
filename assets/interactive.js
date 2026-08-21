function openFormulaModal(targetId){
  var template = document.getElementById(targetId);
  var overlay = document.getElementById('modal-overlay');
  var panel = document.getElementById('modal-body');
  if(!template || !overlay || !panel) return;
  panel.innerHTML = '';
  panel.appendChild(template.content.cloneNode(true));
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeFormulaModal(){
  var overlay = document.getElementById('modal-overlay');
  if(!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('click', function(e){
  var trigger = e.target.closest('[data-modal-target]');
  if(trigger){
    openFormulaModal(trigger.getAttribute('data-modal-target'));
    return;
  }
  if(e.target.closest('[data-modal-close]') || e.target.id === 'modal-overlay'){
    closeFormulaModal();
  }
});

document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') closeFormulaModal();
});
