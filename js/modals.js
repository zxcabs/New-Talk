const openModalsButtons = [...document.querySelectorAll(".js-modals-open")]

openModalsButtons.forEach(button => {
  button.addEventListener('click', openModal)
})

function openModal(event){
  const modalsOverlay = document.querySelector(".js-modals-overlay")
  modalsOverlay.classList.remove("-hidden")

  const modalId = `#modal-${this.dataset.modal}`
  const modal = modalsOverlay.querySelector(modalId)
  console.log(modalId, modalsOverlay, modal);
  modal.classList.add("-shown")

}
