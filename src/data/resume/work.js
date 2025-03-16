/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
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
    name: 'F5',
    position: 'Project Manager',
    url: 'https://www.f5.com/',
    startDate: '2024-06-01',
    endDate: '2024-09-15',
    highlights: [
      'Coordinated with directors, program managers, and others as needed to organize a technology migration of acquired companies to the F5 system',
    ],
  },
];

export default work;
