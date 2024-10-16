# Jogo da Forca - React

Este é um simples jogo da forca desenvolvido em React. O jogador precisa adivinhar as letras de uma palavra escondida, com um número limitado de tentativas erradas.

## 🎮 Funcionalidades

- **Iniciar Jogo**: O jogo seleciona aleatoriamente uma palavra e uma categoria.
- **Adivinhar Letras**: O jogador pode tentar adivinhar as letras da palavra.
- **Contagem de Erros**: Cada erro diminui o número de tentativas restantes.
- **Pontuação**: O jogador ganha 100 pontos ao adivinhar a palavra corretamente.
- **Fim de Jogo**: O jogo acaba quando o jogador erra o número máximo de tentativas ou adivinha todas as letras.

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir a interface de usuário.
- **CSS**: Estilização da aplicação.
- **JavaScript**: Lógica do jogo.

## 🚀 Começando

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado na sua máquina. [Baixar Node.js](https://nodejs.org/)

### Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/JoseGuiFerreira17/secret-word.git
    ```

2. Acesse a pasta do projeto:

    ```bash
    cd secret-word
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Execute o projeto:

    ```bash
    npm start
    ```

5. O projeto estará rodando em: `http://localhost:3000`

## 📝 Estrutura do Projeto

- `App.js`: Componente principal que gerencia o estado do jogo e renderiza as diferentes fases.
- `data/words.js`: Contém a lista de palavras e categorias utilizadas no jogo.
- `components/StartScreen.js`: Tela inicial do jogo.
- `components/Game.js`: Tela do jogo onde o jogador adivinha as letras.
- `components/GameOver.js`: Tela de fim de jogo, exibindo a pontuação e a opção de reiniciar o jogo.

## 📂 Exemplo de `data/words.js`

```js
export const wordsList = {
  frutas: ["maçã", "banana", "laranja", "uva"],
  animais: ["cachorro", "gato", "elefante", "leão"],
  cores: ["vermelho", "azul", "amarelo", "verde"]
};
```

## 🕹️ Como Jogar

1. Ao iniciar o jogo, clique em "Começar o jogo".
2. Uma palavra será escolhida aleatoriamente e você deverá tentar adivinhar suas letras.
3. Digite uma letra no campo e, se ela estiver correta, aparecerá na palavra. Caso contrário, você perderá uma tentativa.
4. Continue tentando até adivinhar a palavra ou esgotar suas tentativas.
5. No final, a pontuação será exibida, e você poderá reiniciar o jogo clicando em "Resetar Jogo".

## 📈 Pontuação
100 pontos por palavra adivinhada corretamente.
O jogo reinicia automaticamente após cada vitória.
