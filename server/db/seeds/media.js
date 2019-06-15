exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("media")
        .del()
        .then(function() {
            // Inserts seed entries
            return knex("media").insert([
                { id: 1, image_path: "../../public/image-1.png" },
                { id: 2, image_path: "../../public/image-2.png" },
                { id: 3, image_path: "../../public/image-3.png" },
                { id: 4, image_path: "../../public/image-4.png" },
                { id: 5, image_path: "../../public/image-5.png" },
                { id: 6, image_path: "../../public/image-6.png" },
                { id: 7, image_path: "../../public/image-7.png" }
            ])
        })
}
