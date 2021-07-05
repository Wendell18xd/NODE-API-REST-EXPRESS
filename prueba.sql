create database pruebaDB;
use pruebaDB;

create table usuarios(
    id int primary key auto_increment,
    nombre varchar(50) not null,
    email varchar(120) not null unique,
    password varchar(250) not null,     
    createdAt timestamp not null,
    updatedAt timestamp not null
);

alter table usuarios
add createdAt timestamp;

alter table usuarios
add updatedAt timestamp;