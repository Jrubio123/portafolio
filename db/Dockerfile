FROM mcr.microsoft.com/mssql/server:2019-latest

ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=YourStrong!Password
ENV MSSQL_PID=Express

EXPOSE 1433

WORKDIR /usr/src/app

COPY init-db.sql .
COPY entrypoint.sh .

USER root
RUN apt-get update && apt-get install -y curl apt-transport-https ca-certificates unixodbc unixodbc-dev mssql-tools && rm -rf /var/lib/apt/lists/*
ENV PATH="$PATH:/opt/mssql-tools/bin"
RUN chmod +x /usr/src/app/entrypoint.sh

USER mssql

ENTRYPOINT ["/bin/bash", "/usr/src/app/entrypoint.sh"]