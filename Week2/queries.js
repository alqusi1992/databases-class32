const queries = {
  CREATE_TABLE_AUTHORS: `CREATE TABLE IF NOT EXISTS authors (
    author_no INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    author_name CHAR(100),
    university CHAR(100),
    date_of_birth DATE,
    h_index INT,
    gender ENUM('m', 'f')
  )`,
  CREATE_TABLE_RESEARCH_PAPERS: `CREATE TABLE IF NOT EXISTS research_Papers 
  (paper_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, 
    paper_title CHAR(150), 
    conference CHAR(150), 
    publish_date DATE)`,
  ADD_COLUMN_MENTOR: `ALTER TABLE
  authors
  ADD
  COLUMN mentor int,
  ADD
  CONSTRAINT  FOREIGN KEY (mentor) REFERENCES authors (author_no)`,
  JUNCTION_AUTHORS_PAPERS: `CREATE TABLE IF NOT EXISTS author_Papers_junction (
    author_no INT NOT NULL,
    paper_id INT NOT NULL,
    CONSTRAINT PK_author_Papers_junction PRIMARY KEY
    (
      author_no,
      paper_id  
    ),
    FOREIGN KEY (author_no) REFERENCES authors(author_no),
    FOREIGN KEY (paper_id) REFERENCES research_Papers (paper_id)
  )`,
  INSERT_INTO_TABLE: {
    authors: `INSERT INTO authors SET ?`,
    papers: `INSERT INTO research_Papers SET ?`,
    junction: `INSERT INTO author_Papers_junction SET ?`,
  },
};

module.exports = queries;
