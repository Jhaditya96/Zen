# SQL ASSIGNMENT On Several Query Operations 
## Exercise 1 — Tasks
* ### Find the title of each film
 Soln. SELECT title FROM movies;
* ### Find the director of each film
Soln. SELECT title FROM movies;
* ### Find the title and director of each film
Soln. SELECT title,director FROM movies;
* ### Find the title and year of each film
Soln. SELECT title,year FROM movies; 
* ### Find all the information about each film
Soln. SELECT title, year FROM movies; 

## Exercise 2 — Tasks
* ### Find the movie with a row id of 6
Soln. SELECT id,title FROM movies WHERE id = 6;
* ### Find the movies released in the years between 2000 and 2010
Soln. SELECT Title FROM movies WHERE year BETWEEN 2000 AND 2010;
* ### Find the movies not released in the years between 2000 and 2010
Soln. SELECT Title FROM movies WHERE NOT year BETWEEN 2000 AND 2010;
* ### Find the first 5 Pixar movies and their release year
Soln. SELECT Title,year FROM movies LIMIT 5 ;

## Exercise 3 — Tasks
* ### Find all the Toy Story movies
Soln. SELECT Title FROM movies WHERE Title LIKE "%Toy %";
* ### Find all the movies directed by John Lasseter
Soln. SELECT Title FROM movies WHERE director LIKE "John Lasseter";
* ### Find all the movies (and director) not directed by John Lasseter
Soln. SELECT Title FROM movies WHERE NOT director LIKE "John Lasseter";
* ### Find all the WALL-* movies
Soln.SELECT * FROM movies WHERE title LIKE "WALL%"

## Exercise 4 — Tasks
* ### List all directors of Pixar movies (alphabetically), without duplicates
Soln. SELECT DISTINCT director FROM movies ORDER BY director;
* ### List the last four Pixar movies released (ordered from most recent to least)
Soln. SELECT title, year FROM movies ORDER BY year DESC LIMIT 4;
* ### List the first five Pixar movies sorted alphabetically
Soln. SELECT title FROM movies ORDER BY title LIMIT 5;
* ### List the next five Pixar movies sorted alphabetically
Soln.SELECT title FROM movies ORDER BY title LIMIT 5 OFFSET 5;

## Review 1 — Tasks
* ### List all the Canadian cities and their populations
Soln. SELECT * FROM north_american_cities WHERE country="Canada";
* ### Order all the cities in the United States by their latitude from north to south
Soln. SELECT city FROM north_american_cities WHERE country="United States" ORDER BY latitude DESC;
* ### List all the cities west of Chicago, ordered from west to east
Soln. SELECT city FROM north_american_cities WHERE longitude < -87.629798 ORDER BY longitude;
* ### List the two largest cities in Mexico (by population)
Soln. SELECT city FROM north_american_cities WHERE country LIKE "Mexico" ORDER BY population DESC LIMIT 2;
* ### List the third and fourth largest cities (by population) in the United States and their population
Soln.SELECT city FROM north_american_cities WHERE country = "United States" ORDER BY population DESC LIMIT 2 OFFSET 2;

## Exercise 6 — Tasks
* ### Find the domestic and international sales for each movie
Soln. SELECT title,domestic_sales,international_sales FROM movies JOIN boxoffice ON movies.id = boxoffice.movie_id;
* ### Show the sales numbers for each movie that did better internationally rather than domestically
Soln. SELECT title,domestic_sales,international_sales
	  FROM movies JOIN boxoffice ON movies.id=boxoffice.movie_id WHERE international_sales * ###  domestic_sales;
* ### List all the movies by their ratings in descending order
Soln. SELECT title,rating FROM movies JOIN boxoffice ON movies.id=boxoffice.movie_id ORDER BY rating DESC;

## Exercise 7 — Tasks(OUTER JOINS)
* ### Find the list of all buildings that have employees
Soln. SELECT DISTINCT building FROM employees;
* ### Find the list of all buildings and their capacity
Soln. SELECT * FROM buildings;
* ### List all buildings and the distinct employee roles in each building (including empty buildings)
Soln. SELECT DISTINCT building_name,role FROM buildings LEFT JOIN employees ON building_name=building;

## Exercise 8 — Tasks (A short note on NULLs)
* ### Find the name and role of all employees who have not been assigned to a building
Soln. SELECT name,role FROM employees WHERE building IS NULL;
* ### Find the names of the buildings that hold no employees
Soln. SELECT DISTINCT building_name FROM buildings LEFT JOIN employees ON building_name = building WHERE role IS NULL;

