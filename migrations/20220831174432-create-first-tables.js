'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    //Creating tables for users table
    await queryInterface.createTable('users', {
      id:        {allowNull: false,autoIncrement: true,primaryKey: true,type: Sequelize.INTEGER},
      role_id:   {allowNull: false,type: Sequelize.INTEGER,defaultValue:1},
      firstname: {type: Sequelize.STRING},
      lastname:  {type: Sequelize.STRING},
      fullname:  {type: Sequelize.STRING},
      email:     {type: Sequelize.STRING},
      password:  {type: Sequelize.STRING},
      picture_profile:  {allowNull: true,type: Sequelize.STRING},
      picture_business: {allowNull: true,type: Sequelize.STRING},
      business:   {allowNull: true,type: Sequelize.STRING},
      token:      {allowNull: true,type: Sequelize.STRING},
      deleted_at: {allowNull: true,type: Sequelize.DATE},
      created_at: {allowNull: false,type: Sequelize.DATE},
      updated_at: {allowNull: false,type: Sequelize.DATE}
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};