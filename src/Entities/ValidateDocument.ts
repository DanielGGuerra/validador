export class ValidateDocument {
    private LENGHT_CNPJ = 14;
    private LENGTH_CPF = 11;

    private WEIGHT_PER_DIGIT = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    private WEIGHT_PER_DIGIT2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

    public static init() {
        const init = new ValidateDocument();
        
        return init; 
    }

    public cnpj(cnpj: string | number) {
        const textCNPJ = cnpj.toString().padStart(this.LENGHT_CNPJ, "0");

        const firstValidatorDigit = this.getDigitCheckerCNPJ(textCNPJ, 1);
        const secondValidatorDigit = this.getDigitCheckerCNPJ(textCNPJ, 2);

        if(firstValidatorDigit == textCNPJ[12] && secondValidatorDigit == textCNPJ[13]) return true;

        return false;
    }

    public cpf(cpf: number | string) {
        const textCPF = cpf.toString().padStart(this.LENGTH_CPF, "0");

        if(this.commonInvalids(textCPF)) return false;
    
        const firstValidatorDigit = this.getVerifyingDigitCPF(textCPF, 1);
        const secondValidatorDigit = this.getVerifyingDigitCPF(textCPF, 2);
    
        if(textCPF[9] == firstValidatorDigit && textCPF[10] == secondValidatorDigit) {
            return true;
        }
    
        return false;
    }

    private getVerifyingDigitCPF(cpf: string, type: number) {
        /** type 1 -> primeiro digito | type 2 -> segundo digito **/ 
        let len = 0;
        let mult = 0;
        let checkerDigit;
    
        if(type == 1) {
            len = 9;
            mult = 10;
        } else if(type == 2) {
            len = 10;
            mult = 11;
        }
    
        const arrayNumberCPF = cpf.slice(0, len).split("");
        let sumResult = 0;
    
        for(const digit of arrayNumberCPF) {
            sumResult += (parseInt(digit) * mult);
            mult -= 1;
        }
    
        checkerDigit = (sumResult * 10) % 11;
    
        if(checkerDigit == 10) checkerDigit = 0;
    
        return checkerDigit;
    }

    private commonInvalids(cpf: string) {
        const invalids = [
            "00000000000",
            "11111111111",
            "22222222222",
            "33333333333",
            "44444444444",
            "55555555555",
            "66666666666",
            "77777777777",
            "88888888888",
            "99999999999"
        ];
    
        if(invalids.find((code) => code == cpf)) return true;
    
        return false;
    }

    private getDigitCheckerCNPJ(cnpj: string, type: number) {
        const arrayCNPJ = cnpj.split("").map(Number);
    
        let per_digit = [];

        let checkerDigit = 0;
        let resultCalc = 0;

        if(type == 1) {
            per_digit = this.WEIGHT_PER_DIGIT;
        } else if(type == 2) {
            per_digit = this.WEIGHT_PER_DIGIT2;
        }

        for(let i = 0; i < per_digit.length; i++) {
            resultCalc += (per_digit[i] * arrayCNPJ[i]);
        }

        resultCalc = resultCalc % 11;

        if(resultCalc < 2) {
            checkerDigit = 0;
        } else {
            checkerDigit = 11 - parseInt(resultCalc.toString());
        }

        return checkerDigit.toString();
    }
}