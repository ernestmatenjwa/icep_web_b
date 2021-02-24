CREATE TABLE applicant(
        studentNumber VARCHAR(9) NOT NULL PRIMARY KEY,
	firstName VARCHAR(50),
        lastName VARCHAR(30) NOT NULL,
        idNumber VARCHAR(13) NOT NULL UNIQUE,
        email VARCHAR(50) NOT NULL UNIQUE,
        address VARCHAR(50) NOT NULL,
        contactNumber VARCHAR(13) NOT NULL,
        specialization VARCHAR(70) NOT NULL, 
        password VARCHAR(30) NOT NULL  
);


