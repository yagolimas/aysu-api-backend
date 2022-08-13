
## Fluxo Primário

* Obter os Paciente(s) que foram cadastrados por um determinado Fisioterapeuta.

## Entrada

1. Id do Fisioterapeuta
2. Número da Página

## Saída

* Retornar Paciente(s) (Com status "ativo", ordenado por alfabeto e com paginação)
    1. Id
    2. Nome Completo
    3. Data da ultima sessão
    4. Número da Página corrente

## Fluxo(s) alternativo(s)

### 1. Fisioterapeuta não foi identificado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Fisioterapeuta não foi autenticado.

### 2. Fisioterapeuta identificado, mas não possui Paciente(s) cadastrado(s)

* Retornar nenhum dado;
* Status Verdadeiro;
* E mensagem informando que o Fisioterapeuta não possui pacientes registrados.

### 3. Fisioterapeuta identificado, mas não possui Pacientes ativos

* Retornar nenhum dado;
* Status Verdadeiro;
* E mensagem informando que o Fisioterapeuta não possui pacientes ativos.

### 4. Número de Página não está de acordo com o intervalo de pacientes

* Retornar nenhum dado;
* Status True;
* E mensagem informando que não existe pacientes para este intervalo.