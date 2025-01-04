const showsidebar=(togglId,sidebarId,headerId,mainId)=>{
    const toogle=document.getElementById(togglId),
    sidebar=document.getElementById(sidebarId),
    header=document.getElementById(headerId),
    main=document.getElementById(mainId)

     if(toogle && sidebar && header && main){
        toogle.addEventListener('click',()=>{
            sidebar.classList.toggle('show-sidebar')
            header.classList.toggle('left-pd')
            main.classList.toggle('left-pd')
        })
     }
}

showsidebar('header_toggle','sidebar','header','main');