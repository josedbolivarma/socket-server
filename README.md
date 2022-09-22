# Socket-Server

Reconstruir modulos de Node
```
npm install
```

Generar el DIST
Usar el segundo comando en caso de que el primero falle.
```
tsc -w
npx tsc -w
```

Levantar servidor
Colocar npx al inicio del comando en caso de que sin eso falle.
```
nodemon dist/
node dist/
```