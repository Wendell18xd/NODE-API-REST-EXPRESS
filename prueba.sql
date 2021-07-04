create database pruebaDB;
use pruebaDB;

create table usuarios(
    id int primary key auto_increment,
    nombre varchar(50) not null,
    email varchar(120) not null,
    password varchar(250) not null
);