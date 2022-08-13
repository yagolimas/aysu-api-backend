## Fluxo Prim�rio

* Alterar os dados do Paciente.

## Entrada (Dados do Paciente)

1. Id do Paciente (Obrigat�rio)
2. Nome Completo - (Opcional)
3. Data de Nascimento - (Opcional)
4. Peso(kg) - (Opcional)
5. Altura(cm) - (Opcional)
6. Genero (M/F) - (Opcional)
7. E-mail (exemplo@com) - (Opcional)

## Sa�da

* Retornar Id do Paciente
* Status Verdadeiro

## Fluxo(s) alternativo(s)

### 1. Fisioterapeuta n�o foi identificado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Fisioterapeuta n�o foi autenticado.

### 2. Paciente n�o foi encontrado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Paciente n�o foi encontrado.

### 3. Campo obrigat�rio est� vazio

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que � necess�rio passar o campo obrigat�rio.

### 4. Campo de Data de Nascimento est� inv�lido

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o campo de data est� incorreto.

### 5. Campo do E-mail est� inv�lido

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o campo do e-mail n�o � v�lido.

### 6. Paciente possui status como "inativo"

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Paciente est� excluido.