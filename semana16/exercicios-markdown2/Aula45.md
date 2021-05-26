Exercício 1
a) Remove a coluna de salário da tabela.

b) Muda o nome da coluna gender para sex.

c) Aumenta a quantidade de caracteres da opção gender de 6 para 255.

d)

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

Exercício 2

a)
UPDATE Actor 
SET name = "Cleo Pires"
birth_date = "1982-10-02"
WHERE id = 003;

b)
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

c)
UPDATE Actor
SET 
name = "Fiuk",
birth_date = "1990-10-25",
salary = 60000,
gender = "male"
WHERE id = "005";

d)Erro - tabela desconhecida

Exercicio 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b)
DELETE FROM Actor
WHERE
gender = "male" AND
salary > 1000000

Exercicio 4

a)
SELECT MAX(salary) FROM Actor

b)
SELECT MIN(salary) FROM Actor WHERE gender = "female"

c)
SELECT COUNT(*) FROM Actor WHERE gender = "female"

d)
SELECT SUM(salary) FROM Actor

Exercício 5

a) Retornou a quantidade de male e female da tabela Actor.

b)
SELECT id, name FROM Actor
ORDER BY name DESC;

c)
SELECT * FROM Actor
ORDER BY salary;

d)
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

e)
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

Exercício 6

a)
ALTER TABLE Movie ADD playing_limit_date DATE;

b)
ALTER TABLE Movie CHANGE rating rating FLOAT;

c)
UPDATE Movies SET playing_limit_date = "2021/04/5" WHERE id = "001";
UPDATE Movies SET playing_limit_date = "2018/12/4" WHERE id = "004";

d)
DELETE FROM Movies WHERE id = "001";