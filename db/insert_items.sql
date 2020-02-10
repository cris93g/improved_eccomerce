INSERT INTO item_ecom
    (name,picture,description,owner_id,price)
VALUES
    ($1, $2, $3, $4, $5)
RETURNING *;