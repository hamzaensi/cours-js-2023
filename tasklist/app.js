// Define UI Vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');
const btn = document.querySelector('.btn');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  // DOM Load event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
    // Add task event
  //
  btn.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}


function addTask(e)
{
  
  if(taskInput.value == '')
  {
    alert('Add task');

  }
  else
  {
  
  // Create li element
  const li = document.createElement('li');
   // Add class
   li.className = 'collection-item';
   // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
   

  
  // Create new link element
   const link = document.createElement('a');
   // Add class
   link.className = 'delete-item secondary-content';
   // Add icon html
   link.innerHTML = '<i class="fa fa-remove"></i>';
   // Append the link to li
   li.appendChild(link);

   // Append li to ul
   taskList.appendChild(li);
   // Clear input
  taskInput.value = '';

  }
   e.preventDefault();  
   

}

function getTasks()
{

}
function removeTask(e)
{
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
  
}
function clearTasks()
{
  alert('Clear tasks');
}
function filterTasks()
{
  
}