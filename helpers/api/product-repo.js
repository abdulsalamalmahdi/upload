

const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications

export const productRepo = {
    getAll: () => users,
    getById: id => users.find(x => x.id.toString() === id.toString()),
    find,
    //: x => users.find(x),
    create,
    update,
    delete: _delete
};


async function find(product) {

    let foundUser;
    try {
        console.log('find')
        const result = await excuteQuery({
            query: `SELECT * FROM product`,
            values: [product],
        });
        console.log({result})
   foundUser = await result;
    } catch (error) {
        // res.send(error)
        console.log(error);
    }
   
  await  console.log({foundUser})
    return foundUser[0];
}

async function create(product) {
    // generate new user id
    // user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
    console.log('create')
    product.dateCreated = new Date().toISOString();
    product.dateUpdated = new Date().toISOString();
let nwProduct;

    try {
//         console.log(product)
// console.log( [product.name, product.category, product.size,product.images])
nwProduct = await excuteQuery({
            query: `INSERT INTO product(ID, name, category, size, color, weight, units_in_stock, units_in_order) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`,
            values: [product.ID, product.name,product.category, product.size, 'red', '100gm', '100', '10'],
        });

        console.log({ results: nwProduct})
      
       return nwProduct;

    } catch (error) {
       
        console.log(error);
        return error;
    }



    // set date created and updated


    // add and save user

return nwProduct;
}

function update(id, params) {
    const user = users.find(x => x.id.toString() === id.toString());

    // set date updated
    user.dateUpdated = new Date().toISOString();

    // update and save
    Object.assign(user, params);
    saveData();
}

// prefixed with underscore '_' because 'delete' is a reserved word in javascript
function _delete(id) {
    // filter out deleted user and save
    users = users.filter(x => x.id.toString() !== id.toString());
    saveData();

}

// private helper functions

function saveData() {
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));
}