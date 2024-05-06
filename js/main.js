
const calculadora = {
  resultados: [], // array para almacenar los resultados de las operaciones

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
    const operacion = parseInt(prompt("Seleccione una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Operación personalizada\n6. Ver resultados\n7. Salir"));

    if (operacion < 1 || operacion > 7 || isNaN(operacion)) {
      alert("Opción inválida. Por favor, seleccione un número del 1 al 7.");
      return this.obtenerOperacion(); // Utilizamos 'this' para referirnos al objeto calculadora
    } else {
      return operacion;
    }
  },

  operacionPersonalizada: function() {
    const expresion = prompt("Ingrese una expresión matemática con 'a' y 'b' como variables (por ejemplo: 'a * b + 2'):");
    const funcionPersonalizada = new Function('a', 'b', `return ${expresion};`);
    return funcionPersonalizada;
  },

  verResultados: function() {
    if (this.resultados.length === 0) {
      alert("No hay resultados para mostrar.");
    } else {
      alert("Resultados:\n" + this.resultados.join("\n"));
    }
  },

  calcular: function() {
    let continuar = true;

    do {
      const operacion = this.obtenerOperacion();

      if (operacion === 7) {
        alert("Gracias por utilizar la calculadora 2.0");
        continuar = false;
      } else if (operacion === 6) {
        this.verResultados();
      } else {
        let num1, num2;

        if (operacion !== 5) {
          num1 = parseInt(prompt("Ingresa el primer número"));
          num2 = parseInt(prompt("Ingresa el segundo número"));
        }

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
          case 5:
            const operacionPersonalizada = this.operacionPersonalizada();
            resultado = operacionPersonalizada(num1, num2);
            break;
          default:
            resultado = "Operación no válida";
        }
        alert("El resultado es: " + resultado);
        this.resultados.push(resultado);// con esto guardamos el resultado en array resultados.
      }
    } while (continuar);
  }
};

calculadora.calcular();
