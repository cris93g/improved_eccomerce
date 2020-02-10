SELECT *
FROM item_ecom i JOIN users_ecom u ON i.owner_id= u.owner_id
WHERE u.owner_id=$1;