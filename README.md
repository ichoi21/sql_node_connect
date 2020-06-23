#SQL Node Connections

## Description

Connection between MySQL and node placing onto the server.

### How to Install

```bash
git clone https://github.com/ichoi21/sql_node_connect.git
npm init -y
npm i express
npm i mysql
npm i colors
npm i cowsay

node server.js
```

be sure to have the server working

### Issues

- Upon trying to `patch` an item, the app would crash - however the patch would work...
- The problem lies under connectio.js:60 where `msg: "Updated : ID " + todoId`
- Reference Error came back that todoId is not defined
- todoId is not defined because you require to add `obj.todoId` since you're grabbing the object's params..
