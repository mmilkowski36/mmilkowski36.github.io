/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Graduate Student Researcher',
    position: 'University of Notre Dame',
    startDate: '2024-09-15',
    highlights: [
      'Advisor: Tim Weninger',
    ],
  },
  {
    name: 'Undergraduate Student Researcher',
    position: 'Seattle University',
    startDate: '2024-06-15',
    endDate: '2023-06-15',
    highlights: [
      'Advisor: Nate Kremer-Herman',
    ],
  },
];

export default work;
