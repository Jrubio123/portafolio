#!/bin/bash
set -e

# Iniciar SQL Server en segundo plano
/opt/mssql/bin/sqlservr &
pid=$!

# Esperar a que arranque el servidor
sleep 30

# Ejecutar script de inicialización
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P YourStrong!Password -i /usr/src/app/init-db.sql

# Esperar a que el proceso de sqlservr finalice (mantiene el contenedor vivo)
wait $pid