

class Product {
  constructor(title, calory) {
    this.title = title;
    this.calory = calory;
  }
}

class Dish {
  constructor(title) {
    this.title = title;
    this.products = [];
  }

  addProduct(product, qty) {
    this.products.push({...product, qty});
  }

  getCalory() {
    let sum = 0;
      this.products.map(i => sum+=i.calory*i.qty/100);
    return sum;
  }
}

class EnergyCalculator {
  constructor() {
    this.dishes = [];
  }

  addDish(dish) {
    this.dishes.push(dish);
  }

  getTotalCalory() {
    let sum = 0;
    this.dishes.map(i => sum += i.getCalory());
    return sum;
  }

  getPrint() {
    let output = '';
    this.dishes.forEach(dish => {
      output += `===================================\n${dish.title} - 1 порция, ${dish.getCalory()} ккал:\n`;
      for(var product of dish.products) {
        output+=` * ${product.title}, ${product.qty}гр., ${product.calory*product.qty/100} ккал\n`
      }
      output +='===================================\n'
    });
    return output;
  }
}

const beef= new Product ('Филе говядина', 158);
const rice = new Product ('Рис', 130);
const onion = new Product ('Лук', 40);
const carrot = new Product ('Морковь', 41);

const plov = new Dish('Плов');
plov.addProduct(beef, 100);
plov.addProduct(rice, 150);
plov.addProduct(onion, 25);
plov.addProduct(carrot, 25);

const calculator = new EnergyCalculator ();
calculator.addDish(plov);
const calories = calculator.getTotalCalory();
console.log(calories);
const total = calculator.getPrint();
console.log(total);

