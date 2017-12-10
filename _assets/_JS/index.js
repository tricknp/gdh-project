function showForm(){
    document.getElementById('ui').style.display = 'none';
    document.getElementById('divForm').style.display = 'block';
    document.getElementById('btnStart').style.display = 'none'; 
}
const btnStart = document.getElementById('btnStart');
btnStart.addEventListener('click', showForm);
