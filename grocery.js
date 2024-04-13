const itemInput = document.getElementById('item-input');
const addBtn = document.getElementById('add-btn');
const groceryList = document.getElementById('grocery-list');

addBtn.addEventListener('click', addItem);
itemInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addItem();
    }
});

function addItem() {
    const itemName = itemInput.value.trim();
    if (itemName !== '') {
        const listItem = document.createElement('li');
        listItem.classList.add('list-item');
        listItem.innerHTML = `
            <span>${itemName}</span>
            <div class="list-item-actions">
                <button class="complete-btn">✔</button>
                <button class="delete-btn">❌</button>
            </div>
        `;
        groceryList.appendChild(listItem);
        itemInput.value = '';
    }
}

groceryList.addEventListener('click', function (e) {
    if (e.target.classList.contains('complete-btn')) {
        const item = e.target.closest('.list-item');
        item.classList.toggle('completed');
    } else if (e.target.classList.contains('delete-btn')) {
        const item = e.target.closest('.list-item');
        item.remove();
    }
});
