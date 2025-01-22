CREATE DATABASE myPortfolio;
GO

USE myPortfolio;
GO


CREATE TABLE Person
(
    PersonID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName NVARCHAR(50) NOT NULL,
    LastName NVARCHAR(50) NOT NULL,
    Email NVARCHAR(100) UNIQUE NOT NULL,
    DateOfBirth DATE NULL,
    CreatedAt DATETIME DEFAULT GETDATE() NOT NULL
);
GO

CREATE TABLE Role
(
    RoleID INT IDENTITY(1,1) PRIMARY KEY,
    RoleName NVARCHAR(50) UNIQUE NOT NULL,
    Description NVARCHAR(255) NULL
);
GO

INSERT INTO Role (RoleName, Description) 
VALUES 
('Admin', 'Administrador del sistema con acceso completo'),
('User', 'Usuario estándar con permisos básicos'),
('Manager', 'Gestor con permisos intermedios'),
('Guest', 'Usuario invitado con acceso restringido');
GO 


CREATE TABLE Login
(
    LoginID INT IDENTITY(1,1) PRIMARY KEY,
    PersonID INT NOT NULL,
    RoleID INT NOT NULL,
    Username NVARCHAR(50) UNIQUE NOT NULL,
    PasswordHash NVARCHAR(255) NOT NULL,
    IsActive BIT DEFAULT 1 NOT NULL,
    LastLogin DATETIME NULL,
    CreatedAt DATETIME DEFAULT GETDATE() NOT NULL,
    FOREIGN KEY (PersonID) REFERENCES Person(PersonID),
    FOREIGN KEY (RoleID) REFERENCES Role(RoleID)
);
GO
