exports.up = knex => knex.schema.createTable("tags", table => {
  table.increments("id");
  table.text("name").notNullable();

  table.integer("user_id").references("id").inTable("users");
  table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE"); //DELETA TODAS AS TAGS DA NOTA DELETADA (LIMPA)
});

exports.down = knex => knex.schema.dropTable("tags");



