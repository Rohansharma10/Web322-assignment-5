const Sequelize = require('sequelize');
var sequelize = new Sequelize('azcxyvpy', 'azcxyvpy', 'kGT8cpu21ujdAF6dMY8v3xEsV5CFG38y', {
    host: 'stampy.db.elephantsql.com',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    query: { raw: true }
  });


var Item = sequelize.define('Item', {
    body: Sequelize.TEXT,
    title: Sequelize.STRING,
    postDate: Sequelize.DATE,
    featureImage: Sequelize.STRING,
    published: Sequelize.BOOLEAN,
    price: Sequelize.DOUBLE
});


var Category = sequelize.define('Category',{
    category: Sequelize.STRING
});

Item.belongsTo(Category, {foreignKey: 'category'});

module.exports.initialize = ()=>{


// sequelize.sync().then(async function () {
//         await Item.bulkCreate([
//             {
//                "id":1,
//                "category":1,
//                "postDate":"2023-05-14",
//                "featureImage":"https://dummyimage.com/200x200/000/fff",
//                "price":9.99,
//                "title":"Lawnmower",
//                "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue. Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis. Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis, ut egestas turpis augue ut nisi. Curabitur vel convallis augue.",
//                "published":true
//             },
//             {
//                "id":2,
//                "category":1,
//                "postDate":"2023-05-15",
//                "featureImage":"https://dummyimage.com/200x200/000/fff",
//                "price":19.99,
//                "title":"Weber BBQ",
//                "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue. Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis. Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis, ut egestas turpis augue ut nisi. Curabitur vel convallis augue.",
//                "published":true
//             },
//             {
//                "id":3,
//                "category":2,
//                "postDate":"2023-05-16",
//                "featureImage":"https://dummyimage.com/200x200/000/fff",
//                "price":439.99,
//                "title":"PS5",
//                "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue. Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis. Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis, ut egestas turpis augue ut nisi. Curabitur vel convallis augue.",
//                "published":true
//             },
//             {
//                "id":4,
//                "category":2,
//                "postDate":"2023-05-17",
//                "featureImage":"https://dummyimage.com/200x200/000/fff",
//                "price":459.99,
//                "title":"XBOX",
//                "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue. Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis. Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis, ut egestas turpis augue ut nisi. Curabitur vel convallis augue.",
//                "published":true
//             },
//             {
//                "id":5,
//                "category":3,
//                "postDate":"2023-05-18",
//                "featureImage":"https://dummyimage.com/200x200/000/fff",
//                "price":39.99,
//                "title":"TShirt",
//                "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue. Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis. Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis, ut egestas turpis augue ut nisi. Curabitur vel convallis augue.",
//                "published":true
//             },
//             {
//                "id":6,
//                "category":3,
//                "postDate":"2023-05-19",
//                "featureImage":"https://dummyimage.com/200x200/000/fff",
//                "price":29.99,
//                "title":"Shorts",
//                "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue. Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis. Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis, ut egestas turpis augue ut nisi. Curabitur vel convallis augue.",
//                "published":true
//             },
//             {
//                "id":7,
//                "category":4,
//                "postDate":"2023-05-20",
//                "featureImage":"https://dummyimage.com/200x200/000/fff",
//                "price":19.99,
//                "title":"Baseball",
//                "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue. Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis. Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis, ut egestas turpis augue ut nisi. Curabitur vel convallis augue.",
//                "published":true
//             },
//             {
//                "id":8,
//                "category":4,
//                "postDate":"2023-05-21",
//                "featureImage":"https://dummyimage.com/200x200/000/fff",
//                "price":99.99,
//                "title":"Soccer",
//                "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue. Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis. Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis, ut egestas turpis augue ut nisi. Curabitur vel convallis augue.",
//                "published":true
//             },
//             {
//                "id":9,
//                "category":5,
//                "postDate":"2023-05-16",
//                "featureImage":"https://dummyimage.com/200x200/000/fff",
//                "price":99.99,
//                "title":"Dog Food",
//                "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue. Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis. Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis, ut egestas turpis augue ut nisi. Curabitur vel convallis augue.",
//                "published":true
//             },
//             {
//                "id":10,
//                "category":5,
//                "postDate":"2023-05-16",
//                "featureImage":"https://dummyimage.com/200x200/000/fff",
//                "price":9.99,
//                "title":"Fish Food",
//                "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras convallis fringilla sem efficitur congue. Vestibulum efficitur blandit ultricies. Sed tempus mollis orci id facilisis. Aliquam placerat, ipsum eget egestas malesuada, neque nunc scelerisque felis, ut egestas turpis augue ut nisi. Curabitur vel convallis augue.",
//                "published":true
//             }
//          ]
//          );
//       });


 return new Promise((resolve,reject)=>{
      sequelize.sync().then(function(){
        resolve();
      }).catch(function(error){
        reject(error);
      })
 })
};  

