## Fluxo Prim�rio

* Registrar os dados do Paciente.

## Entrada

1. Nome Completo - (Obrigat�rio)
2. Data de Nascimento - (Obrigat�rio)
3. Peso(kg) - (Obrigat�rio)
4. Altura(cm) - (Obrigat�rio)
5. Genero (M/F) - (Obrigat�rio)
6. E-mail (exemplo@com) - (Opcional)

## Sa�da

* Retornar Id do Paciente cadastrado com sucesso

## Fluxo(s) alternativo(s)

### 1. Fisioterapeuta n�o foi identificado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Fisioterapeuta n�o foi autenticado.

### 2. Campo obrigat�rio est� vazio

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que � necess�rio passar campo obrigat�rio.

### 3. Campo de Data de Nascimento inv�lido

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o campo de data est� incorreto.

### 4. Campo de E-mail inv�lido

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o campo do e-mail n�o � v�lido.