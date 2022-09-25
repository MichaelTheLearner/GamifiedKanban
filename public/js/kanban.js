var today = new Date().toISOString().split('T')[0];
document.getElementsByName("dueDate")[0].setAttribute('min', today);

const modalCreateCard = document.getElementById('modalCreateCard')
modalCreateCard.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const columnID = button.getAttribute('data-bs-columnid')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const cardColumnIDField = modalCreateCard.querySelector('#cardColumnID');

  cardColumnIDField.value = columnID;
  // document.getElementById('formCreateCard').action = `/kanban/createCard/${columnID}?_method=PUT`;
})

