var estacionamento = new Estacionamento(20);


function randomize(max, min) {
    max = Math.floor(max);
    min = Math.ceil(min);
    return Math.floor(Math.random() * (max - min) + min);
}

function carORmoto() {
    var car = document.getElementById('car');
    var moto = document.getElementById('moto');
    if (car.checked) {
        moto.disabled = true;
    } else if (moto.checked) {
        car.disabled = true;
    } else {
        moto.disabled = false;
        car.disabled = false;
    }
}

function register() {
    var id = document.getElementById('id');
    var brand = document.getElementById('brand');
    var plate = document.getElementById('plate');
    var name = document.getElementById('name');
    var color = document.getElementById('color');
    var horaE = document.getElementById('horaE');
    var car = document.getElementById('car');
    var moto = document.getElementById('moto');
    var vehicle;
    var max = 9999;
    var min = 0;
    var rand = randomize(max, min);

    if (
        name.value == '' ||
        plate.value == '' ||
        brand.value == '' ||
        color.value == '' ||
        horaE.value == ''
    ) {
        alert('Preencher todos os campos');
        return;
    }

    if (horaE.value.charAt(2) != ':') {
        alert('Horário inválido inserir hora + : + minutos');
        return;
    }

    if (car.checked) {
        vehicle = new Car(
            rand,
            brand.value,
            plate.value,
            name.value,
            color.value
        );
    } else if (moto.checked) {
        vehicle = new Moto(
            rand,
            brand.value,
            plate.value,
            name.value,
            color.value
        );
    } else {
        alert('Escolher Carro / Moto');
        return;
    }

    estacionamento.park(vehicle, horaE.value);

    name.value = '';
    plate.value = '';
    brand.value = '';
    color.value = '';
    horaE.value = '';
    id.value = '';
    moto.disabled = false;
    car.disabled = false;
    moto.checked = false;
    car.checked = false;
}

function releaseVehicle() {
    var id = document.getElementById('idS');
    var horaS = document.getElementById('horaS');

    if (id.value == '' || horaS.value == '') {
        alert('Preencha TODOS os campos');
        return;
    }

    if (horaS.value.charAt(2) != ':') {
        alert('Horário inválido (exemplo: XX:XX)');
        return;
    }

    estacionamento.release(id.value, horaS.value);
    id.value = '';
    horaS.value = '';
}

function report() {
    estacionamento.generateReport();
}

function balance() {
    estacionamento.getBalance();
}
