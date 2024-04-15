-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2024-03-20 17:13:25.534

-- tables
-- Table: carrito
CREATE TABLE carrito (
    id int  NOT NULL,
    cantidad int  NOT NULL,
    producto_id int  NOT NULL,
    fechaActualizacion date  NOT NULL,
    subtotal int  NOT NULL,
    CONSTRAINT carrito_pk PRIMARY KEY (id)
);

-- Table: categoria
CREATE TABLE categoria (
    id int  NOT NULL,
    nombre char(12)  NOT NULL,
    descripcion text  NOT NULL,
    CONSTRAINT categoria_pk PRIMARY KEY (id)
);

-- Table: ciudad
CREATE TABLE ciudad (
    id int  NOT NULL,
    nombre varchar(128)  NOT NULL,
    pais_id int  NOT NULL,
    CONSTRAINT ciudad_pk PRIMARY KEY (id)
);

-- Table: cliente
CREATE TABLE cliente (
    id int  NOT NULL,
    usuario_id int  NOT NULL,
    CONSTRAINT cliente_pk PRIMARY KEY (id)
);

-- Table: datosPago
CREATE TABLE datosPago (
    id int  NOT NULL,
    tipoPago_id int  NOT NULL,
    nombreDato varchar(255)  NOT NULL,
    tipoDatoPago varchar(255)  NOT NULL,
    CONSTRAINT payment_data_ak_1 UNIQUE (nombreDato) NOT DEFERRABLE  INITIALLY IMMEDIATE,
    CONSTRAINT datosPago_pk PRIMARY KEY (id)
);

-- Table: detalleOrden
CREATE TABLE detalleOrden (
    id int  NOT NULL,
    cantidad smallint  NOT NULL,
    precio money  NOT NULL,
    orden_id int  NOT NULL,
    CONSTRAINT detalleOrden_pk PRIMARY KEY (id)
);

-- Table: detallesPago
CREATE TABLE detallesPago (
    id int  NOT NULL,
    orden_id int  NOT NULL,
    datosPago_id int  NOT NULL,
    valor varchar(255)  NOT NULL,
    CONSTRAINT detallesPago_pk PRIMARY KEY (id)
);

-- Table: orden
CREATE TABLE orden (
    id int  NOT NULL,
    usuario_id int  NOT NULL,
    tipoPago_id int  NOT NULL,
    fechaCreacion date  NOT NULL,
    estado boolean  NOT NULL,
    total money  NOT NULL,
    CONSTRAINT orden_pk PRIMARY KEY (id)
);

-- Table: pais
CREATE TABLE pais (
    id int  NOT NULL,
    nombre varchar(128)  NOT NULL,
    CONSTRAINT pais_pk PRIMARY KEY (id)
);

-- Table: productOrden
CREATE TABLE productOrden (
    id int  NOT NULL,
    producto_id int  NOT NULL,
    orden_id int  NOT NULL,
    CONSTRAINT productOrden_pk PRIMARY KEY (id)
);

-- Table: producto
CREATE TABLE producto (
    id int  NOT NULL,
    nombre varchar(255)  NOT NULL,
    descripcion text  NOT NULL,
    precio money  NOT NULL,
    stock smallint  NOT NULL,
    imagenURL text  NOT NULL,
    categoria_id int  NOT NULL,
    CONSTRAINT producto_pk PRIMARY KEY (id)
);

-- Table: proveedor
CREATE TABLE proveedor (
    id int  NOT NULL,
    nombre int  NOT NULL,
    descripcion text  NOT NULL,
    contacto int  NOT NULL,
    producto_id int  NOT NULL,
    usuario_id int  NOT NULL,
    CONSTRAINT proveedor_pk PRIMARY KEY (id)
);

-- Table: tipoPago
CREATE TABLE tipoPago (
    id int  NOT NULL,
    nombreTipoPago varchar(64)  NOT NULL,
    CONSTRAINT tipoPago_pk PRIMARY KEY (id)
);

