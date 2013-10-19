var departamentos = {
"01":"Montevideo",
"02":"Artigas",
"03":"Canelones",
"04":"Cerro Largo",
"05":"Colonia",
"06":"Durazno",
"07":"Flores",
"08":"Florida",
"09":"Lavalleja",
"10":"Maldonado",
"11":"Paysandú",
"12":"Río Negro",
"13":"Rivera",
"14":"Rocha",
"15":"Salto",
"16":"San José",
"17":"Soriano",
"18":"Tacuarembó",
"19":"Treinta y Tres"};

var centrosComunales = null;

var localidades = {
"020":"Montevideo",
"621":"Abayubá",
"622":"Santiago Vázquez",
"721":"Pajas Blancas",
"900":"Rural",
"220":"Artigas",
"521":"Bella Unión",
"522":"Tomás Gomensoro",
"621":"Baltasar Brum",
"622":"Arrocera San Pedro",
"624":"Cainsa Campo 3",
"721":"Bernabé Rivera",
"722":"Calpica Itacumbú",
"723":"Colonia Rivera",
"724":"Franquia",
"725":"Sequeira",
"821":"Cainsa 2 Itacumbú",
"822":"Coronado",
"823":"Cuareim",
"824":"Cuaró",
"825":"Guayubira",
"826":"Javier de Viana",
"827":"La Bolsa",
"828":"Las Piedras",
"829":"Paguero",
"830":"Pintadito",
"831":"Port. de Hierro y Campodónico",
"832":"Tamandua",
"833":"Mones Quintela",
"900":"Rural",
"921":"Arrocera Riusa",
"923":"Cainsa Campo 1",
"925":"Cainsa",
"927":"Paso Campamento",
"928":"Catalán Grande",
"929":"Catalán Volcán",
"930":"Chiflero",
"931":"Colonia Estrella",
"932":"Colonia Palma",
"933":"Colonia Viñar",
"934":"Diego Lamas",
"935":"Estiva",
"936":"Fagúndez",
"937":"Granja Perroni",
"938":"Lenguazo",
"939":"Las Piedras",
"940":"Palma Sola",
"941":"Paredón",
"942":"Paso de la Cruz",
"943":"Paso del León",
"944":"Paso de Ramos",
"945":"Paso Farías",
"946":"Paso Potrero",
"947":"Patitas",
"948":"Piedra Pintada",
"949":"Pintado Grande",
"950":"Puntas de Tres Cruces",
"951":"Ricardinho",
"952":"Rincón de Pacheco",
"953":"Rincón de Pintado",
"954":"Sarandí de Cuaró",
"955":"Sarandí de Yacuy",
"956":"Taruman",
"957":"Topador",
"958":"Cerro Ejido",
"959":"Colonia Palma",
"960":"Zanja Aruera",
"961":"Cerro Signorelli",
"962":"Cerro San Eugenio",
"963":"Calnú",
"221":"Las Piedras",
"320":"Canelones",
"321":"La Paz",
"322":"Pando",
"323":"Santa Lucía",
"324":"Piedras de Afilar",
"325":"Cumbres de Carrasco",
"326":"Haras del Lago",
"327":"Quinta Los Horneros",
"328":"Las Higueritas",
"329":"Sofía Santos",
"421":"Progreso",
"422":"San Ramón",
"521":"Barros Blancos",
"522":"Fracc. Cno. Maldonado",
"523":"Colonia Nicolich",
"524":"Joaquín Suárez",
"525":"Paso Carrasco",
"526":"Santa Rosa",
"527":"Sauce",
"528":"Tala",
"529":"Villa Crespo y San Andrés",
"530":"Fracc. Cno.del Andaluz y R.84",
"621":"Atlántida",
"622":"Estación Atlántida",
"624":"Cerrillos",
"625":"Empalme Olmos",
"626":"Migues",
"627":"Parque del Plata",
"628":"San Bautista",
"629":"San Jacinto",
"630":"Dr. Francisco Soca",
"631":"Toledo",
"632":"Montes",
"633":"San José de Carrasco",
"634":"Fracc. sobre R.74",
"721":"Aguas Corrientes",
"722":"Barra de Carrasco",
"723":"Juanicó",
"724":"La Floresta",
"725":"Estación La Floresta",
"726":"Las Toscas",
"727":"Parque Carrasco",
"729":"Salinas",
"730":"San Antonio",
"731":"Aerop. Internacional de Carrasco",
"732":"Solymar",
"733":"Villa Aeroparque",
"822":"Camino a la Cadena",
"823":"Castellanos",
"824":"Colonia Berro",
"825":"Barrio Cópola",
"826":"Costa Azul",
"827":"Costa y Guillamón",
"828":"El Pinar",
"829":"Estación Migues",
"830":"Pinamar - Pinepark",
"831":"Lagomar",
"832":"Olmos",
"833":"Parada Cabrera",
"834":"San Luis",
"835":"Shangrilá",
"836":"Totoral del Sauce",
"837":"Villa Felicidad",
"838":"Villa Paz S.A.",
"839":"Villa San José",
"840":"Estación Tapia",
"880":"Villa San Felipe",
"881":"Villa Hadita",
"882":"Paso de Pache",
"900":"Rural",
"910":"City Golf",
"911":"Viejo Molino San Bernardo",
"912":"Estanque de Pando",
"913":"Jardines de Pando",
"914":"Paso Espinosa",
"921":"Araminda",
"922":"Argentino",
"923":"Barra de la Pedrera",
"924":"Barrancas Coloradas",
"925":"Bello Horizonte",
"926":"Biarritz",
"927":"Bolívar",
"928":"Campo Militar",
"929":"Capilla de Cella",
"930":"Cañada de Cardozo",
"931":"Cerrillos al Sur",
"932":"Costa de Pando",
"933":"Costa de Tala",
"934":"Cruz de los Caminos",
"935":"Cuchilla Alta",
"936":"Cuchilla Verde",
"937":"Cueva del Tigre",
"938":"Echevarría",
"939":"El Bosque",
"940":"Empalme Sauce",
"941":"Estación Margat",
"942":"Estación Pedrera",
"943":"Fortín de Santa Rosa",
"944":"Fracc. Progreso",
"945":"Instituto Adventista",
"946":"Jaureguiberry",
"947":"La Capilla",
"948":"La Lucha",
"949":"La Montañesa",
"950":"La Palmita",
"951":"La Paloma",
"952":"La Querencia",
"953":"Lomas de Solymar",
"954":"Las Barreras",
"955":"Los Cerrillos",
"956":"Los Titanes",
"957":"Marindia",
"959":"Neptunia",
"961":"Parador Tajes",
"962":"Paso de la Cadena",
"963":"Paso de la Paloma",
"964":"Paso de las Toscas",
"965":"Paso del Bote",
"966":"Paso Palomeque",
"967":"Paso Villar",
"968":"Piedra del Toro",
"969":"Estación Piedras de Afilar",
"970":"El Galeón",
"972":"Puntas de Pantanoso",
"973":"San Pedro",
"974":"Santa Ana",
"975":"Santa Lucía del Este",
"976":"Santos Lugares",
"977":"Sauce de Solís",
"978":"Seis Hermanos",
"979":"Villa Arejo",
"980":"Villa Argentina",
"981":"Villa Encantada",
"982":"Villa Gabi",
"983":"Villa Nueva",
"984":"Villa Porvenir",
"985":"La Tuna",
"986":"Guazú - Virá",
"987":"Colinas de Solymar",
"988":"Barrio Remanso",
"989":"Villa El Tato",
"990":"Villa San Cono",
"991":"Villa Juana",
"992":"Colinas de Carrasco",
"993":"Lomas de Carrasco",
"994":"Carmel",
"995":"La Asunción",
"996":"Quintas del Bosque",
"997":"Altos de la Tahona",
"998":"Asentamiento R.6 Km 24.500",
"220":"Melo",
"521":"Fraile Muerto",
"522":"Río Branco",
"621":"Tupambaé",
"721":"Isidoro Noblía",
"821":"Aceguá",
"822":"Bañado de Medina",
"823":"Centurión",
"824":"Cerro de las Cuentas",
"825":"Hipódromo",
"826":"Paso Pereira",
"827":"Plácido Rosas",
"828":"Toledo",
"829":"Tres Islas",
"830":"Poblado Uruguay",
"900":"Rural",
"921":"Aguirre",
"922":"Amarillo",
"923":"Arbolito",
"924":"Arévalo",
"925":"Bañado de Saturnino",
"926":"Buena Vista",
"927":"Calera de Recalde",
"928":"Campamento",
"929":"Cañada Grande",
"930":"Caserío Las Cañas",
"931":"Cañitas",
"932":"Coimbra",
"933":"Cruz de Piedra",
"934":"Cuchilla Cambota",
"935":"Cuchilla de Melo",
"936":"Cuchilla del Carmen",
"937":"Cuchilla Peralta",
"938":"Duraznero",
"939":"Escuela de Agronomía",
"940":"Esperanza",
"941":"Ganen",
"942":"Garao",
"943":"Getulio Vargas",
"944":"Guazunambí",
"945":"La Coronilla",
"946":"La Gloria",
"947":"La Micaela",
"948":"La Pedrera",
"949":"Lago Merín",
"950":"Laguna del Junco",
"951":"Las Limas",
"952":"Mangrullo",
"953":"María Isabel",
"954":"Mederos",
"955":"Montecito",
"956":"Nando",
"957":"Paso de Almada",
"958":"Paso de las Tropas",
"959":"Paso del Centurión",
"960":"Paso de Melo",
"961":"Picada de Salomé",
"962":"Piedra Alta",
"963":"Piñeiro",
"964":"Puente del Chuy",
"965":"Puntas de Tacuarí",
"966":"Quebracho",
"967":"Raab Arrocera",
"968":"Ramón Trigo",
"969":"Rincón de Paiva",
"970":"Rincón de Contreras",
"971":"Rincón de los Coroneles",
"972":"Rincón de los Montana",
"973":"Rincón de los Olivera",
"974":"Rincón de Py",
"975":"Rodríguez",
"976":"San Diego",
"977":"San Servando",
"978":"Sanchez",
"979":"Sarandí de Aceguá",
"980":"Sosa",
"981":"Soto Goro",
"982":"Tres Boliches",
"983":"Barrio López Benítez",
"984":"Puntas de Minas",
"985":"Arrozal Casarone",
"986":"Pajaro Azul",
"987":"Barrio La Vinchuca",
"988":"Arachania",
"989":"Ñangapire",
"320":"Colonia del Sacramento",
"321":"Carmelo",
"323":"Juan Lacaze",
"421":"Nueva Helvecia",
"422":"Rosario",
"423":"Nueva Palmira",
"452":"Paso Antolín",
"521":"Ombúes de Lavalle",
"522":"Tarariras",
"621":"Colonia Valdense",
"622":"Florencio Sánchez",
"721":"Conchillas",
"722":"Caserío El Cerro",
"723":"El General",
"724":"La Paz",
"726":"Riachuelo",
"727":"Juan Carlos Caseros",
"791":"Ismael Cortinas",
"798":"Agraciada",
"821":"Boca del Rosario",
"822":"Buena Hora",
"823":"Colonia Estrella",
"824":"Cufré",
"825":"El Caño",
"826":"El Semillero",
"827":"Estación Estanzuela",
"828":"Juan González R 21Km 243 a 246",
"829":"Cerros de San Juan",
"830":"Martín Chico",
"831":"Miguelete",
"832":"Pastoreo",
"833":"Piedra de los Indios",
"834":"San Juan",
"900":"Rural",
"922":"Anchorena",
"923":"Campana",
"924":"Artilleros",
"925":"Barker",
"926":"Barrancas Coloradas",
"927":"El Ensueño",
"928":"Barrio Hipódromo",
"929":"Belgrano Norte",
"930":"Belgrano Sur",
"931":"Blanca Arena",
"932":"Brisas del Plata",
"933":"Campana",
"934":"Canteras del Riachuelo",
"935":"Cerro de las Armas",
"936":"Cerros Negros",
"937":"Colonia Arrue",
"938":"Colonia Cosmopolita",
"939":"Colonia Sarandí",
"940":"Paraje Minuano",
"941":"Costa de Colla al Este",
"942":"Costa de Colla al Norte",
"943":"Costa de Navarro",
"944":"El Bañado",
"945":"El Cuadro",
"946":"Juan González",
"947":"La Laguna",
"948":"Lagunita",
"949":"Lomas de Carmelo",
"950":"Las Flores",
"951":"Los Pinos",
"952":"Miguelete de Conchillas",
"953":"Minas de Talco de Narancio",
"954":"Molles de Miguelete",
"955":"Chico Torino",
"956":"La Horqueta",
"957":"Paso Hospital",
"958":"Paso Quicho",
"959":"Playa Azul",
"960":"Playa Britópolis",
"961":"Playa Parant",
"962":"Playa Fomento",
"963":"Polanco",
"964":"Puerto Inglés",
"965":"Puerto Rosario",
"966":"Punta de Arenales",
"967":"Puntas de Juan González",
"968":"Puntas del Rosario (Zunin)",
"969":"Radial Hernández",
"970":"Radial Rosario",
"971":"Resguardo Cufré",
"972":"Rosario y Colla",
"973":"Ruta 21 km 202",
"974":"San Luis",
"975":"San Luis Sánchez",
"976":"San Pedro",
"977":"San Pedro",
"978":"San Roque",
"979":"Santa Ana",
"980":"Santa Regina",
"981":"Santa Rosa",
"982":"Sarandí Campana",
"983":"Terminal - Artilleros",
"984":"Tres Esquinas",
"985":"Víboras",
"986":"Víboras Oeste",
"987":"Zagarzazú",
"989":"Arrivillaga",
"992":"Palo Solo",
"993":"El Faro",
"994":"Laguna de los Patos",
"996":"Juan Jackson",
"997":"Pueblo Gil",
"998":"Cerro Carmelo",
"999":"El Quintón",
"220":"Durazno",
"421":"Sarandí del Yí",
"521":"Carmen",
"621":"Blanquillo",
"622":"La Paloma",
"721":"Carlos Reyles",
"722":"Centenario",
"724":"Santa Bernardina",
"790":"Cerro Chato",
"821":"Baygorria",
"900":"Rural",
"921":"Abella",
"922":"Aguas Buenas",
"923":"Chileno",
"924":"Pueblo de Álvarez",
"925":"Barrancas Coloradas",
"926":"Batoví",
"927":"Bellaco",
"928":"Blanquillo al Oeste",
"929":"Capilla Farruco",
"930":"Carpintería",
"931":"Ceibal",
"932":"Cerrezuelo",
"933":"Cerro Convento",
"934":"Costa de Cuadra",
"935":"Cuchilla de Ramírez",
"936":"De Dios",
"937":"El Pescado",
"938":"Estación Chileno",
"939":"Estación Parish",
"940":"Feliciano",
"941":"Fonseca",
"942":"La Alegría",
"943":"La Mazamorra",
"944":"Los Agregados",
"945":"Los Agüero",
"946":"Las Cañas",
"947":"Los Rojas",
"948":"Malbajar",
"949":"María Cejas",
"950":"Mouriño",
"951":"Ombúes de Oribe",
"952":"Parada Sur Km 265",
"953":"Paso del Medio Las Palmas",
"954":"Puglia",
"955":"Punta de las Flores",
"956":"Puntas de Herrera",
"957":"Reynolds",
"958":"Rojas",
"959":"Rolón",
"960":"Rossell y Rius",
"961":"Ruta 5 Km 172",
"962":"Salinas",
"963":"Salinas Chico",
"964":"San Jorge",
"965":"San José de las Cañas",
"966":"Sandú Chico",
"967":"Sarandí del Río Negro",
"971":"Las Cañas",
"972":"Las Palmas",
"320":"Trinidad",
"721":"Ismael Cortinas",
"900":"Rural",
"921":"Andresito",
"922":"Arenal Chico",
"923":"Colonia Alemana",
"924":"El Totoral",
"925":"Juan José Castro",
"926":"Pueblito Piedra",
"927":"Pueblo Pintos",
"928":"Puntas de Chamanga",
"929":"Puntas de Corral de Piedra",
"930":"Puntas de Marincho",
"931":"Puntas de Sarandí",
"932":"Puntas del Sauce",
"933":"San Gregorio",
"934":"Santa Adelaida",
"935":"Santa Elena",
"936":"Talas de Maciel",
"937":"La Casilla",
"938":"Cerro Colorado",
"220":"Florida",
"421":"Sarandí Grande",
"521":"Casupá",
"621":"Cardal",
"622":"Fray Marcos",
"623":"Veinticinco de Agosto",
"624":"Veinticinco de Mayo",
"721":"Alejandro Gallinal",
"722":"Capilla del Sauce",
"723":"La Cruz",
"724":"Nico Pérez",
"790":"Cerro Chato",
"821":"Chamizo",
"822":"Goñi",
"823":"Mendoza",
"824":"Mendoza Chico",
"825":"Reboledo",
"896":"Valentines",
"900":"Rural",
"921":"Alejandro Gallinal",
"922":"Arrayán",
"923":"Berrondo",
"924":"Chamizo Chico",
"925":"Chingolas",
"926":"Colonia Sánchez",
"927":"Costa de Chamizo Grande",
"928":"Estación Palermo",
"929":"Estación Urioste",
"930":"Pueblo Ferrer",
"931":"Frigorífico Modelo",
"933":"Independencia",
"934":"Juncal",
"935":"Las Chilcas",
"936":"Mansavillagra",
"937":"Molles del Pescado",
"938":"Montecoral",
"939":"Paso de los Novillos",
"940":"Pintado",
"941":"Polanco del Yí",
"942":"Pueblito de las Rosas",
"943":"Pueblo de los Morochos",
"944":"Puntas de Maciel",
"945":"Puntas de Mansavillagra",
"946":"Puntas de Sarandí",
"947":"San Pedro del Timote",
"948":"Talita",
"950":"Villa Hípica",
"951":"Villa Vieja",
"991":"Illescas",
"992":"Caserío La Fundación",
"993":"La Macana",
"994":"Estación Capilla del Sauce",
"995":"San Gabriel",
"220":"Minas",
"521":"José Batlle y Ordóñez",
"522":"José Pedro Varela",
"621":"Mariscala",
"622":"Solís de Mataojo",
"721":"Pirarajá",
"722":"Zapicán",
"821":"Colón",
"822":"Costas del Soldado",
"823":"Poblado Aramendía",
"824":"Ruta 40 Km 27,5",
"900":"Rural",
"921":"Aguas Blancas",
"922":"Alonso",
"923":"Andreoni",
"924":"Blanes Viale",
"925":"Carnales",
"926":"Cerro Pelado",
"927":"Costas del Lenguazo",
"928":"19 de Junio",
"929":"El Soldado",
"930":"Estación Ortiz",
"931":"Estación Solís",
"932":"Gaetán",
"933":"Godoy",
"934":"Higueritas",
"935":"La Plata",
"936":"Ladrillos",
"937":"Las Achiras",
"938":"Marco de los Reyes",
"939":"Marmarajá",
"940":"Molles de Gutiérrez",
"941":"Poblado Larrosa",
"942":"Polanco Norte",
"943":"Polanco Sur",
"944":"Puntas de Barriga Negra",
"945":"Puntas de Santa Lucía",
"946":"Retamosa",
"947":"Rincón de Mariscala",
"948":"Rincón de Cebollatí",
"949":"Ruta 40 Km 25",
"950":"Salus",
"951":"Sarandí de Gutiérrez",
"952":"Tapes Chico",
"953":"Tapes Grande",
"954":"Velázquez",
"955":"Villa del Rosario",
"956":"Villa Serrana",
"957":"Barrio La Coronilla - Ancap",
"958":"San Francisco de las Sierras",
"991":"Illescas",
"320":"Maldonado",
"321":"San Carlos",
"521":"Aiguá",
"522":"Pan de Azúcar",
"523":"Piriápolis",
"524":"Punta del Este",
"821":"Cerro Pelado",
"822":"Garzón",
"823":"Gerona",
"824":"La Sierra",
"825":"Las Flores - Estación",
"826":"Los Talas",
"827":"Nueva Carrara",
"828":"Solís",
"829":"Pueblo Solís",
"830":"Pinares - Las Delicias",
"831":"Chihuahua",
"832":"Villa Delia",
"833":"San Rafael - El Placer",
"900":"Rural",
"919":"Islas",
"921":"Abra de Castellanos",
"922":"Abra de Perdomo",
"923":"Barra del Sauce",
"924":"Barrio Hipódromo",
"925":"Barrio Los Aromos",
"926":"Bella Vista",
"927":"Buenos Aires",
"928":"Calera Ramos",
"929":"Canteras de Marelli",
"930":"Carapé",
"931":"Cerros Azules",
"932":"Coronilla",
"933":"Edén Rock",
"934":"El Chorro",
"935":"El Edén",
"936":"El Tesoro",
"937":"Estación José Ignacio",
"938":"Faro José Ignacio",
"939":"Faro José Ignacio",
"940":"Gregorio Aznárez",
"941":"Guardia Vieja",
"942":"La Barra",
"943":"La Falda",
"944":"La Capuera",
"945":"Las Flores",
"946":"Los Ceibos",
"947":"Manantiales",
"948":"Ocean Park",
"949":"Partido Norte",
"950":"Partido Oeste",
"951":"Paso de los Talas",
"952":"Picada Tolosa",
"953":"Playa Grande",
"954":"Playa Hermosa",
"955":"Playa Verde",
"956":"Punta Ballena",
"958":"Punta Colorada",
"959":"Punta Negra",
"960":"Puntas de San Ignacio",
"961":"Rincón de los Núñez",
"962":"Ruta 37 y 9",
"963":"Ruta 73 Km 101 a 102",
"964":"Ruta 9 Km 86",
"965":"Salamanca",
"966":"San Juan del Este",
"967":"Santa Mónica",
"968":"Sauce de Aiguá",
"969":"Sauce de Portezuelo",
"972":"San Vicente",
"973":"Balneario Buenos Aires",
"974":"De Lobos",
"980":"Las Cumbres",
"981":"Los Corchos",
"982":"Santa Mónica",
"983":"Edén Rock",
"984":"Parque Medina",
"985":"Arenas de José Ignacio",
"986":"La Sonrisa",
"987":"El Quijote",
"988":"Laguna Blanca",
"120":"Paysandú",
"521":"Guichón",
"522":"Nuevo Paysandú",
"621":"Quebracho",
"695":"Tambores",
"721":"Lorenzo Geyres",
"722":"Merinos",
"723":"Porvenir",
"797":"Algorta",
"821":"Arbolito",
"822":"Beisso",
"823":"Casablanca",
"824":"Cerro Chato",
"825":"Constancia",
"826":"Morató",
"827":"Piedras Coloradas",
"828":"Piñera",
"829":"Puntas de Buricayupí",
"830":"San Félix",
"831":"Villa María (Tiatucura)",
"894":"Piedra Sola",
"900":"Rural",
"921":"Alonso",
"922":"Araújo",
"924":"Bella Vista",
"925":"Cañada del Pueblo",
"926":"Chapicuy",
"927":"Daymán",
"928":"El Chaco",
"929":"El Eucaliptus",
"930":"El Horno",
"931":"Esperanza",
"932":"Pueblo Federación",
"933":"Guayabos",
"935":"La Tentación",
"936":"Las Flores",
"937":"Orgoroso",
"938":"Palmar del Quebracho",
"939":"Pandule",
"940":"Paso de los Carros",
"941":"Queguay Chico",
"942":"Ruta 90 Km 36",
"943":"Sacachispas",
"944":"Sauce de Abajo",
"945":"Cuchilla de Buricayupí",
"946":"Sauce del Queguay",
"947":"Soto",
"948":"Tomás Paz",
"949":"Valdez",
"950":"Zeballos",
"951":"Chacras de Paysandú",
"952":"Rivas",
"953":"Gallinal",
"954":"Puntas de Arroyo Negro",
"955":"Estación Porvenir",
"956":"Cuchilla de Fuego",
"957":"Pueblo Alonzo",
"958":"Queguayar",
"959":"Termas de Guaviyú",
"960":"Termas de Almirón",
"320":"Fray Bentos",
"421":"Young",
"621":"Nuevo Berlín",
"622":"San Javier",
"722":"Barrio Anglo",
"723":"Grecco",
"792":"Merinos",
"797":"Algorta",
"821":"El Ombú",
"822":"Los Ranchos",
"823":"Paso de los Mellizos",
"824":"Sarandí de Navarro",
"825":"Sauce",
"826":"Villa General Borges",
"827":"Villa María",
"828":"Las Cañas",
"900":"Rural",
"919":"Islas",
"921":"Abrigo",
"923":"Bellaco",
"924":"Islas de Arguello",
"925":"La Arena",
"926":"la Florida",
"927":"La Ilera",
"928":"La Unión",
"929":"Liebigs",
"930":"Los Arrayanes",
"931":"Mataojo",
"932":"Menafra",
"933":"Palmar Grande",
"934":"Paso Arroyo Don Esteban",
"935":"Paso de los Cobres",
"936":"Paso de Soca",
"937":"Rolón",
"938":"Sánchez Chico",
"939":"Sánchez",
"940":"Santa Elisa",
"941":"Santa Rosa",
"942":"Sarandí Chico",
"943":"Tres Bocas",
"944":"Uleste",
"945":"Tres Quintas",
"220":"Rivera",
"521":"Minas de Corrales",
"522":"Tranqueras",
"621":"Vichadero",
"721":"Santa Teresa",
"821":"Abrojal",
"822":"Arroyo Blanco",
"823":"Paso Ataques",
"824":"Cerro Pelado",
"825":"Cerro Caqueiro",
"826":"Chilca de Caraguatá",
"827":"Cortume",
"828":"Curticeiras",
"829":"Cuñapirú",
"830":"Paso Hospital",
"831":"Lapuente",
"832":"Las Flores",
"833":"Moirones",
"834":"Puntas de Corrales",
"835":"San Gregorio",
"836":"La Pedrera",
"837":"Mandubí",
"838":"Lagunón",
"900":"Rural",
"921":"Alborada",
"922":"Amarillo",
"923":"Batoví",
"924":"Berruti",
"925":"Blanquillos",
"926":"Capón Alto",
"927":"Carpintería",
"928":"Carpintería de Yaguarí",
"929":"Cerrillada",
"930":"Cerro Alegre",
"931":"Cerros de la Calera",
"932":"Cerros Blancos de Cuñapirú",
"933":"Coronilla",
"934":"Coronilla de Corrales",
"935":"Cruz de San Pedro",
"936":"Cuchilla de Tres Cerros",
"937":"Cuchilla Mangueras",
"938":"Guaviyú",
"939":"La Chilca",
"940":"Lagos del Norte",
"941":"Laureles",
"942":"Manuel Díaz",
"943":"Masoller",
"944":"Minas de Cuñapirú",
"945":"Minas de Zapucay",
"946":"Parada Medina",
"947":"Paso de Amarillo",
"948":"Paso de los Ataques",
"949":"Paso de Serpa",
"950":"Paso de Tapado",
"951":"Paso del Parque",
"952":"Piedras Blancas",
"953":"Platón",
"954":"Puntas de Abrojal",
"955":"Rincón de Rodríguez",
"956":"Rincón de Roland",
"957":"Rincón los Tres Cerros",
"958":"Rubio Chico",
"959":"Sarandí de Río Negro",
"960":"Sauzal",
"961":"Villa Indart",
"962":"Yaguarí",
"963":"Zanja Honda 01",
"964":"Zanja Honda 02",
"320":"Rocha",
"421":"Castillos",
"422":"Lascano",
"521":"Chuy",
"621":"Cebollatí",
"622":"Velázquez",
"721":"18 de Julio",
"722":"La Paloma",
"723":"San Luis al Medio",
"821":"La Aguada y Costa Azul",
"822":"Diecinueve de Abril",
"823":"La Coronilla",
"824":"La Coronilla",
"825":"Paso Barrancas",
"826":"Barrio Pereira",
"900":"Rural",
"919":"Isla",
"921":"Aguas Dulces",
"922":"Arrozal Victoria",
"923":"Barra del Chuy",
"926":"Barrio Torres",
"927":"Buena Vista",
"928":"Cabo Polonio",
"929":"Capacho",
"930":"Cerro de los Rocha",
"931":"Costas del Ceibo",
"932":"Cuchilla de Garzón",
"933":"Cuchilla de India Muerta",
"934":"El Canelón",
"935":"El Caracol",
"936":"El Ceibo",
"937":"El Chimango",
"938":"Estero Pelotas Arrocera",
"939":"Estiva de Chafalote",
"940":"Barra de Valizas",
"941":"La Esmeralda",
"942":"La Pedrera",
"943":"Lagunita",
"944":"La Garzas",
"945":"Los Tacuruses Arrocera",
"946":"Mena",
"947":"Palmar",
"948":"Parallé",
"949":"Parque Nac. de Santa Teresa",
"950":"Paso del Bañado",
"951":"Picada Techera Arrocera",
"952":"Poblado Correa",
"953":"Puerto de los Botes",
"954":"Quebracho",
"955":"Rincón de Nieto",
"956":"Rincón de los Olivera",
"957":"Puimayen",
"958":"Tres Islas",
"959":"Arachania",
"960":"Pta. Rubia y Sta. Isabel de la Pedrera",
"961":"Atlántica",
"962":"Punta del Diablo",
"963":"Palmares de la Coronilla",
"964":"La Ribiera",
"965":"Puente Valizas",
"966":"Oceanía del Polonio",
"967":"Pueblo Nuevo",
"968":"Tajamares de la Pedrera",
"969":"San Antonio",
"120":"Salto",
"522":"Belén",
"523":"Constitución",
"721":"Fernández",
"722":"San Antonio",
"723":"Chacras de Belén",
"724":"Itapebí",
"821":"Albisu",
"822":"Biassini",
"823":"Campo de Todos",
"824":"Cayetano",
"825":"Cuchilla de Guaviyú",
"826":"Hipódromo",
"827":"Termas del Daymán",
"828":"Palomas",
"829":"Paso del Parque del Daymán",
"830":"Quintana",
"831":"Sarandí del Arapey",
"832":"Saucedo",
"900":"Rural",
"921":"Alcain",
"922":"Alvez",
"923":"Sopas",
"924":"Arenitas Blancas",
"925":"Baltasar Brum",
"926":"Bordenave",
"927":"Cancela",
"928":"Cancela o Varesse",
"929":"Carumbé",
"930":"Casco",
"931":"Celeste",
"932":"Cerrillada",
"933":"Cerrillada de Saucedo",
"934":"Cerro Chato",
"935":"Cerros de Vera",
"936":"El Espinillar",
"937":"Farías",
"938":"Ferreira",
"939":"Garibaldi",
"940":"La Bolsa",
"941":"La Bolsa 02",
"942":"La Bolsa 03",
"943":"Termas del Arapey",
"944":"Las Flores",
"945":"Laureles",
"946":"Lluveras",
"947":"Mario Rubio",
"948":"Mataojito",
"949":"Migliaro",
"950":"Olivera",
"951":"Parada Herrería",
"952":"Paso de las Cañas",
"953":"Paso del Tropero",
"954":"Paso del Tapado",
"955":"Paso Nuevo del Arapey",
"956":"Pepe Núñez",
"957":"Paso de las Piedras de Arerunguá",
"958":"Puntas de Cañas",
"959":"Puntas de Valentín",
"960":"Ramos",
"961":"Sarandí",
"962":"Sauce Chico",
"963":"Soto",
"964":"Toro Negro",
"965":"Rincón de Valentín",
"966":"Colonia 18 de Julio",
"967":"Santa Ana",
"968":"Arapey",
"969":"Parque José Luis",
"970":"Colonia Itapebí",
"971":"Guaviyú de Arapey",
"972":"Russo",
"973":"Paso Cementerio",
"974":"Osimani y Llerena",
"220":"San José de Mayo",
"421":"Libertad",
"521":"Delta del Tigre y Villas",
"621":"Rodríguez",
"721":"Ituzaingó",
"722":"Santa Mónica",
"793":"Ismael Cortinas",
"821":"Puntas de Valdez",
"822":"González",
"823":"Mal Abrigo",
"824":"Playa Pascual",
"825":"18 de Julio (Pueblo Nuevo)",
"826":"Rafael Peraza",
"827":"Raigón",
"828":"Tala de Pereira",
"829":"Safici (Parque Postel)",
"900":"Rural",
"921":"Arroyo Llano",
"922":"Bella Vista",
"923":"Juan Soler",
"924":"Bocas del Cufré",
"925":"Capurro",
"926":"Villa María",
"927":"Colonia América",
"928":"Cuchilla del Vichadero",
"929":"Ecilda Paullier",
"930":"Escudero",
"931":"Fajina",
"932":"Kiyú - Ordeig",
"933":"La Boyada",
"934":"La Boyada Ruta1 Km 91,2",
"935":"La Candelaria",
"936":"La Cuchilla",
"937":"Ordeig",
"938":"Pavón",
"939":"Cañada Grande",
"940":"Puntas de Gregorio",
"941":"Puntas de Laurel",
"942":"Rapetti",
"943":"Rincón de Nazaret",
"944":"Rincón de Buschental",
"945":"Rincón del Pino",
"946":"San Gregorio",
"947":"Scavino",
"948":"Tropas Viejas",
"949":"Valdez Chico",
"950":"Monte Grande",
"951":"Aguas Corrientes",
"960":"Cerámicas del Sur",
"961":"Radial",
"962":"Cololó - Tinosa",
"963":"Mangrullo",
"964":"Carreta Quemada",
"965":"Costas de Pereira",
"966":"Colonia Delta",
"220":"Mercedes",
"321":"Dolores",
"521":"Cardona",
"621":"José Enrique Rodó",
"622":"Palmitas",
"623":"Villa Soriano",
"624":"Palmar",
"721":"Egaña",
"722":"Santa Catalina",
"793":"Ismael Cortinas",
"798":"Agraciada",
"821":"Cañada Paraguaya",
"822":"Castillos",
"823":"Risso",
"824":"Sacachispas",
"825":"Cañada Nieto",
"900":"Rural",
"919":"Islas",
"921":"Arroyo Grande",
"922":"Bequeló Ruta 14 Km 4",
"923":"Bequeló Ruta 14 Km 7",
"924":"Bizcocho",
"925":"Calvo",
"926":"Colonia Díaz",
"927":"Cuchilla del Perdido",
"928":"El Tala",
"929":"Jackson",
"930":"La Concordia",
"931":"La Loma",
"932":"Olivera",
"933":"Pamer",
"934":"Rincón de Cololó",
"935":"San Dios",
"936":"San Martín",
"937":"Sarandí Chico",
"938":"Zanja Honda",
"939":"Palo Solo",
"950":"Chacras de Dolores",
"951":"Colonia Concordia",
"952":"Perseverano",
"992":"Palo Solo",
"993":"Lares",
"220":"Tacuarembó",
"321":"Paso de los Toros",
"521":"San Gregorio de Polanco",
"695":"Tambores",
"721":"Achar",
"722":"Ansina",
"723":"Curtina",
"724":"Paso del Cerro",
"725":"Rincón de Martinote",
"822":"Clara",
"823":"Clavijo",
"824":"Cuchilla de Caraguatá",
"825":"Cuchilla del Ombú",
"827":"La Hilera",
"828":"Las Toscas",
"829":"Paso Bonilla",
"830":"Pueblo de Arriba",
"831":"Pueblo del Barro",
"832":"Rincón de la Aldea",
"833":"Rincón del Bonete",
"834":"Balneario Iporá",
"835":"Zapará",
"853":"Los Rodríguez",
"894":"Piedra Sola",
"900":"Rural",
"921":"Aldea San Joaquín",
"922":"Ataques",
"923":"Bañado de Rocha",
"925":"Cardozo",
"926":"Cardozo Chico",
"927":"Cerro de la Ventana",
"928":"Chamberlain",
"929":"Colman",
"930":"Cuchilla de la Palma",
"931":"Cuchilla de Peralta",
"932":"Heriberto",
"933":"La Aldea",
"934":"La Bolsa 01",
"935":"La Bolsa 02",
"936":"La Humedad",
"937":"La Pedrera",
"938":"La Rosada",
"939":"Lambaré",
"940":"Larrayos",
"941":"Las Arenas",
"943":"La Chircas",
"945":"Los Feos",
"946":"Los Ferreira",
"948":"Los García",
"949":"Los Gómez",
"950":"Los Magariños",
"951":"Los Novillos",
"952":"Laureles",
"953":"Los Ortiz",
"954":"Los Rosanos",
"955":"Los Rosas",
"956":"Los Semper",
"957":"Los Vázquez",
"958":"Laura",
"960":"Matutina",
"961":"Minuano",
"963":"Montevideo Chico",
"964":"Paso de Ceferino",
"965":"Paso de las Carretas",
"966":"Paso del Medio",
"968":"Picada de Cuello",
"970":"Quiebra Yugos",
"971":"Cerro de Pastoreo",
"972":"Rincón de la Laguna",
"973":"Rincón de Giloca",
"975":"Rincón de Freitas",
"976":"Rivera Chico",
"978":"Santa Rita",
"979":"Santander",
"980":"Sauce de Batoví",
"981":"Sauce de Tranqueras",
"982":"Sauce Solo 02",
"984":"Treinta y Tres ó Cañas",
"985":"Tres Guitarras",
"986":"Turupí",
"987":"Valle Edén",
"988":"Zapucay",
"989":"Capón de la Yerba",
"990":"Puntas de Cinco Sauces",
"991":"Rincón de Pereira",
"992":"Punta de Carretera",
"993":"Cruz de los Caminos",
"220":"Treinta y Tres",
"521":"Santa Clara de Olimar",
"522":"Vergara",
"721":"Arrozal Treinta y Tres",
"722":"Gral. Enrique Martínez",
"723":"Villa Sara",
"790":"Cerro Chato",
"821":"Estación Rincón",
"822":"Isla Patrulla (María Isabel)",
"823":"Picada Techera",
"896":"Valentines",
"900":"Rural",
"921":"Acosta",
"922":"Poblado Alonzo",
"923":"Arrozal Florencio Barreto",
"924":"Arrocera Rincón",
"925":"Arrozal Santa María",
"926":"Bañado de los Olivera",
"927":"Cañada Chica",
"928":"Cañada de los Cuervos",
"929":"Cerros de Amaro",
"931":"Cipa Olimar",
"932":"Cipa Secador",
"933":"Costa del Arroyo Malo",
"934":"Cuchilla de Dionisio",
"935":"Embarque Arrozal Treinta y Tres",
"936":"Julio María Sanz",
"937":"La Calavera",
"938":"La Lata",
"939":"Lechiguana de Corrales",
"940":"Arrocera Los Ceibos",
"941":"María Albina",
"942":"Mendizábal (El Oro)",
"943":"Paso de Píriz",
"944":"Pastor",
"945":"Poblado Medina",
"947":"Puntas del Parao",
"948":"Rincón de Gadea",
"949":"Rincón de los Francos",
"950":"San Juan",
"951":"Sierra del Yerbal",
"952":"Siete Casas",
"953":"Tres Bocas",
"954":"Verde Alto",
"955":"Villa Passano",
"956":"Ejido de Treinta y Tres",
"960":"El Bellaco",
"961":"Arrocera Los Teros",
"962":"Arrocera Bonomo",
"963":"Arrocera El Tigre",
"964":"Arrocera La Catumbera",
"965":"Arrocera La Querencia",
"966":"Arrocera Las Palmas",
"967":"Arrocera Mini",
"968":"Arrocera Procipa",
"969":"Arrocera San Fernando",
"970":"Arrocera Santa Fe",
"971":"Arrocera Zapata",
};

var facetValuesDescMap = {'DPTO': departamentos, 'LOC': localidades, 'CCZ' : centrosComunales};

function getFacetValueDesc(facetName, facetValue) {
	facetValueDesc = facetValue;
	if (facetValuesDescMap[facetName] != null) {
		facetValueDesc = facetValuesDescMap[facetName][facetValue];
	}
	return facetValueDesc;
};