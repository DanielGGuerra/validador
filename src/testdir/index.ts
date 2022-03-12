import { ValidateDocument } from "@danielgguerra/validador";

const validate = ValidateDocument.init();
    
const document = 77352672079;
const valid = validate.cpf(document);

console.log(valid);