-- Table: usuario
CREATE TABLE usuario (
    id int  NOT NULL,
    nombre varchar(255)  NOT NULL,
    apellido varchar(255)  NOT NULL,
    correo varchar(255)  NOT NULL,
    contrasena varchar(255)  NOT NULL,
    direccion varchar(255)  NOT NULL,
    telefono varchar(255)  NOT NULL,
    ciudad_id int  NOT NULL,
    CONSTRAINT usuario_pk PRIMARY KEY (id)
);

-- Table: valoracion
CREATE TABLE valoracion (
    id int  NOT NULL,
    puntuacion int  NOT NULL,
    comentario text  NOT NULL,
    fecha date  NOT NULL,
    producto_id int  NOT NULL,
    usuario_id int  NOT NULL,
    CONSTRAINT valoracion_pk PRIMARY KEY (id)
);

-- foreign keys
-- Reference: Table_64_orden (table: productOrden)
ALTER TABLE productOrden ADD CONSTRAINT Table_64_orden
    FOREIGN KEY (orden_id)
    REFERENCES orden (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Table_64_producto (table: productOrden)
ALTER TABLE productOrden ADD CONSTRAINT Table_64_producto
    FOREIGN KEY (producto_id)
    REFERENCES producto (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: city_country (table: ciudad)
ALTER TABLE ciudad ADD CONSTRAINT city_country
    FOREIGN KEY (pais_id)
    REFERENCES pais (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: cliente_usuario (table: cliente)
ALTER TABLE cliente ADD CONSTRAINT cliente_usuario
    FOREIGN KEY (usuario_id)
    REFERENCES usuario (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: datosPago_tipoPago (table: datosPago)
ALTER TABLE datosPago ADD CONSTRAINT datosPago_tipoPago
    FOREIGN KEY (tipoPago_id)
    REFERENCES tipoPago (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: detalleCarrito_producto (table: carrito)
ALTER TABLE carrito ADD CONSTRAINT detalleCarrito_producto
    FOREIGN KEY (producto_id)
    REFERENCES producto (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: detalleOrden_orden (table: detalleOrden)
ALTER TABLE detalleOrden ADD CONSTRAINT detalleOrden_orden
    FOREIGN KEY (orden_id)
    REFERENCES orden (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: detallesPago_datosPago (table: detallesPago)
ALTER TABLE detallesPago ADD CONSTRAINT detallesPago_datosPago
    FOREIGN KEY (datosPago_id)
    REFERENCES datosPago (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: detallesPago_orden (table: detallesPago)
ALTER TABLE detallesPago ADD CONSTRAINT detallesPago_orden
    FOREIGN KEY (orden_id)
    REFERENCES orden (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: orden_tipoPago (table: orden)
ALTER TABLE orden ADD CONSTRAINT orden_tipoPago
    FOREIGN KEY (tipoPago_id)
    REFERENCES tipoPago (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: orden_usuario (table: orden)
ALTER TABLE orden ADD CONSTRAINT orden_usuario
    FOREIGN KEY (usuario_id)
    REFERENCES usuario (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: producto_categoria (table: producto)
ALTER TABLE producto ADD CONSTRAINT producto_categoria
    FOREIGN KEY (categoria_id)
    REFERENCES categoria (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: proveedor_producto (table: proveedor)
ALTER TABLE proveedor ADD CONSTRAINT proveedor_producto
    FOREIGN KEY (producto_id)
    REFERENCES producto (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: proveedor_usuario (table: proveedor)
ALTER TABLE proveedor ADD CONSTRAINT proveedor_usuario
    FOREIGN KEY (usuario_id)
    REFERENCES usuario (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: usuario_ciudad (table: usuario)
ALTER TABLE usuario ADD CONSTRAINT usuario_ciudad
    FOREIGN KEY (ciudad_id)
    REFERENCES ciudad (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: valoracion_producto (table: valoracion)
ALTER TABLE valoracion ADD CONSTRAINT valoracion_producto
    FOREIGN KEY (producto_id)
    REFERENCES producto (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: valoracion_usuario (table: valoracion)
ALTER TABLE valoracion ADD CONSTRAINT valoracion_usuario
    FOREIGN KEY (usuario_id)
    REFERENCES usuario (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- End of file.

