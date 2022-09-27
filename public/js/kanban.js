
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



const draggables = document.querySelectorAll('.draggable')
const columns = document.querySelectorAll('.column')
// drag and drop card operations
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', (ev) => {
    draggable.classList.add('dragging')
    const draggingCard = document.querySelector('.dragging');
    ev.dataTransfer.setData("cardid", draggingCard.dataset.cardid);
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

columns.forEach(column => {
  column.addEventListener('dragover', e => {
    e.preventDefault()
    column.classList.add('dragOver')
  })

  column.addEventListener('drop', e => {
    e.preventDefault();
    var cardID = e.dataTransfer.getData("cardid");
    var columnID = e.target.dataset.columnid;
    addCardToTarget(cardID, columnID);
    column.classList.remove('dragOver');
  })
}
)


function addCardToTarget(cardID, columnID) {
  fetch("/kanban/moveCard", {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cardID: cardID, columnID: columnID })
  }).then(res => res.json())
  location.reload();
}

