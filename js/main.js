function sumar(a, b) {
    return a + b;
  }
  
  function restar(a, b) {
    return a - b;
  }
  
  function multiplicar(a, b) {
    return a * b;
  }
  
  function dividir(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Division por 0 es indefinido";
    }
  }
  
  function obtenerOperacion() {
    const operacion = parseInt(prompt("Seleccione una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir"));
    
    if (operacion < 1 || operacion > 5 || isNaN(operacion)) {
      alert("Opción inválida. Por favor, seleccione un número del 1 al 5.");
      return obtenerOperacion();
    } else {
      return operacion;
    }
  }
  
  function calcular() {
    const operacion = obtenerOperacion();
    
    if (operacion === 5) {
      alert("Gracias por utilizar la calculadora 2.0");
      return;
    }
  
    let num1 = parseInt(prompt("Ingresa el primer número"));
    let num2 = parseInt(prompt("Ingresa el segundo número"));
  
    let resultado;
  
    switch (operacion) {
      case 1:
        resultado = sumar(num1, num2);
        break;
      case 2:
        resultado = restar(num1, num2);
        break;
      case 3:
        resultado = multiplicar(num1, num2);
        break;
      case 4:
        resultado = dividir(num1, num2);
        break;
      default:
        resultado = "Operación no válida";
    }
    alert("El resultado es: " + resultado);
    calcular();
  }
  calcular();