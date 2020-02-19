# Workshop Cypress
## 1. Creación y configuración del proyecto
Para iniciar vamos a crear un repositorio en Github y un proyecto usando NodeJS:
1. Crear en Github un repositorio con el nombre de **cypress-training**. Para esto debe tener una cuenta en la platafoma.
2. Crear el archivo **.gitignore** en la raíz del proyecto. Ingresar a la página <https://www.gitignore.io/> y en el área de texto  agregar el _sistema operativo_, _IDE's_ y _NodeJS_, ejemplo _OSX Node VisualStudioCode_. Genere el archivo y cópielo dentro del archivo **.gitignore**. Ademas agregue las siguientes lineas para no subir videos ni capturas de ejecución de las pruebas.
  ```
  ...
  cypress/videos
  cypress/screenshots
  ...
  ```
2. Crear localmente una carpeta con el nombre de **cypress-training** y nos movemos dentro de la carpeta.
2. A continuación para realizar el primer commit y subir los cambios a nuestro repositorio remoto en github: 
```bash
echo "# cypress-training" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/<usuario>/cypress-training.git
git push -u origin master
```
3. Vamos a proteger la rama master para que los Pull Request requieran revision de otros desarrolladores y comprobación del estado (Nuestros tests estan Ok :heavy_check_mark: o Fallaron :x: ) de nuestra aplicación antes de hacer un merge a la rama. Ir a Settings > Branches adicionamos una regla dando click en **add rule**. Escribimos `master` en el campo de **branch name pattern**. Una vez hecho eso, damos click en las siguientes opciones:
![branch rules](https://github.com/AgileTestingColombia/cypress-training/blob/media/images/branch-rules.png).
4. Añadimos como colaboradores a:
* [leonleo997](https://github.com/leonleo997)
* [renardete](https://github.com/renardete)
* [jcruze](https://github.com/jcruze)
5. Instalamos la versión `v10.15.3` de NodeJS. Nota: Recomendamos usar [nvm](https://github.com/nvm-sh/nvm) como manejador de versiones.
6. Creamos una nueva rama local ejecuntando por consola `git checkout -b setup`.
1. Crear una carpeta en la raíz del proyecto llamada **.github** con un archivo llamado **CODEOWNERS** (sin extensión) con lo siguiente:
```js
* @leonleo997 @renardete @jcruze
```
8. Ejecutar en consola `npm init` y colocar la siguiente información:

   | Parametro          | Valor                                         |
   | ------------------ | ----------                                    |
   | **Name**           | cypress-training                              |
   | **Version**        | _[Por Defecto]_                               |
   | **Description**    | This is a Workshop about Cypress              |
   | **Entry Point**    | _[Por Defecto]_                               |
   | **Test Command**   | `cypress open`                                |
   | **Git Repository** | _[Por Defecto]_                               |
   | **Keywords**       | ui-testing, dojo, practice, cypress           |
   | **Author**         | _[Su nombre]_ <_[Su correo]_> (_[su github]_) |
   | **License**        | MIT                                           |
1. Realizar un commit donde incluya los archivos creados con el mensaje “setup project configuration” y subir los cambios al repositorio:

    ```bash
    git add .
    git commit -m "setup project configuration"
    git push origin setup
    ```

1. Crear un PR, asignarle los revisores y esperar por la aprobación o comentarios de los revisores. Si no sabe como realizarlo en el siguiente articulo puedes encontrar las instrucciones para crearun Pull Request(PR) [instrucciones](https://help.github.com/articles/creating-a-pull-request/).
1. Una vez aprobado realizar el merge a master seleccionando la opción “squash and merge”. Posteriormente, volver a la rama master local y traer los cambios mergeados en el PR.
    ```bash
    git checkout master
    git pull
    ```

**Consideraciones importantes:** Se espera que por cada punto usted cree una rama donde su nombre tenga relación con lo que usted hace en el punto, y que cree un Pull Request que tenga como revisores a los contribuidores. Finalmente, una vez su PR esté probado, haga merge usango la opción “squash and merge”.

## 2. Instalación de Cypress
1. Primero, vamos a instalar Cypress:
```
npm install -D cypress  
```
2. Veremos que se crea una carpeta llamada **cypress** que tiene la siguiente [estructura](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Folder-Structure):
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
3. Una vez lo tenemos instalado, pasamos a ejecutar los ejemplos. Para esto, añadimos `cypress open` en el comando `test`, de esta forma el archivo `package.json` debe quedar de esta manera:
```javascript
...
"scripts": {
    "test": "cypress open"
  },
...
```
4. Después, damos click en el botón `Run all specs` para ejecutar todas las pruebas. Es aquí donde vemos cómo funciona la magia del de cypress en frente de nuestros ojos. Una vez termine cerramos la ventana de cypress.

## 3. Creando la primera prueba
Una vez hemos ejecutado las pruebas de ejemplo con los que viene `Cypress`, eliminamos la carpeta `examples` que está dentro de la carpeta de `integration`.  
1. Creamos un archivo llamado `google.spec.js` dentro de la carpeta `/cypress/integration/` con el siguiente contenido:  
```javascript
describe('This is my first cypress test', () => {
    it('should have a title', () => {
        cy.visit('https://www.google.com/');
        cy.title().should('eq', 'Google');
    });
});
```
2. Una vez corremos la prueba ejecutamos de nuevo `npm test` y ejecutamos la prueba. Si todo está bien vemos que la prueba pasará en verde:  
![google spec result](https://github.com/AgileTestingColombia/cypress-training/blob/media/images/google-spec.png).


### 4. Configurando las pruebas con Typescript
1. Instalar las dependencias necesarias
  ```bash
  npm i -D webpack @cypress/webpack-preprocessor ts-loader typescript
  ```
2. 

