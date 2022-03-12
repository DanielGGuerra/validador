import { ValidateDocument } from "./Entities/ValidateDocument";

test("Validate CPF", () => {
    const validate = ValidateDocument.init();
    
    const document = 77352672079;
    const valid = validate.cpf(document);
    
    expect(valid).toEqual(true);
})
