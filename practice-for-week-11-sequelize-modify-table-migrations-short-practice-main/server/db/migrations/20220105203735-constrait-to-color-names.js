'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('Colors', {
      fields: ['name'],
      type: 'unique',
      name: 'custom_unique_constraint_name'
    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.removeConstraint('Colors', {
      fields: ['name'],
      constraintName: 'custom_unique_constraint_name',
      options: {}
    })
  }
};
