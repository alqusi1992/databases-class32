/* Write a query that prints names of all authors and their corresponding mentors. */

const question_1 = `SELECT ath.author_name author, mnt.author_name mentor FROM authors ath LEFT JOIN authors mnt ON ath.mentor=mnt.author_no`;

/* Average of the h-index of all authors per university.*/

const question_2 = `select university, AVG(h_index) h_index_average from authors GROUP BY university`;

/* Minimum and maximum of the h-index of all authors per university */

const question_3 = `SELECT university, min(h_index) AS min_h_index, max(h_index) AS max_h_index FROM authors
GROUP BY university`;

/* Sum of the research papers published by all female authors */

const question_4 = `select SUM(gender) AS 'total published' from authors where gender = 'f'`;

/* Sum of the research papers of the authors per university */

const question_5 = `SELECT university, COUNT(DISTINCT(paper_id)) papers_total FROM authors, author_Papers_junction  apj WHERE authors.author_no=apj.author_no GROUP BY university`;

module.exports = { question_1, question_2, question_3, question_4, question_5 };
