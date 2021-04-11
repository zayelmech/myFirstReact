# Componentes teoria
- Los componentes en React son bloques de construcción.
- Las aplicaciones hechas con React son como figuras de Lego. Junta varias piezas (componentes) y puedes construir un website tan pequeño o tan grande como quieras.
- Los componentes serán barras de búsquedas, enlaces, encabezados, el header, etc.

## ”Componente” vs “elemento
Un elemento es a un objeto como un componente es a una clase. Si el elemento fuera una casa, el componente serían los planos para hacer esa casa.

Identificación de componentes
Para identificarlos debes hacerte las siguientes preguntas:

- ¿Qué elementos se repiten? Estos son los elementos en una lista o los que comparten aspecto visual y su funcionalidad
- ¿Qué elementos cumplen una función muy específica? Estos sirven para encapsular la lógica y permiten juntar muchos comportamientos y aspectos visuales en un solo lugar.

Identificar componentes es una habilidad esencial para poder desarrollar aplicaciones de React.

## Componentes
- Es una buena práctica que los componentes vivan en su propio archivo y para ello se les crea una carpeta.
- Todos los componentes requieren por lo menos el método render que define cuál será el resultado que aparecerá en pantalla.
- El source de las imágenes en React puede contener direcciones en la web o se le puede hacer una referencia directa importándola. Si se importa deben usarse llaves para que sea evaluado.

# Estilos y Boostrap

Para los estilos crearemos una carpeta llamada Styles y allí vivirán todos los archivos de estilos que tienen que ver con los componentes.
- Para usar los estilos es necesario importarlos con import
- React funciona ligeramente diferente y para los atributos de clases no se utiliza class sino className
- Es posible utilizar Bootstrap con React, sólo debe ser instalado con 
```npm
npm install bootstrap
```
y debe ser importado en el index.js
- Existen estilos que son usados de manera global o en varios componentes, así que deben ser importados en el index.js

# Props

Los props que es la forma corta de properties son argumentos de una función y en este caso serán los atributos de nuestro componente como class, src, etc.
Estos props salen de una variable de la clase que se llama this.props y los valores son asignados directamente en el ReactDOM.render().

# Nuestra primera pagina
Las páginas en React son componentes y conseguir distinguirlas nos servirá para saber que es un componente que adentro lleva otros componentes.

- Al escribir los props no importa el orden en el que lo hagas, únicamente importa el nombre.

# Enlazando eventos

-React dispone de eventos. Cada vez que se recibe información en un _input_  se obtiene un evento _onChange_ y se maneja con un método de la clase
``` js
    this.handleChange
```
-Los elementos button también tienen un evento que es _onClick_.
-Cuando hay un botón dentro de un formulario, este automáticamente será de tipo _submit_. Si no queremos que pase así hay dos maneras de evitarlo: especificando que su valor es de tipo _button_ o manejándolo desde el formulario cuando ocurre el evento _onSubmit_.

# Manejo de estado

Hasta esta clase todos los componentes han obtenido su información a través de props que vienen desde afuera (otros componentes) pero hay otra manera en la que los componentes pueden producir su propia información y guardarla para ser consumida o pasada a otros componentes a través de sus props. La clave está en que la información del state a otros componentes pasará en una sola dirección y podrá ser consumida pero no modificada.

- Para guardar la información en el estado se usa una función de la clase component llamada setState a la cual se le debe pasar un objeto con la información que se quiere guardar.
- Aunque no se ve, la información está siendo guardada en dos sitios. Cada input guarda su propio valor y al tiempo la está guardando en setState, lo cual no es ideal. Para solucionarlo hay que modificar los inputs de un estado de no controlados a controlados.

# Levantamiento del estado

*Levantar el estado*  es una técnica de _React_ que pone el estado en una localización donde se le pueda pasar como _props_ a los componentes. Lo ideal es poner el estado en el lugar más cercano a todos los componentes que quieren compartir esa información.

*Algo interesante* que le da el nombre a _React_ es su parte de “reactivo” ya que cada vez que hay un cambio en el estado o en los props que recibe un componente se vuelve a renderizar todo el componente y todos sus descendientes.

## Listas de componentes

`{Creando la pagina Badges y cumpliendo el reto de la clase 17}` 

# Introducción a React Router

Las aplicaciones que se trabajan en React son llamadas single page apps. Esto es posible gracias a React Router que es una librería Open Source.

**Multi Page Apps**: Cada página implica una petición al servidor. La respuesta usualmente tiene todo el contenido de la página.

**Single Page Apps (SPA)**: Aplicaciones que cargan una sola página de HTML y cualquier actualización la hacen re-escribiendo el HTML que ya tenían.

**React Router (v4)**: Nos da las herramientas para poder hacer SPA fácilmente. Usaremos 4 componentes:

- _BrowserRouter_: es un componente que debe estar siempre lo más arriba de la aplicación. Todo lo que esté adentro funcionará como una SPA.
- _Route_: Cuando hay un match con el path, se hace render del component. El component va a recibir tres props: match, history, location.
- _Switch_: Dentro de Switch solamente van elementos de Route. Switch se asegura que solamente un Route se renderize.
- _Link_: Toma el lugar del elemento <a>, evita que se recargue la página completamente y actualiza la URL.

# División de la aplicación en rutas

Para instalar React Router lo hacemos desde la terminal con 
```npm
    npm install react-router-dom. 
```
Como es importante usar exactamente la misma versión, del package.json en “dependencies” se quita lo que está delante del 4.

- **Link** internamente tiene un elemento <a> pero va a interceptar el clic para navegar de manera interna sin refrescar toda la página.
