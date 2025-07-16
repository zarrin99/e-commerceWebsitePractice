//to access toggle button, this time we aren't using (this), but instead we use the identifier
const toggleButton = document.getElementById('toggle-btn');

const sidebar = document.getElementById('sidebar');

function toggleSidebar(){
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');

}

function toggleSubMenu (button){
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close');
        toggleButton.classList.toggle('rotate');
    };
}