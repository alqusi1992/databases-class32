const AUTHORS_DATA = [
  {
    author_name: "Edgar Allan Poe",
    university: "University of Hartford",
    date_of_birth: "1809-06-22",
    h_index: "100",
    gender: "m",
    mentor: 1,
  },
  {
    author_name: "Herman Melville",
    university: "Wesleyan University",
    date_of_birth: "1819-05-21",
    h_index: "101",
    gender: "m",
    mentor: 1,
  },
  {
    author_name: "Walt Whitman",
    university: "Sarah Lawrence College",
    date_of_birth: "1819-09-20",
    h_index: "102",
    gender: "m",
    mentor: 2,
  },
  {
    author_name: "Mark Twain",
    university: "Oberlin College",
    date_of_birth: "1835-03-13",
    h_index: "103",
    gender: "m",
    mentor: 3,
  },
  {
    author_name: "T.S. Eliot",
    university: "Williams College",
    date_of_birth: " 1888-04-15",
    h_index: "104",
    gender: "m",
    mentor: 4,
  },
  {
    author_name: "William Faulkner",
    university: "Vanderbilt University",
    date_of_birth: " 1897-01-30",
    h_index: "105",
    gender: "m",
    mentor: 5,
  },
  {
    author_name: "Tennessee Williams",
    university: "Smith College",
    date_of_birth: " 1911-06-12",
    h_index: "106",
    gender: "f",
    mentor: 5,
  },
  {
    author_name: "Kurt Vonnegut",
    university: "University of Mississippi",
    date_of_birth: " 1922-05-21",
    h_index: "107",
    gender: "f",
    mentor: 5,
  },
  {
    author_name: "Harper Lee",
    university: "New York University",
    date_of_birth: " 1960-05-21",
    h_index: "108",
    gender: "m",
    mentor: 6,
  },
  {
    author_name: "John Steinbeck",
    university: "Colorado College",
    date_of_birth: " 1945-07-10",
    h_index: "109",
    gender: "f",
    mentor: 7,
  },
  {
    author_name: " Ray Bradbury",
    university: "Colorado College",
    date_of_birth: " 1966-07-10",
    h_index: "110",
    gender: "m",
    mentor: 7,
  },
  {
    author_name: "Truman Capote",
    university: "University of Chicago",
    date_of_birth: " 1950-09-25",
    h_index: "111",
    gender: "m",
    mentor: 8,
  },
  {
    author_name: "Edgar Allan Poe",
    university: "Hamilton College",
    date_of_birth: " 1910-05-11",
    h_index: "112",
    gender: "f",
    mentor: 8,
  },
  {
    author_name: "Alice Walker",
    university: "Harvard",
    date_of_birth: " 1915-03-12",
    h_index: "113",
    gender: "f",
    mentor: 9,
  },
  {
    author_name: "Joseph Heller",
    university: "The University of the South",
    date_of_birth: " 1940-02-25",
    h_index: "114",
    gender: "m",
    mentor: 10,
  },
];

