document.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-modal-open')) {
        onOpenModalButtonClickHandler(event);
    }
});

function onOpenModalButtonClickHandler(event) {
    const modalsOverlay = document.querySelector(".js-modals-overlay");
    const modalId = `#modal-${event.target.dataset.modal}`;
    const modal = modalsOverlay.querySelector(modalId);
    modalsOverlay.classList.remove("-hidden");

    modal.addEventListener('click', function close(event) {
        if (event.target.classList.contains('js-modal-close')) {
            modal.removeEventListener('click', close);
            closeModal(modal);
            modalsOverlay.classList.add("-hidden");
        }
    });

    openModal(modal);
}

function closeModal(modal) {
    modal.classList.remove("-shown");
}

function openModal(modal) {
  modal.classList.add("-shown");
}
