# Contributing Guide

¡Gracias por tu interés en contribuir a este proyecto! 🚀  

Este documento describe las normas y recomendaciones para colaborar.

---

## 📦 Requisitos previos

Antes de comenzar asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- Git

---

## 🛠️ Configuración del proyecto

1. Haz un fork de este repositorio.
2. Clona tu fork:

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```

3. Realiza tus cambios en el código.

4. Asegúrate de cumplir con las reglas de estilo y linting.

5. Haz commit de tus cambios:
    ```bash
    git commit -m "feat: descripción breve del cambio"
    ```
6. Haz push de tu rama:
    ```bash
    git push origin feature/nueva-funcionalidad
    ```
7. Abre un Pull Request.

## ✅ Reglas de escritura de código (ESLint)
###  Este proyecto utiliza ESLint con la siguiente configuración:
   ```json
    {
        "env": {
            "browser": true,
            "es2021": true,
            "jest": true
        },
        "extends": [
            "eslint:recommended",
            "plugin:react/recommended"
        ],
        "parserOptions": {
            "ecmaVersion": "latest",
            "sourceType": "module"
        },
        "plugins": [
            "react"
        ],
        "rules": {
            "indent": ["error", "tab"],
            "linebreak-style": ["error", "windows"],
            "quotes": ["error", "double"],
            "semi": ["error", "always"],

            "camelcase": ["error", { "properties": "always" }],
            "id-match": "off",
            "new-cap": ["error", { "newIsCap": true, "capIsNew": false }],
            "react/react-in-jsx-scope": "off"
        },
        "settings": {
            "react": {
                "version": "detect"
            }
        }
    }
   ```
### Ejemplos de código
**Válido:**
```javascript
    function HolaMundo() {
        console.log("Hola Mundo");
    }:
```
**Inválido:**
```javascript
     function hola_mundo() {
        console.log('Hola Mundo')
     }
```

## 🧪 Tests y revisión
Antes de enviar tu PR, asegúrate de ejecutar:
```bash
    npm run lint
```
Verifica que no existan errores ni advertencias.

Los cambios deben estar alineados con la guía de estilo.
## 📄 Convenciones de commits
Sigue la convención de commits:

- `feat:` nueva funcionalidad
- `fix:` corrección de bug
- `docs:` cambios en documentación
- `style:` cambios de formato (no de lógica)
- `refactor:` cambios en el código sin alterar funcionalidad
- `test:` cambios en pruebas
- `chore:` cambios en configuración o dependencias

## 🤝 Pull Requests

Describe claramente el propósito del cambio.

Incluye capturas o ejemplos si es una nueva UI/feature.

Asegúrate que la rama esté actualizada con main.

¡Gracias por contribuir! 💙