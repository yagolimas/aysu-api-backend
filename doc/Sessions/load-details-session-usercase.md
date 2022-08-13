
## Fluxo Primário

* Buscar os detalhes de uma sessão.

## Entrada

1. Id do Paciente
2. Número da Página

## Saída

* Retornar os dados da Sessão (por paginação e ordenado por data mais atual):
    1. Id da Sessão
    2. Id do Paciente
    2. Data de Criação
    3. Calorias (Kcal)
    4. Frequência Cardíaca Máx. (bpm)
    5. EPOC (ml/kg)
    6. Frequencia Cardiaca(bpm) x Tempo(segundo)
    7. Tempo da Sessão
    8. Número total de Páginas
    9. Número da Página corrente

## Fluxo(s) alternativo(s)

### 1. Fisioterapeuta não foi identificado

* Retornar nenhum dado
* Status Falso;
* E mensagem informando que o Fisioterapeuta não foi autenticado.

### 2. Nenhum Paciente foi encontrado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que nenhum Paciente foi encontrado.


### 3. Nenhum Sessão foi encontrada para o Paciente

* Retornar nenhum dado;
* Status Verdadeiro;
* E mensagem informando que nenhuma Sessão foi encontrada.

### 4. Paciente encontrado com status de "inativo"

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Paciente está excluído.

### 5. Info. de FC não encontrado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o FC não foi encontrado.

### 6. Número de Página não está de acordo com o intervalo de sessões

* Retornar nenhum dado;
* Status Verdadeiro;
* E mensagem informando que não existe sessões para este intervalo.