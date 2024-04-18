// Route handler to get all flavors
app.get('/api/flavors', async (req, res, next) => {
    try {
        
        const query = 'SELECT * FROM flavors;';
        
        const { rows } = await client.query(query);
        
        res.json(rows);
    } catch (error) {
        
        next(error);
    }
});

// Route handler to get a flavor by ID
app.get('/api/flavors/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const query = 'SELECT * FROM flavors WHERE id = $1;';
        
        const { rows } = await client.query(query, [id]);
        
        res.json(rows[0]);
    } catch (error) {
        next(error);
    }
});

// Route handler to add a new flavor
app.post('/api/flavors', async (req, res, next) => {
    try {
        const { name, is_favorite } = req.body;

        const query = 'INSERT INTO flavors (name, is_favorite) VALUES ($1, $2) RETURNING *;';
        
        const { rows } = await client.query(query, [name, is_favorite]);
        
        res.status(201).json(rows[0]);
    } catch (error) {
        next(error);
    }
});

// Route handler to delete a flavor by ID
app.delete('/api/flavors/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
      
        const query = 'DELETE FROM flavors WHERE id = $1;';
        
        await client.query(query, [id]);
        
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
});

// Route handler to update a flavor by ID
app.put('/api/flavors/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, is_favorite } = req.body;
        
        const query = 'UPDATE flavors SET name = $1, is_favorite = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *;';
        
        const { rows } = await client.query(query, [name, is_favorite, id]);
        
        res.json(rows[0]);
    } catch (error) {
        next(error);
    }
});
