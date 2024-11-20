CREATE TABLE `registroevento`.`t_registros` 

( `Id` INT NOT NULL AUTO_INCREMENT ,  
`Name` VARCHAR(255) NOT NULL , 
 `Tel` VARCHAR(10) NOT NULL ,  
`Email` VARCHAR(250) NOT NULL ,  
`Carrera` VARCHAR(100) NOT NULL ,  
`Id_uni` VARCHAR(20) NOT NULL ,  
`Semestre` VARCHAR(50) NOT NULL , 
`token` VARCHAR(50) NOT NULL , 
`cheked` VARCHAR(1) default 0, 

PRIMARY KEY  (`Id`)) 
ENGINE = InnoDB;

 procedimiento para guardar informacion
CREATE PROCEDURE `InsertData
`(IN `Name` VARCHAR(250) CHARSET utf8, 
IN `Tel` VARCHAR(10) CHARSET utf8, 
IN `Email` VARCHAR(250) CHARSET utf8, 
IN `Carrera` VARCHAR(10) CHARSET utf8,
 IN `Id_uni` VARCHAR(20) CHARSET utf8, 
 IN `Semestre` VARCHAR(50) CHARSET utf8) 
 IN `token` VARCHAR(100) CHARSET utf8) 
 NOT DETERMINISTIC CONTAINS SQL SQL SECURITY 
 DEFINER 
 INSERT INTO t_registros 
(
    Name, 
    Tel, 
    Email, 
    Carrera, 
    Id_uni, 
    Semestre,
    token
) 
    VALUES (Name, Tel, Email, Carrera, Id_uni, Semestre,token);

executer procedimiento
    SET @p0='yugi moto';
    SET @p1='7821493131'; 
    SET @p2='yugi_@gmail.com'; 
    SET @p3='duelista'; 
    SET @p4='sepa'; 
    SET @p5='1'; 
    SET @p6='token'; 
    CALL `InsertData`(@p0, @p1, @p2, @p3, @p4, @p5,@p6);