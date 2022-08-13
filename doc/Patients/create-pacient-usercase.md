## Fluxo Primário

* Registrar os dados do Paciente.

## Entrada

1. Nome Completo - (Obrigatório)
2. Data de Nascimento - (Obrigatório)
3. Peso(kg) - (Obrigatório)
4. Altura(cm) - (Obrigatório)
5. Genero (M/F) - (Obrigatório)
6. E-mail (exemplo@com) - (Opcional)

## Saída

* Retornar Id do Paciente cadastrado com sucesso

## Fluxo(s) alternativo(s)

### 1. Fisioterapeuta não foi identificado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Fisioterapeuta não foi autenticado.

### 2. Campo obrigatório está vazio

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que é necessário passar campo obrigatório.

### 3. Campo de Data de Nascimento inválido

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o campo de data está incorreto.

### 4. Campo de E-mail inválido

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o campo do e-mail não é válido.