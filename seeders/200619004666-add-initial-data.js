'use strict';

const { query } = require("express");

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Categories', [{
            name: 'Breakfast',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Lunch',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Dinner',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Simple',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            name: 'Fancy',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ])

        return await queryInterface.bulkInsert('Recipes', [{

            name: 'The Meat Stick, lol',
            review: 'a lot of meattttt!',
            description: 'for the meat lovers',
            url: 'www.themeat.com',
            likes: '5',
            vegetarian: false,
            vegan: false,
            glutenfree: false,
            createdAt: new Date(),
            updatedAt: new Date(),
        }])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('RecipeCategories',null, {})
        await queryInterface.bulkInsert('Recipes', null, {})
        await queryInterface.bulkInsert('Categories', null, {})
    }

}

