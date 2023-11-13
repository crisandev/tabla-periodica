const colorGroup = (group) => {
   if (group === "ONM") return "otros-no-metales";
   if (group === "GN") return "gases-nobles";
   if (group === "ALC") return "alcalinos";
   if (group === "ALCTE") return "alcalinoterreos";
   if (group === "MT") return "metales-de-transicion";
   if (group === "OM") return "otros-metales";
   if (group === "LAN") return "lantanidos";
   if (group === "ACT") return "actinidos";
   if (group === "M") return "metaloides";
   if (group === "HA") return "halogenos";
};

exports.colorGroup = colorGroup;
