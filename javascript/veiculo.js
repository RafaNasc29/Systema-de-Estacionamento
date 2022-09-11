class Veiculo {
    constructor(id, brand, plate, name, color) {
        this.id = id;
        this.brand = brand;
        this.plate = plate;
        this.name = name;
        this.color = color;
    }

    setId(newId) {
        this.id = newId;
    }

    getId() {
        return this.id;
    }

    setBrand(newBrand) {
        this.brand = newBrand;
    }

    getBrand() {
        return this.brand;
    }

    setPlate(newPlate) {
        this.plate = newPlate;
    }

    getPlate() {
        return this.plate;
    }

    setName(newName) {
        this.name = newName;
    }

    getName() {
        return this.name;
    }

    setColor(newColor) {
        this.color = newColor;
    }

    getColor() {
        return this.color;
    }
}

class Car extends Veiculo {
    payCarMoto(horaE, horaS) {
        var horaEn = horaE.slice(0, 2);
        var minEn = horaE.slice(3, 5);
        var horaO = horaS.slice(0, 2);
        var minO = horaS.slice(3, 5);

        var enter = horaEn * 60 + parseInt(minEn);
        var out = horaO * 60 + parseInt(minO);

        var total = out - enter;

        if (total <= 15) {
            return 0;
        }

        if (total <= 60) {
            return 4;
        }

        if (total >= 240) {
            return 20;
        }
    }
}

class Moto extends Veiculo {
    payCarMoto(horaE, horaS) {
        var horaEn = horaE.slice(0, 2);
        var minEn = horaE.slice(3, 5);
        var horaO = horaS.slice(0, 2);
        var minO = horaS.slice(3, 5);

        var enter = horaEn * 60 + minEn;
        var out = horaO * 60 + minO;

        var total = out - enter;

        if (total <= 30) {
            return 0;
        }

        if (total <= 60) {
            return 2;
        }

        if (total >= 240) {
            return 10;
        }
    }
}
