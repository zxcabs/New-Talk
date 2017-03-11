const openModalsButtons = [...document.querySelectorAll(".js-modal-open")]

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

const closeModalsButtons = [...document.querySelectorAll(".js-modal-close")]

closeModalsButtons.forEach(button => {
  button.addEventListener('click', closeModal)
})

function closeModal(event){
  const modalsOverlay = document.querySelector(".js-modals-overlay")
  modalsOverlay.classList.add("-hidden")

  const modalId = `#modal-${this.dataset.modal}`
  const modal = modalsOverlay.querySelector(modalId)
  console.log(modalId, modalsOverlay, modal);
  modal.classList.remove("-shown")
}
