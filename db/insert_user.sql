INSERT INTO users_ecom
    (name, pass_id,pic)
VALUES
    ($1, $2,
        $3)
RETURNING *;