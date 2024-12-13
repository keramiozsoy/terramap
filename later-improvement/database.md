# database



```SHELL
docker run --name postgres16 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d -p 5432:5432 postgres


```

```SHELL
docker run --name pgadmin -e PGADMIN_DEFAULT_EMAIL=admin@admin.com -e PGADMIN_DEFAULT_PASSWORD=admin -d -p 6432:80 dpage/pgadmin4
```


http://localhost:6432




Click on Add New Server.
Under the General tab:
Name: Give the connection a name (e.g., My PostgreSQL).
Under the Connection tab:
Host: host.docker.internal (this refers to your host machine from inside a Docker container on Docker Desktop).
Port: 5432 (the default PostgreSQL port).
Maintenance Database: postgres (default database).
Username: root 
Password: secret 






```SHELL
docker exec -it postgres16 bash
```

```SHELL
apt-get update
apt-get install -y postgresql-16-postgis-3
```


```SHELL
docker exec -it postgres16 psql -U root

\l

CREATE DATABASE spatial_db;
\c spatial_db
CREATE EXTENSION postgis;

```


```
spatial_db=# SELECT version();
                                                          version
---------------------------------------------------------------------------------------------------------------------------
 PostgreSQL 16.1 (Debian 16.1-1.pgdg120+1) on aarch64-unknown-linux-gnu, compiled by gcc (Debian 12.2.0-14) 12.2.0, 64-bit
(1 row)

```

```
root=# \c spatial_db
You are now connected to database "spatial_db" as user "root".
spatial_db=# CREATE EXTENSION postgis;
CREATE EXTENSION
spatial_db=# SELECT PostGIS_Version();
            postgis_version
---------------------------------------
 3.5 USE_GEOS=1 USE_PROJ=1 USE_STATS=1
(1 row)

```



```SQL
CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    geom GEOMETRY(Point, 4326)
);
```

```SQL
INSERT INTO locations (name, geom)
VALUES ('Sample Location', ST_SetSRID(ST_MakePoint(-122.4194, 37.7749), 4326));  -- Coordinates for San Francisco
```