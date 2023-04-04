DELIMITER //

CREATE TABLE IF NOT EXISTS products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT DEFAULT NULL,
  image_url VARCHAR(255) DEFAULT NULL,
  price DECIMAL(10, 2) NOT NULL,
  discount DECIMAL(5, 2) DEFAULT NULL,
  stock INT NOT NULL,
  category_id INT NOT NULL,
  subcategory_id INT DEFAULT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES categories(id),
  CONSTRAINT fk_subcategory_id FOREIGN KEY (subcategory_id) REFERENCES subcategories(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;//

DELIMITER ;
