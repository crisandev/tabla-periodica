let position = () => {
   return ElementPosition(index);
};

//*A traves de este metodo se separan las lineas una a una
const nextLine = (i) => {
   if (i === 2 || i === 10 || i === 18 || i === 36 || i === 54 || i === 72 || i===105) return true;
   return false;
};

//*Esta funcion separa las dos ultimas lineas del resto de la tabla
const lastTwoLines = (index) => {
   if (index===90) return true;
   return false;
};

//* Esta función va agregando elemento por elemento a la tabla
const ElementPosition = (i) => {
   index = i;
   if (index === 0) return "f-left";
   if (index === 1) return "f-right";
   if (index <= 3) return " f-left";
   if (index < 10) return "f-right ";
   if (index < 12) return "f-left";
   if (index < 18) return "f-right";
   if (index < 90) return "f-left";
   if (index >= 90) return "f-left";
};

exports.ElementPosition = ElementPosition;
exports.position = position;
exports.nextLine = nextLine;
exports.lastTwoLines = lastTwoLines;