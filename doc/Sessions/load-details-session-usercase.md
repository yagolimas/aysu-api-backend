
## Fluxo Prim�rio

* Buscar os detalhes de uma sess�o.

## Entrada

1. Id do Paciente
2. N�mero da P�gina

## Sa�da

* Retornar os dados da Sess�o (por pagina��o e ordenado por data mais atual):
    1. Id da Sess�o
    2. Id do Paciente
    2. Data de Cria��o
    3. Calorias (Kcal)
    4. Frequ�ncia Card�aca M�x. (bpm)
    5. EPOC (ml/kg)
    6. Frequencia Cardiaca(bpm) x Tempo(segundo)
    7. Tempo da Sess�o
    8. N�mero total de P�ginas
    9. N�mero da P�gina corrente

## Fluxo(s) alternativo(s)

### 1. Fisioterapeuta n�o foi identificado

* Retornar nenhum dado
* Status Falso;
* E mensagem informando que o Fisioterapeuta n�o foi autenticado.

### 2. Nenhum Paciente foi encontrado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que nenhum Paciente foi encontrado.


### 3. Nenhum Sess�o foi encontrada para o Paciente

* Retornar nenhum dado;
* Status Verdadeiro;
* E mensagem informando que nenhuma Sess�o foi encontrada.

### 4. Paciente encontrado com status de "inativo"

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Paciente est� exclu�do.

### 5. Info. de FC n�o encontrado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o FC n�o foi encontrado.

### 6. N�mero de P�gina n�o est� de acordo com o intervalo de sess�es

* Retornar nenhum dado;
* Status Verdadeiro;
* E mensagem informando que n�o existe sess�es para este intervalo.