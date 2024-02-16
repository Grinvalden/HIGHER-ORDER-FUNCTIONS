const printTheName = (arr) =>  arr.forEach(element => {
        console.log(`Привет, ${element}`);
    });

printTheName(['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна']);


const changeTheNumber = (arr) => console.log(arr.map((num) => Math.floor(num) * 10));

changeTheNumber([1, 2, 3, 4, 5]);


const filteredNumbers = (arr) => console.log(arr.filter((num) => num > 10));

filteredNumbers([5, 12, 8, 130, 44]);


const combiningFilterAndMap = (arr) => {
    console.log(
      arr
        .filter((person) => person.age > 18)
        .map((person) => `${person.name}, (${person.age} лет)`)
    );
  };
combiningFilterAndMap([{name: 'Иван', age: 23}, {name: 'Мария', age: 18}, {name: 'Алексей', age: 32}, {name: 'Ольга', age: 24}, {name: 'Сергей', age: 17}, {name: 'Анна', age: 21}])


const aggregationUsingReduce = (obj) => {
    const TotalSales = obj.reduce((acc, item) => {
    return acc + item.price * item.quantity ;
    }, 0); 
    console.log(`Общая стоимость продаж: ${Math.floor(TotalSales)}`)
}
aggregationUsingReduce([{product: 'Телефон', price: 50000, quantity: 1}, {product: 'Чехол', price: 1500, quantity: 2}, {product: 'Зарядное устройство', price: 2500, quantity: 1}])