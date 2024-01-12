setTimeout(async () => {
    const {
      default: math,
      add,
      subtract,
      multiply,
      square,
    } = await import('./math.js');

    console.log(add(3, 7));
    console.log(subtract(3, 7));
    console.log(multiply(3, 7));
    console.log(square(3));
    console.log(math.divide(3, 7));
}, 5000);