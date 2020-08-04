export const category = ['foto', 'video', 'oyun', 'elektronika'];

export let product = [
    {
        id: 1,
        name: "test",
        price: 45,
        category: category[0]
    },
    {
        id: 2,
        name: "test",
        price: 45,
        category: category[1]
    },
    {
        id: 3,
        name: "test",
        price: 45,
        category: category[2]
    },
    {
        id: 4,
        name: "test",
        price: 45,
        category: category[3]
    },
    {
        id: 5,
        name: "test",
        price: 45,
        category: category[0]
    },
    {
        id: 6,
        name: "test",
        price: 45,
        category: category[1]
    },
    {
        id: 7,
        name: "test",
        price: 45,
        category: category[2]
    },
    {
        id: 8,
        name: "test",
        price: 45,
        category: category[3]
    },
    {
        id: 9,
        name: "test",
        price: 45,
        category: category[1]
    },
    {
        id: 10,
        name: "test",
        price: 45,
        category: category[2]
    }
]

export const addToBasket = (id) => {
    if (id)
        return product.find(item => item.id === id);

    return null;
}

export const submit = (array) => {
    if (array.length) {
        array.forEach(element => {
            product = product.filter(item => item.id !== element.id);
        });
        return product;
    }
    return null;
}