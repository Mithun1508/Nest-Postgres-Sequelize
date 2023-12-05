/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async up(queryInterface, Sequelize) {
    // Assuming your table name is 'Books'
return queryInterface.bulkInsert('Books', [
  {
    bookName: 'The Great Gatsby',
    authorName: 'F. Scott Fitzgerald',
    publishYear: 1925,
    isAvailable: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // Add more data as needed
]);

  },

  async down(queryInterface, Sequelize) {
    // This is typically used to undo the data seeding. You might not need it for now.
    // You can keep it empty or add logic to remove the seeded data if needed.
  },
};
