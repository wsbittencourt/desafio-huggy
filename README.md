# Desafio Front end Huggy - Wagner Bittencourt

## Após baixar o projeto, instale as dependências com o comando abaixo 
```
npm install
```

## Configuração

Para que este projeto funcione, deve ser criado um arquivo chamado "config.json", dentro da pasta /src/store/ e neste arquivo deve conter os valores de headers das requisições feitas a API. 

~~~json
{
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": "Bearer xxxx"
}.
~~~

### Para compilar e executar em de desenvolvimento (com hot-reloads):
```
npm run serve
```


