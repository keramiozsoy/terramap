# geoserver


```SHELL
docker run -d -p 9091:8080 --name geoserver docker.osgeo.org/geoserver:2.26.0
```

Add Data Store:
Go to http://localhost:9091/geoserver and log in to GeoServer.


```SHELL
User: admin
Password: geoserver
```

## 3. Configure PostGIS Store in GeoServer
Now that you're logged into the GeoServer admin interface, follow these steps to configure the PostGIS store (where you'll connect GeoServer to your PostGIS-enabled PostgreSQL database):

Navigate to the "Data" Section: In the left sidebar, go to "Data" → "Stores".

Add a New Store:

Click on the "Add new Store" button located at the top of the page.
Select "PostGIS" as the store type. This will allow you to connect GeoServer to a PostGIS-enabled PostgreSQL database.
Configure the Connection to PostGIS: In the PostGIS Configuration form, you’ll need to fill out the connection details for your PostgreSQL/PostGIS database. Assuming your PostGIS database is running locally, fill out the following:

Workspace: Select or create a workspace. A workspace is a way to organize your layers and stores. For example, create a workspace called spatial_data.

Data Source Name: Choose a name for the store (e.g., PostGIS_Store or spatial_db).

Description: Optional, but you can provide a short description of the store (e.g., "PostGIS database connection for spatial data").

Connection Parameters (PostGIS Database Details):
host: localhost (or the host IP of your Docker container if not running locally).
port: 5432 (default port for PostgreSQL).
database: The name of your PostgreSQL/PostGIS database (e.g., spatial_db).
schema: The schema where your spatial tables are stored. If you use the default schema, enter public.
user: The PostgreSQL user with access to the database (e.g., postgres).
password: The password associated with the PostgreSQL user.
Here’s an example of how the configuration should look:

host: localhost
port: 5432
database: spatial_db
schema: public
user: root
password: secret
Test the Connection: After filling in the database connection details, click the "Test Connection" button to check if GeoServer can connect to your PostGIS database.

If the connection is successful, you'll see a confirmation message.
If the connection fails, verify that the PostgreSQL database is running and accessible, and check the credentials.
Save the Store: Once the connection is successful, click "Save" to create the PostGIS data store.



## 4. Publish a Layer from PostGIS Store
Now that you’ve added the PostGIS store, you can publish a layer from your PostGIS database.

Navigate to Layers: In the left-hand menu, go to Data → Layers.

Add a New Layer:

Click on the "Add a new layer" button.
Select the PostGIS store you just created from the Data Source dropdown.
Select the Table:

After selecting the PostGIS store, GeoServer will list the tables available in the database. You should see your locations table or whatever spatial table you created in your PostGIS database.
Select the table (e.g., locations), and GeoServer will automatically detect the geometry column (e.g., geom).
Configure Layer:

Assign a Layer Name and a Title for the layer.
Set up other parameters like Coordinate Reference System (CRS). Usually, PostGIS stores use EPSG:4326 (WGS 84).
Click "Save" once you've configured the layer.





## 5. Enable WMS/WFS Services
Once your layer is published, GeoServer will automatically expose the layer through WMS (Web Map Service) and WFS (Web Feature Service). These services allow you to access the layer in a mapping application (like Leaflet).

Check if WMS is enabled: By default, GeoServer will expose layers via WMS. You can check the service at:

```SHELL
http://localhost:9091/geoserver/customspatialworkspace/ows?service=WMS&version=1.1.1&request=GetCapabilities
```
Check if WFS is enabled: Similarly, you can check if WFS is enabled at:

```SHELL
http://localhost:9091/geoserver/customspatialworkspace/ows?service=WFS&version=1.1.0&request=GetCapabilities
```
You can use the WMS or WFS URLs in your Leaflet map to display the layer.



