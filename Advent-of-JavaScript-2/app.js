const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        id: 1,
        count: 1
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        id: 2,
        count: 1
    },
    {
        name: 'Spaghetti with Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        id: 3,
        count: 1
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        id: 4,
        count: 1
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        id: 5,
        count: 1
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        id: 6,
        count: 1
    }
]


// POBIERANIE DANYCH Z MENU
let buttons = document.querySelectorAll('.content .add');

buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const menuItemElement = event.target.closest('.content').querySelector('.menu-item');
    const menuItem = menuItems.find(({ name }) => name === menuItemElement.textContent);
    button.classList.add('in-cart');
    button.textContent = 'In Cart';
    newElement(menuItem);
  });
});

const newElement = (menuItem) => {
    const ul = document.querySelector('.cart-summary');
    const existingItem = Array.from(ul.children).find(li => li.querySelector('.menu-item').textContent === menuItem.name);

    if (existingItem) {
        // Zaktualizuj istniejący element
        const quantityElement = existingItem.querySelector('.quantity');
        const currentQuantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = currentQuantity + 1;

        updateSubtotal(existingItem, menuItem);
    } else {
        // Dodaj nowy element
        const li = document.createElement('li');
    li.innerHTML = `
        <div class="plate">
            <img src="images/${menuItem.image}" alt="${menuItem.name}" class="plate" />
            <div class="quantity">1</div>
        </div>
        <div class="content">
            <p class="menu-item">${menuItem.name}</p>
            <p class="price">$${(menuItem.price / 100).toFixed(2)}</p>
        </div>
        <div class="quantity__wrapper">
            <button class="decrease">
                <img src="images/chevron.svg" />
            </button>
            <div class="quantity">${menuItem.count}</div>
            <button class="increase">
                <img src="images/chevron.svg" />
            </button>
        </div>
        <div class="subtotal">
            $${(menuItem.price / 100).toFixed(2)*1}
        </div>
    `;

    const ul = document.querySelector('.cart-summary');
    ul.appendChild(li);

    const buttonIncrease = li.querySelector('.increase');
    const buttonDecrease = li.querySelector('.decrease');
    
    QuantityChange(buttonIncrease, buttonDecrease, menuItem);
}
    countSubTotal();
}

const QuantityChange = (buttonIncrease, buttonDecrease, menuItem) => {
    const updateQuantity = (button, menuItem) => {
        const { parentElement: parent } = button;
        const liElement = button.closest('li');
        const [quantityElement, quantityElement2] = [parent.querySelector('.quantity'), liElement.querySelector('.plate .quantity')];
        quantityElement.textContent = menuItem.count;
        quantityElement2.textContent = menuItem.count;

        const subtotal = parent.nextElementSibling;
        subtotal.textContent = `$${calculateSubtotal(menuItem)}`;
        countSubTotal();
    }

    const calculateSubtotal = (menuItem) => ((menuItem.price / 100) * menuItem.count).toFixed(2);

    buttonIncrease.addEventListener('click', () => {
        menuItem.count += 1;
        updateQuantity(buttonIncrease, menuItem);
    });

    buttonDecrease.addEventListener('click', () => {
        if (menuItem.count > 0) {
            menuItem.count -= 1;
            updateQuantity(buttonDecrease, menuItem);

            if (menuItem.count === 0) {
                const liElement = buttonDecrease.closest('li');
                liElement.remove();
                buttons.forEach(button => {
                    button.classList.remove('in-cart');
                          button.classList.add('add');
                          button.textContent = 'Add to Cart';
                  });
            }
        }
    });
}
const countSubTotal = () => {
    const subtotalElements = document.querySelectorAll('.subtotal');
    let total = 0;
    let tax = 0;
    let totaltotal = 0;
    subtotalElements.forEach(element => {
        const value = parseFloat(element.textContent.replace('$', ''));
            total += value;
            tax = (total * 0.0975).toFixed(2);
            totaltotal = (total + parseFloat(tax)).toFixed(2);
            console.log(totaltotal);
    });
    const totalElement = document.querySelector('.totals .subtotall');
    const taxElement = document.querySelector('.amount.price.tax');
    const totaltotalElement = document.querySelector('.amount.price.total');
    totaltotalElement.textContent = `$${totaltotal}`;
    totalElement.textContent = `$${total.toFixed(2)}`;
    taxElement.textContent = `$${tax}`;
    const emptyMessageElement = document.querySelector('.empty');
    if (total === 0) {
        emptyMessageElement.style.display = 'block';
    } else {
        emptyMessageElement.style.display = 'none';
    }
}

//0.0975