
## Fluxo Primário

* Excluir um Paciente.

## Entrada

1. Id do Paciente

## Saída

* Status OK (Excluido com sucesso)

## Fluxo(s) alternativo(s)

### 1. Fisioterapeuta não foi identificado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Fisioterapeuta não foi autenticado.

### 2. Paciente não foi encontrado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Paciente não foi encontrado.

### 3. Paciente já possui status como "inativo"

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Paciente já foi excluido.