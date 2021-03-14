/*
 * caseValidation to find the key inside the cases if exist return it if not return defaultCase
 * @param {object} cases object of cases
 * @param {any} defaultCase
 * @param {string} key
 * @return {any}
 */
const caseValidation = (cases) => (defaultCase) => (key) =>
  Object.prototype.hasOwnProperty.call(cases, key) ? cases[key] : defaultCase;

/*
 * functionValidate if the case is function execute it if not just return the case
 * @param {any} caseToValidate
 * @return {any}
 */
const functionValidate = (caseToValidate) => (typeof caseToValidate === 'function' ? caseToValidate() : caseToValidate);

/*
 * switchCase alternative
 * @param {object} cases object of cases
 * @param {any} defaultCase
 * @param {string} key
 * @return {any}
 */
const switchCase = (cases) => (defaultCase) => (key) => functionValidate(caseValidation(cases)(defaultCase)(key));

export default switchCase;
