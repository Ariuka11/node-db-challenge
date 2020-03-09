
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    {description: "Buy all the parts need", notes: "Look for cheap prices", completed: true, project_id: 1},
    {description: "Make schedule to read book", notes: "Choose the books you want to read", completed: false, project_id: 2},
    {description: "30 min meditation twice a day", notes: "One in the morning and one in the evening", completed: true, project_id: 3}
  ])
};
