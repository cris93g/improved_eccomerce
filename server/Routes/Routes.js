const {add_item,read_items,read_users,get_item_from_user} = require("../Controllers/item_controller")
const {getUser,logout}=require("../Controllers/user_controller")
const passport=require("passport")


module.exports= app =>{
    app.post(`/api/add_item`,add_item)
    app.get(`/api/fetch_items`,read_items)
    app.get(`/api/fetch_users`,read_users)
    app.post(`/api/fetch_item`,get_item_from_user)
    app.get("/me", getUser);
    app.get("/logout", logout);
    
    app.get(
        "/login",
                passport.authenticate("auth0", {
                successRedirect: "http://localhost:3000/",
                failureRedirect: "http://localhost:3000/#/"
        }))
}