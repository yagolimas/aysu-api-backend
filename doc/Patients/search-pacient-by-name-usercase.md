
## Fluxo Prim�rio

* Buscar o(s) Paciente(s) de acordo com o nome.

## Entrada

1. Nome do Paciente

## Sa�da

* Retornar Paciente(s) (Com status "ativo" e ordenado por alfabeto)
    1. Id
    2. Nome Completo
    3. Data da ultima sess�o

## Fluxo(s) alternativo(s)

### 1. Fisioterapeuta n�o foi identificado

* Retornar nenhum dado
* Status Falso;
* E mensagem informando que o Fisioterapeuta n�o foi autenticado.

### 2. Nenhum Paciente(s) encontrado(s)

* Retornar nenhum dado;
* Status Verdadeiro;
* E mensagem informando que nenhum Paciente foi encontrado.

### 3. Nome do Paciente n�o informado

* Retornar nenhum dado;
* Status Verdadeiro;
* N�o realizar a consulta. Retornar nenhum dado