module.exports.getAllItems = () =>{
    return new Promise((resolve,reject)=>{
        sequelize.sync().then(function () {
        Item.findAll().then(function(data){
            resolve(data);
        }).catch(function(error){
            reject(error);
        })
     });
    });
};

module.exports.getPublishedItems= () =>{
    return new Promise((resolve,reject)=>{
        Item.findAll({
            where:{published:true}
        }).then(function(data){
            resolve(data);
        }).catch(function(error){
            reject(error);
        })
     });
}

module.exports.getCategories= () =>{

    return new Promise((resolve, reject)=>{
        sequelize.sync().then(function () {
        Category.findAll().then(function(data){
            resolve(data);
        }).catch(function(){
            reject("failed");
        });
    });
    });

};

module.exports.addItem = (itemData)=>{
    const date = new Date();
    var item={};
    item.category=itemData.category;
    item.postDate=date;
    item.featureImage=itemData.featureImage;
    sequelize.sync().then(function () {
        Item.findAll().then(function(data){
            item.id=data.length+1;
        })
    });
    item.title=itemData.title;
    item.body=itemData.body;
    itemData.published = (itemData.published) ? true : false;
    item.published=itemData.published;
    item.price=0;
    return new Promise((resolve,reject)=>{
        sequelize.sync().then(function () {
        Item.create(item).then(function(){
            resolve("sucessfully added");
        }).catch(function(err){
            reject(err);
        });
    });
});
};

module.exports.getItemsByCategory = (category_id)=>{
    return new Promise((resolve,reject)=>{
        Item.findAll({
            where:{category:category_id}
        }).then(function(data){
            resolve(data);
        }).catch(function(error){
            reject(error);
        })
     });
};


module.exports.getItemsByMinDate = (minDateStr)=>{
    const { gte } = Sequelize.Op;
    return new Promise((resolve,reject)=>{
    Item.findAll({
        where: {
            postDate: {
                [gte]: new Date(minDateStr)
            }
        }
    }).then(function(data){
        resolve(data);
    }).catch(function(error){
        reject("no results returned");
    })
});
};

module.exports.getItemById = (item_id)=>{
    return new Promise((resolve,reject)=>{
        Item.findOne({
            where:{id:item_id}
        }).then(function(data){
            resolve(data);
        }).catch(function(error){
            reject(error);
        })
    });
} 

module.exports.getPublishedItemsByCategory = (category_id)=>{
    return new Promise((resolve,reject)=>{
        Item.findAll({
            where:{published:true, category:category_id}
        }).then(function(data){
            resolve(data);
        }).catch(function(error){
            reject(error);
        })
     });
}

module.exports.addCategory = (categoryData)=>{
    const date = new Date();
    console.log(categoryData);
    return new Promise((resolve,reject)=>{
        sequelize.sync().then(function () {
            Category.create(categoryData).then(function(){
                resolve("sucessfully added");
            }).catch(function(){
                reject("failed adding to database");
            });
        });
    });
}

module.exports.deleteCategoryById = (data)=>{
    return new Promise((resolve,reject)=>{
        sequelize.sync().then(function () {
            Category.destroy({
                where: { id: data }
            }).then(function () {resolve("sucess")}).catch(function(){reject("failed")});
        });
});
}

module.exports.deletePostById = (item_id)=>{
    return new Promise((resolve,reject)=>{
        sequelize.sync().then(function () {
            Item.destroy({
                where: { id: item_id }
            }).then(function () {resolve("sucess")}).catch(function(){reject("failed")});
        });
});
}

