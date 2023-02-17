# Learning React

In this repository, they find each other the review class.

## Config Lint, with Eslint and Prettier with standard JavaScript

1. Install standard and prettier:
   `npm install standard prettier -D`

2. Install Linter
   `npm install init @eslint/config`

3. Config file .pretierrc
   ```{
   "semi": false,
   "singleQuote": true,
   "jsxSingleQuote": true,
   "trailingComma": "none",
   "printWidth": 120,
   "tabWidth": 2
   }
   ```
4. Config eslintrc
   ```
   rules: {
   'space-before-function-paren': 'off'
   }
   ```

## Class 01 Twitter Follow Card

1. Reuse components
2. Props and type TypeScript
   - A prop should be immutable
3. Hook: useState()
   - This hook is the one who maneges the state of the component.
   - A prop of the component, does not modify the state of a component.
   - The inicial state, only start once.
4. Which is the difference between Component and Element.

   - Component: It is a Factory of elements.
   - Element: Is what gets rendered in the DOM

5. Iteration of a list.
6. Conditionals with ternary operators.
7. Basic styles with css.