const PAPER_DATA = [
  {
    paper_title: "Evolution of anime – what made anime popular worldwide?",
    conference: "ACM",
    publish_date: "1920-03-15",
  },
  {
    paper_title: "Is diversity a good thing within a team, and why?",
    conference: "ACM",
    publish_date: "1915-02-22",
  },
  {
    paper_title:
      "Is traditional music of a country more important than the international music that is heard everywhere?",
    conference: "IEES",
    publish_date: "1990-05-29",
  },
  {
    paper_title: "What makes one sport more popular than another?",
    conference: "IEEE",
    publish_date: "1980-03-25",
  },
  {
    paper_title:
      "How would the world be different without the discoveries of Nikola Tesla?",
    conference: "IEEE",
    publish_date: "1950-04-15",
  },
  {
    paper_title:
      "Why do people change their leisure time activities as they get older?",
    conference: "HAC",
    publish_date: "2000-05-16",
  },
  {
    paper_title:
      "What hobbies are the most popular with children and adults in your area?",
    conference: "IEEA",
    publish_date: "2005-09-25",
  },
  {
    paper_title:
      "Are there hobbies you can do in your own country but not when you travel abroad? Why?",
    conference: "CAM",
    publish_date: "2010-01-16",
  },
  {
    paper_title: "How to deal with procrastination?",
    conference: "IEE",
    publish_date: "2018-02-26",
  },
  {
    paper_title:
      "What stereotypes are related to people from your country, and is there any truth to those?",
    conference: "REM",
    publish_date: "2014-01-28",
  },
  {
    paper_title:
      "Are older people always wiser and correct in their choices and opinions?",
    conference: "CII",
    publish_date: "2013-02-22",
  },
  {
    paper_title:
      "Is it true that technology can cause a gap between generations?",
    conference: "IIS",
    publish_date: "2009-09-24",
  },
  {
    paper_title:
      "Are friendships between men different from friendships between women and why?",
    conference: "CAM",
    publish_date: "2006-02-27",
  },
  {
    paper_title:
      "Can amusement parks have an educative purpose apart from an entertaining one?",
    conference: "IIS",
    publish_date: "2002-01-24",
  },
  {
    paper_title:
      "What other common sayings such as “an apple a day keeps the doctor away” exist in your language?",
    conference: "IIES",
    publish_date: "2001-09-19",
  },
  {
    paper_title: "What makes people in your country happy?",
    conference: "BMM",
    publish_date: "2004-02-21",
  },
  {
    paper_title:
      "What makes some nations happier and more prosperous than others?",
    conference: "EES",
    publish_date: "1985-02-19",
  },
  {
    paper_title:
      "Does beauty, in general, determine how much a person will be successful in life?",
    conference: "RRM",
    publish_date: "1972-01-12",
  },
  {
    paper_title: "What are some pros and cons related to plastic surgery?",
    conference: "CCA",
    publish_date: "1971-02-19",
  },
  {
    paper_title:
      "How to be better at communicating with friends, family, work colleagues, and strangers?",
    conference: "IEEE",
    publish_date: "1975-01-24",
  },
  {
    paper_title:
      "How to prevent an increase in the number of homeless children?",
    conference: "IEEE",
    publish_date: "2003-03-13",
  },
  {
    paper_title:
      "What is the background of all terrorist attacks in the world?",
    conference: "BMM",
    publish_date: "2000-09-12",
  },
  {
    paper_title:
      "What can developed countries do in order to help underdeveloped countries?",
    conference: "IIES",
    publish_date: "2020-01-25",
  },
  {
    paper_title: "Why being warm usually makes us feel tired and sleepy?",
    conference: "SSD",
    publish_date: "2019-05-12",
  },
  {
    paper_title:
      "How is it possible that birds flying in bad and cloudy weather conditions don’t get disoriented?",
    conference: "IEES",
    publish_date: "1980-04-20",
  },
  {
    paper_title: "How do allergies to nuts and other fruits happen?",
    conference: "IIES",
    publish_date: "1980-02-13",
  },
  {
    paper_title:
      "What steps can be taken in third world countries to prevent ecological catastrophes?",
    conference: "SSAM",
    publish_date: "1915-09-30",
  },
  {
    paper_title:
      "How can students protect themselves from giving back students’ loans?",
    conference: "IEES",
    publish_date: "2007-12-25",
  },
  {
    paper_title: "What can be done to improve family law?",
    conference: "SSA",
    publish_date: "2017-03-30",
  },
  {
    paper_title: "What countries have the best legal systems?",
    conference: "IIES",
    publish_date: "2021-01-30",
  },
];

const JUNCTION_DATA = [
  {
    author_no: 1,
    paper_id: 1,
  },
  {
    author_no: 1,
    paper_id: 2,
  },
  {
    author_no: 2,
    paper_id: 2,
  },
  {
    author_no: 2,
    paper_id: 3,
  },
  {
    author_no: 3,
    paper_id: 4,
  },
  {
    author_no: 3,
    paper_id: 5,
  },
  {
    author_no: 4,
    paper_id: 5,
  },
  {
    author_no: 4,
    paper_id: 6,
  },
  {
    author_no: 5,
    paper_id: 6,
  },
  {
    author_no: 6,
    paper_id: 7,
  },
  {
    author_no: 6,
    paper_id: 8,
  },
  {
    author_no: 7,
    paper_id: 8,
  },
  {
    author_no: 8,
    paper_id: 9,
  },
  {
    author_no: 8,
    paper_id: 10,
  },
  {
    author_no: 9,
    paper_id: 11,
  },
  {
    author_no: 9,
    paper_id: 12,
  },
  {
    author_no: 10,
    paper_id: 13,
  },
  {
    author_no: 11,
    paper_id: 14,
  },
  {
    author_no: 12,
    paper_id: 15,
  },
  {
    author_no: 13,
    paper_id: 16,
  },
  {
    author_no: 5,
    paper_id: 17,
  },
  {
    author_no: 6,
    paper_id: 18,
  },
  {
    author_no: 12,
    paper_id: 18,
  },
  {
    author_no: 13,
    paper_id: 15,
  },
  {
    author_no: 14,
    paper_id: 19,
  },
  {
    author_no: 15,
    paper_id: 20,
  },
  {
    author_no: 9,
    paper_id: 21,
  },
  {
    author_no: 15,
    paper_id: 22,
  },
  {
    author_no: 12,
    paper_id: 22,
  },
  {
    author_no: 7,
    paper_id: 23,
  },
  {
    author_no: 12,
    paper_id: 23,
  },
  {
    author_no: 14,
    paper_id: 24,
  },
  {
    author_no: 9,
    paper_id: 25,
  },
  {
    author_no: 11,
    paper_id: 23,
  },
  {
    author_no: 13,
    paper_id: 20,
  },
  {
    author_no: 15,
    paper_id: 27,
  },
  {
    author_no: 5,
    paper_id: 23,
  },
  {
    author_no: 15,
    paper_id: 29,
  },
  {
    author_no: 13,
    paper_id: 30,
  },
];

module.exports = { AUTHORS_DATA, PAPER_DATA, JUNCTION_DATA };
