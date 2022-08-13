
## Fluxo Prim�rio

* Obter os Paciente(s) que foram cadastrados por um determinado Fisioterapeuta.

## Entrada

1. Id do Fisioterapeuta
2. N�mero da P�gina

## Sa�da

* Retornar Paciente(s) (Com status "ativo", ordenado por alfabeto e com pagina��o)
    1. Id
    2. Nome Completo
    3. Data da ultima sess�o
    4. N�mero da P�gina corrente

## Fluxo(s) alternativo(s)

### 1. Fisioterapeuta n�o foi identificado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Fisioterapeuta n�o foi autenticado.

### 2. Fisioterapeuta identificado, mas n�o possui Paciente(s) cadastrado(s)

* Retornar nenhum dado;
* Status Verdadeiro;
* E mensagem informando que o Fisioterapeuta n�o possui pacientes registrados.

### 3. Fisioterapeuta identificado, mas n�o possui Pacientes ativos

* Retornar nenhum dado;
* Status Verdadeiro;
* E mensagem informando que o Fisioterapeuta n�o possui pacientes ativos.

### 4. N�mero de P�gina n�o est� de acordo com o intervalo de pacientes

* Retornar nenhum dado;
* Status True;
* E mensagem informando que n�o existe pacientes para este intervalo.