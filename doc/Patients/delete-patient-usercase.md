
## Fluxo Prim�rio

* Excluir um Paciente.

## Entrada

1. Id do Paciente

## Sa�da

* Status OK (Excluido com sucesso)

## Fluxo(s) alternativo(s)

### 1. Fisioterapeuta n�o foi identificado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Fisioterapeuta n�o foi autenticado.

### 2. Paciente n�o foi encontrado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Paciente n�o foi encontrado.

### 3. Paciente j� possui status como "inativo"

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Paciente j� foi excluido.