## Exercise 9 — Tasks
* ### List all movies and their combined sales in millions of dollars
Soln. SELECT Title,(Domestic_sales + International_sales)/1000000 AS GROSS_SALES FROM movies JOIN BoxOffice ON Id = Movie_id;
* ### List all movies and their ratings in percent
Soln. SELECT title,rating * 10 AS ratings FROM movies INNER JOIN boxoffice ON movies.id = boxoffice.movie_id;
* ### List all movies that were released on even number years
Soln. SELECT title FROM movies WHERE year % 2 == 0;

## Exercise 10 — Tasks
* ### Find the longest time that an employee has been at the studio
Soln. SELECT MAX(Years_employed) AS Longest_Experience FROM employees;
* ### For each role, find the average number of years employed by employees in that role
Soln. SELECT Role,AVG(years_employed) AS Avg_Experience FROM employees GROUP BY Role;
* ### Find the total number of employee years worked in each building
Soln. SELECT Building,SUM(years_employed) AS Avg_Experience FROM employees GROUP BY Building;

## Exercise 11 — Tasks
* ### Find the number of Artists in the studio (without a HAVING clause)
Soln. SELECT COUNT(Role) AS TOT_Artists FROM employees WHERE Role = "Artist";
* ### Find the number of Employees of each role in the studio
Soln. SELECT Role,COUNT(Role) AS Count_Of_Professionals FROM employees GROUP BY Role;
* ### Find the total number of years employed by all Engineers
Soln. SELECT SUM(Years_employed) AS Total_Experience_engineers FROM employees WHERE Role = "Engineer";

## Exercise 12 — Tasks
* ### Find the number of movies each director has directed
Soln. SELECT director,Title,Count(Title) AS Director_Movies_Count FROM movies GROUP BY Director;
* ### Find the total domestic and international sales that can be attributed to each director
Soln. SELECT Director,SUM(Domestic_sales + International_sales) AS GROSS_SALES FROM movies JOIN Boxoffice ON Id = Movie_id GROUP BY Director;

## Exercise 13 — Tasks
* ### Add the studio new production, Toy Story 4 to the list of movies (you can use any director)
Soln. Insert INTO movies VALUES (12, "Toy Story 4", "Sam Willis", 2014, 114);
* ### Toy Story 4 has been released to critical acclaim! It had a rating of 8.7, and made 340 million domestically and 270 million internationally. Add the record to the BoxOffice table.
Soln.INSERT INTO BOXOFFICE VALUES (12, 8.7, 340000000, 270000000);

## Exercise 14 — Tasks
* ### The director for A Bug Life is incorrect, it was actually directed by John Lasseter
Soln. UPDATE Movies SET Director = "John Lasseter" WHERE id = 2;
* ### The year that Toy Story 2 was released is incorrect, it was actually released in 1999
Soln. UPDATE Movies SET Year = 1999 WHERE Title = "Toy Story 2";
* ### Both the title and director for Toy Story 8 is incorrect! The title should be "Toy Story 3" and it was directed by Lee Unkrich
Soln. UPDATE Movies 
SET Title = "Toy Story 3", Director = "Lee Unkrich" WHERE Title = "Toy Story 8";

## Exercise 15 — Tasks
* ### This database is getting too big, lets remove all movies that were released before 2005.
Soln.DELETE FROM Movies WHERE Year < 2005;
* ### Andrew Stanton has also left the studio, so please remove all movies directed by him
Soln. DELETE FROM Movies WHERE Director = "Andrew Stanton";

## Exercise 16 — Tasks
Create a new table named Database with the following columns:
– Name A string (text) describing the name of the database
– Version A number (floating point) of the latest version of this database
– Download_count An integer count of the number of times this database was downloaded
Soln.CREATE TABLE Database (
	id INTEGER PRIMARY KEY,
	Name TEXT,
	Version Float,
	Download_count INTEGER
);

## Exercise 17 — Tasks
* ### Add a column named Aspect_ratio with a FLOAT data type to store the aspect-ratio each movie was released in
Soln.ALTER TABLE Movies 
	 ADD Aspect_ratio FLOAT;
* ### Add another column named Language with a TEXT data type to store the language that the movie was released in. Ensure that the default for this language is English.
Soln.ALTER TABLE Movies
	 ADD Language TEXT DEFAULT English;

## Exercise 18 — Tasks
* ### We have sadly reached the end of our lessons, lets clean up by removing the Movies table
Soln. DROP TABLE If Exists Movies; 
* ### And drop the BoxOffice table as well	 
Soln. DROP TABLE If Exists BoxOffice; 