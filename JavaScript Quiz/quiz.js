class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

class Order {
    constructor(customerName, CustomerAddress, items) {
        this.customerName = customerName;
        this.CustomerAddress = CustomerAddress;
        this.items = items;
    }

    get totalCost() {
        let total;
        this.items.forEach(item => {
            total += item.price;
        });
        return total;
    }
}

const searchButton = document.getElementById('search');
searchButton.addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const response = await fetch(`${name}.json`);
    const orders = await response.json();

    orders.forEach(order => {
        const newOrder = new Order(order.customer, order.address, order.items);
        console.log(newOrder.customerName, newOrder.CustomerAddress);//print out the DOM
        order.items.forEach(item => {
            const newItem = new Item(item.item, (item.total / item.quantity), item.quantity)
            console.log(newItem.name, newItem.price, newItem.quantity);//print out to the DOM
        })

        //maybe make an array of the orders, then print out the orders in the DOM. use the "total getter" to get the total. 

    })
})