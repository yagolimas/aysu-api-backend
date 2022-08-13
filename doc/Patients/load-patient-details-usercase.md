
## Fluxo Primário

* Buscar os detalhes do Paciente.

## Entrada

1. Id do Paciente

## Saída

* Retornar os dados do Paciente (Somente com status "ativo"):
    1. Id
    2. Nome Completo
    3. Data da ultima sessão
    4. Idade
    5. IMC (Peso / (Altura × Altura))
    6. Altura (cm)
    7. Peso (kg)
    8. E-mail

## Fluxo(s) alternativo(s)

### 1. Fisioterapeuta não foi identificado

* Retornar nenhum dado
* Status Falso;
* E mensagem informando que o Fisioterapeuta não foi autenticado.

### 2. Nenhum Paciente encontrado

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que nenhum Paciente foi encontrado.

### 3. Paciente encontrado com status de "inativo"

* Retornar nenhum dado;
* Status Falso;
* E mensagem informando que o Paciente está excluido.