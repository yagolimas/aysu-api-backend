## Fluxo Prim�rio

* Registrar os dados da Sess�o do Paciente.

## Entrada

1. Id do Paciente - (Obrigat�rio)
2. Tempo da sess�o - (Obrigat�rio)
3. Frequ�ncia Card�aca (bpm) x Tempo (seg.) - (Obrigat�rio)

## Sa�da

* Retornar Id da Sess�o cadastrada com sucesso

## Fluxo(s) alternativo(s)

### 1. Fisioterapeuta n�o foi identificado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Fisioterapeuta n�o foi autenticado.

### 2. Campo obrigat�rio est� vazio

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que � necess�rio passar campo obrigat�rio.

### 3. Paciente n�o foi encontrado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Paciente n�o foi encontrado.

### 4. Paciente est� "inativo"

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Paciente foi excluido.