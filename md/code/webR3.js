
const modalButton = document.getElementById("modal_video_open")
const overlayModal = document.getElementById("overlayModal")
const openModal = document.getElementById("button_modal")
const closeModal = document.getElementById("close")

console.log(modalButton)
console.log(overlayModal)



  closeModal.onclick = () => {
    overlayModal.classList.add("ocultar")
    document.body.classList.remove("no-scroll")
    overlay.classList.add("ocultar")
    document.body.classList.remove("no-scroll")
   
  }
  


 openModal.onclick = () => {

    overlayModal.classList.remove("ocultar")
    document.body.classList.add("no-scroll")
       

    
}