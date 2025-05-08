"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    function formatString(input, toUpper) {
        if (toUpper == true || toUpper == undefined) {
            return input.toUpperCase();
        }
        else {
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
    function filterByRating(items) {
        let arr = [];
        items.forEach((item) => {
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
    function concatenateArrays(...arrays) {
        const arr = [];
        return arr.concat(...arrays);
    }
    const result1 = concatenateArrays(["a", "b"], ["c"]);
    const result2 = concatenateArrays([1, 2], [3, 4], [5]);
    // console.log(result2);
}
{
    class Vehicle {
        constructor(make, year) {
            this.make = make;
            this.year = year;
        }
        getInfo() {
            return console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
    }
    class Car extends Vehicle {
        constructor(make, year, model) {
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
    function processValue(value) {
        if (typeof value === "string") {
            return value.length;
        }
        else if (typeof value === "number") {
            return value + value;
        }
        else {
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
    function getMostExpensiveProduct(products) {
        if (products.length > 0) {
            const maxPrice = products.reduce((min, max) => {
                return max.price > min.price ? max : min;
            });
            return maxPrice;
        }
        else {
            return null;
        }
    }
    const result = getMostExpensiveProduct(products);
    // console.log(result);
}
{
    let Day;
    (function (Day) {
        Day[Day["Monday"] = 0] = "Monday";
        Day[Day["Tuesday"] = 1] = "Tuesday";
        Day[Day["Wednesday"] = 2] = "Wednesday";
        Day[Day["Thursday"] = 3] = "Thursday";
        Day[Day["Friday"] = 4] = "Friday";
        Day[Day["Saturday"] = 5] = "Saturday";
        Day[Day["Sunday"] = 6] = "Sunday";
    })(Day || (Day = {}));
    function getDay(day) {
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
    function squareAsync(n) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                if (n < 0) {
                    reject("Negative number not allowed");
                }
                else {
                    setInterval(() => {
                        resolve(n * n);
                    }, 1000);
                }
            });
        });
    }
    function runSquare() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield squareAsync(4);
                // console.log(result);
            }
            catch (error) {
                // console.log(error);
            }
        });
    }
    runSquare();
}
