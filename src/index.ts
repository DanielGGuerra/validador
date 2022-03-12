import { ValidateDocument } from "./Entities/ValidateDocument";

const validate = ValidateDocument.init();

const document = 16484857741;
const valid = validate.cpf(document);

console.log("Document: ", document);
console.info("This document is valid? ", valid);