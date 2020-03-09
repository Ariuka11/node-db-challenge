
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("projects").truncate()
  await knex("tasks").truncate()
  await knex("resources").truncate()
};
