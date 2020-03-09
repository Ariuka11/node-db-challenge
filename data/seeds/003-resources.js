
exports.seed = function(knex) {
  // Deletes ALL existing entries
 return knex("resources").insert([
   {name : "Amazon", description: "Cheap prices", project_id : 1},
   {name : "Barns and Nobles", description: "Good selection", project_id : 2},
   {name : "Youte", description: "Lot of free instructions", project_id : 3}
 ])
};
