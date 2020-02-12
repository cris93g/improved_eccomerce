INSERT INTO item_ecom
    (name,picture,description,owner_id,price,form_contact, adress)
VALUES
    ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;