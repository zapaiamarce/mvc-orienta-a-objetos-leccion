class ProductosView {
  render(data) {
    return "<h1>" + data.nombre + "</h1>";
  }
}

class ProductosModel {
  getProduct(id) {
    // mock
    return {
      id: 1234,
      nombre: "producto de prueba",
    };
  }
}

class ProductosController {
  constructor() {}
  dameUnProducto(id) {
    const modeloDeProducto = new ProductosModel();
    const producto = modeloDeProducto.getProduct(id);
    const vistaDeProducto = new ProductosView();
    const salida = vistaDeProducto.render(producto);
    console.log(salida);
  }
}

function main() {
  const prodController = new ProductosController();
  prodController.dameUnProducto(1234);
}

main();
