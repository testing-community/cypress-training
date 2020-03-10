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
1. Instalar las dependencias necesarias para la transpilación de nuestras pruebas escritas en Typescript a Javascript por medio de webpack y un preprocesador de cypress para Typescript.
  ```bash
  npm i -D webpack @cypress/webpack-preprocessor ts-loader typescript
  ```
2. Crear el archivo tsconfig.json en la raiz del proyecto y copiar dentro de este la siguiente configuración:
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
3. Posteriormente, crear el archivo de configuración de webpack `webpack.config.js` en la raiz del proyecto y agregar las siguientes lineas para realizar la transpilación de nuestros archivos `.ts` excluyendo las dependencias instaladas en `node_modules`: 
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
4. Para cargar el plugin del preprocesador en cypress e iniciar la transpilación al correr las pruebas agregamos las siguientes lineas en el archivo `cypress/plugins/index.js`
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

5. Cambiar la extensión de nuestra prueba `google.spec.js` por `google.spec.ts`y ejecutar el comando de pruebas para comprobar que la transpilación se ejecuta correctamente al correr las pruebas
```bash
npm test
```

### 5. Análisis de código estatico
1. Para realizar el análisis de código estatico usaremos la herramienta EsLint para validar un conjunto de reglas sobre el código de pruebas y mantener un estilo consistente. Para esto se debe instalar Eslint como dependecia de desarrollo, luego iniciar la configuración del linter y seguimos los pasos que aparecen en consola (ver gif):
```bash
npm install eslint --save-dev
npx eslint --init
```
![google spec result](https://github.com/AgileTestingColombia/cypress-training/blob/media/images/eslint-init.gif).
2. Instalar una extension del linter para cypress que contiene reglas de estilo siguiendo las buenas practicas que sugiere cypress:
```bash
npm install eslint-plugin-cypress --save-dev
```
3. Luego agregar el plugin de cypress y las reglas en el archivo eslintrc.js
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
    "test": "npm run lint && cypress open",
    "lint": "eslint ./cypress/integration/**/*.ts",
    "lint:fix": "npm run lint -- --fix"
},
```
5. Ejecutamos las pruebas por corriendo el comando test
```bash
npm test
```

Nota: En caso de tener errores, algunos de ellos son posible arreglarlos autoáticamente añadiendo el argumento --fix, es decir, usamos `npm run lint -- --fix`.

### 6. Configurar Integración Continua (CI)
En esta sección se configura la integración continua por medio de Travis, lo cual nos permitirá correr nuestras pruebas en un servidor remoto y validar continuamente que los cambios que vamos a ingresar a nuestra aplicación no han afectado el funcionamiento correcto.

1. Inicialmente crear el siguiente script en el package.json para ejecutar todas las pruebas de cypress/integration/ sin tener que levantar el explorador. A esto le llamamos headless mode:
```javascript
"scripts": {
    ...
    "cypress:run": "cypress run"
    ...
  },
```

2. Luego crear el archivo `.nvmrc` para indicarle al CI que versión de nodeJS debe usar para instalar la aplicación y correr las pruebas. Ingresar la versión de node en el archivo.
```text
v10.16.0
```

3. Para indicar la configuración de Travis se debe crear el archivo `.travis.yml` e ingresar la siguiente especificación:
```yml
language: node_js

directories:
- node_modules
notifications:
email: false
branches:
except:
- "/^v\\d+\\.\\d+\\.\\d+$/"
script:
  - npm run cypress:run
  
```
*Nota: Se agrega el script `npm run cypress:run` para ejecutar todas las pruebas, de lo contrario se correria `npm test` por default*

4. Debido a que cypress por default graba videos de la ejecución de las pruebas es util desactivar esta funcionalidad para disminuir el tiempo de ejecución y el uso de recursos en el servidor del CI. Para esto se debe ingresar la siguiente configuración en el archivo `cypress.json`
```json
{
  ...
  "video": false
  ...
}
```
5. Finalmente subir los cambios al repositorio y crear un Pull Request. Se ejecutaran las pruebas en el servidor que provee Travis y se mostrara los resultados de la ejecución en el PR.

### 7. Selectores CSS

En esta sección se realiza un flujo para comprar una camiseta en la tiene de ropa: http://automationpractice.com/. Realizar los siguientes pasos:

1. Primero crear el archivo `buy-shirt.spec.ts` e incluir el siguiente codigo:
```typescript

describe('Buy a t-shirt', () => {

  it('then should be bought a t-shirt', () => {
    cy.visit('http://automationpractice.com/')
    cy.get('#block_top_menu > ul > li:nth-child(3) > a').click()
    cy.get('#center_column a.button.ajax_add_to_cart_button.btn.btn-default').click()
    cy.get('[style*="display: block;"] .button-container > a').click()
    cy.get('.cart_navigation span').click()

    cy.get('#email').type('aperdomobo@gmail.com')
    cy.get('#passwd').type('WorkshopProtractor')
    
    // Debes completar la prueba ...

    cy.get('#center_column > div > p > strong')
      .should('have.text', 'Your order on My Store is complete.')
  });
});
```
Usa como apoyo el gif para conocer mas del flujo esperado, extrae los css selector de la UI manualmente y termina la prueba y correla local.
![google spec result](https://github.com/AgileTestingColombia/cypress-training/blob/media/images/test-flow-buy-shirt.gif)
3. En algunos la red u otros factores externos a la prueba pueden afectar los tiempos de espera, en el archivo de configuración de cypress `cypress.json` agrega los siguientes atributos y modificalos hasta que las pruebas pasen: 
```json
{
  ...
    "defaultCommandTimeout": 20000,
    "responseTimeout": 20000
  ...
}
```
4. Para finalizar sube tus cambios al repositorio y crea un PR.
