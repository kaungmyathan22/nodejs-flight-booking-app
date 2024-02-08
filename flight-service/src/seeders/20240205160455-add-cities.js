"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const cities = ["Yangon", "Mandalay", "Naypyidaw", "Taunggyi", "Kalaw"];

    /**
     * Add seed commands here.
     *
     * Example:

     */
    await queryInterface.bulkInsert(
      "Cities",
      cities.map((city) => ({
        name: city,
        updatedAt: new Date(),
        createdAt: new Date(),
      })),
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Cities", null, {});
  },
};
