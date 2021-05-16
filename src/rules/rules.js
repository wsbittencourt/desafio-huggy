import VeeValidate from 'vee-validate';

 //Regra para validação de Telefone
const rulePhone = VeeValidate.Validator.extend('phone', {
  getMessage(field) { 
      return `O ${field} informado não é um número válido. Utilize o padrão (XX) XXXX-XXXX`
  },
  validate(value) {
    let RegEx = /\(?([0-9]{2})\)?([ .-]?)([0-9]{4})([ .-]?)([0-9]{4})/g;
    return RegEx.test(value)
  }
});

//Regra para validação de Celular
const ruleMobile = VeeValidate.Validator.extend('mobile', {
  getMessage(field) { 
      return `O ${field} informado não é um número válido. Utilize o padrão (XX) X XXXX-XXXX`
  },
  validate(value) {
    let RegEx = /\(?([0-9]{2})\)?([ .-]?)([0-9]{1})([ .-]?)([0-9]{4})([ .-]?)([0-9]{4})/g;
    //let RegEx = /\(?([0-9]{2})\)?([ .-]?)([0-9]{4})([ .-]?)([0-9]{4})/g;
    return RegEx.test(value)
  }
});

const rules = {
  rulePhone,
  ruleMobile,
};

export default rules;