INSERT INTO users_ecom
    (username, pass_id,pic)
VALUES
    ($1, $2,
        $3)
RETURNING *;