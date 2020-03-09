
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects").insert([
    {name: "Build a Computer", description : "lets build a new computer from scratch", completed: true},
    {name: "Read one book a week", description : "Learn new things", completed: false},
    {name: "Meditate one hour a day", description : "Clear our mind and live peaceful life", completed: true}
  ])
};
