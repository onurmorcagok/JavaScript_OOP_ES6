// Static Methods

class Math {

    pow(x) {
        console.log(x * x);
    }

    static cube(x) {

        console.log(x * x * x);
    }
}

// Obje oluşturmadan method kullanmak istersek bu methodları static olarak cagirabiliriz.

const math = new Math();

// math.cube(4); // Static deger oldugu icin erisemeyiz.

math.pow(5);

Math.cube(5); // class uzerinden erisim saglayabiliriz.

// Object.create();