
function add_item(req,res){
    const db= req.app.get("db")
    const {name,picture,description,owner_id,price}=req.body;
    db.insert_items([name,picture,description,owner_id,price]).then(results =>{
        res.status(200).send(results)
    }).catch(console.error)
}

function read_items(req,res){
    const db=req.app.get("db")
    db.read_items().then(results =>{
        res.status(200).send(results)
    }).catch(console.error)
}

function read_users(req,res){
    const db=req.app.get("db")
    db.read_users().then(results =>{
        res.status(200).send(results)
    }).catch(console.error)
}

function get_item_from_user(req,res){
    const {owner_id}= req.body
    const db=req.app.get("db")
    db.read_item_from_user([owner_id]).then(results => res.status(200).send(results)).catch(console.error)
   
}
module.exports={
    add_item,
    read_items,
    read_users,
    get_item_from_user
}