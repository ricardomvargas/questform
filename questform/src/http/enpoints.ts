const SERVICE_PATH = 'http://localhost/questform-services/';

/** SURVEYS */
export const surveysGet = `${SERVICE_PATH}/questforms/get.php`;
export const surveysGetById = `${SERVICE_PATH}/questforms/getbyid.php`;
export const surveysNew = `${SERVICE_PATH}/questforms/new.php`;
export const surveysUpdate = `${SERVICE_PATH}/questforms/update.php`;
export const surveysDelete = `${SERVICE_PATH}/questforms/delete.php`;
/** QUESTIONS */
export const questionsGet = `${SERVICE_PATH}/questions/get.php`;
export const questionsGetById = `${SERVICE_PATH}/questions/getbyid.php`;
export const questionsNew = `${SERVICE_PATH}/questions/new.php`;
export const questionsUpdate = `${SERVICE_PATH}/questions/update.php`;
export const questionsDelete = `${SERVICE_PATH}/questions/delete.php`;
/** ANSWERS */
export const answersGet = `${SERVICE_PATH}/answers/get.php`;
export const answersGetById = `${SERVICE_PATH}/answers/getbyid.php`;
export const answersNew = `${SERVICE_PATH}/answers/new.php`;
export const answersUpdate = `${SERVICE_PATH}/answers/update.php`;
/** OPTIONS */
export const optionsGet = `${SERVICE_PATH}/options/get.php`;
export const optionsGetById = `${SERVICE_PATH}/options/getbyid.php`;
export const optionsNew = `${SERVICE_PATH}/options/new.php`;
