[Live preview](https://linx-fe-dev-challenge.herokuapp.com).

## Desafio | Frontend Developer

Repositório destinado a entrega do teste para **Frontend Developer**  para o time de  **Customer Operations**  da Linx Impulse.

## Descrição do projeto

O projeto consiste de uma página funcional criada segundo o  _layout_ de uma _landing page_ com uma grade de produtos e um formulário de _newsletter_. A aparência da página foi feita segundo o **[mock](https://xd.adobe.com/spec/aa1c5781-ecac-46c9-7032-b66139998404-dc2d/)** disponibilizado. 

A página é completamente responsiva, e as funcionalidades se tratam do carregamento de mais produtos ao clicar no botão de "Ainda mais produtos aqui" e na validação de nome (somente letras/acentos) e e-mail (deve possuir @ e conteúdo antes e depois do @).

## Tecnologias utilizadas

ReactJS, Javascript ES6+, HTML5, CSS3, NPM e Axios (IDE - Visual studio code)

## Instalação

Após clonar o projeto, entre no diretório e execute o seguinte comando para fazer o download de dependências necessárias:

```
npm install
```
Quando a instalação finalizar, execute o seguinte comando para startar o projeto:

```
npm start
```
 Pronto! Só acessar [http://localhost:3000](http://localhost:3000) no browser.
 
 ## Priorização
 
 O desenvolvimento do projeto e priorização em geral foram feitos na seguinte ordem:
<ol>  
<li>Estrutura básica da página (header/productgrid/shareform/footer) com css básico;</li>  
<li>componente da grid de produtos (identificado como principal componente);</li>  
<li>componente de compartilhar (identificado como segundo principal componente);</li>  
<li>Refatoração do código funcional da página/componentes e do css</li>  
</ol>

 ## Observação
Foi solicitado commits regulares de acordo com o prosseguir do desenvolvimento. Como o projeto foi desenvolvido inicialmente na branch master, utilizei do comando `cherry-pick` e resolução de conflitos pra copiar todos os commits pra branch vitor-silva. Por isso, no histórico do github os commits podem aparentar duplicados devido ao cherry-pick.
