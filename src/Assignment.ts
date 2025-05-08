{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper == true || toUpper == undefined) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }

  const result = formatString("Anas");
  //   console.log(result);
}

{
  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    let arr: { title: string; rating: number }[] = [];
    items.forEach((item: { title: string; rating: number }) => {
      if (item.rating >= 4) {
        arr.push(item);
      }
    });
    return arr;
  }
  const result = filterByRating(books);
  //   console.log(result);
}

{
  function concatenateArrays<T>(...arrays: T[][]): T[] {
    const arr: T[] = [];
    return arr.concat(...arrays);
  }

  const result1 = concatenateArrays(["a", "b"], ["c"]);
  const result2 = concatenateArrays([1, 2], [3, 4], [5]);
  // console.log(result2);
}

{
  class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }
    getInfo() {
      return console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
  }

  class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
      super(make, year), (this.model = model);
    }

    getModel() {
      return console.log(`Model: ${this.model}`);
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");

  // myCar.getInfo();
  // myCar.getModel();
}

{
  function processValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else if (typeof value === "number") {
      return value + value;
    } else {
      return NaN;
    }
  }
  const result = processValue("Programming Hero");

  // console.log(result);
}

{
  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length > 0) {
      const maxPrice = products.reduce(
        (min: Product, max: Product): Product => {
          return max.price > min.price ? max : min;
        }
      );
      return maxPrice;
    } else {
      return null;
    }
  }

  const result = getMostExpensiveProduct(products);
  // console.log(result);
}

{
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  type DayType = "Weekday" | "Weekend";

  function getDay(day: Day): DayType {
    switch (day) {
      case Day.Saturday:
        return "Weekend";
      case Day.Sunday:
        return "Weekend";
      default:
        return "Weekday";
    }
  }

  // console.log(getDay(Day.Wednesday));
}

{
  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (n < 0) {
        reject("Negative number not allowed");
      } else {
        setInterval(() => {
          resolve(n * n);
        }, 1000);
      }
    });
  }

  async function runSquare(): Promise<void> {
    try {
      const result: number = await squareAsync(4);
      // console.log(result);
    } catch (error) {
      // console.log(error);
    }
  }

  runSquare();
}
