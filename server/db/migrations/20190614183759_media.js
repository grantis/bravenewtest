exports.up = function(knex, Promise) {
    return knex.schema.createTable("media", table => {
        table.increments("id").primary()
        table.string("image_path")
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("media")
}
