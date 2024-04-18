-- Drop the table if it exists
DROP TABLE IF EXISTS flavors;

-- Flavors table
CREATE TABLE flavors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  is_favorite BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Sample flavors
INSERT INTO flavors (name, is_favorite) VALUES
('Chocolate', TRUE),
('Vanilla', FALSE),
('Strawberry', TRUE);
