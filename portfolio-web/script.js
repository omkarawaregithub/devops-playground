// loader animation
window.addEventListener('load',()=>{const l=document.getElementById('loader');l.classList.add('hide');setTimeout(()=>l.remove(),800);});

// main logic
document.addEventListener('DOMContentLoaded',()=>{
    // theme toggle
    const themeBtn=document.getElementById('theme-toggle');
    const cur=localStorage.getItem('theme');
    if(cur) document.documentElement.setAttribute('data-theme',cur);
    themeBtn.addEventListener('click',()=>{let t=document.documentElement.getAttribute('data-theme');t=t==='dark'?'light':'dark';document.documentElement.setAttribute('data-theme',t);localStorage.setItem('theme',t);});

    // hamburger menu
    const navToggle=document.getElementById('nav-toggle');
    const navList=document.querySelector('.nav-list');
    navToggle.addEventListener('click',()=>navList.classList.toggle('show'));

    // smooth nav
    document.querySelectorAll('.nav-link').forEach(link=>{
        link.addEventListener('click',e=>{
            e.preventDefault();
            const target=document.querySelector(link.hash);
            if(target) target.scrollIntoView({behavior:'smooth'});
            navList.classList.remove('show');
        });
    });

    // back to top
    const back=document.getElementById('back-to-top');
    window.addEventListener('scroll',()=>{back.style.display=window.scrollY>400?'block':'none';});
    back.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

    // reveal
    const revealObs=new IntersectionObserver((e)=>{e.forEach(i=>{if(i.isIntersecting) i.target.classList.add('visible');});},{threshold:0.15});
    document.querySelectorAll('.reveal').forEach(el=>revealObs.observe(el));

    // skill animation
    document.querySelectorAll('.skill-card').forEach(card=>{skillObs.observe(card);});
    const skillObs=new IntersectionObserver((e)=>{e.forEach(i=>{if(i.isIntersecting){i.target.style.setProperty('--w',i.target.dataset.skill+'%');}});},{threshold:0.5});

    // project modal
    const modal=document.getElementById('project-modal');
    document.querySelectorAll('.project-card').forEach(c=>{
        c.addEventListener('click',()=>{
            modal.querySelector('#modal-title').textContent=c.dataset.title;
            modal.querySelector('#modal-desc').textContent=c.dataset.desc;
            modal.querySelector('#modal-link').href=c.dataset.link;
            modal.classList.add('show');
        });
    });
    modal.querySelector('.close-modal').addEventListener('click',()=>modal.classList.remove('show'));

    // typing effect
    const h1=document.querySelector('.hero-text h1');
    const text='🚀 Aspiring DevOps Engineer';let idx=0;
    (function t(){h1.textContent=text.slice(0,idx++);if(idx<=text.length) setTimeout(t,80);}());

    // sticky & active
    const header=document.getElementById('header');
    window.addEventListener('scroll',()=>{
        header.classList.toggle('sticky',window.scrollY>50);
        let cur='';
        document.querySelectorAll('section').forEach(sec=>{if(window.scrollY>=sec.offsetTop-100) cur=sec.id;});
        document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
        document.querySelector(`.nav-link[href='#${cur}']`)?.classList.add('active');
    });

    // link hover
    document.querySelectorAll('.social-links a').forEach(a=>{a.addEventListener('mouseenter',()=>a.style.opacity='0.7');a.addEventListener('mouseleave',()=>a.style.opacity='1');});
});
