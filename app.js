
function toggleSidebar(){ const s=document.querySelector('.sidebar'); if(s)s.classList.toggle('collapsed'); }
document.addEventListener('DOMContentLoaded',()=>{
  const file=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  if(file!=='index.html' && file!==''){
    const top=document.querySelector('.topbar');
    if(top && !top.querySelector('.back-cockpit-auto') && !top.querySelector('.back-inline')){
      const a=document.createElement('a');a.href='index.html';a.className='back-cockpit-auto';
      a.innerHTML='← <span>Voltar ao Cockpit</span>';top.appendChild(a);
    }
  }
});
