# Algumas instruções para usar

### 1 - Ao criar uma migrate p ara criar tabelas nos bancos, usar os comando nesse formato abaixo: <br>

_`node --import tsx ./node_modules/.bin/knex migrate:make create-documents`_

### 2 - Para desfazer a migration use o comando nesse formato abaixo: <br>

_`node --import tsx ./node_modules/.bin/knex migrate:rollback`_

# Requisitos Funcionais

- [x] O usuário deve poder criar uma nova transação
- [x] O usuário deve poder obter um resumo da sua conta
- [x] O usuário deve poder listar todas as transações qwue já ocorreram
- [x] O usuário deve poder visualizar uma transação única

# Regras de Negócio

- [x] A transação deve ser do tipo crédito que somará ao valor total, ou débito que subtrairá
- [ ] Deve ser possível identificarmos o usuário entre as requisições
- [ ] o usuário só pode visuazliar transações o qual ele criou

# Requisitos Não-Funcionais
