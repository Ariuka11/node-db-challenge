
exports.up = async function (knex) {
    await knex.schema.createTable("projects", (table) => {
        table.increments('id')
        table.text("name", 40).notNull().unique()
        table.text("description")
        table.boolean("completed").notNull()
    })
    await knex.schema.createTable('tasks', (table) => {
        table.increments("id")
        table.text("description").notNull()
        table.text("notes")
        table.boolean('completed').notNull()
        table.integer("project_id")
            .references('id')
            .inTable('projects')
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
    })
    await knex.schema.createTable("resources", (table) => {
        table.increments("id")
        table.text("name", 128).notNull().unique()
        table.text("description")
        table.integer("project_id")
            .references("id")
            .inTable('projects')
            .onUpdate("CASCADE")
            .onDelete("CASCADE")
    })
};

exports.down = async function (knex) {
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
};
