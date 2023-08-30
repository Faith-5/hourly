const input = document.getElementById('addNote')
const save = document.getElementById('save')
const note = document.getElementById('note')
const enterNote = document.getElementById('enterNote')
const footer = document.getElementById('footer')
var counter = 0;
let arrayItems = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

if(localStorage.getItem('items')) {
    JSON.parse(localStorage.getItem('items'))
}
arrayItems.forEach(add);
save.addEventListener('click', function() {
    if(input.value == '' || input.value == ' ') {
        alert('You can\'t store an empty note!!!')
    } else {
        counter++
        add(input.value);
        arrayItems.push(input.value);
        localStorage.setItem('items', JSON.stringify(arrayItems));
        input.value = '';
        enterNote.style.display = 'none';
    }
})

function add(notes) {
    counter++;
    const list = document.createElement('p');
    list.innerHTML = notes + '<img src="./images/delete.png" alt="Delete" class="delete">';

    list.querySelector('img')
    .addEventListener('click', function() {
        list.remove();
        localStorage.clear();
    })
    note.appendChild(list)
}

// Footer Effect
footer.addEventListener('click', function() {
    enterNote.style.display = 'block';
})