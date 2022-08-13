
## Fluxo Primário

* Buscar o(s) Paciente(s) de acordo com o nome.

## Entrada

1. Nome do Paciente

## Saída

* Retornar Paciente(s) (Com status "ativo" e ordenado por alfabeto)
    1. Id
    2. Nome Completo
    3. Data da ultima sessão

## Fluxo(s) alternativo(s)

### 1. Fisioterapeuta não foi identificado

* Retornar nenhum dado
* Status Falso;
* E mensagem informando que o Fisioterapeuta não foi autenticado.

### 2. Nenhum Paciente(s) encontrado(s)

* Retornar nenhum dado;
* Status Verdadeiro;
* E mensagem informando que nenhum Paciente foi encontrado.

### 3. Nome do Paciente não informado

* Retornar nenhum dado;
* Status Verdadeiro;
* Não realizar a consulta. Retornar nenhum dado