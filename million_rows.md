Use a file stream to look through the data, read / return data in batches
If using a PostgreSQL database, we can use the pg-cursor module
We can set the size of batches and returned results
As we receive more results, we can append them to the currently displayed results