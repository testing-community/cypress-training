# Workshop Cypress
## 1. Configuración e instalación
Primero, vamos a instalar Cypress:
```
npm install -D cypress  
````
Veremos que se crea una carpeta llamada `cypress` que tiene la siguiente [estructura](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Folder-Structure):
```
/cypress
  /fixtures
    - example.json

  /integration
    /examples
      - actions.spec.js
      - aliasing.spec.js
      - assertions.spec.js
      - connectors.spec.js
      - cookies.spec.js
      - cypress_api.spec.js
      - files.spec.js
      - local_storage.spec.js
      - location.spec.js
      - misc.spec.js
      - navigation.spec.js
      - network_requests.spec.js
      - querying.spec.js
      - spies_stubs_clocks.spec.js
      - traversal.spec.js
      - utilities.spec.js
      - viewport.spec.js
      - waiting.spec.js
      - window.spec.js

  /plugins
    - index.js

  /support
    - commands.js
    - index.js
```
Una vez lo tenemos instalado, pasamos a ejecutar los ejemplos. Para esto, añadimos `cypress open` en el comando `test`, de esta forma el archivo `package.json` debe quedar de esta manera:
```javascript
...
"scripts": {
    "test": "cypress open"
  },
...
```
Después, damos click en el botón `Run all specs` para ejecutar todas las pruebas. Es aquí donde vemos cómo funciona la magia del de cypress en frente de nuestros ojos. Una vez termine cerramos la ventana de cypress.

## 2. Creando la primera prueba
Una vez hemos ejecutado las pruebas de ejemplo con los que viene `Cypress`, eliminamos la carpeta `examples` que está dentro de la carpeta de `integration`.  
Creamos un archivo llamado `google.spec.js` dentro de la carpeta `/cypress/integration/` con el siguiente contenido:  
```javascript
describe('This is my first cypress test', () => {
    it('should have a title', () => {
        cy.visit('https://www.google.com/');
        cy.title().should('eq', 'Google');
    });
});
```
Una vez corremos la prueba ejecutamos de nuevo `npm test` y ejecutamos la prueba. Si todo está bien vemos que la prueba pasará en verde:
![google spec result](https://github.com/AgileTestingColombia/cypress-training/resources/images/google-spec.png)

