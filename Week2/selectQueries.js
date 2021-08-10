/*Write a query that prints all columns of authors and their published paper_title. If there is an author without any research_Papers */

const qeustion_0 = `SELECT authors.author_no, author_name, university, date_of_birth, h_index, gender, mentor FROM
                    authors LEFT JOIN author_Papers_junction aj 
                    on authors.author_no = aj.author_no`


/* Write a query that prints names of all authors and their corresponding mentors. */

const question_1 = `SELECT a.author_name author, m.author_name mentor FROM
                    authors a LEFT JOIN authors m 
                    ON a.mentor=m.author_no`;

/* Average of the h-index of all authors per university.*/

const question_2 = `SELECT university, AVG(h_index) index_averg FROM
                    authors GROUP BY university`;

/* Minimum and maximum of the h-index of all authors per university */

const question_3 = `SELECT university, min(h_index) AS min_index, max(h_index) AS max_index FROM
                    authors GROUP BY university`;

/* Sum of the research papers published by all female authors */

const question_4 = `SELECT SUM(gender) AS 'total published' FROM authors where gender = 'f'`;

/* Sum of the research papers of the authors per university */

const question_5 = `SELECT university, COUNT(DISTINCT(paper_id)) total_papers FROM
                    authors, author_Papers_junction  apj 
                    WHERE authors.author_no=apj.author_no GROUP BY university`;

module.exports = {qeustion_0, question_1, question_2, question_3, question_4, question_5 };
