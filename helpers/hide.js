//BLOQUEAR NUMEROS
//para bloquear los elemento indica el numero atomico del elemento
//que deseas borrar o mas bien ocultar
//EJEMPLO: 1 = H por lo tanto si pones 1 se bloquea el hidrogeno
//El cero no se va a eliminar, ya que lo hice con un metodo donde accedo a la propiedad
//del numero atomico y con ello pues lo borro

const hideElement = (value) => {
   let isValid = false;
   const hideElements = [];

   
   hideElements.forEach((elem) => {
      if (elem > 56 && elem < 72) hideElements.push("57-71");
      if (elem > 88 && elem < 104) hideElements.push("89-103");
   });

   hideElements.forEach((elem) => {
      if (value === elem) {
         isValid = true;
      }
   });

   return !isValid;
};

exports.hideElement = hideElement;
