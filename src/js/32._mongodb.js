// BJON: Conjunto clave valor

// sql: table : NoSql: Collection

    // use local

    db.personas.insertOne({
    "nombre": "luis",
    "edad": 28,
    "intereses": ["videojuegos", "explorar"],
    "direccion": {
        "calle": "Av. codex",
        "ciudad": "Tuxtepec"
    }
    })

    /* _id: ObjectId
       nombre: String
       edad: Int32
       intereses: Array
        0: String
        1: String
       direccion: Object
        calle: String
        ciudad: String
    */

    db.personas.insertOne({
        "nombre": "Monica",
        "edad": 20,
        "hobbies": ["basket", "twitch"],
        "activo": true
    })

    db.personas.find({ nombre: "Monica" })

    // show collections

    db.prueba.insertOne({}) // create collection

    // db.testing.drop() delete collection

    db.personas.insertMany([
        {
            "nombre": "remi",
            "edad": 1,
            "hobbies": ["basketball", "tv"]
        },
        {
            "nombre": "loki",
            "edad": 12,
            "hobbies": ["correr", "cube rubick"]
        }
    ])

    // find: find every collection and element
    // findOne: find only one element

    db.personas.find() // all

    db.personas.findOne({ nombre: "remi" })

    // operator of comp : $gt, $lt, $eq
    // $gt : >  $lt : < : eq : ==
    // $gte : >= $lte : <=

    db.personas.find({ edad:{"$gt": 6} })
    // edad > 6

    db.personas.find({ edad:{"$lt": 6} })
    // edad < 6

    db.personas.find({ edad:{"$eq": 12} })
    // edad == 12

    db.personas.find({ nombre:{"$eq": "luis"} })
    // "" == "name"
    // 6a8253c7a426e7f46073a0b1
    // Update
    /*
        updateOne : update only one
        updateMany : update much
    */

    db.personas.insertOne({
        "nombre": "luis",
        "edad": 24,
        "hobbies": ["basketball", "urbex"]
    })

    db.personas.find({ nombre: "luis" })

    db.personas.deleteOne({ name: "luis" })

    // Update

    db.personas.updateOne({_id:ObjectId('6a826388a426e7f46073a0c8')},{
        "$set":{"activo":true}
    })

    db.personas.updateOne({nombre:"loki"},{
        "$set":{"activo":true}
    })

    // $and $or $not : && and || or ! not

    db.personas.updateOne({edad:28}, {
        "$unset": {"intereses":["videojuegos", "explorar"]}
    })

    // $unset delete the column of collection

    db.personas.updateOne({edad:28}, {
        "$set": {"hobbies":["basketball", "videogames"]}
    })

    // edad : 28 age: 28

    db.personas.find({"$and":[{"edad":{"$gte": 11}}, {"edad": {"$lte": 21}}]})
    // and range(11 - 21)

    db.personas.find({"$or":[{"edad":{"$gte": 11}}, {"edad": {"$lte": 21}}]})
    // or range(11 - 21)

    db.personas.find({"edad":{"$not":{"$eq":12}}})

    // negation 12, not 12 years age

    // Projection : advanced query 

    // En proyecciones:

    // project = 1 : habilitar - 0 : desabilitar

    /*
        ordenacion: $sort
        paginacion: $limit - $skip

        sort: 1 ascendente -1 descendente
    */

    /* $in dentro de un array: type python in only arrays
         {"hobbies":{"$in":["basketball", "videogame"]}}
    $all tiene que tener todos los que se indiquen : type && */

    // regex

    db.personas.find({"nombre":{"$regex":"Moni", "$options":"i"}})

    db.personas.find({"nombre":{"$regex":"^L", "$options":"i"}}) // with caret

    // Indices TTL Time Two Live

    // Uso dentro de un pipeline de agregación
        db.personas.aggregate([
          {
            $project: {
              nombre: 1,
              _id: 0
            }
          }
        ])


    // Retorna solo el campo "nombre" de todos los documentos
        db.personas.find(
          {}, 
          { nombre: 1, _id: 0 }
        )
