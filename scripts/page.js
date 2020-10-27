window.addEventListener('load', (event)=>{
    const lu = document.querySelector("#lastUpdated");
    lu.textContent = document.lastModified;

    const cry = document.querySelector("#copyRightYear");
    cry.textContent = new Date().getFullYear();

    const ban = document.querySelector("#banner");
    const x = document.querySelector("#closebutton");
})