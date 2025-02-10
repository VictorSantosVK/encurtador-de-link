const Sequelize = require('sequelize');
const database = require('../db');

// Define o modelo Link, que representa a tabela 'link' no banco de dados
const Link = database.define('link', {
   
    id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,
        allowNull: false, 
        primaryKey: true 
    },
    // Campo 'code' - código encurtado do link
    code: {
        type: Sequelize.STRING, 
        allowNull: false 
    },
    // Campo 'url' - URL original do link encurtado
    url: {
        type: Sequelize.STRING, 
        allowNull: false 
    },
    // Campo 'hits' - contador de acessos ao link
    hits: {
        type: Sequelize.INTEGER, 
        allowNull: true, // Pode ser nulo
        defaultValue: 0 // Se não for informado, inicia em 0
    }
});

module.exports = Link;
