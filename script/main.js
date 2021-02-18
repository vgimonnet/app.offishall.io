let nav = [];

document.addEventListener('DOMContentLoaded', () => {
    if (JSON.parse(localStorage.getItem('nav')) != null) {
        nav = JSON.parse(localStorage.getItem('nav'));
        Array.from(nav).forEach((element, index) => {
            let span = document.getElementById(element[0]);
            if(span != null) {
                if(span.dataset.premium == 'false' || (span.dataset.premium == 'true' && window.location.href.includes('premium.html'))){
                    // let ul = document.getElementById('aside-nav');
                    // let li = document.createElement('li');
                    // let a = document.createElement('a');
                    // a.href = "#";
                    // a.textContent = element[1];
                    // a.className += 'nav-link';
                    // li.className += element[0];
                    // li.append(a);
                    // ul.append(li);
                    document.getElementById('my-functionality-container').append(span);
                } else {
                    nav.splice(index, 1);
                    localStorage.setItem('nav', JSON.stringify(nav));
                }
            }
            
        });
    }
    document.getElementById('add-functionality').addEventListener('click', event => {
        // document.getElementById('modalFunctionality').style.display = 'block';
        // $('#modalFunctionality').show();
    })
})


function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
}

function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    event
        .dataTransfer
        .clearData();
    if(dropzone.id == 'my-functionality-container') {
        // let ul = document.getElementById('aside-nav');
        // let li = document.createElement('li');
        // let a = document.createElement('a');
        // a.href = "#";
        // a.textContent = draggableElement.textContent;
        // a.className += 'nav-link';
        // li.className += draggableElement.id;
        let idLi = draggableElement.id;
        let textContent = draggableElement.textContent; 
        // li.append(a);
        // ul.append(li);
        nav.push([idLi, textContent]);
        localStorage.setItem('nav', JSON.stringify(nav));
    } else if(dropzone.id == 'functionality-container') {
        // let lis = document.getElementsByClassName(draggableElement.id);
        // Array.from(lis).forEach(li => {
        //     li.remove();
        // });
        Array.from(nav).forEach((element, index) => {
            if (element[0] == draggableElement.id) {
                nav.splice(index, 1);
            }
        })
        localStorage.setItem('nav', JSON.stringify(nav));
    }
}

function onDragOver(event) {
    event.preventDefault();
}