Simple validator of CNPJ and CPF.

````
const validate = ValidateDocument.init();
    
const document = 77352672079;
const valid = validate.cpf(document);
```