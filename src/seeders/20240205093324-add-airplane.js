"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Airplanes",
      [
        {
          modelNumber: "airbus a320",
          capacity: "180",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          modelNumber: "airbus a340",
          capacity: "450",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          modelNumber: "airbus a380",
          capacity: "180",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
        {
          modelNumber: "boeing777",
          capacity: "900",
          updatedAt: new Date(),
          createdAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     *
     */
    await queryInterface.bulkDelete("Airplanes", null, {});
  },
};
