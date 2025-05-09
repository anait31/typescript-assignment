// 1
function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    } else {
        return input.toUpperCase();
    }
}

console.log(formatString("Hello"));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));
// 2

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filteredByRatings = items.filter((item: { title: string, rating: number }) => item.rating >= 4);
    return filteredByRatings
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];

const result = filterByRating(books);
console.log(result)

// 3
function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
    for (const arr of arrays) {
        result = [...result, ...arr];
    }

    return result;
}

// 4
class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo(): string {
        const result = `Make: ${this.make}, Year: ${this.year}`;
        return result;
    }
}

class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }
    getModel(): string {
        const result = `Model: ${this.model}`;
        return result
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();
myCar.getModel();

// 5
function processValue(value: string | number): number {
    if (typeof value === 'string') {
        return value.length;
    } else {
        return value * 2;
    }
}

// Example usage:
console.log(processValue("hello")); // Output: 5
console.log(processValue(10));      // Output: 20


// 6
interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }
  
    let mostExpensive = products[0];
    for (const product of products) {
      if (product.price > mostExpensive.price) {
        mostExpensive = product;
      }
    }
  
    return mostExpensive;
  }

//   7
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string {
    switch (day) {
      case Day.Monday:
      case Day.Tuesday:
      case Day.Wednesday:
      case Day.Thursday:
      case Day.Friday:
        return "Weekday";
      case Day.Saturday:
      case Day.Sunday:
        return "Weekend";
    }
  }
  
  // Examples
  console.log(getDayType(Day.Monday));   // Output: "Weekday"
  console.log(getDayType(Day.Sunday));   // Output: "Weekend"

//   8
async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000); // 1 second delay
    });
  }
  
  // Examples
  squareAsync(4).then(console.log);        // Output after 1s: 16
  squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed