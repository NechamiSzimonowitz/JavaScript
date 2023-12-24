class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    printItemDom(name, price, quantity) {
        const NameDiv = document.createElement('div');
        NameDiv.innerText = (`Item:  ${name}`);
        NameDiv.style.padding = "8px";
        document.body.append(NameDiv);

        const PriceDiv = document.createElement('div');
        PriceDiv.innerText = (`Price:  ${price}`);
        PriceDiv.style.padding = "8px";
        document.body.append(PriceDiv);

        const QuantityDiv = document.createElement('div');
        QuantityDiv.innerText = (`Quantity:  ${quantity}`);
        QuantityDiv.style.padding = "8px";
        document.body.append(QuantityDiv);

    }
}

class Order {
    constructor(customerName, CustomerAddress, items) {
        this.customerName = customerName;
        this.CustomerAddress = CustomerAddress;
        this.items = items;
    }

    get totalCost() {
        let total = 0;
        this.items.forEach(item => {
            total += item.total;
        });
        return total;
    }

    printToDom(customer, address) {
        const separater = document.createElement('div');
        separater.innerText = '--------------------------------------------------------------------------------------------------';
        document.body.append(separater);

        const customerName = document.createElement('div');
        customerName.innerText = (`Customer:  ${customer}`);
        customerName.style.padding = "8px";
        document.body.append(customerName);

        const Address = document.createElement('div');
        Address.innerText = (`Address:  ${address}`);
        Address.style.padding = "5px";
        document.body.append(Address);

        const Total = document.createElement('div');
        Total.innerText = (`Total:  ${this.totalCost}`);
        Total.style.padding = "8px";
        document.body.append(Total);

    }

}

const searchButton = document.getElementById('search');
searchButton.addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const response = await fetch(`${name}.json`);
    const orders = await response.json();

    orders.forEach(order => {
        let newOrder = new Order(order.customer, order.address, order.items);
        newOrder.printToDom(newOrder.customerName, newOrder.CustomerAddress);
        order.items.forEach(item => {
            const newItem = new Item(item.item, (item.total / item.quantity), item.quantity);
            newItem.printItemDom(newItem.name, newItem.price, newItem.quantity);
        })

    })
})