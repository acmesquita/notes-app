# Template React Redux com Hooks

Template para criação de projetos em React com Redux, utilizando os hooks. Além do padrão Duck Pattern e Redux Sauce para organização e otimização na construção dos reduces e actions.

### Utilizar

#### 1º Baixar template

```
  git clone https://github.com/acmesquita/template-react-redux-hooks.git nome_do_projeto
```

#### 2º Renomear projeto

<i>package.json</i>
```
  {
    "name": "nome_do_projeto"
  }
```

#### 3º Comente ou remova o exemplo

<i>src/store/reducer/index.js</i>

```
  import { combineReducers } from 'redux';

  // import exampleReducer from './example-reducer'

  export default combineReducers({
    // exampleReducer,
  })
```

ou

```
  import { combineReducers } from 'redux';

  export default combineReducers({

  })
```

#### Pronto!!!

O projeto já estará pronto para a criação do seu projeto completamente configurado e seguindo as melhores práticas!

Aproveite e vamos codar!