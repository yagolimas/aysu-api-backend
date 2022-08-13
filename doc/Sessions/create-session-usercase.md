## Fluxo Primário

* Registrar os dados da Sessão do Paciente.

## Entrada

1. Id do Paciente - (Obrigatório)
2. Tempo da sessão - (Obrigatório)
3. Frequência Cardíaca (bpm) x Tempo (seg.) - (Obrigatório)

## Saída

* Retornar Id da Sessão cadastrada com sucesso

## Fluxo(s) alternativo(s)

### 1. Fisioterapeuta não foi identificado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Fisioterapeuta não foi autenticado.

### 2. Campo obrigatório está vazio

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que é necessário passar campo obrigatório.

### 3. Paciente não foi encontrado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Paciente não foi encontrado.

### 4. Paciente está "inativo"

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Paciente foi excluido.