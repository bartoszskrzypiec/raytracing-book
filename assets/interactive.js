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

document.addEventListener('DOMContentLoaded', function(){
  var vecEls = document.querySelectorAll('.vec[data-tip]');
  if(!vecEls.length) return;

  var tip = document.createElement('div');
  tip.className = 'vec-tooltip';
  document.body.appendChild(tip);

  function showTip(el){
    tip.textContent = el.getAttribute('data-tip');
    tip.style.display = 'block';
    var r = el.getBoundingClientRect();
    var tipRect = tip.getBoundingClientRect();
    var left = r.left + r.width / 2 - tipRect.width / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - tipRect.width - 8));
    var top = r.top - tipRect.height - 8;
    if(top < 8) top = r.bottom + 8;
    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  }

  function hideTip(){
    tip.style.display = 'none';
  }

  vecEls.forEach(function(el){
    el.addEventListener('mouseenter', function(){ showTip(el); });
    el.addEventListener('mouseleave', hideTip);
  });
});
