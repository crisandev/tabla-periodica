const express = require("express");
const router = express.Router();

//ESTAS SON MIS SIGLAS PARA REPRESENTAR
//CADA GRUPO DE ELEMENTOS

//ONM = OTROS NO METALES
//GN  = GASES NOBLES
//ALC = ALCALINOS
//ALCTE = ALCALINOTERREOS
//MT = METALES DE TRANSICION
//LAN = LANTANIDOS
//ACT = ACTINIDOS
//OM = OTROS METALES
//M = METALOIDES
//HA = HALOGENOS

//* Cree un array de objetos, donde guardo CADA elemento con sus diferentes caracteristicas

const elements = [
   //PRIMERA LINEA
   { value: "H", group: "ONM", description: "Hidrógeno", NO: 1 }, //1
   { value: "He", group: "GN", description: "Helio", NO: 2 }, //2
   //SEGUNDA LINEA BLOQUE A
   //SEGUNDA LINEA BLOQUE A
   { value: "Li", group: "ALC", description: "Litio", NO: 3 }, //3
   { value: "Be", group: "ALCTE", description: "Berilio", NO: 4 }, //4
   //SEGUNDA LINEA BLOQUE B
   { value: "Ne", group: "GN", description: "Neon", NO: 10 }, //10
   { value: "F", group: "HA", description: "Fluorita", NO: 9 }, //9
   { value: "O", group: "ONM", description: "Oxigeno", NO: 8 }, //8
   { value: "N", group: "ONM", description: "Nitrogeno", NO: 7 }, //7
   { value: "C", group: "ONM", description: "Carbono", NO: 6 }, //6
   { value: "B", group: "M", description: "Boro", NO: 5 }, //5
   //TERCERA LINEA BLOQUE A
   //TERCERA LINEA BLOQUE A
   { value: "Na", group: "ALC", description: "Sodio", NO: 11 }, //11
   { value: "Mg", group: "ALCTE", description: "Magnesio", NO: 12 }, //12
   //TERCERA LINEA BLOQUE B
   //TERCERA LINEA BLOQUE B
   { value: "Ar", group: "GN", description: "Argon", NO: 18 }, //18
   { value: "Cl", group: "HA", description: "Cloro", NO: 17 }, //17
   { value: "S", group: "ONM", description: "Azufre", NO: 16 }, //16
   { value: "P", group: "ONM", description: "Fosforo", NO: 15 }, //15
   { value: "Si", group: "M", description: "Silicio", NO: 14 }, //14
   { value: "Al", group: "OM", description: "Aluminio", NO: 13 }, //13
   // CUARTA LINEA
   // CUARTA LINEA
   { value: "K", group: "ALC", description: "Potasio", NO: 19 }, //19
   { value: "Ca", group: "ALCTE", description: "Calcio", NO: 20 }, //20
   { value: "Cs", group: "MT", description: "Escandio", NO: 21 }, //21
   { value: "Ti", group: "MT", description: "Titanio", NO: 22 }, //22
   { value: "V", group: "MT", description: "Vanadio", NO: 23 }, //23
   { value: "Cr", group: "MT", description: "Cromo", NO: 24 }, //24
   { value: "Mn", group: "MT", description: "Manganeso", NO: 25 }, //25
   { value: "Fe", group: "MT", description: "Hierro", NO: 26 }, //26
   { value: "Co", group: "MT", description: "Cobalto", NO: 27 }, //27
   { value: "Ni", group: "MT", description: "Niquel", NO: 28 }, //28
   { value: "Cu", group: "MT", description: "Cobre", NO: 29 }, //29
   { value: "Zn", group: "MT", description: "Zinc", NO: 30 }, //30
   { value: "Ga", group: "OM", description: "Dalio", NO: 31 }, //31
   { value: "Ge", group: "M", description: "Germanio", NO: 32 }, //32
   { value: "As", group: "M", description: "Arsenico", NO: 33 }, //33
   { value: "Se", group: "ONM", description: "Selenio", NO: 34 }, //34
   { value: "Br", group: "HA", description: "Bromo", NO: 35 }, //35
   { value: "Kr", group: "GN", description: "Cripton", NO: 36 }, //36
   //QUINTA LINEA
   //QUINTA LINEA
   { value: "Rb", group: "ALC", description: "Rubidio", NO: 37 }, //37
   { value: "Sr", group: "ALCTE", description: "Estroncio", NO: 38 }, //38
   { value: "Y", group: "MT", description: "Itrio", NO: 39 }, //39
   { value: "Zr", group: "MT", description: "Circonio", NO: 40 }, //40
   { value: "Nb", group: "MT", description: "Niobio", NO: 41 }, //41
   { value: "Mo", group: "MT", description: "Molibdeno", NO: 42 }, //42
   { value: "Tc", group: "MT", description: "Tecnecio", NO: 43 }, //43
   { value: "Ru", group: "MT", description: "Rutenio", NO: 44 }, //44
   { value: "Rh", group: "MT", description: "Rodio", NO: 45 }, //45
   { value: "Pd", group: "MT", description: "Poladio", NO: 46 }, //46
   { value: "Ag", group: "MT", description: "Plata", NO: 47 }, //47
   { value: "Cd", group: "MT", description: "Cadmio", NO: 48 }, //48
   { value: "In", group: "OM", description: "Indio", NO: 49 }, //49
   { value: "Sn", group: "OM", description: "Estaño", NO: 50 }, //50
   { value: "Sb", group: "M", description: "Antimonio", NO: 51 }, //51
   { value: "Te", group: "M", description: "Telurio", NO: 52 }, //52
   { value: "I", group: "HA", description: "Yodo", NO: 53 }, //53
   { value: "Xe", group: "GN", description: "Xenon", NO: 54 }, //54
   { value: "Cs", group: "ALC", description: "Cesio", NO: 55 }, //55
   { value: "Ba", group: "ALCTE", description: "Bario", NO: 56 }, //56
   //INTERVALO
   { value: "La-Lu", group: "LAN", description: "Lantanido", intervalo: "57-71", NO: "57-71" }, //119
   //QUINTA LINEA CONTINUACION
   //QUINTA LINEA CONTINUACION
   { value: "Hf", group: "MT", description: "Hafnio", NO: 72 }, //72
   { value: "Ta", group: "MT", description: "Tantalio", NO: 73 }, //73
   { value: "W", group: "MT", description: "Tungsteno", NO: 74 }, //74
   { value: "Re", group: "MT", description: "Renio", NO: 75 }, //75
   { value: "Os", group: "MT", description: "Osmio", NO: 76 }, //76
   { value: "Ir", group: "MT", description: "Iridio", NO: 77 }, //77
   { value: "Pt", group: "MT", description: "Platino", NO: 78 }, //78
   { value: "Au", group: "MT", description: "Oro", NO: 79 }, //79
   { value: "Hg", group: "MT", description: "Mercurio", NO: 80 }, //80
   { value: "Ti", group: "OM", description: "Talio", NO: 81 }, //81
   { value: "Pv", group: "OM", description: "Plomo", NO: 82 }, //82
   { value: "Bi", group: "OM", description: "Bismuto", NO: 83 }, //83
   { value: "Po", group: "M", description: "Polonio", NO: 84 }, //84
   { value: "At", group: "HA", description: "Astatina", NO: 85 }, //85
   { value: "Rn", group: "GN", description: "Radon", NO: 86 }, //86
   //SEXTA LINEA
   //SEXTA LINEA
   { value: "Fr", group: "ALC", description: "Francio", NO: 87 }, //87
   { value: "Ra", group: "ALCTE", description: "Radio", NO: 88 }, //88
   //INTERVALO
   { value: "Ac-Lr", group: "ACT", description: "Actinidos", intervalo: "89-103", NO: "89-103" }, //129
   //SEXTA LINEA CONTINUACION
   //SEXTA LINEA CONTINUACION
   { value: "Rf", group: "MT", description: "Rutherfordio", NO: 104 }, //104
   { value: "Db", group: "MT", description: "Dubnio", NO: 105 }, //105
   { value: "Sg", group: "MT", description: "Seaborgio", NO: 106 }, //106
   { value: "Bh", group: "MT", description: "Bohrio", NO: 107 }, //107
   { value: "Hs", group: "MT", description: "Hasio", NO: 108 }, //108
   { value: "Mt", group: "MT", description: "Meitnerio", NO: 109 }, //109
   { value: "Ds", group: "MT", description: "Darmstatio", NO: 110 }, //110
   { value: "Rg", group: "MT", description: "Roentgenio", NO: 111 }, //111
   { value: "Cn", group: "MT", description: "Copérnico", NO: 112 }, //112
   { value: "Nh", group: "OM", description: "Nihonio", NO: 113 }, //113
   { value: "Fi", group: "OM", description: "Flerovio", NO: 114 }, //114
   { value: "Mc", group: "OM", description: "Moscovio", NO: 115 }, //115
   { value: "Lv", group: "OM", description: "Livermorio", NO: 116 }, //116
   { value: "Ts", group: "HA", description: "Teneso", NO: 117 }, //117
   { value: "Og", group: "GN", description: "Oganesón", NO: 118 }, //118
   //SEPTIMA LINEA
   //SEPTIMA LINEA
   { value: "La", group: "LAN", description: "Lantano", NO: 57 }, //57
   { value: "Ce", group: "LAN", description: "Cerio", NO: 58 }, //58
   { value: "Pr", group: "LAN", description: "Praseodimio", NO: 59 }, //59
   { value: "Nd", group: "LAN", description: "Neodimio", NO: 60 }, //60
   { value: "Pm", group: "LAN", description: "Neodimio", NO: 61 }, //61
   { value: "Sm", group: "LAN", description: "Samario", NO: 62 }, //62
   { value: "Eu", group: "LAN", description: "Europio", NO: 63 }, //63
   { value: "Gd", group: "LAN", description: "Europio", NO: 64 }, //64
   { value: "Tb", group: "LAN", description: "Terbio", NO: 65 }, //65
   { value: "Dy", group: "LAN", description: "Disprosio", NO: 66 }, //66
   { value: "Ho", group: "LAN", description: "Holmio", NO: 67 }, //67
   { value: "Er", group: "LAN", description: "Erbio", NO: 68 }, //68
   { value: "Tm", group: "LAN", description: "Tulio", NO: 69 }, //69
   { value: "Yb", group: "LAN", description: "Iterbio", NO: 70 }, //70
   { value: "Lu", group: "LAN", description: "Lutecio", NO: 71 }, //71
   //OCTAVA LINEA
   //OCTAVA LINEA
   { value: "Ac", group: "ACT", description: "Actinio", NO: 89 }, //89
   { value: "Th", group: "ACT", description: "Torio", NO: 90 }, //90
   { value: "Pa", group: "ACT", description: "Protactinio", NO: 91 }, //91
   { value: "U", group: "ACT", description: "Uranio", NO: 92 }, //92
   { value: "Np", group: "ACT", description: "Neptunio", NO: 93 }, //93
   { value: "Pu", group: "ACT", description: "Plutonio", NO: 94 }, //94
   { value: "Am", group: "ACT", description: "Americio", NO: 95 }, //95
   { value: "Cm", group: "ACT", description: "Curio", NO: 96 }, //96
   { value: "Bk", group: "ACT", description: "Berkelio", NO: 97 }, //97
   { value: "Cf", group: "ACT", description: "Californio", NO: 98 }, //98
   { value: "Es", group: "ACT", description: "Einstenio", NO: 99 }, //99
   { value: "Fm", group: "ACT", description: "Fermio", NO: 100 }, //100
   { value: "Md", group: "ACT", description: "Mendelevio", NO: 101 }, //101
   { value: "No", group: "ACT", description: "Nobelio", NO: 102 }, //102
   { value: "Lr", group: "ACT", description: "Laurencio", NO: 103 }, //103
];

const elementsCopy = [
   //PRIMERA LINEA
   { value: "Lr", group: "ACT", description: "Laurencio", NO: 103 }, //103
   { value: "Lr", group: "ACT", description: "Laurencio", NO: 103 }, //103
   { value: "Lr", group: "ACT", description: "Laurencio", NO: 103 }, //103
   { value: "Lr", group: "ACT", description: "Laurencio", NO: 103 }, //103
];
// Rendering the home page.
router.get("/", (req, res, next) => {
   res.render("home", { layout: false, elements: elements, elementsCopy: elementsCopy });
});
router.get("/home", (req, res, next) => {
   res.render("home", { layout: false, elements: elements });
});

module.exports = router;
