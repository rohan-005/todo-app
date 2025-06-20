var count = 0;
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobileMenu');

  const isVisible = mobileMenu.style.display === 'block';
  mobileMenu.style.display = isVisible ? 'none' : 'block';

  if (!isVisible) {
    setTimeout(() => {
      function handleClickOutside(event) {
        if (!mobileMenu.contains(event.target) && !event.target.closest('.menu-toggle')) {
          mobileMenu.style.display = 'none';
          document.removeEventListener('click', handleClickOutside);
        }
      }

      document.addEventListener('click', handleClickOutside);
    }, 0);
  }
}


function themetoggle() {
  const themebutton = document.getElementById('themetoggle');
  if (document.body.hasAttribute("light-theme")) {
    document.body.removeAttribute("light-theme");
    themebutton.innerHTML = `<i class="fa-regular fa-lightbulb" style="color: #9AA6B2;" onclick="themetoggle()"></i>`
  } else {
    document.body.setAttribute("light-theme", "");
    themebutton.innerHTML = `<i class="fa-solid fa-lightbulb" style="color:rgb(14, 14, 15);"  onclick="themetoggle()"></i>`
  }


}


function addtask() {
    const inputBox = document.getElementById('input-box');
    const nameoftask = inputBox.value.trim();
    const taskList = document.getElementById('added-tasks');

    if (nameoftask === "") {
        alert("Enter task name");
        return;
    }

    // Create task container

    const taskContainer = document.createElement('div');
    taskContainer.className = 'task';
    taskContainer.addEventListener('click', details);


    const checkstatus = document.createElement('input');
    checkstatus.className = 'status';
    checkstatus.type = 'checkbox';

    const taskText = document.createElement('span');
    taskText.className = 'text';
    taskText.innerText = nameoftask;
    

    const deleteBtn = document.createElement('i');
    deleteBtn.className = 'fa-solid fa-xmark';
    deleteBtn.onclick = function () {
        taskContainer.remove();
        updateTaskVisibility();
    };
    taskContainer.appendChild(checkstatus);
    taskContainer.appendChild(taskText);
    taskContainer.appendChild(deleteBtn);
    

    taskList.insertBefore(taskContainer, taskList.firstChild);
    taskList.style.display = 'block';
    inputBox.value = '';

    updateTaskVisibility();

}

function updateTaskVisibility() {
    const taskList = document.getElementById('added-tasks');
    if (taskList.children.length === 0) {
        taskList.style.display = 'none';
    }
}



function details(){
  const detailsbox = document.querySelector('.details');
  
  const taskList = document.getElementById('added-tasks');
  if (taskList.children.length === 0) {
        detailsbox.style.display = 'none';
  }

  if(count==0){
    detailsbox.style.display = 'block';
    count++;
  }
  else{
    detailsbox.style.display = 'none';
    count = 0;
  }

}
