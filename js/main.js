// Objeto 
const calculadora = {
  sumar: function(a, b) {
    return a + b;
  },
  restar: function(a, b) {
    return a - b;
  },
  multiplicar: function(a, b) {
    return a * b;
  },
  dividir: function(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "División por 0 es indefinida";
    }
  },

  obtenerOperacion: function() {
    const operacion = parseInt(prompt("Seleccione una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir"));

    if (operacion < 1 || operacion > 5 || isNaN(operacion)) {
      alert("Opción inválida. Por favor, seleccione un número del 1 al 5.");
      return this.obtenerOperacion(); // Utilizamos 'this' para referirnos al objeto calculadora
    } else {
      return operacion;
    }
  },
  calcular: function() {
    let continuar = true;

    do {
      const operacion = this.obtenerOperacion();

      if (operacion === 5) {
        alert("Gracias por utilizar la calculadora 2.0");
        continuar = false;
      } else {
        let num1 = parseInt(prompt("Ingresa el primer número"));
        let num2 = parseInt(prompt("Ingresa el segundo número"));

        let resultado;

        switch (operacion) {
          case 1:
            resultado = this.sumar(num1, num2);
            break;
          case 2:
            resultado = this.restar(num1, num2);
            break;
          case 3:
            resultado = this.multiplicar(num1, num2);
            break;
          case 4:
            resultado = this.dividir(num1, num2);
            break;
          default:
            resultado = "Operación no válida";
        }
        alert("El resultado es: " + resultado);
      }
    } while (continuar);
  }
};

calculadora.calcular();
