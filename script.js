
const obs=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
const cur=location.pathname.split('/').pop()||'index.html';document.querySelectorAll('.links a').forEach(a=>{if(a.getAttribute('href')===cur)a.classList.add('on')});
