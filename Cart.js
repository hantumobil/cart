class Cart {
    constructor(arr2d = null) {
        this.store = new Map(arr2d);
    }
    add(name, qty) {
        if (this.store.has(name)) {
            const sum = this.store.get(name) + qty;
            this.store.set(name, sum);
            return this;
        }
        this.store.set(name, qty);
        return this;
    }
    view() {
        for (let [k, v] of this.store) {
            console.log(k, v);
        }
        return this;
    }
    viewAsc() {
        let arr = [];
        for (let [k, v] of this.store) {
            arr.unshift([k, v]);
        }
        for (let i = 0, y = arr.length; i < y; i++) {
            console.log(arr[i][0] + ' ' + arr[i][1]);
        }
    }
    remove(name) {
        const really = confirm(`really remove ${name} from cart?`);
        if (really) {
            this.store.delete(name);
        }
        return this;
    }
}

let cart = new Cart([['delima', 3]]);
cart.add('sepatu', 4)
    .add('baju', 2)
    .add('tas', 7)
    .add('sepatu', 5)
cart.view();
cart.remove('sepatu');
cart.viewAsc();
cart.view();
