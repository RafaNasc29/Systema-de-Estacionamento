class Estacionamento {
    constructor(num) {
        this.qtd = num;
        this.balance = 0;
        this.plots = [];
        this.report = [];
    }

    park(veiculo, horaE) {
        if (this.plots.length == this.qtd) {
            alert('Estacionamento Lotado');
        } else {
            var _new = {
                veiculo: veiculo,
                horaE: horaE,
                horaS: '...',
            };
            this.plots.push(_new);
            console.log(this.plots);
        }
    }

    release(id, horaS) {
        for (var i = 0; i < this.plots.length; i++) {
            if (this.plots[i].veiculo.getId() == id) {
                var aux = {
                    veiculo: this.plots[i].veiculo,
                    horaE: this.plots[i].horaE,
                    horaS: horaS,
                };

                this.balance =
                    this.balance +
                    this.plots[i].veiculo.payCarMoto(
                        this.plots[i].horaE,
                        horaS
                    );
                this.report.push(aux);
                this.plots.splice(i, 1);
                return;
            }
        }
    }

    generateReport() {
        var repE = document.getElementById('reportE');
        var repS = document.getElementById('reportS');
        repE.innerHTML = '';
        repS.innerHTML = '';

        if (this.plots.length == 0 && this.report.length == 0) {
            alert('Nada registrado');
        }

        if (this.plots.length > 0) {
            for (let i = 0; i < this.plots.length; i++) {
                let tr = repE.insertRow();

                let td_id = tr.insertCell();
                let td_name = tr.insertCell();
                let td_plate = tr.insertCell();
                let td_brand = tr.insertCell();
                let td_color = tr.insertCell();
                let td_horaE = tr.insertCell();
                let td_HoraS = tr.insertCell();

                td_id.innerText = this.plots[i].veiculo.getId();
                td_name.innerText = this.plots[i].veiculo.getName();
                td_plate.innerText = this.plots[i].veiculo.getPlate();
                td_brand.innerText = this.plots[i].veiculo.getBrand();
                td_color.innerText = this.plots[i].veiculo.getColor();
                td_horaE.innerText = this.plots[i].horaE;
                td_HoraS.innerText = this.plots[i].horaS;
            }
        }

        if (this.report.length > 0) {
            for (let i = 0; i < this.report.length; i++) {
                let tr = repS.insertRow();

                let td_id = tr.insertCell();
                let td_name = tr.insertCell();
                let td_plate = tr.insertCell();
                let td_brand = tr.insertCell();
                let td_color = tr.insertCell();
                let td_horaE = tr.insertCell();
                let td_HoraS = tr.insertCell();

                td_id.innerText = this.report[i].veiculo.getId();
                td_name.innerText = this.report[i].veiculo.getName();
                td_plate.innerText = this.report[i].veiculo.getPlate();
                td_brand.innerText = this.report[i].veiculo.getBrand();
                td_color.innerText = this.report[i].veiculo.getColor();
                td_horaE.innerText = this.report[i].horaE;
                td_HoraS.innerText = this.report[i].horaS;
            }
        }
    }

    getBalance() {
        var balance = document.getElementById('bala');
        balance.innerHTML = '';

        if (this.balance == 0) {
            alert('Não ouve nenhuma movimentação de entrada e saida!');
        }

        var div = document.createElement('div');
        var h1 = document.createElement('h1');
        h1.textContent = 'R$ ' + this.balance + ',00';
        div.appendChild(h1);

        h1.classList.add('h1-2');

        balance.appendChild(div);
    }
}
