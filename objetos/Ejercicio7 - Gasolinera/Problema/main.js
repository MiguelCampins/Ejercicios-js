

 class Dispensadora{
            constructor(precio = 1.15,total = 500){
                this.precio = precio;
                this.total = total;
            }

            dispensar(cliente){

                let litros = cliente.dinero/this.precio;
                this.total -= litros;
               console.log(litros + " Cantidad tanque: " + this.total);
            }
        }

        class Cliente{
            constructor(dinero){
                this.dinero = dinero;
            }

            reponer(dispensadora){
                dispensadora.dispensar(this);
            }
        }

        let dispensar1 = new Dispensadora();

        let cliente1 = new Cliente(50);
        let cliente2 = new Cliente(50);
        let cliente3 = new Cliente(50);

        cliente1.reponer(dispensar1);
        cliente2.reponer(dispensar1);
        cliente3.reponer(dispensar1);

