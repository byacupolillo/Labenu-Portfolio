### Exercício 1
a)  
1. CREATE TABLE - criar uma nova tabela chamada Actor.
2. VARCHAR (255) - string de no máximo 255 caracteres.
3. DATE - data, no formato YYYY-MM-DD.
4. VARCHAR (6) - string de no máximo 6 caracteres.
5. PRIMARY KEY - chave primária - campo identificador único de uma tabela.
6. NOT NULL - campo específico que tem o preenchimento obrigatório.

CREATE TABLE Actor (
id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```
b) 1. O comando “SHOW DATABASES” mostra todos os bancos de dados existentes.
```
SHOW DATABASES
```
2. O comando “SHOW TABLES” mostra as tabelas já criadas, neste caso a tabela Actor.
```
SHOW TABLES
```

c) 