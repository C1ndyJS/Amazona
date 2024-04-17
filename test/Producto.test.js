// Importa los modelos y Sequelize
const Producto = require('../src/models/Producto');
const sequelize = require('../src/database/db');

describe('Modelo Producto', () => {
    // Prueba para crear un producto
    // it('Debería crear un nuevo producto', async () => {
    //   const nuevoProducto = await Producto.create({
    //     nombre: 'Producto de prueba',
    //     descripcion: 'Descripción del producto de prueba',
    //     precio: 100,
    //     marca: 'Marca de prueba',
    //     stock: 10,
    //     URL_imagen: 'https://example.com/imagen.jpg',
    //     categoria_id: 1
    //   });
  
    //   expect(nuevoProducto.id_producto).toBeDefined();
    //   expect(nuevoProducto.nombre).toBe('Producto de prueba');
    //   // Añade más expectativas según lo necesario para tu modelo
    // });
  
    // Prueba para consultar productos
    it('Debería consultar todos los productos', async () => {
       const productos = await Producto.findAll();
       expect(productos.length).toBeGreaterThan(0);
       // Añade más expectativas según lo necesario para tu modelo
     });
  
    // // Prueba para actualizar un producto
    // it('Debería actualizar un producto existente', async () => {
    //    const producto = await Producto.findOne({ where: { nombre: 'Producto de prueba' } });
    //    await producto.update({ nombre: 'Nuevo nombre' });  
    //    expect(producto.nombre).toBe('Nuevo nombre');
    //  });
  
  });

