let first = true;
let colors = ['#B3DFE2', '#FF6867', '#614DDD', '#FDDE70', '#8FD49D'];
document.addEventListener('DOMContentLoaded', () => {
  showNotif();
  clearNotif();
});

function showNotif() {
  if(!first) {
    console.log(first);
    let notif = document.createElement('div');
    notif.classList.add('notif');
    notif.innerHTML = `
      <img src="./public/images/coffee.png" alt="Logo img" class="notif-img">
      <div class="notif-body">
        <button class="closeNotif">
          <img src="./public/images/close.png" alt="Logo close">
        </button>
        <p class="notif-text">Pensez à prendre des pauses régulièrement !</p>
        <span>
          <a href="#" class="notif-link">Rejoindre une break room</a>
          <img src="./public/images/arrow.png">
        </span>
      </div>
    `;
    document.getElementById('notif-container').append(notif);
    document.getElementsByClassName('closeNotif')[0].addEventListener('click', event => {
      console.log(event.currentTarget.parentNode.parentNode.remove());
    });
    setTimeout("clearNotif()", 5000);
  } else {
    first = false;
  }
  setTimeout("showNotif()",20000);
}

function clearNotif() {
  let notifs = document.getElementsByClassName('notif');
  for(let i = 0; i < notifs.length; i++) {
    notifs[i].remove();
  }
}

var modal = document.getElementById("modalFunctionality");

// Get the button that opens the modal
var btn = document.getElementById("modalOpen");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  let myFunctionalities = JSON.parse(localStorage.getItem('nav'));
  let modalBody = document.getElementById('modal-body');
  if (myFunctionalities != null) {
    let ul = document.createElement('ul');
    ul.className += 'custom-list';
    Array.from(nav).forEach((element, index) => {
      let text = element[1];
      let id = element[0];
      let li = document.createElement('li');
      li.className += 'custom-list-item';
      li.id = id;
      li.textContent = text;
      ul.append(li);
    });
    modalBody.innerHTML = '';
    modalBody.append(ul);
    Array.from(document.getElementsByClassName("custom-list-item")).forEach(list => {
      list.addEventListener('click', event => {
        let listItem = event.currentTarget;
        setListItemActive(listItem)
        // console.log(event.currentTarget);
      });
    });
  }
  
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById('add-functionality').addEventListener('click', event => {
  let color = colors[Math.floor(Math.random() * colors.length)];
  let selectedItem = document.getElementsByClassName('item-active')[0];
  let block = document.createElement('div');
  block.classList.add('block');
  block.style.backgroundColor = color;
  block.style.borderColor = color;
  let blockHeader = document.createElement('div');
  blockHeader.classList.add('block-header');
  blockHeader.style.backgroundColor = color;
  let blockBody = document.createElement('div');
  blockBody.classList.add('block-body');
  let img = document.createElement('img');
  img.src = './public/images/more_vert.png'
  img.classList.add('more_vert');
  // let buttonDelete = document.createElement('button');
  // buttonDelete.textContent = 'x';
  // buttonDelete.classList.add('btn-delete-block');
  // buttonDelete.addEventListener('click', event => {
  //   event.target.parentNode.remove();
  // })
  let span = document.createElement('span');
  span.classList.add('block-label');
  span.textContent = selectedItem.textContent;
  blockHeader.append(span);
  blockHeader.append(img);
  // blockHeader.append(buttonDelete);
  block.append(blockHeader);
  block.append(blockBody);
  document.getElementById('block-container').append(block);
  modal.style.display = "none";
});

function setListItemActive(listItem)
{
  let activeItems = document.getElementsByClassName('item-active');
  for (let i = 0; i < activeItems.length; i++) {
    activeItems[i].classList.remove('item-active');
  }
  listItem.classList.add('item-active');
}