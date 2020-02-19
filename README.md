# Workshop Cypress
## 1. Creación y configuración del proyecto
1. Crear un repositorio en github con el nombre de **cypress-training** (previo requisito disponer de una cuenta en github).
2. Crear el archivo **.gitignore** en la raíz del proyecto, luego ingrese a la página <https://www.gitignore.io/> y en el campo de texto digite su sistema operativo (ej: windows, osx, macos) y selecciónelo de la lista de autocompletar. Repita este paso para su entorno de desarrollo (ej:visualstudio, sublime, intellij, jetbrains), también agregue la palabra `node`. Presione el botón "Generate" para crear el archivo que contendrá una lista de carpetas y archivos de exclusión y copie su contenido dentro del archivo **.gitignore**. Por último, agregue al final de su archivo .gitignore las siguientes líneas para no subir los videos y capturas generadas en la ejecución de las pruebas:
  ```
  ...
  cypress/videos
  cypress/screenshots
  ...
  ```
3. Crear localmente una carpeta con el nombre de **cypress-training** y luego sitúese dentro de la carpeta.
4. A continuación realice el primer commit y suba los cambios a nuestro repositorio remoto de github: 
```bash
echo "# cypress-training" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/<usuario>/cypress-training.git
git push -u origin master
```
5. Proteger la rama `master` para que los pull request requieran revisión de otros desarrolladores y se compruebe el estado de nuestros test ("ok" :heavy_check_mark: o "fallaron" :x:) antes de hacer un merge a la rama. 
Ir a Settings > Branches adicionamos una regla dando click en **add rule**. Escribimos `master` en el campo de **branch name pattern**. Una vez hecho eso, damos click en las siguientes opciones:
![branch rules](https://github.com/AgileTestingColombia/cypress-training/blob/media/images/branch-rules.png).
6. Añadir como colaboradores a:
* [leonleo997](https://github.com/leonleo997)
* [renardete](https://github.com/renardete)
* [jcruze](https://github.com/jcruze)
7. Instalar la versión `v10.15.3` de NodeJS. Nota: Recomendamos usar [nvm](https://github.com/nvm-sh/nvm) como manejador de versiones.
8. Crear una nueva rama local ejecutando por consola `git checkout -b setup`.
9. Crear una carpeta en la raíz del proyecto llamada **.github** con un archivo llamado **CODEOWNERS** (sin extensión) con lo siguiente:
```js
* @leonleo997 @renardete @jcruze
```
10. Ejecutar en consola `npm init` y colocar la siguiente información:

   | Parámetro          | Valor                                         |
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
11. Realizar un commit donde incluya los archivos creados con el mensaje “setup project configuration” y subir los cambios al repositorio:

    ```bash
    git add .
    git commit -m "setup project configuration"
    git push origin setup
    ```

12. Crear un pull request (PR), asignarle los revisores y esperar la aprobación o comentarios de mejora (en este caso deberá hacer los ajustes requeridos, subir los cambios y esperar nuevamente la aprobación) de los revisores . Si no sabe cómo realizarlo, le recomendamos leer el siguiente artículo [instrucciones](https://help.github.com/articles/creating-a-pull-request/).
13. Una vez hemos obtenido la aprobación de los revisores, realizar el merge a master seleccionando la opción “squash and merge” (squash te permite unir todos los commits en un solo, es más por un concepto de organización). Posteriormente, en su rama local 'master' realice el pull para traer los cambios mergeados en el PR.
    ```bash
    git checkout master
    git pull
    ```

## 2. Instalación de Cypress
1. Ejecutar el siguiente comando:
```
npm install -D cypress  
```
2. Observar que se crea una carpeta llamada **cypress** con la siguiente [estructura](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Folder-Structure):
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
3. Añadir en el archivo `package.json` la propiedad: `"test": "cypress open"`, dentro de `scripts`,  ésto hará que el comando `test` ejecute la instrucción `cypress open`. 
```javascript
...
"scripts": {
    "test": "cypress open"
  },
...
```
4. Presionar el botón `Run all specs` para ejecutar todas las pruebas de ejemplo. Es aquí donde vemos cómo funciona la magia de cypress. Una vez finalice, cerramos la ventana de cypress.

## 3. Creando la primera prueba
Una vez hemos ejecutado las pruebas de ejemplo, eliminamos la carpeta `examples` que está dentro de la carpeta `integration`.  
1. Creamos un archivo llamado `google.spec.js` dentro de la carpeta `/cypress/integration/` con el siguiente contenido:  
```javascript
describe('This is my first cypress test', () => {
    it('should have a title', () => {
        cy.visit('https://www.google.com/');
        cy.title().should('eq', 'Google');
    });
});
```
2. Ejecutar el comando `npm test` para correr la prueba. Una vez finalice y si todo está bien veremos que la prueba se puso en verde:  
![google spec result](https://github.com/AgileTestingColombia/cypress-training/blob/media/images/google-spec.png).


### 4. Configurando las pruebas con Typescript
1. Instalar las dependencias necesarias 
  ```bash
  npm i -D webpack @cypress/webpack-preprocessor ts-loader typescript
  ```
2. Crear el archivo tsconfig.json en la raiz del proyecto y copiar dentro de este las siguientes lineas:
```javascript
{
    "compilerOptions": {
        "target": "es5",
        "module": "commonjs",
        "skipLibCheck": true,
        "strict": true,
        "types": [
            "cypress"
        ]
    },
    "include": [
        "cypress/**/*.ts"
    ],
    "exclude": [
        "node_modules/"
    ]
}
```
3. Crear el archivo webpack.config.js en la raiz del proyecto y agregar las siguientes lineas: 
```javascript
module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          
          test: /\.ts$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
      ],
    },
  }
```
4. Para cargar el plugin en cypress, agregamos las siguientes lineas en el archivo 'cypress/plugins/index.js'
```javascript
/// <reference types="cypress" />

const wp = require('@cypress/webpack-preprocessor')

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  const options = {
    webpackOptions: require('../../webpack.config'),
  }

  on('file:preprocessor', wp(options))
}
```

5. Cambiar la extensión de nuestra prueba "google.spec.js" por "google.spec.ts", se ejecuta el comando para correr las pruebas y validamos que corra.
```bash
npm test
```

### 5. Analisis de código estatico
1. Instalamos las dependencias necesarias y iniciamos la configuración del linter:
```bash
npm install eslint --save-dev
./node_modules/.bin/eslint --init
```
2. Instalamos una extension del linter para cypress y sus buenas practicas:
```bash
npm install eslint-plugin-cypress --save-dev
```
3. Luego agregamos el plugin y las reglas en el archivo eslintrc.js
```javascript
...
    "plugins": [
        "@typescript-eslint",
        "cypress"
    ],
    "rules": {
        "quotes": ["error", "double"],
        "cypress/no-assigning-return-values": "error",
        "cypress/no-unnecessary-waiting": "error",
        "cypress/assertion-before-screenshot": "warn",
        "cypress/no-force": "warn"
    }
...
```
4. Posteriormente modificamos el script test en el "package.json" para ejecutar la verificación de código estático antes de correr las pruebas:
```json
"scripts": {
    "test": "eslint ./cypress/integration/**.ts && cypress open"
  },
```
5. Ejecutamos las pruebas por corriendo el comando test
```bash
npm test
```
