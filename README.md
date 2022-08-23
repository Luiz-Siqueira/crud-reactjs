# crud-reactjs

Um crud construido com NodeJS e React.js

## Rodando localmente



Primeiramente você deve ter o **NodeJS, React.js e PostgreSQL** instalados em sua maquina, criar um banco com o nome **userdb** e criar uma tabela com o comando abaixo para executar o projeto localmente.


```sql
CREATE TABLE public.usuario (
  userid SERIAL,
  name CHAR(255),
  password VARCHAR NOT NULL,
  email VARCHAR,
  CONSTRAINT usuario_pkey PRIMARY KEY(userid)
) ;


ALTER TABLE public.usuario
  OWNER TO postgres;
```


**Subindo o Back-End**

Dentro da pasta back-end-node Execute o comando de instalação das depêndencias do projeto:

```bash
  npm i
```
Inicie o servidor local com o seguinte comando:

```bash
  npm start
```

**Pode ser que você tenha que alterar o arquivo database.js com as informações do seu ambiente**

Pronto, agora seu servidor API está online na porta 5000!

**Subindo o  Front-End**

Dentro da pasta front-end-react Execute o comando de instalação das depêndencias do projeto:

```bash
  npm i
  npm start
```

Pronto, agora a tela de interações devera abrir!


