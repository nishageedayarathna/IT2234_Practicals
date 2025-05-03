# Lecture Time Activity Queries. --> mongoDB_queries.txt

(01)drop a database that is already in databases.

![1_dropdatabase](https://github.com/user-attachments/assets/6054286e-60de-4799-bc02-a42cbab57176)

(02)drop a collection that is already in a database.

![2_dropcollection](https://github.com/user-attachments/assets/212c551e-a0ac-45fa-9021-0141aa4c2f0f)

(03)delete one data from collection.

![3_deleteOne](https://github.com/user-attachments/assets/1563fa17-4031-4fa7-98c5-e5e770a59a58)

(04)get the name and the duration with _id.

![4_findProjection](https://github.com/user-attachments/assets/54744bd2-a02c-4b62-a7e9-d166d250c9ce)

(05)get only the name of degree with _id.

![5_findProjectionName](https://github.com/user-attachments/assets/2d417fcc-c097-4f9d-a0f4-369ce11f9515)

(06)get only the object_id.

![6](https://github.com/user-attachments/assets/bcd1fad0-be27-4eaf-9e65-8befd31ed40e)

(07)get the name of the degree.

![7](https://github.com/user-attachments/assets/08d23056-d408-4232-8e12-08c6fef61a1a)

(08)delete many degrees that the duration is less than 4.

![8](https://github.com/user-attachments/assets/51f347ec-bf98-4176-a8fa-7ef3d8de1f05)

(09)update one data.

![9](https://github.com/user-attachments/assets/ae556468-df88-4c60-abfd-4a218ee4e570)

(10)update many data.

![10](https://github.com/user-attachments/assets/e7e1e311-25c5-4b66-8fdc-c88d7742c769)

(11)Update the skills--> add one skill for skills -->$push --> Add a skill to skills array.

![11](https://github.com/user-attachments/assets/2ca27c9b-1d74-4cf2-9d9c-2960f72b24f9)

# Exercise Queries --> exercise_answerQueries.txt

(01)create a database bookshop.

(02)create a collection books.

(03)insert the following data.

<img width="725" alt="3_1" src="https://github.com/user-attachments/assets/d8cbfbf5-4403-4e4e-90cd-8de9edf8a7fd" />

<img width="726" alt="3_2" src="https://github.com/user-attachments/assets/161589e5-f9f1-423d-b0a8-49126f803578" />

<img width="726" alt="3_3" src="https://github.com/user-attachments/assets/2fd87dd8-eb55-4479-acaa-6f937d8738d4" />

(04)Find all books.

<img width="726" alt="4_1" src="https://github.com/user-attachments/assets/90726f49-c1db-45f8-bcdd-3ed939aa975e" />

<img width="724" alt="4_2" src="https://github.com/user-attachments/assets/8aeacaf1-5de9-49e1-b16e-9ac85fe0f202" />

<img width="726" alt="4_3" src="https://github.com/user-attachments/assets/f053dd67-43c5-4c1f-bbe9-5dc7f4ea55a3" />

(05)Find all books published after 1950.

<img width="723" alt="5" src="https://github.com/user-attachments/assets/a9bf0016-d843-4ccb-9e7e-e848d7ac080f" />

(06)Find the avilable books.

<img width="724" alt="6_1" src="https://github.com/user-attachments/assets/07285bbb-eba9-4d65-8da0-bc20e9169747" />

<img width="726" alt="6_2" src="https://github.com/user-attachments/assets/3ad2323b-ffc6-41bc-aa80-84bebe995a13" />

<img width="724" alt="6_3" src="https://github.com/user-attachments/assets/26202a85-87c0-423b-9e29-b859fa558fb3" />

(07)Find all books that belong to the "Dystopian" genre.

<img width="726" alt="7_1" src="https://github.com/user-attachments/assets/38a41021-5c48-4820-90a5-afed069e68e3" />

<img width="731" alt="7_2" src="https://github.com/user-attachments/assets/46e0cb1e-9657-4657-b8bf-74ffd437ed03" />

(08) Find the books which published after 1960 and had rating more than 4.0.

no results

(09)Project only title and author fields.

<img width="725" alt="9" src="https://github.com/user-attachments/assets/f43db70c-4919-4abe-bd09-be6e06244d76" />

(10)Update the book "1984" to set available: false:

<img width="730" alt="10" src="https://github.com/user-attachments/assets/39a4cd54-4948-477f-90d7-867eb147d3d9" />

(11)Increase the rating of "Brave New World" by +0.1:


<img width="724" alt="11" src="https://github.com/user-attachments/assets/b1949a5e-a22e-4cd2-b7dc-8eeba05662de" />

(12)Add a new genre "Classic" to "The Great Gatsby":

<img width="724" alt="12" src="https://github.com/user-attachments/assets/8dc48b9e-dfdc-4806-b102-278525ecad20" />

(13)Sort books by published_year ascending:

<img width="724" alt="13_1" src="https://github.com/user-attachments/assets/c4c811b5-501e-46d5-91d3-2b05673ba4e4" />

<img width="723" alt="13_2" src="https://github.com/user-attachments/assets/a0e6b501-4da3-4777-bdf7-f03f4ace7370" />

<img width="724" alt="13_3" src="https://github.com/user-attachments/assets/dbdd2b5f-614c-4a4f-a9d8-f64aa56d8799" />

(14)Sort books by rating descending:

<img width="724" alt="14_1" src="https://github.com/user-attachments/assets/d2d38e9b-2a03-40a6-9a60-b3f53f10a900" />

<img width="724" alt="14_2" src="https://github.com/user-attachments/assets/fec7e882-ae57-4d02-ba44-a63f665dee77" />

<img width="726" alt="14_3" src="https://github.com/user-attachments/assets/1ce4bac9-5385-4d34-b872-f71a50b43186" />

(15)Delete all books with a rating lower than 4.5:

<img width="723" alt="15" src="https://github.com/user-attachments/assets/ba7808bf-5639-4c97-96ce-5bdd95b463f4" />


























