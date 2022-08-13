## Fluxo Primário

* Alterar os dados do Paciente.

## Entrada (Dados do Paciente)

1. Id do Paciente (Obrigatório)
2. Nome Completo - (Opcional)
3. Data de Nascimento - (Opcional)
4. Peso(kg) - (Opcional)
5. Altura(cm) - (Opcional)
6. Genero (M/F) - (Opcional)
7. E-mail (exemplo@com) - (Opcional)

## Saída

* Retornar Id do Paciente
* Status Verdadeiro

## Fluxo(s) alternativo(s)

### 1. Fisioterapeuta não foi identificado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Fisioterapeuta não foi autenticado.

### 2. Paciente não foi encontrado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Paciente não foi encontrado.

### 3. Campo obrigatório está vazio

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que é necessário passar o campo obrigatório.

### 4. Campo de Data de Nascimento está inválido

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o campo de data está incorreto.

### 5. Campo do E-mail está inválido

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o campo do e-mail não é válido.

### 6. Paciente possui status como "inativo"

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Paciente está excluido.