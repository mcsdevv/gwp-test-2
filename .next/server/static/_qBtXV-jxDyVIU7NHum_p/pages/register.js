module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "1GRS":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"footer": "footer_footer__1KoDW",
	"fixed": "footer_fixed__3-8VQ",
	"navigationWrap": "footer_navigationWrap__30pH7",
	"mainNavigation": "footer_mainNavigation__1gf-T",
	"menu": "footer_menu__ExjGI",
	"current_page_item": "footer_current_page_item__2ypxn",
	"current-menu-item": "footer_current-menu-item__TeTMg",
	"current_page_ancestor": "footer_current_page_ancestor__2M5vp",
	"current-menu-ancestor": "footer_current-menu-ancestor__3a3j3",
	"logo": "footer_logo__1VV6b",
	"socialMenu": "footer_socialMenu__3OXIp"
};


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Dsvi");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4dC4":
/***/ (function(module) {

module.exports = JSON.parse("{\"countries\":[{\"country\":\"Afghanistan\",\"states\":[\"Badakhshan\",\"Badghis\",\"Baghlan\",\"Balkh\",\"Bamian\",\"Daykondi\",\"Farah\",\"Faryab\",\"Ghazni\",\"Ghowr\",\"Helmand\",\"Herat\",\"Jowzjan\",\"Kabul\",\"Kandahar\",\"Kapisa\",\"Khost\",\"Konar\",\"Kondoz\",\"Laghman\",\"Lowgar\",\"Nangarhar\",\"Nimruz\",\"Nurestan\",\"Oruzgan\",\"Paktia\",\"Paktika\",\"Panjshir\",\"Parvan\",\"Samangan\",\"Sar-e Pol\",\"Takhar\",\"Vardak\",\"Zabol\"]},{\"country\":\"Albania\",\"states\":[\"Berat\",\"Dibres\",\"Durres\",\"Elbasan\",\"Fier\",\"Gjirokastre\",\"Korce\",\"Kukes\",\"Lezhe\",\"Shkoder\",\"Tirane\",\"Vlore\"]},{\"country\":\"Algeria\",\"states\":[\"Adrar\",\"Ain Defla\",\"Ain Temouchent\",\"Alger\",\"Annaba\",\"Batna\",\"Bechar\",\"Bejaia\",\"Biskra\",\"Blida\",\"Bordj Bou Arreridj\",\"Bouira\",\"Boumerdes\",\"Chlef\",\"Constantine\",\"Djelfa\",\"El Bayadh\",\"El Oued\",\"El Tarf\",\"Ghardaia\",\"Guelma\",\"Illizi\",\"Jijel\",\"Khenchela\",\"Laghouat\",\"Muaskar\",\"Medea\",\"Mila\",\"Mostaganem\",\"M'Sila\",\"Naama\",\"Oran\",\"Ouargla\",\"Oum el Bouaghi\",\"Relizane\",\"Saida\",\"Setif\",\"Sidi Bel Abbes\",\"Skikda\",\"Souk Ahras\",\"Tamanghasset\",\"Tebessa\",\"Tiaret\",\"Tindouf\",\"Tipaza\",\"Tissemsilt\",\"Tizi Ouzou\",\"Tlemcen\"]},{\"country\":\"Andorra\",\"states\":[\"Andorra la Vella\",\"Canillo\",\"Encamp\",\"Escaldes-Engordany\",\"La Massana\",\"Ordino\",\"Sant Julia de Loria\"]},{\"country\":\"Angola\",\"states\":[\"Bengo\",\"Benguela\",\"Bie\",\"Cabinda\",\"Cuando Cubango\",\"Cuanza Norte\",\"Cuanza Sul\",\"Cunene\",\"Huambo\",\"Huila\",\"Luanda\",\"Lunda Norte\",\"Lunda Sul\",\"Malanje\",\"Moxico\",\"Namibe\",\"Uige\",\"Zaire\"]},{\"country\":\"Antarctica\",\"states\":[]},{\"country\":\"Antigua and Barbuda\",\"states\":[\"Barbuda\",\"Redonda\",\"Saint George\",\"Saint John\",\"Saint Mary\",\"Saint Paul\",\"Saint Peter\",\"Saint Philip\"]},{\"country\":\"Argentina\",\"states\":[\"Buenos Aires\",\"Buenos Aires Capital\",\"Catamarca\",\"Chaco\",\"Chubut\",\"Cordoba\",\"Corrientes\",\"Entre Rios\",\"Formosa\",\"Jujuy\",\"La Pampa\",\"La Rioja\",\"Mendoza\",\"Misiones\",\"Neuquen\",\"Rio Negro\",\"Salta\",\"San Juan\",\"San Luis\",\"Santa Cruz\",\"Santa Fe\",\"Santiago del Estero\",\"Tierra del Fuego\",\"Tucuman\"]},{\"country\":\"Armenia\",\"states\":[\"Aragatsotn\",\"Ararat\",\"Armavir\",\"Geghark'unik'\",\"Kotayk'\",\"Lorri\",\"Shirak\",\"Syunik'\",\"Tavush\",\"Vayots' Dzor\",\"Yerevan\"]},{\"country\":\"Australia\",\"states\":[]},{\"country\":\"Austria\",\"states\":[\"Burgenland\",\"Kaernten\",\"Niederoesterreich\",\"Oberoesterreich\",\"Salzburg\",\"Steiermark\",\"Tirol\",\"Vorarlberg\",\"Wien\"]},{\"country\":\"Azerbaijan\",\"states\":[\"Abseron Rayonu\",\"Agcabadi Rayonu\",\"Agdam Rayonu\",\"Agdas Rayonu\",\"Agstafa Rayonu\",\"Agsu Rayonu\",\"Astara Rayonu\",\"Balakan Rayonu\",\"Barda Rayonu\",\"Beylaqan Rayonu\",\"Bilasuvar Rayonu\",\"Cabrayil Rayonu\",\"Calilabad Rayonu\",\"Daskasan Rayonu\",\"Davaci Rayonu\",\"Fuzuli Rayonu\",\"Gadabay Rayonu\",\"Goranboy Rayonu\",\"Goycay Rayonu\",\"Haciqabul Rayonu\",\"Imisli Rayonu\",\"Ismayilli Rayonu\",\"Kalbacar Rayonu\",\"Kurdamir Rayonu\",\"Lacin Rayonu\",\"Lankaran Rayonu\",\"Lerik Rayonu\",\"Masalli Rayonu\",\"Neftcala Rayonu\",\"Oguz Rayonu\",\"Qabala Rayonu\",\"Qax Rayonu\",\"Qazax Rayonu\",\"Qobustan Rayonu\",\"Quba Rayonu\",\"Qubadli Rayonu\",\"Qusar Rayonu\",\"Saatli Rayonu\",\"Sabirabad Rayonu\",\"Saki Rayonu\",\"Salyan Rayonu\",\"Samaxi Rayonu\",\"Samkir Rayonu\",\"Samux Rayonu\",\"Siyazan Rayonu\",\"Susa Rayonu\",\"Tartar Rayonu\",\"Tovuz Rayonu\",\"Ucar Rayonu\",\"Xacmaz Rayonu\",\"Xanlar Rayonu\",\"Xizi Rayonu\",\"Xocali Rayonu\",\"Xocavand Rayonu\",\"Yardimli Rayonu\",\"Yevlax Rayonu\",\"Zangilan Rayonu\",\"Zaqatala Rayonu\",\"Zardab Rayonu\",\"Ali Bayramli Sahari\",\"Baki Sahari\",\"Ganca Sahari\",\"Lankaran Sahari\",\"Mingacevir Sahari\",\"Naftalan Sahari\",\"Saki Sahari\",\"Sumqayit Sahari\",\"Susa Sahari\",\"Xankandi Sahari\",\"Yevlax Sahari\",\"Naxcivan Muxtar\"]},{\"country\":\"Bahamas\",\"states\":[\"Acklins and Crooked Islands\",\"Bimini\",\"Cat Island\",\"Exuma\",\"Freeport\",\"Fresh Creek\",\"Governor's Harbour\",\"Green Turtle Cay\",\"Harbour Island\",\"High Rock\",\"Inagua\",\"Kemps Bay\",\"Long Island\",\"Marsh Harbour\",\"Mayaguana\",\"New Providence\",\"Nichollstown and Berry Islands\",\"Ragged Island\",\"Rock Sound\",\"Sandy Point\",\"San Salvador and Rum Cay\"]},{\"country\":\"Bahrain\",\"states\":[\"Al Hadd\",\"Al Manamah\",\"Al Mintaqah al Gharbiyah\",\"Al Mintaqah al Wusta\",\"Al Mintaqah ash Shamaliyah\",\"Al Muharraq\",\"Ar Rifa' wa al Mintaqah al Janubiyah\",\"Jidd Hafs\",\"Madinat Hamad\",\"Madinat 'Isa\",\"Juzur Hawar\",\"Sitrah\"]},{\"country\":\"Bangladesh\",\"states\":[\"Barisal\",\"Chittagong\",\"Dhaka\",\"Khulna\",\"Rajshahi\",\"Sylhet\"]},{\"country\":\"Barbados\",\"states\":[\"Christ Church\",\"Saint Andrew\",\"Saint George\",\"Saint James\",\"Saint John\",\"Saint Joseph\",\"Saint Lucy\",\"Saint Michael\",\"Saint Peter\",\"Saint Philip\",\"Saint Thomas\"]},{\"country\":\"Belarus\",\"states\":[\"Brest\",\"Homyel\",\"Horad Minsk\",\"Hrodna\",\"Mahilyow\",\"Minsk\",\"Vitsyebsk\"]},{\"country\":\"Belgium\",\"states\":[\"Antwerpen\",\"Brabant Wallon\",\"Brussels\",\"Flanders\",\"Hainaut\",\"Liege\",\"Limburg\",\"Luxembourg\",\"Namur\",\"Oost-Vlaanderen\",\"Vlaams-Brabant\",\"Wallonia\",\"West-Vlaanderen\"]},{\"country\":\"Belize\",\"states\":[\"Belize\",\"Cayo\",\"Corozal\",\"Orange Walk\",\"Stann Creek\",\"Toledo\"]},{\"country\":\"Benin\",\"states\":[\"Alibori\",\"Atakora\",\"Atlantique\",\"Borgou\",\"Collines\",\"Donga\",\"Kouffo\",\"Littoral\",\"Mono\",\"Oueme\",\"Plateau\",\"Zou\"]},{\"country\":\"Bermuda\",\"states\":[\"Devonshire\",\"Hamilton\",\"Hamilton\",\"Paget\",\"Pembroke\",\"Saint George\",\"Saint George's\",\"Sandys\",\"Smith's\",\"Southampton\",\"Warwick\"]},{\"country\":\"Bhutan\",\"states\":[\"Bumthang\",\"Chukha\",\"Dagana\",\"Gasa\",\"Haa\",\"Lhuntse\",\"Mongar\",\"Paro\",\"Pemagatshel\",\"Punakha\",\"Samdrup Jongkhar\",\"Samtse\",\"Sarpang\",\"Thimphu\",\"Trashigang\",\"Trashiyangste\",\"Trongsa\",\"Tsirang\",\"Wangdue Phodrang\",\"Zhemgang\"]},{\"country\":\"Bolivia\",\"states\":[\"Chuquisaca\",\"Cochabamba\",\"Beni\",\"La Paz\",\"Oruro\",\"Pando\",\"Potosi\",\"Santa Cruz\",\"Tarija\"]},{\"country\":\"Bosnia and Herzegovina\",\"states\":[\"Una-Sana [Federation]\",\"Posavina [Federation]\",\"Tuzla [Federation]\",\"Zenica-Doboj [Federation]\",\"Bosnian Podrinje [Federation]\",\"Central Bosnia [Federation]\",\"Herzegovina-Neretva [Federation]\",\"West Herzegovina [Federation]\",\"Sarajevo [Federation]\",\" West Bosnia [Federation]\",\"Banja Luka [RS]\",\"Bijeljina [RS]\",\"Doboj [RS]\",\"Fo?a [RS]\",\"Sarajevo-Romanija [RS]\",\"Trebinje [RS]\",\"Vlasenica [RS]\"]},{\"country\":\"Botswana\",\"states\":[\"Central\",\"Ghanzi\",\"Kgalagadi\",\"Kgatleng\",\"Kweneng\",\"North East\",\"North West\",\"South East\",\"Southern\"]},{\"country\":\"Brazil\",\"states\":[\"Acre\",\"Alagoas\",\"Amapa\",\"Amazonas\",\"Bahia\",\"Ceara\",\"Distrito Federal\",\"Espirito Santo\",\"Goias\",\"Maranhao\",\"Mato Grosso\",\"Mato Grosso do Sul\",\"Minas Gerais\",\"Para\",\"Paraiba\",\"Parana\",\"Pernambuco\",\"Piaui\",\"Rio de Janeiro\",\"Rio Grande do Norte\",\"Rio Grande do Sul\",\"Rondonia\",\"Roraima\",\"Santa Catarina\",\"Sao Paulo\",\"Sergipe\",\"Tocantins\"]},{\"country\":\"Brunei\",\"states\":[\"Belait\",\"Brunei and Muara\",\"Temburong\",\"Tutong\"]},{\"country\":\"Bulgaria\",\"states\":[\"Blagoevgrad\",\"Burgas\",\"Dobrich\",\"Gabrovo\",\"Khaskovo\",\"Kurdzhali\",\"Kyustendil\",\"Lovech\",\"Montana\",\"Pazardzhik\",\"Pernik\",\"Pleven\",\"Plovdiv\",\"Razgrad\",\"Ruse\",\"Shumen\",\"Silistra\",\"Sliven\",\"Smolyan\",\"Sofiya\",\"Sofiya-Grad\",\"Stara Zagora\",\"Turgovishte\",\"Varna\",\"Veliko Turnovo\",\"Vidin\",\"Vratsa\",\"Yambol\"]},{\"country\":\"Burkina Faso\",\"states\":[\"Bale\",\"Bam\",\"Banwa\",\"Bazega\",\"Bougouriba\",\"Boulgou\",\"Boulkiemde\",\"Comoe\",\"Ganzourgou\",\"Gnagna\",\"Gourma\",\"Houet\",\"Ioba\",\"Kadiogo\",\"Kenedougou\",\"Komondjari\",\"Kompienga\",\"Kossi\",\"Koulpelogo\",\"Kouritenga\",\"Kourweogo\",\"Leraba\",\"Loroum\",\"Mouhoun\",\"Namentenga\",\"Nahouri\",\"Nayala\",\"Noumbiel\",\"Oubritenga\",\"Oudalan\",\"Passore\",\"Poni\",\"Sanguie\",\"Sanmatenga\",\"Seno\",\"Sissili\",\"Soum\",\"Sourou\",\"Tapoa\",\"Tuy\",\"Yagha\",\"Yatenga\",\"Ziro\",\"Zondoma\",\"Zoundweogo\"]},{\"country\":\"Burma\",\"states\":[\"Ayeyarwady\",\"Bago\",\"Magway\",\"Mandalay\",\"Sagaing\",\"Tanintharyi\",\"Yangon\",\"Chin State\",\"Kachin State\",\"Kayin State\",\"Kayah State\",\"Mon State\",\"Rakhine State\",\"Shan State\"]},{\"country\":\"Burundi\",\"states\":[\"Bubanza\",\"Bujumbura Mairie\",\"Bujumbura Rural\",\"Bururi\",\"Cankuzo\",\"Cibitoke\",\"Gitega\",\"Karuzi\",\"Kayanza\",\"Kirundo\",\"Makamba\",\"Muramvya\",\"Muyinga\",\"Mwaro\",\"Ngozi\",\"Rutana\",\"Ruyigi\"]},{\"country\":\"Cambodia\",\"states\":[\"Banteay Mean Chey\",\"Batdambang\",\"Kampong Cham\",\"Kampong Chhnang\",\"Kampong Spoe\",\"Kampong Thum\",\"Kampot\",\"Kandal\",\"Koh Kong\",\"Kracheh\",\"Mondol Kiri\",\"Otdar Mean Chey\",\"Pouthisat\",\"Preah Vihear\",\"Prey Veng\",\"Rotanakir\",\"Siem Reab\",\"Stoeng Treng\",\"Svay Rieng\",\"Takao\",\"Keb\",\"Pailin\",\"Phnom Penh\",\"Preah Seihanu\"]},{\"country\":\"Cameroon\",\"states\":[\"Adamaoua\",\"Centre\",\"Est\",\"Extreme-Nord\",\"Littoral\",\"Nord\",\"Nord-Ouest\",\"Ouest\",\"Sud\",\"Sud-Ouest\"]},{\"country\":\"Canada\",\"states\":[\"Alberta\",\"British Columbia\",\"Manitoba\",\"New Brunswick\",\"Newfoundland and Labrador\",\"Northwest Territories\",\"Nova Scotia\",\"Nunavut\",\"Ontario\",\"Prince Edward Island\",\"Quebec\",\"Saskatchewan\",\"Yukon Territory\"]},{\"country\":\"Cape Verde\",\"states\":[]},{\"country\":\"Central African Republic\",\"states\":[\"Bamingui-Bangoran\",\"Bangui\",\"Basse-Kotto\",\"Haute-Kotto\",\"Haut-Mbomou\",\"Kemo\",\"Lobaye\",\"Mambere-Kadei\",\"Mbomou\",\"Nana-Grebizi\",\"Nana-Mambere\",\"Ombella-Mpoko\",\"Ouaka\",\"Ouham\",\"Ouham-Pende\",\"Sangha-Mbaere\",\"Vakaga\"]},{\"country\":\"Chad\",\"states\":[\"Batha\",\"Biltine\",\"Borkou-Ennedi-Tibesti\",\"Chari-Baguirmi\",\"Guéra\",\"Kanem\",\"Lac\",\"Logone Occidental\",\"Logone Oriental\",\"Mayo-Kebbi\",\"Moyen-Chari\",\"Ouaddaï\",\"Salamat\",\"Tandjile\"]},{\"country\":\"Chile\",\"states\":[\"Aysen\",\"Antofagasta\",\"Araucania\",\"Atacama\",\"Bio-Bio\",\"Coquimbo\",\"O'Higgins\",\"Los Lagos\",\"Magallanes y la Antartica Chilena\",\"Maule\",\"Santiago Region Metropolitana\",\"Tarapaca\",\"Valparaiso\"]},{\"country\":\"China\",\"states\":[\"Anhui\",\"Fujian\",\"Gansu\",\"Guangdong\",\"Guizhou\",\"Hainan\",\"Hebei\",\"Heilongjiang\",\"Henan\",\"Hubei\",\"Hunan\",\"Jiangsu\",\"Jiangxi\",\"Jilin\",\"Liaoning\",\"Qinghai\",\"Shaanxi\",\"Shandong\",\"Shanxi\",\"Sichuan\",\"Yunnan\",\"Zhejiang\",\"Guangxi\",\"Nei Mongol\",\"Ningxia\",\"Xinjiang\",\"Xizang (Tibet)\",\"Beijing\",\"Chongqing\",\"Shanghai\",\"Tianjin\"]},{\"country\":\"Colombia\",\"states\":[\"Amazonas\",\"Antioquia\",\"Arauca\",\"Atlantico\",\"Bogota District Capital\",\"Bolivar\",\"Boyaca\",\"Caldas\",\"Caqueta\",\"Casanare\",\"Cauca\",\"Cesar\",\"Choco\",\"Cordoba\",\"Cundinamarca\",\"Guainia\",\"Guaviare\",\"Huila\",\"La Guajira\",\"Magdalena\",\"Meta\",\"Narino\",\"Norte de Santander\",\"Putumayo\",\"Quindio\",\"Risaralda\",\"San Andres & Providencia\",\"Santander\",\"Sucre\",\"Tolima\",\"Valle del Cauca\",\"Vaupes\",\"Vichada\"]},{\"country\":\"Comoros\",\"states\":[\"Grande Comore (Njazidja)\",\"Anjouan (Nzwani)\",\"Moheli (Mwali)\"]},{\"country\":\"Congo, Democratic Republic\",\"states\":[\"Bandundu\",\"Bas-Congo\",\"Equateur\",\"Kasai-Occidental\",\"Kasai-Oriental\",\"Katanga\",\"Kinshasa\",\"Maniema\",\"Nord-Kivu\",\"Orientale\",\"Sud-Kivu\"]},{\"country\":\"Congo, Republic of the\",\"states\":[\"Bouenza\",\"Brazzaville\",\"Cuvette\",\"Cuvette-Ouest\",\"Kouilou\",\"Lekoumou\",\"Likouala\",\"Niari\",\"Plateaux\",\"Pool\",\"Sangha\"]},{\"country\":\"Costa Rica\",\"states\":[\"Alajuela\",\"Cartago\",\"Guanacaste\",\"Heredia\",\"Limon\",\"Puntarenas\",\"San Jose\"]},{\"country\":\"Cote d'Ivoire\",\"states\":[]},{\"country\":\"Croatia\",\"states\":[\"Bjelovarsko-Bilogorska\",\"Brodsko-Posavska\",\"Dubrovacko-Neretvanska\",\"Istarska\",\"Karlovacka\",\"Koprivnicko-Krizevacka\",\"Krapinsko-Zagorska\",\"Licko-Senjska\",\"Medimurska\",\"Osjecko-Baranjska\",\"Pozesko-Slavonska\",\"Primorsko-Goranska\",\"Sibensko-Kninska\",\"Sisacko-Moslavacka\",\"Splitsko-Dalmatinska\",\"Varazdinska\",\"Viroviticko-Podravska\",\"Vukovarsko-Srijemska\",\"Zadarska\",\"Zagreb\",\"Zagrebacka\"]},{\"country\":\"Cuba\",\"states\":[\"Camaguey\",\"Ciego de Avila\",\"Cienfuegos\",\"Ciudad de La Habana\",\"Granma\",\"Guantanamo\",\"Holguin\",\"Isla de la Juventud\",\"La Habana\",\"Las Tunas\",\"Matanzas\",\"Pinar del Rio\",\"Sancti Spiritus\",\"Santiago de Cuba\",\"Villa Clara\"]},{\"country\":\"Cyprus\",\"states\":[\"Famagusta\",\"Kyrenia\",\"Larnaca\",\"Limassol\",\"Nicosia\",\"Paphos\"]},{\"country\":\"Czech Republic\",\"states\":[\"Jihocesky Kraj\",\"Jihomoravsky Kraj\",\"Karlovarsky Kraj\",\"Kralovehradecky Kraj\",\"Liberecky Kraj\",\"Moravskoslezsky Kraj\",\"Olomoucky Kraj\",\"Pardubicky Kraj\",\"Plzensky Kraj\",\"Praha\",\"Stredocesky Kraj\",\"Ustecky Kraj\",\"Vysocina\",\"Zlinsky Kraj\"]},{\"country\":\"Denmark\",\"states\":[\"Arhus\",\"Bornholm\",\"Frederiksberg\",\"Frederiksborg\",\"Fyn\",\"Kobenhavn\",\"Kobenhavns\",\"Nordjylland\",\"Ribe\",\"Ringkobing\",\"Roskilde\",\"Sonderjylland\",\"Storstrom\",\"Vejle\",\"Vestsjalland\",\"Viborg\"]},{\"country\":\"Djibouti\",\"states\":[\"Ali Sabih\",\"Dikhil\",\"Djibouti\",\"Obock\",\"Tadjoura\"]},{\"country\":\"Dominica\",\"states\":[\"Saint Andrew\",\"Saint David\",\"Saint George\",\"Saint John\",\"Saint Joseph\",\"Saint Luke\",\"Saint Mark\",\"Saint Patrick\",\"Saint Paul\",\"Saint Peter\"]},{\"country\":\"Dominican Republic\",\"states\":[\"Azua\",\"Baoruco\",\"Barahona\",\"Dajabon\",\"Distrito Nacional\",\"Duarte\",\"Elias Pina\",\"El Seibo\",\"Espaillat\",\"Hato Mayor\",\"Independencia\",\"La Altagracia\",\"La Romana\",\"La Vega\",\"Maria Trinidad Sanchez\",\"Monsenor Nouel\",\"Monte Cristi\",\"Monte Plata\",\"Pedernales\",\"Peravia\",\"Puerto Plata\",\"Salcedo\",\"Samana\",\"Sanchez Ramirez\",\"San Cristobal\",\"San Jose de Ocoa\",\"San Juan\",\"San Pedro de Macoris\",\"Santiago\",\"Santiago Rodriguez\",\"Santo Domingo\",\"Valverde\"]},{\"country\":\"East Timor\",\"states\":[\"Aileu\",\"Ainaro\",\"Baucau\",\"Bobonaro\",\"Cova-Lima\",\"Dili\",\"Ermera\",\"Lautem\",\"Liquica\",\"Manatuto\",\"Manufahi\",\"Oecussi\",\"Viqueque\"]},{\"country\":\"Ecuador\",\"states\":[\"Azuay\",\"Bolivar\",\"Canar\",\"Carchi\",\"Chimborazo\",\"Cotopaxi\",\"El Oro\",\"Esmeraldas\",\"Galapagos\",\"Guayas\",\"Imbabura\",\"Loja\",\"Los Rios\",\"Manabi\",\"Morona-Santiago\",\"Napo\",\"Orellana\",\"Pastaza\",\"Pichincha\",\"Sucumbios\",\"Tungurahua\",\"Zamora-Chinchipe\"]},{\"country\":\"Egypt\",\"states\":[\"Ad Daqahliyah\",\"Al Bahr al Ahmar\",\"Al Buhayrah\",\"Al Fayyum\",\"Al Gharbiyah\",\"Al Iskandariyah\",\"Al Isma'iliyah\",\"Al Jizah\",\"Al Minufiyah\",\"Al Minya\",\"Al Qahirah\",\"Al Qalyubiyah\",\"Al Wadi al Jadid\",\"Ash Sharqiyah\",\"As Suways\",\"Aswan\",\"Asyut\",\"Bani Suwayf\",\"Bur Sa'id\",\"Dumyat\",\"Janub Sina'\",\"Kafr ash Shaykh\",\"Matruh\",\"Qina\",\"Shamal Sina'\",\"Suhaj\"]},{\"country\":\"El Salvador\",\"states\":[\"Ahuachapan\",\"Cabanas\",\"Chalatenango\",\"Cuscatlan\",\"La Libertad\",\"La Paz\",\"La Union\",\"Morazan\",\"San Miguel\",\"San Salvador\",\"Santa Ana\",\"San Vicente\",\"Sonsonate\",\"Usulutan\"]},{\"country\":\"Equatorial Guinea\",\"states\":[\"Annobon\",\"Bioko Norte\",\"Bioko Sur\",\"Centro Sur\",\"Kie-Ntem\",\"Litoral\",\"Wele-Nzas\"]},{\"country\":\"Eritrea\",\"states\":[\"Anseba\",\"Debub\",\"Debubawi K'eyih Bahri\",\"Gash Barka\",\"Ma'akel\",\"Semenawi Keyih Bahri\"]},{\"country\":\"Estonia\",\"states\":[\"Harjumaa (Tallinn)\",\"Hiiumaa (Kardla)\",\"Ida-Virumaa (Johvi)\",\"Jarvamaa (Paide)\",\"Jogevamaa (Jogeva)\",\"Laanemaa (Haapsalu)\",\"Laane-Virumaa (Rakvere)\",\"Parnumaa (Parnu)\",\"Polvamaa (Polva)\",\"Raplamaa (Rapla)\",\"Saaremaa (Kuressaare)\",\"Tartumaa (Tartu)\",\"Valgamaa (Valga)\",\"Viljandimaa (Viljandi)\",\"Vorumaa (Voru)\"]},{\"country\":\"Ethiopia\",\"states\":[\"Addis Ababa\",\"Afar\",\"Amhara\",\"Binshangul Gumuz\",\"Dire Dawa\",\"Gambela Hizboch\",\"Harari\",\"Oromia\",\"Somali\",\"Tigray\",\"Southern Nations, Nationalities, and Peoples Region\"]},{\"country\":\"Fiji\",\"states\":[\"Central (Suva)\",\"Eastern (Levuka)\",\"Northern (Labasa)\",\"Rotuma\",\"Western (Lautoka)\"]},{\"country\":\"Finland\",\"states\":[\"Aland\",\"Etela-Suomen Laani\",\"Ita-Suomen Laani\",\"Lansi-Suomen Laani\",\"Lappi\",\"Oulun Laani\"]},{\"country\":\"France\",\"states\":[\"Alsace\",\"Aquitaine\",\"Auvergne\",\"Basse-Normandie\",\"Bourgogne\",\"Bretagne\",\"Centre\",\"Champagne-Ardenne\",\"Corse\",\"Franche-Comte\",\"Haute-Normandie\",\"Ile-de-France\",\"Languedoc-Roussillon\",\"Limousin\",\"Lorraine\",\"Midi-Pyrenees\",\"Nord-Pas-de-Calais\",\"Pays de la Loire\",\"Picardie\",\"Poitou-Charentes\",\"Provence-Alpes-Cote d'Azur\",\"Rhone-Alpes\"]},{\"country\":\"Gabon\",\"states\":[\"Estuaire\",\"Haut-Ogooue\",\"Moyen-Ogooue\",\"Ngounie\",\"Nyanga\",\"Ogooue-Ivindo\",\"Ogooue-Lolo\",\"Ogooue-Maritime\",\"Woleu-Ntem\"]},{\"country\":\"Gambia\",\"states\":[\"Banjul\",\"Central River\",\"Lower River\",\"North Bank\",\"Upper River\",\"Western\"]},{\"country\":\"Georgia\",\"states\":[]},{\"country\":\"Germany\",\"states\":[\"Baden-Wuerttemberg\",\"Bayern\",\"Berlin\",\"Brandenburg\",\"Bremen\",\"Hamburg\",\"Hessen\",\"Mecklenburg-Vorpommern\",\"Niedersachsen\",\"Nordrhein-Westfalen\",\"Rheinland-Pfalz\",\"Saarland\",\"Sachsen\",\"Sachsen-Anhalt\",\"Schleswig-Holstein\",\"Thueringen\"]},{\"country\":\"Ghana\",\"states\":[\"Ashanti\",\"Brong-Ahafo\",\"Central\",\"Eastern\",\"Greater Accra\",\"Northern\",\"Upper East\",\"Upper West\",\"Volta\",\"Western\"]},{\"country\":\"Greece\",\"states\":[\"Agion Oros\",\"Achaia\",\"Aitolia kai Akarmania\",\"Argolis\",\"Arkadia\",\"Arta\",\"Attiki\",\"Chalkidiki\",\"Chanion\",\"Chios\",\"Dodekanisos\",\"Drama\",\"Evros\",\"Evrytania\",\"Evvoia\",\"Florina\",\"Fokidos\",\"Fthiotis\",\"Grevena\",\"Ileia\",\"Imathia\",\"Ioannina\",\"Irakleion\",\"Karditsa\",\"Kastoria\",\"Kavala\",\"Kefallinia\",\"Kerkyra\",\"Kilkis\",\"Korinthia\",\"Kozani\",\"Kyklades\",\"Lakonia\",\"Larisa\",\"Lasithi\",\"Lefkas\",\"Lesvos\",\"Magnisia\",\"Messinia\",\"Pella\",\"Pieria\",\"Preveza\",\"Rethynnis\",\"Rodopi\",\"Samos\",\"Serrai\",\"Thesprotia\",\"Thessaloniki\",\"Trikala\",\"Voiotia\",\"Xanthi\",\"Zakynthos\"]},{\"country\":\"Greenland\",\"states\":[\"Avannaa (Nordgronland)\",\"Tunu (Ostgronland)\",\"Kitaa (Vestgronland)\"]},{\"country\":\"Grenada\",\"states\":[\"Carriacou and Petit Martinique\",\"Saint Andrew\",\"Saint David\",\"Saint George\",\"Saint John\",\"Saint Mark\",\"Saint Patrick\"]},{\"country\":\"Guatemala\",\"states\":[\"Alta Verapaz\",\"Baja Verapaz\",\"Chimaltenango\",\"Chiquimula\",\"El Progreso\",\"Escuintla\",\"Guatemala\",\"Huehuetenango\",\"Izabal\",\"Jalapa\",\"Jutiapa\",\"Peten\",\"Quetzaltenango\",\"Quiche\",\"Retalhuleu\",\"Sacatepequez\",\"San Marcos\",\"Santa Rosa\",\"Solola\",\"Suchitepequez\",\"Totonicapan\",\"Zacapa\"]},{\"country\":\"Guinea\",\"states\":[\"Beyla\",\"Boffa\",\"Boke\",\"Conakry\",\"Coyah\",\"Dabola\",\"Dalaba\",\"Dinguiraye\",\"Dubreka\",\"Faranah\",\"Forecariah\",\"Fria\",\"Gaoual\",\"Gueckedou\",\"Kankan\",\"Kerouane\",\"Kindia\",\"Kissidougou\",\"Koubia\",\"Koundara\",\"Kouroussa\",\"Labe\",\"Lelouma\",\"Lola\",\"Macenta\",\"Mali\",\"Mamou\",\"Mandiana\",\"Nzerekore\",\"Pita\",\"Siguiri\",\"Telimele\",\"Tougue\",\"Yomou\"]},{\"country\":\"Guinea-Bissau\",\"states\":[\"Bafata\",\"Biombo\",\"Bissau\",\"Bolama\",\"Cacheu\",\"Gabu\",\"Oio\",\"Quinara\",\"Tombali\"]},{\"country\":\"Guyana\",\"states\":[\"Barima-Waini\",\"Cuyuni-Mazaruni\",\"Demerara-Mahaica\",\"East Berbice-Corentyne\",\"Essequibo Islands-West Demerara\",\"Mahaica-Berbice\",\"Pomeroon-Supenaam\",\"Potaro-Siparuni\",\"Upper Demerara-Berbice\",\"Upper Takutu-Upper Essequibo\"]},{\"country\":\"Haiti\",\"states\":[\"Artibonite\",\"Centre\",\"Grand 'Anse\",\"Nord\",\"Nord-Est\",\"Nord-Ouest\",\"Ouest\",\"Sud\",\"Sud-Est\"]},{\"country\":\"Honduras\",\"states\":[\"Atlantida\",\"Choluteca\",\"Colon\",\"Comayagua\",\"Copan\",\"Cortes\",\"El Paraiso\",\"Francisco Morazan\",\"Gracias a Dios\",\"Intibuca\",\"Islas de la Bahia\",\"La Paz\",\"Lempira\",\"Ocotepeque\",\"Olancho\",\"Santa Barbara\",\"Valle\",\"Yoro\"]},{\"country\":\"Hong Kong\",\"states\":[]},{\"country\":\"Hungary\",\"states\":[\"Bacs-Kiskun\",\"Baranya\",\"Bekes\",\"Borsod-Abauj-Zemplen\",\"Csongrad\",\"Fejer\",\"Gyor-Moson-Sopron\",\"Hajdu-Bihar\",\"Heves\",\"Jasz-Nagykun-Szolnok\",\"Komarom-Esztergom\",\"Nograd\",\"Pest\",\"Somogy\",\"Szabolcs-Szatmar-Bereg\",\"Tolna\",\"Vas\",\"Veszprem\",\"Zala\",\"Bekescsaba\",\"Debrecen\",\"Dunaujvaros\",\"Eger\",\"Gyor\",\"Hodmezovasarhely\",\"Kaposvar\",\"Kecskemet\",\"Miskolc\",\"Nagykanizsa\",\"Nyiregyhaza\",\"Pecs\",\"Sopron\",\"Szeged\",\"Szekesfehervar\",\"Szolnok\",\"Szombathely\",\"Tatabanya\",\"Veszprem\",\"Zalaegerszeg\"]},{\"country\":\"Iceland\",\"states\":[\"Austurland\",\"Hofudhborgarsvaedhi\",\"Nordhurland Eystra\",\"Nordhurland Vestra\",\"Sudhurland\",\"Sudhurnes\",\"Vestfirdhir\",\"Vesturland\"]},{\"country\":\"India\",\"states\":[\"Andaman and Nicobar Islands\",\"Andhra Pradesh\",\"Arunachal Pradesh\",\"Assam\",\"Bihar\",\"Chandigarh\",\"Chhattisgarh\",\"Dadra and Nagar Haveli\",\"Daman and Diu\",\"Delhi\",\"Goa\",\"Gujarat\",\"Haryana\",\"Himachal Pradesh\",\"Jammu and Kashmir\",\"Jharkhand\",\"Karnataka\",\"Kerala\",\"Lakshadweep\",\"Madhya Pradesh\",\"Maharashtra\",\"Manipur\",\"Meghalaya\",\"Mizoram\",\"Nagaland\",\"Orissa\",\"Pondicherry\",\"Punjab\",\"Rajasthan\",\"Sikkim\",\"Tamil Nadu\",\"Tripura\",\"Uttaranchal\",\"Uttar Pradesh\",\"West Bengal\"]},{\"country\":\"Indonesia\",\"states\":[\"Aceh\",\"Bali\",\"Banten\",\"Bengkulu\",\"Gorontalo\",\"Irian Jaya Barat\",\"Jakarta Raya\",\"Jambi\",\"Jawa Barat\",\"Jawa Tengah\",\"Jawa Timur\",\"Kalimantan Barat\",\"Kalimantan Selatan\",\"Kalimantan Tengah\",\"Kalimantan Timur\",\"Kepulauan Bangka Belitung\",\"Kepulauan Riau\",\"Lampung\",\"Maluku\",\"Maluku Utara\",\"Nusa Tenggara Barat\",\"Nusa Tenggara Timur\",\"Papua\",\"Riau\",\"Sulawesi Barat\",\"Sulawesi Selatan\",\"Sulawesi Tengah\",\"Sulawesi Tenggara\",\"Sulawesi Utara\",\"Sumatera Barat\",\"Sumatera Selatan\",\"Sumatera Utara\",\"Yogyakarta\"]},{\"country\":\"Iran\",\"states\":[\"Ardabil\",\"Azarbayjan-e Gharbi\",\"Azarbayjan-e Sharqi\",\"Bushehr\",\"Chahar Mahall va Bakhtiari\",\"Esfahan\",\"Fars\",\"Gilan\",\"Golestan\",\"Hamadan\",\"Hormozgan\",\"Ilam\",\"Kerman\",\"Kermanshah\",\"Khorasan-e Janubi\",\"Khorasan-e Razavi\",\"Khorasan-e Shemali\",\"Khuzestan\",\"Kohgiluyeh va Buyer Ahmad\",\"Kordestan\",\"Lorestan\",\"Markazi\",\"Mazandaran\",\"Qazvin\",\"Qom\",\"Semnan\",\"Sistan va Baluchestan\",\"Tehran\",\"Yazd\",\"Zanjan\"]},{\"country\":\"Iraq\",\"states\":[\"Al Anbar\",\"Al Basrah\",\"Al Muthanna\",\"Al Qadisiyah\",\"An Najaf\",\"Arbil\",\"As Sulaymaniyah\",\"At Ta'mim\",\"Babil\",\"Baghdad\",\"Dahuk\",\"Dhi Qar\",\"Diyala\",\"Karbala'\",\"Maysan\",\"Ninawa\",\"Salah ad Din\",\"Wasit\"]},{\"country\":\"Ireland\",\"states\":[\"Carlow\",\"Cavan\",\"Clare\",\"Cork\",\"Donegal\",\"Dublin\",\"Galway\",\"Kerry\",\"Kildare\",\"Kilkenny\",\"Laois\",\"Leitrim\",\"Limerick\",\"Longford\",\"Louth\",\"Mayo\",\"Meath\",\"Monaghan\",\"Offaly\",\"Roscommon\",\"Sligo\",\"Tipperary\",\"Waterford\",\"Westmeath\",\"Wexford\",\"Wicklow\"]},{\"country\":\"Israel\",\"states\":[\"Central\",\"Haifa\",\"Jerusalem\",\"Northern\",\"Southern\",\"Tel Aviv\"]},{\"country\":\"Italy\",\"states\":[\"Abruzzo\",\"Basilicata\",\"Calabria\",\"Campania\",\"Emilia-Romagna\",\"Friuli-Venezia Giulia\",\"Lazio\",\"Liguria\",\"Lombardia\",\"Marche\",\"Molise\",\"Piemonte\",\"Puglia\",\"Sardegna\",\"Sicilia\",\"Toscana\",\"Trentino-Alto Adige\",\"Umbria\",\"Valle d'Aosta\",\"Veneto\"]},{\"country\":\"Jamaica\",\"states\":[\"Clarendon\",\"Hanover\",\"Kingston\",\"Manchester\",\"Portland\",\"Saint Andrew\",\"Saint Ann\",\"Saint Catherine\",\"Saint Elizabeth\",\"Saint James\",\"Saint Mary\",\"Saint Thomas\",\"Trelawny\",\"Westmoreland\"]},{\"country\":\"Japan\",\"states\":[\"Aichi\",\"Akita\",\"Aomori\",\"Chiba\",\"Ehime\",\"Fukui\",\"Fukuoka\",\"Fukushima\",\"Gifu\",\"Gumma\",\"Hiroshima\",\"Hokkaido\",\"Hyogo\",\"Ibaraki\",\"Ishikawa\",\"Iwate\",\"Kagawa\",\"Kagoshima\",\"Kanagawa\",\"Kochi\",\"Kumamoto\",\"Kyoto\",\"Mie\",\"Miyagi\",\"Miyazaki\",\"Nagano\",\"Nagasaki\",\"Nara\",\"Niigata\",\"Oita\",\"Okayama\",\"Okinawa\",\"Osaka\",\"Saga\",\"Saitama\",\"Shiga\",\"Shimane\",\"Shizuoka\",\"Tochigi\",\"Tokushima\",\"Tokyo\",\"Tottori\",\"Toyama\",\"Wakayama\",\"Yamagata\",\"Yamaguchi\",\"Yamanashi\"]},{\"country\":\"Jordan\",\"states\":[\"Ajlun\",\"Al 'Aqabah\",\"Al Balqa'\",\"Al Karak\",\"Al Mafraq\",\"'Amman\",\"At Tafilah\",\"Az Zarqa'\",\"Irbid\",\"Jarash\",\"Ma'an\",\"Madaba\"]},{\"country\":\"Kazakhstan\",\"states\":[\"Almaty Oblysy\",\"Almaty Qalasy\",\"Aqmola Oblysy\",\"Aqtobe Oblysy\",\"Astana Qalasy\",\"Atyrau Oblysy\",\"Batys Qazaqstan Oblysy\",\"Bayqongyr Qalasy\",\"Mangghystau Oblysy\",\"Ongtustik Qazaqstan Oblysy\",\"Pavlodar Oblysy\",\"Qaraghandy Oblysy\",\"Qostanay Oblysy\",\"Qyzylorda Oblysy\",\"Shyghys Qazaqstan Oblysy\",\"Soltustik Qazaqstan Oblysy\",\"Zhambyl Oblysy\"]},{\"country\":\"Kenya\",\"states\":[\"Central\",\"Coast\",\"Eastern\",\"Nairobi Area\",\"North Eastern\",\"Nyanza\",\"Rift Valley\",\"Western\"]},{\"country\":\"Kiribati\",\"states\":[]},{\"country\":\"Kuwait\",\"states\":[\"Al Ahmadi\",\"Al Farwaniyah\",\"Al Asimah\",\"Al Jahra\",\"Hawalli\",\"Mubarak Al-Kabeer\"]},{\"country\":\"Kyrgyzstan\",\"states\":[\"Batken Oblasty\",\"Bishkek Shaary\",\"Chuy Oblasty\",\"Jalal-Abad Oblasty\",\"Naryn Oblasty\",\"Osh Oblasty\",\"Talas Oblasty\",\"Ysyk-Kol Oblasty\"]},{\"country\":\"Laos\",\"states\":[\"Attapu\",\"Bokeo\",\"Bolikhamxai\",\"Champasak\",\"Houaphan\",\"Khammouan\",\"Louangnamtha\",\"Louangphrabang\",\"Oudomxai\",\"Phongsali\",\"Salavan\",\"Savannakhet\",\"Viangchan\",\"Viangchan\",\"Xaignabouli\",\"Xaisomboun\",\"Xekong\",\"Xiangkhoang\"]},{\"country\":\"Latvia\",\"states\":[\"Aizkraukles Rajons\",\"Aluksnes Rajons\",\"Balvu Rajons\",\"Bauskas Rajons\",\"Cesu Rajons\",\"Daugavpils\",\"Daugavpils Rajons\",\"Dobeles Rajons\",\"Gulbenes Rajons\",\"Jekabpils Rajons\",\"Jelgava\",\"Jelgavas Rajons\",\"Jurmala\",\"Kraslavas Rajons\",\"Kuldigas Rajons\",\"Liepaja\",\"Liepajas Rajons\",\"Limbazu Rajons\",\"Ludzas Rajons\",\"Madonas Rajons\",\"Ogres Rajons\",\"Preilu Rajons\",\"Rezekne\",\"Rezeknes Rajons\",\"Riga\",\"Rigas Rajons\",\"Saldus Rajons\",\"Talsu Rajons\",\"Tukuma Rajons\",\"Valkas Rajons\",\"Valmieras Rajons\",\"Ventspils\",\"Ventspils Rajons\"]},{\"country\":\"Lebanon\",\"states\":[\"Beyrouth\",\"Beqaa\",\"Liban-Nord\",\"Liban-Sud\",\"Mont-Liban\",\"Nabatiye\"]},{\"country\":\"Lesotho\",\"states\":[\"Berea\",\"Butha-Buthe\",\"Leribe\",\"Mafeteng\",\"Maseru\",\"Mohale's Hoek\",\"Mokhotlong\",\"Qacha's Nek\",\"Quthing\",\"Thaba-Tseka\"]},{\"country\":\"Liberia\",\"states\":[\"Bomi\",\"Bong\",\"Gbarpolu\",\"Grand Bassa\",\"Grand Cape Mount\",\"Grand Gedeh\",\"Grand Kru\",\"Lofa\",\"Margibi\",\"Maryland\",\"Montserrado\",\"Nimba\",\"River Cess\",\"River Gee\",\"Sinoe\"]},{\"country\":\"Libya\",\"states\":[\"Ajdabiya\",\"Al 'Aziziyah\",\"Al Fatih\",\"Al Jabal al Akhdar\",\"Al Jufrah\",\"Al Khums\",\"Al Kufrah\",\"An Nuqat al Khams\",\"Ash Shati'\",\"Awbari\",\"Az Zawiyah\",\"Banghazi\",\"Darnah\",\"Ghadamis\",\"Gharyan\",\"Misratah\",\"Murzuq\",\"Sabha\",\"Sawfajjin\",\"Surt\",\"Tarabulus\",\"Tarhunah\",\"Tubruq\",\"Yafran\",\"Zlitan\"]},{\"country\":\"Liechtenstein\",\"states\":[\"Balzers\",\"Eschen\",\"Gamprin\",\"Mauren\",\"Planken\",\"Ruggell\",\"Schaan\",\"Schellenberg\",\"Triesen\",\"Triesenberg\",\"Vaduz\"]},{\"country\":\"Lithuania\",\"states\":[\"Alytaus\",\"Kauno\",\"Klaipedos\",\"Marijampoles\",\"Panevezio\",\"Siauliu\",\"Taurages\",\"Telsiu\",\"Utenos\",\"Vilniaus\"]},{\"country\":\"Luxembourg\",\"states\":[\"Diekirch\",\"Grevenmacher\",\"Luxembourg\"]},{\"country\":\"Macedonia\",\"states\":[\"Aerodrom\",\"Aracinovo\",\"Berovo\",\"Bitola\",\"Bogdanci\",\"Bogovinje\",\"Bosilovo\",\"Brvenica\",\"Butel\",\"Cair\",\"Caska\",\"Centar\",\"Centar Zupa\",\"Cesinovo\",\"Cucer-Sandevo\",\"Debar\",\"Debartsa\",\"Delcevo\",\"Demir Hisar\",\"Demir Kapija\",\"Dojran\",\"Dolneni\",\"Drugovo\",\"Gazi Baba\",\"Gevgelija\",\"Gjorce Petrov\",\"Gostivar\",\"Gradsko\",\"Ilinden\",\"Jegunovce\",\"Karbinci\",\"Karpos\",\"Kavadarci\",\"Kicevo\",\"Kisela Voda\",\"Kocani\",\"Konce\",\"Kratovo\",\"Kriva Palanka\",\"Krivogastani\",\"Krusevo\",\"Kumanovo\",\"Lipkovo\",\"Lozovo\",\"Makedonska Kamenica\",\"Makedonski Brod\",\"Mavrovo i Rastusa\",\"Mogila\",\"Negotino\",\"Novaci\",\"Novo Selo\",\"Ohrid\",\"Oslomej\",\"Pehcevo\",\"Petrovec\",\"Plasnica\",\"Prilep\",\"Probistip\",\"Radovis\",\"Rankovce\",\"Resen\",\"Rosoman\",\"Saraj\",\"Skopje\",\"Sopiste\",\"Staro Nagoricane\",\"Stip\",\"Struga\",\"Strumica\",\"Studenicani\",\"Suto Orizari\",\"Sveti Nikole\",\"Tearce\",\"Tetovo\",\"Valandovo\",\"Vasilevo\",\"Veles\",\"Vevcani\",\"Vinica\",\"Vranestica\",\"Vrapciste\",\"Zajas\",\"Zelenikovo\",\"Zelino\",\"Zrnovci\"]},{\"country\":\"Madagascar\",\"states\":[\"Antananarivo\",\"Antsiranana\",\"Fianarantsoa\",\"Mahajanga\",\"Toamasina\",\"Toliara\"]},{\"country\":\"Malawi\",\"states\":[\"Balaka\",\"Blantyre\",\"Chikwawa\",\"Chiradzulu\",\"Chitipa\",\"Dedza\",\"Dowa\",\"Karonga\",\"Kasungu\",\"Likoma\",\"Lilongwe\",\"Machinga\",\"Mangochi\",\"Mchinji\",\"Mulanje\",\"Mwanza\",\"Mzimba\",\"Ntcheu\",\"Nkhata Bay\",\"Nkhotakota\",\"Nsanje\",\"Ntchisi\",\"Phalombe\",\"Rumphi\",\"Salima\",\"Thyolo\",\"Zomba\"]},{\"country\":\"Malaysia\",\"states\":[\"Johor\",\"Kedah\",\"Kelantan\",\"Kuala Lumpur\",\"Labuan\",\"Malacca\",\"Negeri Sembilan\",\"Pahang\",\"Perak\",\"Perlis\",\"Penang\",\"Sabah\",\"Sarawak\",\"Selangor\",\"Terengganu\"]},{\"country\":\"Maldives\",\"states\":[\"Alifu\",\"Baa\",\"Dhaalu\",\"Faafu\",\"Gaafu Alifu\",\"Gaafu Dhaalu\",\"Gnaviyani\",\"Haa Alifu\",\"Haa Dhaalu\",\"Kaafu\",\"Laamu\",\"Lhaviyani\",\"Maale\",\"Meemu\",\"Noonu\",\"Raa\",\"Seenu\",\"Shaviyani\",\"Thaa\",\"Vaavu\"]},{\"country\":\"Mali\",\"states\":[\"Bamako (Capital)\",\"Gao\",\"Kayes\",\"Kidal\",\"Koulikoro\",\"Mopti\",\"Segou\",\"Sikasso\",\"Tombouctou\"]},{\"country\":\"Malta\",\"states\":[]},{\"country\":\"Marshall Islands\",\"states\":[]},{\"country\":\"Mauritania\",\"states\":[\"Adrar\",\"Assaba\",\"Brakna\",\"Dakhlet Nouadhibou\",\"Gorgol\",\"Guidimaka\",\"Hodh Ech Chargui\",\"Hodh El Gharbi\",\"Inchiri\",\"Nouakchott\",\"Tagant\",\"Tiris Zemmour\",\"Trarza\"]},{\"country\":\"Mauritius\",\"states\":[\"Agalega Islands\",\"Black River\",\"Cargados Carajos Shoals\",\"Flacq\",\"Grand Port\",\"Moka\",\"Pamplemousses\",\"Plaines Wilhems\",\"Port Louis\",\"Riviere du Rempart\",\"Rodrigues\",\"Savanne\"]},{\"country\":\"Mexico\",\"states\":[\"Aguascalientes\",\"Baja California\",\"Baja California Sur\",\"Campeche\",\"Chiapas\",\"Chihuahua\",\"Coahuila de Zaragoza\",\"Colima\",\"Distrito Federal\",\"Durango\",\"Guanajuato\",\"Guerrero\",\"Hidalgo\",\"Jalisco\",\"Mexico\",\"Michoacan de Ocampo\",\"Morelos\",\"Nayarit\",\"Nuevo Leon\",\"Oaxaca\",\"Puebla\",\"Queretaro de Arteaga\",\"Quintana Roo\",\"San Luis Potosi\",\"Sinaloa\",\"Sonora\",\"Tabasco\",\"Tamaulipas\",\"Tlaxcala\",\"Veracruz-Llave\",\"Yucatan\",\"Zacatecas\"]},{\"country\":\"Micronesia\",\"states\":[]},{\"country\":\"Moldova\",\"states\":[\"Anenii Noi\",\"Basarabeasca\",\"Briceni\",\"Cahul\",\"Cantemir\",\"Calarasi\",\"Causeni\",\"Cimislia\",\"Criuleni\",\"Donduseni\",\"Drochia\",\"Dubasari\",\"Edinet\",\"Falesti\",\"Floresti\",\"Glodeni\",\"Hincesti\",\"Ialoveni\",\"Leova\",\"Nisporeni\",\"Ocnita\",\"Orhei\",\"Rezina\",\"Riscani\",\"Singerei\",\"Soldanesti\",\"Soroca\",\"Stefan-Voda\",\"Straseni\",\"Taraclia\",\"Telenesti\",\"Ungheni\",\"Balti\",\"Bender\",\"Chisinau\",\"Gagauzia\",\"Stinga Nistrului\"]},{\"country\":\"Mongolia\",\"states\":[\"Arhangay\",\"Bayanhongor\",\"Bayan-Olgiy\",\"Bulgan\",\"Darhan Uul\",\"Dornod\",\"Dornogovi\",\"Dundgovi\",\"Dzavhan\",\"Govi-Altay\",\"Govi-Sumber\",\"Hentiy\",\"Hovd\",\"Hovsgol\",\"Omnogovi\",\"Orhon\",\"Ovorhangay\",\"Selenge\",\"Suhbaatar\",\"Tov\",\"Ulaanbaatar\",\"Uvs\"]},{\"country\":\"Morocco\",\"states\":[\"Agadir\",\"Al Hoceima\",\"Azilal\",\"Beni Mellal\",\"Ben Slimane\",\"Boulemane\",\"Casablanca\",\"Chaouen\",\"El Jadida\",\"El Kelaa des Sraghna\",\"Er Rachidia\",\"Essaouira\",\"Fes\",\"Figuig\",\"Guelmim\",\"Ifrane\",\"Kenitra\",\"Khemisset\",\"Khenifra\",\"Khouribga\",\"Laayoune\",\"Larache\",\"Marrakech\",\"Meknes\",\"Nador\",\"Ouarzazate\",\"Oujda\",\"Rabat-Sale\",\"Safi\",\"Settat\",\"Sidi Kacem\",\"Tangier\",\"Tan-Tan\",\"Taounate\",\"Taroudannt\",\"Tata\",\"Taza\",\"Tetouan\",\"Tiznit\"]},{\"country\":\"Monaco\",\"states\":[]},{\"country\":\"Mozambique\",\"states\":[\"Cabo Delgado\",\"Gaza\",\"Inhambane\",\"Manica\",\"Maputo\",\"Cidade de Maputo\",\"Nampula\",\"Niassa\",\"Sofala\",\"Tete\",\"Zambezia\"]},{\"country\":\"Namibia\",\"states\":[\"Caprivi\",\"Erongo\",\"Hardap\",\"Karas\",\"Khomas\",\"Kunene\",\"Ohangwena\",\"Okavango\",\"Omaheke\",\"Omusati\",\"Oshana\",\"Oshikoto\",\"Otjozondjupa\"]},{\"country\":\"Nauru\",\"states\":[]},{\"country\":\"Nepal\",\"states\":[\"Bagmati\",\"Bheri\",\"Dhawalagiri\",\"Gandaki\",\"Janakpur\",\"Karnali\",\"Kosi\",\"Lumbini\",\"Mahakali\",\"Mechi\",\"Narayani\",\"Rapti\",\"Sagarmatha\",\"Seti\"]},{\"country\":\"Netherlands\",\"states\":[\"Drenthe\",\"Flevoland\",\"Friesland\",\"Gelderland\",\"Groningen\",\"Limburg\",\"Noord-Brabant\",\"Noord-Holland\",\"Overijssel\",\"Utrecht\",\"Zeeland\",\"Zuid-Holland\"]},{\"country\":\"New Zealand\",\"states\":[\"Auckland\",\"Bay of Plenty\",\"Canterbury\",\"Chatham Islands\",\"Gisborne\",\"Hawke's Bay\",\"Manawatu-Wanganui\",\"Marlborough\",\"Nelson\",\"Northland\",\"Otago\",\"Southland\",\"Taranaki\",\"Tasman\",\"Waikato\",\"Wellington\",\"West Coast\"]},{\"country\":\"Nicaragua\",\"states\":[\"Atlantico Norte\",\"Atlantico Sur\",\"Boaco\",\"Carazo\",\"Chinandega\",\"Chontales\",\"Esteli\",\"Granada\",\"Jinotega\",\"Leon\",\"Madriz\",\"Managua\",\"Masaya\",\"Matagalpa\",\"Nueva Segovia\",\"Rio San Juan\",\"Rivas\"]},{\"country\":\"Niger\",\"states\":[\"Agadez\",\"Diffa\",\"Dosso\",\"Maradi\",\"Niamey\",\"Tahoua\",\"Tillaberi\",\"Zinder\"]},{\"country\":\"Nigeria\",\"states\":[\"Abia\",\"Abuja Federal Capital\",\"Adamawa\",\"Akwa Ibom\",\"Anambra\",\"Bauchi\",\"Bayelsa\",\"Benue\",\"Borno\",\"Cross River\",\"Delta\",\"Ebonyi\",\"Edo\",\"Ekiti\",\"Enugu\",\"Gombe\",\"Imo\",\"Jigawa\",\"Kaduna\",\"Kano\",\"Katsina\",\"Kebbi\",\"Kogi\",\"Kwara\",\"Lagos\",\"Nassarawa\",\"Niger\",\"Ogun\",\"Ondo\",\"Osun\",\"Oyo\",\"Plateau\",\"Rivers\",\"Sokoto\",\"Taraba\",\"Yobe\",\"Zamfara\"]},{\"country\":\"North Korea\",\"states\":[\"Chagang\",\"North Hamgyong\",\"South Hamgyong\",\"North Hwanghae\",\"South Hwanghae\",\"Kangwon\",\"North P'yongan\",\"South P'yongan\",\"Yanggang\",\"Kaesong\",\"Najin\",\"Namp'o\",\"Pyongyang\"]},{\"country\":\"Norway\",\"states\":[\"Akershus\",\"Aust-Agder\",\"Buskerud\",\"Finnmark\",\"Hedmark\",\"Hordaland\",\"More og Romsdal\",\"Nordland\",\"Nord-Trondelag\",\"Oppland\",\"Oslo\",\"Ostfold\",\"Rogaland\",\"Sogn og Fjordane\",\"Sor-Trondelag\",\"Telemark\",\"Troms\",\"Vest-Agder\",\"Vestfold\"]},{\"country\":\"Oman\",\"states\":[\"Ad Dakhiliyah\",\"Al Batinah\",\"Al Wusta\",\"Ash Sharqiyah\",\"Az Zahirah\",\"Masqat\",\"Musandam\",\"Dhofar\"]},{\"country\":\"Pakistan\",\"states\":[\"Balochistan\",\"North-West Frontier Province\",\"Punjab\",\"Sindh\",\"Islamabad Capital Territory\",\"Federally Administered Tribal Areas\"]},{\"country\":\"Panama\",\"states\":[\"Bocas del Toro\",\"Chiriqui\",\"Cocle\",\"Colon\",\"Darien\",\"Herrera\",\"Los Santos\",\"Panama\",\"San Blas\",\"Veraguas\"]},{\"country\":\"Papua New Guinea\",\"states\":[\"Bougainville\",\"Central\",\"Chimbu\",\"Eastern Highlands\",\"East New Britain\",\"East Sepik\",\"Enga\",\"Gulf\",\"Madang\",\"Manus\",\"Milne Bay\",\"Morobe\",\"National Capital\",\"New Ireland\",\"Northern\",\"Sandaun\",\"Southern Highlands\",\"Western\",\"Western Highlands\",\"West New Britain\"]},{\"country\":\"Paraguay\",\"states\":[\"Alto Paraguay\",\"Alto Parana\",\"Amambay\",\"Asuncion\",\"Boqueron\",\"Caaguazu\",\"Caazapa\",\"Canindeyu\",\"Central\",\"Concepcion\",\"Cordillera\",\"Guaira\",\"Itapua\",\"Misiones\",\"Neembucu\",\"Paraguari\",\"Presidente Hayes\",\"San Pedro\"]},{\"country\":\"Peru\",\"states\":[\"Amazonas\",\"Ancash\",\"Apurimac\",\"Arequipa\",\"Ayacucho\",\"Cajamarca\",\"Callao\",\"Cusco\",\"Huancavelica\",\"Huanuco\",\"Ica\",\"Junin\",\"La Libertad\",\"Lambayeque\",\"Lima\",\"Loreto\",\"Madre de Dios\",\"Moquegua\",\"Pasco\",\"Piura\",\"Puno\",\"San Martin\",\"Tacna\",\"Tumbes\",\"Ucayali\"]},{\"country\":\"Philippines\",\"states\":[\"Abra\",\"Agusan del Norte\",\"Agusan del Sur\",\"Aklan\",\"Albay\",\"Antique\",\"Apayao\",\"Aurora\",\"Basilan\",\"Bataan\",\"Batanes\",\"Batangas\",\"Biliran\",\"Benguet\",\"Bohol\",\"Bukidnon\",\"Bulacan\",\"Cagayan\",\"Camarines Norte\",\"Camarines Sur\",\"Camiguin\",\"Capiz\",\"Catanduanes\",\"Cavite\",\"Cebu\",\"Compostela\",\"Davao del Norte\",\"Davao del Sur\",\"Davao Oriental\",\"Eastern Samar\",\"Guimaras\",\"Ifugao\",\"Ilocos Norte\",\"Ilocos Sur\",\"Iloilo\",\"Isabela\",\"Kalinga\",\"Laguna\",\"Lanao del Norte\",\"Lanao del Sur\",\"La Union\",\"Leyte\",\"Maguindanao\",\"Marinduque\",\"Masbate\",\"Mindoro Occidental\",\"Mindoro Oriental\",\"Misamis Occidental\",\"Misamis Oriental\",\"Mountain Province\",\"Negros Occidental\",\"Negros Oriental\",\"North Cotabato\",\"Northern Samar\",\"Nueva Ecija\",\"Nueva Vizcaya\",\"Palawan\",\"Pampanga\",\"Pangasinan\",\"Quezon\",\"Quirino\",\"Rizal\",\"Romblon\",\"Samar\",\"Sarangani\",\"Siquijor\",\"Sorsogon\",\"South Cotabato\",\"Southern Leyte\",\"Sultan Kudarat\",\"Sulu\",\"Surigao del Norte\",\"Surigao del Sur\",\"Tarlac\",\"Tawi-Tawi\",\"Zambales\",\"Zamboanga del Norte\",\"Zamboanga del Sur\",\"Zamboanga Sibugay\"]},{\"country\":\"Poland\",\"states\":[\"Greater Poland (Wielkopolskie)\",\"Kuyavian-Pomeranian (Kujawsko-Pomorskie)\",\"Lesser Poland (Malopolskie)\",\"Lodz (Lodzkie)\",\"Lower Silesian (Dolnoslaskie)\",\"Lublin (Lubelskie)\",\"Lubusz (Lubuskie)\",\"Masovian (Mazowieckie)\",\"Opole (Opolskie)\",\"Podlasie (Podlaskie)\",\"Pomeranian (Pomorskie)\",\"Silesian (Slaskie)\",\"Subcarpathian (Podkarpackie)\",\"Swietokrzyskie (Swietokrzyskie)\",\"Warmian-Masurian (Warminsko-Mazurskie)\",\"West Pomeranian (Zachodniopomorskie)\"]},{\"country\":\"Portugal\",\"states\":[\"Aveiro\",\"Acores\",\"Beja\",\"Braga\",\"Braganca\",\"Castelo Branco\",\"Coimbra\",\"Evora\",\"Faro\",\"Guarda\",\"Leiria\",\"Lisboa\",\"Madeira\",\"Portalegre\",\"Porto\",\"Santarem\",\"Setubal\",\"Viana do Castelo\",\"Vila Real\",\"Viseu\"]},{\"country\":\"Qatar\",\"states\":[\"Ad Dawhah\",\"Al Ghuwayriyah\",\"Al Jumayliyah\",\"Al Khawr\",\"Al Wakrah\",\"Ar Rayyan\",\"Jarayan al Batinah\",\"Madinat ash Shamal\",\"Umm Sa'id\",\"Umm Salal\"]},{\"country\":\"Romania\",\"states\":[\"Alba\",\"Arad\",\"Arges\",\"Bacau\",\"Bihor\",\"Bistrita-Nasaud\",\"Botosani\",\"Braila\",\"Brasov\",\"Bucuresti\",\"Buzau\",\"Calarasi\",\"Caras-Severin\",\"Cluj\",\"Constanta\",\"Covasna\",\"Dimbovita\",\"Dolj\",\"Galati\",\"Gorj\",\"Giurgiu\",\"Harghita\",\"Hunedoara\",\"Ialomita\",\"Iasi\",\"Ilfov\",\"Maramures\",\"Mehedinti\",\"Mures\",\"Neamt\",\"Olt\",\"Prahova\",\"Salaj\",\"Satu Mare\",\"Sibiu\",\"Suceava\",\"Teleorman\",\"Timis\",\"Tulcea\",\"Vaslui\",\"Vilcea\",\"Vrancea\"]},{\"country\":\"Russia\",\"states\":[\"Amur\",\"Arkhangel'sk\",\"Astrakhan'\",\"Belgorod\",\"Bryansk\",\"Chelyabinsk\",\"Chita\",\"Irkutsk\",\"Ivanovo\",\"Kaliningrad\",\"Kaluga\",\"Kamchatka\",\"Kemerovo\",\"Kirov\",\"Kostroma\",\"Kurgan\",\"Kursk\",\"Leningrad\",\"Lipetsk\",\"Magadan\",\"Moscow\",\"Murmansk\",\"Nizhniy Novgorod\",\"Novgorod\",\"Novosibirsk\",\"Omsk\",\"Orenburg\",\"Orel\",\"Penza\",\"Perm'\",\"Pskov\",\"Rostov\",\"Ryazan'\",\"Sakhalin\",\"Samara\",\"Saratov\",\"Smolensk\",\"Sverdlovsk\",\"Tambov\",\"Tomsk\",\"Tula\",\"Tver'\",\"Tyumen'\",\"Ul'yanovsk\",\"Vladimir\",\"Volgograd\",\"Vologda\",\"Voronezh\",\"Yaroslavl'\",\"Adygeya\",\"Altay\",\"Bashkortostan\",\"Buryatiya\",\"Chechnya\",\"Chuvashiya\",\"Dagestan\",\"Ingushetiya\",\"Kabardino-Balkariya\",\"Kalmykiya\",\"Karachayevo-Cherkesiya\",\"Kareliya\",\"Khakasiya\",\"Komi\",\"Mariy-El\",\"Mordoviya\",\"Sakha\",\"North Ossetia\",\"Tatarstan\",\"Tyva\",\"Udmurtiya\",\"Aga Buryat\",\"Chukotka\",\"Evenk\",\"Khanty-Mansi\",\"Komi-Permyak\",\"Koryak\",\"Nenets\",\"Taymyr\",\"Ust'-Orda Buryat\",\"Yamalo-Nenets\",\"Altay\",\"Khabarovsk\",\"Krasnodar\",\"Krasnoyarsk\",\"Primorskiy\",\"Stavropol'\",\"Moscow\",\"St. Petersburg\",\"Yevrey\"]},{\"country\":\"Rwanda\",\"states\":[\"Butare\",\"Byumba\",\"Cyangugu\",\"Gikongoro\",\"Gisenyi\",\"Gitarama\",\"Kibungo\",\"Kibuye\",\"Kigali Rurale\",\"Kigali-ville\",\"Umutara\",\"Ruhengeri\"]},{\"country\":\"Samoa\",\"states\":[\"A'ana\",\"Aiga-i-le-Tai\",\"Atua\",\"Fa'asaleleaga\",\"Gaga'emauga\",\"Gagaifomauga\",\"Palauli\",\"Satupa'itea\",\"Tuamasaga\",\"Va'a-o-Fonoti\",\"Vaisigano\"]},{\"country\":\"San Marino\",\"states\":[\"Acquaviva\",\"Borgo Maggiore\",\"Chiesanuova\",\"Domagnano\",\"Faetano\",\"Fiorentino\",\"Montegiardino\",\"San Marino Citta\",\"Serravalle\"]},{\"country\":\"Sao Tome\",\"states\":[]},{\"country\":\"Saudi Arabia\",\"states\":[\"Al Bahah\",\"Al Hudud ash Shamaliyah\",\"Al Jawf\",\"Al Madinah\",\"Al Qasim\",\"Ar Riyad\",\"Ash Sharqiyah\",\"'Asir\",\"Ha'il\",\"Jizan\",\"Makkah\",\"Najran\",\"Tabuk\"]},{\"country\":\"Senegal\",\"states\":[\"Dakar\",\"Diourbel\",\"Fatick\",\"Kaolack\",\"Kolda\",\"Louga\",\"Matam\",\"Saint-Louis\",\"Tambacounda\",\"Thies\",\"Ziguinchor\"]},{\"country\":\"Serbia and Montenegro\",\"states\":[\"Kosovo\",\"Montenegro\",\"Serbia\",\"Vojvodina\"]},{\"country\":\"Seychelles\",\"states\":[\"Anse aux Pins\",\"Anse Boileau\",\"Anse Etoile\",\"Anse Louis\",\"Anse Royale\",\"Baie Lazare\",\"Baie Sainte Anne\",\"Beau Vallon\",\"Bel Air\",\"Bel Ombre\",\"Cascade\",\"Glacis\",\"Grand' Anse\",\"Grand' Anse\",\"La Digue\",\"La Riviere Anglaise\",\"Mont Buxton\",\"Mont Fleuri\",\"Plaisance\",\"Pointe La Rue\",\"Port Glaud\",\"Saint Louis\",\"Takamaka\"]},{\"country\":\"Sierra Leone\",\"states\":[]},{\"country\":\"Singapore\",\"states\":[]},{\"country\":\"Slovakia\",\"states\":[\"Banskobystricky\",\"Bratislavsky\",\"Kosicky\",\"Nitriansky\",\"Presovsky\",\"Trenciansky\",\"Trnavsky\",\"Zilinsky\"]},{\"country\":\"Slovenia\",\"states\":[\"Ajdovscina\",\"Beltinci\",\"Benedikt\",\"Bistrica ob Sotli\",\"Bled\",\"Bloke\",\"Bohinj\",\"Borovnica\",\"Bovec\",\"Braslovce\",\"Brda\",\"Brezice\",\"Brezovica\",\"Cankova\",\"Celje\",\"Cerklje na Gorenjskem\",\"Cerknica\",\"Cerkno\",\"Cerkvenjak\",\"Crensovci\",\"Crna na Koroskem\",\"Crnomelj\",\"Destrnik\",\"Divaca\",\"Dobje\",\"Dobrepolje\",\"Dobrna\",\"Dobrova-Horjul-Polhov Gradec\",\"Dobrovnik-Dobronak\",\"Dolenjske Toplice\",\"Dol pri Ljubljani\",\"Domzale\",\"Dornava\",\"Dravograd\",\"Duplek\",\"Gorenja Vas-Poljane\",\"Gorisnica\",\"Gornja Radgona\",\"Gornji Grad\",\"Gornji Petrovci\",\"Grad\",\"Grosuplje\",\"Hajdina\",\"Hoce-Slivnica\",\"Hodos-Hodos\",\"Horjul\",\"Hrastnik\",\"Hrpelje-Kozina\",\"Idrija\",\"Ig\",\"Ilirska Bistrica\",\"Ivancna Gorica\",\"Izola-Isola\",\"Jesenice\",\"Jezersko\",\"Jursinci\",\"Kamnik\",\"Kanal\",\"Kidricevo\",\"Kobarid\",\"Kobilje\",\"Kocevje\",\"Komen\",\"Komenda\",\"Koper-Capodistria\",\"Kostel\",\"Kozje\",\"Kranj\",\"Kranjska Gora\",\"Krizevci\",\"Krsko\",\"Kungota\",\"Kuzma\",\"Lasko\",\"Lenart\",\"Lendava-Lendva\",\"Litija\",\"Ljubljana\",\"Ljubno\",\"Ljutomer\",\"Logatec\",\"Loska Dolina\",\"Loski Potok\",\"Lovrenc na Pohorju\",\"Luce\",\"Lukovica\",\"Majsperk\",\"Maribor\",\"Markovci\",\"Medvode\",\"Menges\",\"Metlika\",\"Mezica\",\"Miklavz na Dravskem Polju\",\"Miren-Kostanjevica\",\"Mirna Pec\",\"Mislinja\",\"Moravce\",\"Moravske Toplice\",\"Mozirje\",\"Murska Sobota\",\"Muta\",\"Naklo\",\"Nazarje\",\"Nova Gorica\",\"Novo Mesto\",\"Odranci\",\"Oplotnica\",\"Ormoz\",\"Osilnica\",\"Pesnica\",\"Piran-Pirano\",\"Pivka\",\"Podcetrtek\",\"Podlehnik\",\"Podvelka\",\"Polzela\",\"Postojna\",\"Prebold\",\"Preddvor\",\"Prevalje\",\"Ptuj\",\"Puconci\",\"Race-Fram\",\"Radece\",\"Radenci\",\"Radlje ob Dravi\",\"Radovljica\",\"Ravne na Koroskem\",\"Razkrizje\",\"Ribnica\",\"Ribnica na Pohorju\",\"Rogasovci\",\"Rogaska Slatina\",\"Rogatec\",\"Ruse\",\"Salovci\",\"Selnica ob Dravi\",\"Semic\",\"Sempeter-Vrtojba\",\"Sencur\",\"Sentilj\",\"Sentjernej\",\"Sentjur pri Celju\",\"Sevnica\",\"Sezana\",\"Skocjan\",\"Skofja Loka\",\"Skofljica\",\"Slovenj Gradec\",\"Slovenska Bistrica\",\"Slovenske Konjice\",\"Smarje pri Jelsah\",\"Smartno ob Paki\",\"Smartno pri Litiji\",\"Sodrazica\",\"Solcava\",\"Sostanj\",\"Starse\",\"Store\",\"Sveta Ana\",\"Sveti Andraz v Slovenskih Goricah\",\"Sveti Jurij\",\"Tabor\",\"Tisina\",\"Tolmin\",\"Trbovlje\",\"Trebnje\",\"Trnovska Vas\",\"Trzic\",\"Trzin\",\"Turnisce\",\"Velenje\",\"Velika Polana\",\"Velike Lasce\",\"Verzej\",\"Videm\",\"Vipava\",\"Vitanje\",\"Vodice\",\"Vojnik\",\"Vransko\",\"Vrhnika\",\"Vuzenica\",\"Zagorje ob Savi\",\"Zalec\",\"Zavrc\",\"Zelezniki\",\"Zetale\",\"Ziri\",\"Zirovnica\",\"Zuzemberk\",\"Zrece\"]},{\"country\":\"Solomon Islands\",\"states\":[\"Central\",\"Choiseul\",\"Guadalcanal\",\"Honiara\",\"Isabel\",\"Makira\",\"Malaita\",\"Rennell and Bellona\",\"Temotu\",\"Western\"]},{\"country\":\"Somalia\",\"states\":[\"Awdal\",\"Bakool\",\"Banaadir\",\"Bari\",\"Bay\",\"Galguduud\",\"Gedo\",\"Hiiraan\",\"Jubbada Dhexe\",\"Jubbada Hoose\",\"Mudug\",\"Nugaal\",\"Sanaag\",\"Shabeellaha Dhexe\",\"Shabeellaha Hoose\",\"Sool\",\"Togdheer\",\"Woqooyi Galbeed\"]},{\"country\":\"South Africa\",\"states\":[\"Eastern Cape\",\"Free State\",\"Gauteng\",\"KwaZulu-Natal\",\"Limpopo\",\"Mpumalanga\",\"North-West\",\"Northern Cape\",\"Western Cape\"]},{\"country\":\"South Korea\",\"states\":[\"Seoul\",\"Busan City\",\"Daegu City\",\"Incheon City\",\"Gwangju City\",\"Daejeon City\",\"Ulsan\",\"Gyeonggi Province\",\"Gangwon Province\",\"North Chungcheong Province\",\"South Chungcheong Province\",\"North Jeolla Province\",\"South Jeolla Province\",\"North Gyeongsang Province\",\"South Gyeongsang Province\",\"Jeju\"]},{\"country\":\"Spain\",\"states\":[\"Andalucia\",\"Aragon\",\"Asturias\",\"Baleares\",\"Ceuta\",\"Canarias\",\"Cantabria\",\"Castilla-La Mancha\",\"Castilla y Leon\",\"Cataluna\",\"Comunidad Valenciana\",\"Extremadura\",\"Galicia\",\"La Rioja\",\"Madrid\",\"Melilla\",\"Murcia\",\"Navarra\",\"Pais Vasco\"]},{\"country\":\"Sri Lanka\",\"states\":[\"Central\",\"North Central\",\"North Eastern\",\"North Western\",\"Sabaragamuwa\",\"Southern\",\"Uva\",\"Western\"]},{\"country\":\"Sudan\",\"states\":[\"A'ali an Nil\",\"Al Bahr al Ahmar\",\"Al Buhayrat\",\"Al Jazirah\",\"Al Khartum\",\"Al Qadarif\",\"Al Wahdah\",\"An Nil al Abyad\",\"An Nil al Azraq\",\"Ash Shamaliyah\",\"Bahr al Jabal\",\"Gharb al Istiwa'iyah\",\"Gharb Bahr al Ghazal\",\"Gharb Darfur\",\"Gharb Kurdufan\",\"Janub Darfur\",\"Janub Kurdufan\",\"Junqali\",\"Kassala\",\"Nahr an Nil\",\"Shamal Bahr al Ghazal\",\"Shamal Darfur\",\"Shamal Kurdufan\",\"Sharq al Istiwa'iyah\",\"Sinnar\",\"Warab\"]},{\"country\":\"Suriname\",\"states\":[\"Brokopondo\",\"Commewijne\",\"Coronie\",\"Marowijne\",\"Nickerie\",\"Para\",\"Paramaribo\",\"Saramacca\",\"Sipaliwini\",\"Wanica\"]},{\"country\":\"Swaziland\",\"states\":[\"Hhohho\",\"Lubombo\",\"Manzini\",\"Shiselweni\"]},{\"country\":\"Sweden\",\"states\":[\"Blekinge\",\"Dalarnas\",\"Gavleborgs\",\"Gotlands\",\"Hallands\",\"Jamtlands\",\"Jonkopings\",\"Kalmar\",\"Kronobergs\",\"Norrbottens\",\"Orebro\",\"Ostergotlands\",\"Skane\",\"Sodermanlands\",\"Stockholms\",\"Uppsala\",\"Varmlands\",\"Vasterbottens\",\"Vasternorrlands\",\"Vastmanlands\",\"Vastra Gotalands\"]},{\"country\":\"Switzerland\",\"states\":[\"Aargau\",\"Appenzell Ausser-Rhoden\",\"Appenzell Inner-Rhoden\",\"Basel-Landschaft\",\"Basel-Stadt\",\"Bern\",\"Fribourg\",\"Geneve\",\"Glarus\",\"Graubunden\",\"Jura\",\"Luzern\",\"Neuchatel\",\"Nidwalden\",\"Obwalden\",\"Sankt Gallen\",\"Schaffhausen\",\"Schwyz\",\"Solothurn\",\"Thurgau\",\"Ticino\",\"Uri\",\"Valais\",\"Vaud\",\"Zug\",\"Zurich\"]},{\"country\":\"Syria\",\"states\":[\"Al Hasakah\",\"Al Ladhiqiyah\",\"Al Qunaytirah\",\"Ar Raqqah\",\"As Suwayda'\",\"Dar'a\",\"Dayr az Zawr\",\"Dimashq\",\"Halab\",\"Hamah\",\"Hims\",\"Idlib\",\"Rif Dimashq\",\"Tartus\"]},{\"country\":\"Taiwan\",\"states\":[\"Chang-hua\",\"Chia-i\",\"Hsin-chu\",\"Hua-lien\",\"I-lan\",\"Kao-hsiung\",\"Kin-men\",\"Lien-chiang\",\"Miao-li\",\"Nan-t'ou\",\"P'eng-hu\",\"P'ing-tung\",\"T'ai-chung\",\"T'ai-nan\",\"T'ai-pei\",\"T'ai-tung\",\"T'ao-yuan\",\"Yun-lin\",\"Chia-i\",\"Chi-lung\",\"Hsin-chu\",\"T'ai-chung\",\"T'ai-nan\",\"Kao-hsiung city\",\"T'ai-pei city\"]},{\"country\":\"Tajikistan\",\"states\":[]},{\"country\":\"Tanzania\",\"states\":[\"Arusha\",\"Dar es Salaam\",\"Dodoma\",\"Iringa\",\"Kagera\",\"Kigoma\",\"Kilimanjaro\",\"Lindi\",\"Manyara\",\"Mara\",\"Mbeya\",\"Morogoro\",\"Mtwara\",\"Mwanza\",\"Pemba North\",\"Pemba South\",\"Pwani\",\"Rukwa\",\"Ruvuma\",\"Shinyanga\",\"Singida\",\"Tabora\",\"Tanga\",\"Zanzibar Central/South\",\"Zanzibar North\",\"Zanzibar Urban/West\"]},{\"country\":\"Thailand\",\"states\":[\"Amnat Charoen\",\"Ang Thong\",\"Buriram\",\"Chachoengsao\",\"Chai Nat\",\"Chaiyaphum\",\"Chanthaburi\",\"Chiang Mai\",\"Chiang Rai\",\"Chon Buri\",\"Chumphon\",\"Kalasin\",\"Kamphaeng Phet\",\"Kanchanaburi\",\"Khon Kaen\",\"Krabi\",\"Krung Thep Mahanakhon\",\"Lampang\",\"Lamphun\",\"Loei\",\"Lop Buri\",\"Mae Hong Son\",\"Maha Sarakham\",\"Mukdahan\",\"Nakhon Nayok\",\"Nakhon Pathom\",\"Nakhon Phanom\",\"Nakhon Ratchasima\",\"Nakhon Sawan\",\"Nakhon Si Thammarat\",\"Nan\",\"Narathiwat\",\"Nong Bua Lamphu\",\"Nong Khai\",\"Nonthaburi\",\"Pathum Thani\",\"Pattani\",\"Phangnga\",\"Phatthalung\",\"Phayao\",\"Phetchabun\",\"Phetchaburi\",\"Phichit\",\"Phitsanulok\",\"Phra Nakhon Si Ayutthaya\",\"Phrae\",\"Phuket\",\"Prachin Buri\",\"Prachuap Khiri Khan\",\"Ranong\",\"Ratchaburi\",\"Rayong\",\"Roi Et\",\"Sa Kaeo\",\"Sakon Nakhon\",\"Samut Prakan\",\"Samut Sakhon\",\"Samut Songkhram\",\"Sara Buri\",\"Satun\",\"Sing Buri\",\"Sisaket\",\"Songkhla\",\"Sukhothai\",\"Suphan Buri\",\"Surat Thani\",\"Surin\",\"Tak\",\"Trang\",\"Trat\",\"Ubon Ratchathani\",\"Udon Thani\",\"Uthai Thani\",\"Uttaradit\",\"Yala\",\"Yasothon\"]},{\"country\":\"Togo\",\"states\":[\"Kara\",\"Plateaux\",\"Savanes\",\"Centrale\",\"Maritime\"]},{\"country\":\"Tonga\",\"states\":[]},{\"country\":\"Trinidad and Tobago\",\"states\":[\"Couva\",\"Diego Martin\",\"Mayaro\",\"Penal\",\"Princes Town\",\"Sangre Grande\",\"San Juan\",\"Siparia\",\"Tunapuna\",\"Port-of-Spain\",\"San Fernando\",\"Arima\",\"Point Fortin\",\"Chaguanas\",\"Tobago\"]},{\"country\":\"Tunisia\",\"states\":[\"Ariana (Aryanah)\",\"Beja (Bajah)\",\"Ben Arous (Bin 'Arus)\",\"Bizerte (Banzart)\",\"Gabes (Qabis)\",\"Gafsa (Qafsah)\",\"Jendouba (Jundubah)\",\"Kairouan (Al Qayrawan)\",\"Kasserine (Al Qasrayn)\",\"Kebili (Qibili)\",\"Kef (Al Kaf)\",\"Mahdia (Al Mahdiyah)\",\"Manouba (Manubah)\",\"Medenine (Madanin)\",\"Monastir (Al Munastir)\",\"Nabeul (Nabul)\",\"Sfax (Safaqis)\",\"Sidi Bou Zid (Sidi Bu Zayd)\",\"Siliana (Silyanah)\",\"Sousse (Susah)\",\"Tataouine (Tatawin)\",\"Tozeur (Tawzar)\",\"Tunis\",\"Zaghouan (Zaghwan)\"]},{\"country\":\"Turkey\",\"states\":[\"Adana\",\"Adiyaman\",\"Afyonkarahisar\",\"Agri\",\"Aksaray\",\"Amasya\",\"Ankara\",\"Antalya\",\"Ardahan\",\"Artvin\",\"Aydin\",\"Balikesir\",\"Bartin\",\"Batman\",\"Bayburt\",\"Bilecik\",\"Bingol\",\"Bitlis\",\"Bolu\",\"Burdur\",\"Bursa\",\"Canakkale\",\"Cankiri\",\"Corum\",\"Denizli\",\"Diyarbakir\",\"Duzce\",\"Edirne\",\"Elazig\",\"Erzincan\",\"Erzurum\",\"Eskisehir\",\"Gaziantep\",\"Giresun\",\"Gumushane\",\"Hakkari\",\"Hatay\",\"Igdir\",\"Isparta\",\"Istanbul\",\"Izmir\",\"Kahramanmaras\",\"Karabuk\",\"Karaman\",\"Kars\",\"Kastamonu\",\"Kayseri\",\"Kilis\",\"Kirikkale\",\"Kirklareli\",\"Kirsehir\",\"Kocaeli\",\"Konya\",\"Kutahya\",\"Malatya\",\"Manisa\",\"Mardin\",\"Mersin\",\"Mugla\",\"Mus\",\"Nevsehir\",\"Nigde\",\"Ordu\",\"Osmaniye\",\"Rize\",\"Sakarya\",\"Samsun\",\"Sanliurfa\",\"Siirt\",\"Sinop\",\"Sirnak\",\"Sivas\",\"Tekirdag\",\"Tokat\",\"Trabzon\",\"Tunceli\",\"Usak\",\"Van\",\"Yalova\",\"Yozgat\",\"Zonguldak\"]},{\"country\":\"Turkmenistan\",\"states\":[\"Ahal Welayaty (Ashgabat)\",\"Balkan Welayaty (Balkanabat)\",\"Dashoguz Welayaty\",\"Lebap Welayaty (Turkmenabat)\",\"Mary Welayaty\"]},{\"country\":\"Uganda\",\"states\":[\"Adjumani\",\"Apac\",\"Arua\",\"Bugiri\",\"Bundibugyo\",\"Bushenyi\",\"Busia\",\"Gulu\",\"Hoima\",\"Iganga\",\"Jinja\",\"Kabale\",\"Kabarole\",\"Kaberamaido\",\"Kalangala\",\"Kampala\",\"Kamuli\",\"Kamwenge\",\"Kanungu\",\"Kapchorwa\",\"Kasese\",\"Katakwi\",\"Kayunga\",\"Kibale\",\"Kiboga\",\"Kisoro\",\"Kitgum\",\"Kotido\",\"Kumi\",\"Kyenjojo\",\"Lira\",\"Luwero\",\"Masaka\",\"Masindi\",\"Mayuge\",\"Mbale\",\"Mbarara\",\"Moroto\",\"Moyo\",\"Mpigi\",\"Mubende\",\"Mukono\",\"Nakapiripirit\",\"Nakasongola\",\"Nebbi\",\"Ntungamo\",\"Pader\",\"Pallisa\",\"Rakai\",\"Rukungiri\",\"Sembabule\",\"Sironko\",\"Soroti\",\"Tororo\",\"Wakiso\",\"Yumbe\"]},{\"country\":\"Ukraine\",\"states\":[\"Cherkasy\",\"Chernihiv\",\"Chernivtsi\",\"Crimea\",\"Dnipropetrovs'k\",\"Donets'k\",\"Ivano-Frankivs'k\",\"Kharkiv\",\"Kherson\",\"Khmel'nyts'kyy\",\"Kirovohrad\",\"Kiev\",\"Kyyiv\",\"Luhans'k\",\"L'viv\",\"Mykolayiv\",\"Odesa\",\"Poltava\",\"Rivne\",\"Sevastopol'\",\"Sumy\",\"Ternopil'\",\"Vinnytsya\",\"Volyn'\",\"Zakarpattya\",\"Zaporizhzhya\",\"Zhytomyr\"]},{\"country\":\"United Arab Emirates\",\"states\":[\"Abu Dhabi\",\"'Ajman\",\"Al Fujayrah\",\"Sharjah\",\"Dubai\",\"Ra's al Khaymah\",\"Umm al Qaywayn\"]},{\"country\":\"United Kingdom\",\"states\":[]},{\"country\":\"United States\",\"states\":[\"Alabama\",\"Alaska\",\"Arizona\",\"Arkansas\",\"California\",\"Colorado\",\"Connecticut\",\"Delaware\",\"District of Columbia\",\"Florida\",\"Georgia\",\"Hawaii\",\"Idaho\",\"Illinois\",\"Indiana\",\"Iowa\",\"Kansas\",\"Kentucky\",\"Louisiana\",\"Maine\",\"Maryland\",\"Massachusetts\",\"Michigan\",\"Minnesota\",\"Mississippi\",\"Missouri\",\"Montana\",\"Nebraska\",\"Nevada\",\"New Hampshire\",\"New Jersey\",\"New Mexico\",\"New York\",\"North Carolina\",\"North Dakota\",\"Ohio\",\"Oklahoma\",\"Oregon\",\"Pennsylvania\",\"Rhode Island\",\"South Carolina\",\"South Dakota\",\"Tennessee\",\"Texas\",\"Utah\",\"Vermont\",\"Virginia\",\"Washington\",\"West Virginia\",\"Wisconsin\",\"Wyoming\"]},{\"country\":\"Uruguay\",\"states\":[\"Artigas\",\"Canelones\",\"Cerro Largo\",\"Colonia\",\"Durazno\",\"Flores\",\"Florida\",\"Lavalleja\",\"Maldonado\",\"Montevideo\",\"Paysandu\",\"Rio Negro\",\"Rivera\",\"Rocha\",\"Salto\",\"San Jose\",\"Soriano\",\"Tacuarembo\",\"Treinta y Tres\"]},{\"country\":\"Uzbekistan\",\"states\":[\"Andijon Viloyati\",\"Buxoro Viloyati\",\"Farg'ona Viloyati\",\"Jizzax Viloyati\",\"Namangan Viloyati\",\"Navoiy Viloyati\",\"Qashqadaryo Viloyati\",\"Qaraqalpog'iston Respublikasi\",\"Samarqand Viloyati\",\"Sirdaryo Viloyati\",\"Surxondaryo Viloyati\",\"Toshkent Shahri\",\"Toshkent Viloyati\",\"Xorazm Viloyati\"]},{\"country\":\"Vanuatu\",\"states\":[\"Malampa\",\"Penama\",\"Sanma\",\"Shefa\",\"Tafea\",\"Torba\"]},{\"country\":\"Venezuela\",\"states\":[\"Amazonas\",\"Anzoategui\",\"Apure\",\"Aragua\",\"Barinas\",\"Bolivar\",\"Carabobo\",\"Cojedes\",\"Delta Amacuro\",\"Dependencias Federales\",\"Distrito Federal\",\"Falcon\",\"Guarico\",\"Lara\",\"Merida\",\"Miranda\",\"Monagas\",\"Nueva Esparta\",\"Portuguesa\",\"Sucre\",\"Tachira\",\"Trujillo\",\"Vargas\",\"Yaracuy\",\"Zulia\"]},{\"country\":\"Vietnam\",\"states\":[\"An Giang\",\"Bac Giang\",\"Bac Kan\",\"Bac Lieu\",\"Bac Ninh\",\"Ba Ria-Vung Tau\",\"Ben Tre\",\"Binh Dinh\",\"Binh Duong\",\"Binh Phuoc\",\"Binh Thuan\",\"Ca Mau\",\"Cao Bang\",\"Dac Lak\",\"Dac Nong\",\"Dien Bien\",\"Dong Nai\",\"Dong Thap\",\"Gia Lai\",\"Ha Giang\",\"Hai Duong\",\"Ha Nam\",\"Ha Tay\",\"Ha Tinh\",\"Hau Giang\",\"Hoa Binh\",\"Hung Yen\",\"Khanh Hoa\",\"Kien Giang\",\"Kon Tum\",\"Lai Chau\",\"Lam Dong\",\"Lang Son\",\"Lao Cai\",\"Long An\",\"Nam Dinh\",\"Nghe An\",\"Ninh Binh\",\"Ninh Thuan\",\"Phu Tho\",\"Phu Yen\",\"Quang Binh\",\"Quang Nam\",\"Quang Ngai\",\"Quang Ninh\",\"Quang Tri\",\"Soc Trang\",\"Son La\",\"Tay Ninh\",\"Thai Binh\",\"Thai Nguyen\",\"Thanh Hoa\",\"Thua Thien-Hue\",\"Tien Giang\",\"Tra Vinh\",\"Tuyen Quang\",\"Vinh Long\",\"Vinh Phuc\",\"Yen Bai\",\"Can Tho\",\"Da Nang\",\"Hai Phong\",\"Hanoi\",\"Ho Chi Minh\"]},{\"country\":\"Yemen\",\"states\":[\"Abyan\",\"'Adan\",\"Ad Dali'\",\"Al Bayda'\",\"Al Hudaydah\",\"Al Jawf\",\"Al Mahrah\",\"Al Mahwit\",\"'Amran\",\"Dhamar\",\"Hadramawt\",\"Hajjah\",\"Ibb\",\"Lahij\",\"Ma'rib\",\"Sa'dah\",\"San'a'\",\"Shabwah\",\"Ta'izz\"]},{\"country\":\"Zambia\",\"states\":[\"Central\",\"Copperbelt\",\"Eastern\",\"Luapula\",\"Lusaka\",\"Northern\",\"North-Western\",\"Southern\",\"Western\"]},{\"country\":\"Zimbabwe\",\"states\":[\"Bulawayo\",\"Harare\",\"Manicaland\",\"Mashonaland Central\",\"Mashonaland East\",\"Mashonaland West\",\"Masvingo\",\"Matabeleland North\",\"Matabeleland South\",\"Midlands\"]}]}");

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8lYe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1GRS");
/* harmony import */ var _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  _renderFooterClass() {
    if (this.props.fixed) {
      return `${_public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer} ${_public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fixed}`;
    } else {
      return `${_public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer}`;
    }
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("footer", {
      className: this._renderFooterClass()
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "small-12 large-8 columns"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", null, __jsx("img", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.logo,
      src: "/images/logo-white-text.svg",
      alt: "GovWhitePapers Logo"
    }))), __jsx("div", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.navigationWrap
    }, __jsx("nav", {
      id: "footer-navigation",
      className: `${_public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.mainNavigation} clearfix`
    }, __jsx("div", {
      className: "clearfix"
    }, __jsx("ul", {
      id: "footer-menu",
      className: `menu ${_public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.menu} clearfix`,
      "aria-expanded": "false"
    }, __jsx("li", {
      className: "menu-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/find"
    }, __jsx("a", null, "Find"))), __jsx("li", {
      className: "menu-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/post"
    }, __jsx("a", null, "Post"))), __jsx("li", {
      className: "menu-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/promote"
    }, __jsx("a", null, "Promote"))), __jsx("li", {
      className: "menu-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about"
    }, __jsx("a", null, "About"))), __jsx("li", {
      className: "menu-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/team"
    }, __jsx("a", null, "Team"))), __jsx("li", {
      className: "menu-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/blog"
    }, __jsx("a", null, "Blog"))), __jsx("li", {
      className: "menu-item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("a", null, "Contact")))))))), __jsx("div", {
      className: "small-12 large-4 columns text-right"
    }, __jsx("ul", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.socialMenu
    }, __jsx("li", null, __jsx("a", {
      target: "_blank",
      href: "https://www.facebook.com/GovWhitePapers/"
    }, __jsx("img", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.fblogo,
      src: "/images/fb.svg",
      alt: "Facebook Logo"
    }))), __jsx("li", null, __jsx("a", {
      target: "_blank",
      href: "https://www.linkedin.com/company/govwhitepapers/"
    }, __jsx("img", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.linkedin,
      src: "/images/linkedin.svg",
      alt: "LinkedIn Logo"
    }))), __jsx("li", null, __jsx("a", {
      target: "_blank",
      href: "https://twitter.com/GovWhitePapers"
    }, __jsx("img", {
      className: _public_styles_modules_footer_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.twitter,
      src: "/images/twitter.svg",
      alt: "Twitter Logo"
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Dsvi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("XsH+");
/* harmony import */ var entities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(entities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_wordpress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kE1S");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("b0oO");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("8lYe");
/* harmony import */ var _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("daOy");
/* harmony import */ var _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("ZTWx");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_10__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













class Register extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "_openLogin", () => {
      let login = document.querySelector('.js-login');
      login.click();
    });

    _defineProperty(this, "removeTopic", id => {
      let selected_topics = this.state.selected_topics;
      let index = selected_topics.findIndex(topic => topic.term_id == id);

      if (index !== -1) {
        selected_topics.splice(index, 1);
        this.setState({
          'selected_topics': selected_topics
        });
        let select = document.querySelector('select[name="select_topic"]');
        select.selectedIndex = 0;
      }
    });

    _defineProperty(this, "_renderSelectedTopics", () => {
      const {
        selected_topics
      } = this.state;

      if (selected_topics.length < 1) {
        return null;
      } else {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, selected_topics.map(topic => __jsx("div", {
          key: topic.term_id,
          className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.selectedTopic
        }, Object(entities__WEBPACK_IMPORTED_MODULE_5__["decodeHTML"])(topic.name), __jsx("span", {
          onClick: () => {
            this.removeTopic(topic.term_id);
          },
          className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.close
        }, __jsx("img", {
          src: "/images/close-blue.svg",
          alt: ""
        })))));
      }
    });

    _defineProperty(this, "_renderOrganizationSelect", () => {
      const {
        agencies
      } = this.props;
      const {
        works_for
      } = this.state;

      if (works_for == '') {
        return null;
      }

      if (works_for == 'private_industry' || works_for == 'government_contractor') {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("form", {
          autoComplete: "off"
        }, __jsx("div", {
          className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.findOrganization
        }, __jsx("label", null, "Find Organization ", this._renderError('organization_name'), __jsx("input", {
          onChange: this.handleChange,
          name: "organization_name",
          type: "search",
          autoComplete: this.generateRandomString(),
          placeholder: "Start typing your organization's name"
        }), this._renderOrganizationsResult()), this._renderSelectedOrganization(), __jsx("label", null, "Organization Email ", this._renderError('organization_email'), __jsx("input", {
          onChange: this.handleChange,
          name: "organization_email",
          autoComplete: this.generateRandomString(),
          value: this.state.organization_email,
          type: "email",
          placeholder: "To verify your affiliation"
        }))), __jsx("div", {
          className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.addDivider
        }, __jsx("hr", null), __jsx("span", null, "or add new")), __jsx("div", {
          className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.addOrganization
        }, __jsx("label", null, "Add Organization ", this._renderError('new_organization'), __jsx("input", {
          onChange: this.handleChange,
          autoComplete: this.generateRandomString(),
          name: "new_organization",
          type: "text",
          placeholder: "Type organization name"
        }))), __jsx("label", null, "Organization Email ", this._renderError('new_organization_email'), __jsx("input", {
          onChange: this.handleChange,
          name: "new_organization_email",
          value: this.state.new_organization_email,
          autoComplete: this.generateRandomString(),
          type: "email",
          placeholder: "To verify your affiliation"
        }))));
      } else {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("label", null, "Personal Email ", this._renderError('personal_email'), __jsx("span", {
          className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.subLabel
        }, __jsx("span", {
          className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dot
        }, "\xB7"), " optional"), __jsx("input", {
          onChange: this.handleChange,
          name: "personal_email",
          value: this.state.personal_email,
          type: "email",
          placeholder: "Add your personal email"
        })), __jsx("label", null, "Work Email ", this._renderError('work_email'), __jsx("span", {
          className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.subLabel
        }, __jsx("span", {
          className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dot
        }, "\xB7"), " optional"), __jsx("input", {
          onChange: this.handleChange,
          name: "work_email",
          value: this.state.work_email,
          type: "email",
          placeholder: "Add your work email"
        })));
      }
    });

    _defineProperty(this, "_setOrganization", (id, name) => {
      let searchInput = document.querySelector('input[name="organization_name"]');
      searchInput.value = '';
      this.setState(state => ({
        organization_id: id,
        organization_name: name,
        organizations: []
      }));
    });

    _defineProperty(this, "_renderSelectedOrganization", () => {
      const {
        organization_id
      } = this.state;

      if (organization_id) {
        return __jsx("div", {
          className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.selectedOrganization
        }, this.state.organization_name, __jsx("span", {
          onClick: () => {
            this.setState(state => ({
              organization_id: '',
              organization_name: ''
            }));
          },
          className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.close
        }, __jsx("img", {
          src: "/images/close-blue.svg",
          alt: ""
        })));
      } else {
        return null;
      }
    });

    _defineProperty(this, "_renderOrganizationsResult", () => {
      const {
        organizations
      } = this.state;

      if (organizations.length < 1) {
        return null;
      } else {
        return __jsx("div", {
          className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.results
        }, __jsx("ul", null, organizations.map(org => __jsx("li", {
          key: org.ID,
          "data-id": org.ID,
          onClick: () => {
            this._setOrganization(org.ID, org.name);
          }
        }, Object(entities__WEBPACK_IMPORTED_MODULE_5__["decodeHTML"])(org.name)))));
      }
    });

    _defineProperty(this, "_renderTabClass", tab => {
      const {
        active_tab
      } = this.state;

      if (active_tab == tab) {
        return `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.tab} ${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.open}`;
      } else {
        return `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.tab}`;
      }
    });

    _defineProperty(this, "_renderSocialWrapClass", () => {
      const {
        active_tab
      } = this.state;

      if (active_tab == 1) {
        return `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.socialWrap}`;
      } else {
        return `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.socialWrap} ${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.hide}`;
      }
    });

    _defineProperty(this, "_renderControlIcon", tab => {
      const {
        active_tab
      } = this.state;

      if (active_tab == tab) {
        return __jsx("img", {
          src: "/images/tab-active.svg"
        });
      } else {
        if (active_tab > tab) {
          return __jsx("img", {
            src: "/images/tab-complete.svg"
          });
        } else {
          return __jsx("img", {
            src: "/images/tab-inactive.svg"
          });
        }
      }
    });

    _defineProperty(this, "_handleRegistration", () => {
      event.preventDefault();
      let button, component, json, url, login, firstNameField, lastNameField, emailAddressField, jobTitleField;
      button = document.querySelector('.js-register');
      component = this;

      if (!this.state.works_for) {
        var selectFormat = document.querySelector('select[name="works_for"]');
        this.setState({
          error: {
            works_for: 'Please select your industry.'
          }
        });
        selectFormat.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest"
        });
        return;
      }

      if (this.state.job_title.length < 2) {
        var inputJobTitle = document.querySelector('input[name="job_title"]');
        this.setState({
          error: {
            job_title: 'Invalid job title'
          }
        });
        inputJobTitle.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest"
        });
        return false;
      }

      url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/register-user';
      json = JSON.stringify({
        "email_address": this.state.email_address,
        "phone_number": this.state.phone_number,
        "password": this.state.password,
        "password_confirm": parseInt(this.state.password_confirm),
        "first_name": this.state.first_name,
        "last_name": this.state.last_name,
        "job_title": this.state.job_title,
        "works_for": this.state.works_for,
        "selected_topics": this.state.selected_topics,
        "organization_id": this.state.organization_id,
        "new_organization": this.state.new_organization,
        "organization_email": this.state.organization_email,
        "new_organization_email": this.state.new_organization_email,
        "personal_email": this.state.personal_email,
        "work_email": this.state.work_email,
        "address": this.state.address,
        "address_line_two": this.state.address_line_two,
        "city": this.state.city,
        "state": this.state.state,
        "country": this.state.country,
        "zip": this.state.zip
      });
      button.disabled = true;
      component.setState({
        working: true
      });
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(url, {
        method: 'post',
        body: json,
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        setTimeout(function (e) {
          button.disabled = false;
          let flat = JSON.stringify(data);

          if (flat.includes('error')) {
            component.setState({
              error: data.message,
              working: false
            });
            return false;
          }

          component.setState({
            active_tab: '1',
            email_address: '',
            phone_number: '',
            password: '',
            password_confirm: '',
            first_name: '',
            last_name: '',
            works_for: '',
            job_title: '',
            selected_topics: [],
            organizations: [],
            organization_id: '',
            organization_name: '',
            new_organization: '',
            organization_email: '',
            new_organization_email: '',
            personal_email: '',
            work_email: '',
            working: false,
            error: false
          }, () => {
            // Redirect to profile
            //Router.push('/');
            let login = document.querySelector('.js-login');
            login.click();
            return false;
          });
        }, 1000);
      });
    });

    _defineProperty(this, "_toggleTab", tab => {
      var controls = document.querySelector('#controls');
      event.preventDefault();

      if (tab == 2) {
        var inputEmail = document.querySelector('input[name="email_address"]');

        if (!inputEmail.checkValidity()) {
          this.setState({
            error: {
              email_address: 'Please add a valid email address.'
            }
          });
          inputEmail.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
          });
          return false;
        }

        if (this.state.password.length < 10) {
          var inputPassword = document.querySelector('input[name="password"]');
          this.setState({
            error: {
              password: 'Minimum of 10 characters.'
            }
          });
          inputPassword.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
          });
          return;
        }

        if (this.state.password_confirm !== this.state.password) {
          this.setState({
            error: {
              password_confirm: 'Passwords do not match.'
            }
          });
          return false;
        } // Verify that email doesn't exist


        let component = this;
        let url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/check-email';
        let json = JSON.stringify({
          "email_address": this.state.email_address
        });
        component.setState({
          working: true
        });
        isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(url, {
          method: 'post',
          body: json,
          headers: {
            "Content-Type": "application/json"
          }
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          let flat = JSON.stringify(data);

          if (flat.includes('error')) {
            component.setState({
              error: data.message,
              error: {
                email_address: data.message
              },
              working: false
            });
            inputEmail.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest"
            });
            return false;
          } else {
            component.setState(state => ({
              active_tab: tab,
              error: false,
              working: false
            }));
            controls.scrollIntoView({
              behavior: "smooth",
              block: "end",
              inline: "nearest"
            });
          }
        });
      } //


      if (tab == 3) {
        if (this.state.first_name.length < 2) {
          var inputFirstName = document.querySelector('input[name="first_name"]');
          this.setState({
            error: {
              first_name: 'Invalid first name'
            }
          });
          inputFirstName.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
          });
          return false;
        }

        if (this.state.last_name.length < 2) {
          var inputLastName = document.querySelector('input[name="last_name"]');
          this.setState({
            error: {
              last_name: 'Invalid last name'
            }
          });
          inputLastName.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
          });
          return false;
        }

        if (this.state.phone_number.length < 7) {
          var inputPhoneNumber = document.querySelector('input[name="phone_number"]');
          this.setState({
            error: {
              phone_number: 'Invalid phone number'
            }
          });
          inputPhoneNumber.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
          });
          return false;
        }

        if (this.state.country.length < 2) {
          var countryField = document.querySelector('select[name="country"]');
          this.setState({
            error: {
              country: 'Select your country.'
            }
          });
          countryField.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
          });
          return false;
        }

        if (this.state.address.length < 2) {
          var addressField = document.querySelector('input[name="address"]');
          this.setState({
            error: {
              address: 'Include your address'
            }
          });
          addressField.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
          });
          return false;
        }

        if (this.state.state == '' || this.state.state == 0 || this.state.state == "0") {
          //var stateField = document.querySelector('select[name="state"]');
          this.setState({
            error: {
              state: 'Select your state.'
            }
          }); // stateField.scrollIntoView({
          // 	behavior: "smooth",
          // 	block: "end",
          // 	inline: "nearest"
          // });

          return false;
        }

        if (this.state.zip.length < 2) {
          var zipField = document.querySelector('input[name="zip"]');
          this.setState({
            error: {
              zip: 'Include your zip code.'
            }
          });
          zipField.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest"
          });
          return false;
        }

        if (this.state.selected_topics.length < 1) {
          this.setState({
            error: {
              selected_topics: 'Please select at least one area of interest.'
            }
          });
          return;
        }

        if (this.state.email_address.includes('.gov') || this.state.email_address.includes('.edu') || this.state.email_address.includes('.mil') || this.state.email_address.includes('.us')) {
          this.setState({
            work_email: this.state.email_address
          });
        }

        this.setState(state => ({
          active_tab: tab,
          error: false
        }));
        controls.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest"
        });
      }
    });

    this.state = {
      active_tab: 1,
      email_address: '',
      phone_number: '',
      password: '',
      password_confirm: '',
      first_name: '',
      last_name: '',
      address: '',
      address_line_two: '',
      city: '',
      state: '',
      zip: '',
      country: 'United States',
      available_states: this._getStates('United States'),
      works_for: '',
      job_title: '',
      selected_topics: [],
      organizations: [],
      organization_id: '',
      organization_name: '',
      new_organization: '',
      organization_email: '',
      new_organization_email: '',
      personal_email: '',
      work_email: '',
      working: false,
      error: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async componentDidMount() {
    if (this.props.user) {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/profile');
      return false;
    }
  }

  componentDidUpdate() {
    const {
      working
    } = this.state;
    let html = document.querySelector('html');

    if (working) {
      html.classList.add('working');
    } else {
      html.classList.remove('working');
    }
  }

  generateRandomString() {
    return Math.random().toString(15).substring(2, 11) + Math.random().toString(10).substring(2, 10);
  }

  isURL(url) {
    var regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(url);
  }

  async handleChange(event) {
    let name = event.target.getAttribute('name');

    if (name == 'email_address') {
      this.setState({
        [name]: event.target.value
      });
    } else if (name == 'phone_number') {
      this.setState({
        [name]: event.target.value
      });
    } else if (name == 'password') {
      this.setState({
        [name]: event.target.value
      });
    } else if (name == 'password_confirm') {
      this.setState({
        [name]: event.target.value
      });
    } else if (name == 'first_name') {
      this.setState({
        [name]: event.target.value
      });
    } else if (name == 'last_name') {
      this.setState({
        [name]: event.target.value
      });
    } else if (name == 'country') {
      this.setState({
        'available_states': this._getStates(event.target.value)
      });
    } else if (name == 'state') {
      this.setState({
        [name]: event.target.value
      });
    } else if (name == 'works_for') {
      this.setState({
        [name]: event.target.value
      });
    } else if (name == 'job_title') {
      this.setState({
        [name]: event.target.value
      });
    } else if (name == 'organization_name') {
      if (event.target.value.length >= 3) {
        const wordpress = new _services_wordpress__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]();
        const organizations = await wordpress.searchOrganizations(event.target.value, 10);
        this.setState(state => ({
          organizations: organizations
        }));
      } else {
        this.setState(state => ({
          organizations: []
        }));
      }
    } else if (name == 'new_organization') {
      this.setState({
        [name]: event.target.value
      }, () => {
        this.setState({
          organization_id: '',
          organization_email: ''
        });
      });
    } else if (name == 'new_organization_email') {
      this.setState({
        [name]: event.target.value
      }, () => {
        this.setState({
          organization_id: '',
          organization_email: ''
        });
      });
    } else if (name == 'select_topic') {
      let topic_id = event.target.value;

      if (topic_id == 0) {
        return;
      }

      let topic_r = this.state.selected_topics;

      if (this.state.selected_topics.length >= 5) {
        return;
      }

      let topic = this.props.topics.find(element => element.term_id == topic_id);
      let index = topic_r.findIndex(x => x == topic_id);

      if (index === -1) {
        topic_r.push(topic);
        this.setState({
          'selected_topics': topic_r
        });
        let select = document.querySelector('select[name="select_topic"]');
        select.selectedIndex = 0;
      }
    } else {
      this.setState({
        [name]: event.target.value
      }, () => {});
    }
  }

  _renderError(field) {
    if (this.state.error) {
      let flat = JSON.stringify(this.state.error);

      if (flat.includes('email_address')) {
        if (field == 'email_address') {
          return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
            className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorText}`
          }, this.state.error.email_address));
        }
      }

      if (flat.includes('phone_number')) {
        if (field == 'phone_number') {
          return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
            className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorText}`
          }, this.state.error.phone_number));
        }
      }

      if (flat.includes('password')) {
        if (field == 'password') {
          return __jsx("span", {
            className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorText}`
          }, this.state.error.password);
        }
      }

      if (flat.includes('password_confirm')) {
        if (field == 'password_confirm') {
          return __jsx("span", {
            className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorText}`
          }, this.state.error.password_confirm);
        }
      }

      if (flat.includes('first_name')) {
        if (field == 'first_name') {
          return __jsx("span", {
            className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorText}`
          }, this.state.error.first_name);
        }
      }

      if (flat.includes('last_name')) {
        if (field == 'last_name') {
          return __jsx("span", {
            className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorText}`
          }, this.state.error.last_name);
        }
      }

      if (flat.includes('address')) {
        if (field == 'address') {
          return __jsx("span", {
            className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorText}`
          }, this.state.error.address);
        }
      }

      if (flat.includes('country')) {
        if (field == 'country') {
          return __jsx("span", {
            className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorText}`
          }, this.state.error.country);
        }
      }

      if (flat.includes('state')) {
        if (field == 'state') {
          return __jsx("span", {
            className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorText}`
          }, this.state.error.state);
        }
      }

      if (flat.includes('zip')) {
        if (field == 'zip') {
          return __jsx("span", {
            className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorText}`
          }, this.state.error.zip);
        }
      }

      if (flat.includes('job_title')) {
        if (field == 'job_title') {
          return __jsx("span", {
            className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorText}`
          }, this.state.error.job_title);
        }
      }

      if (flat.includes('works_for')) {
        if (field == 'works_for') {
          return __jsx("span", {
            className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorText}`
          }, this.state.error.works_for);
        }
      }

      if (flat.includes('selected_topics')) {
        if (field == 'selected_topics') {
          return __jsx("span", {
            className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorText}`
          }, this.state.error.selected_topics);
        }
      }

      if (flat.includes('registration_error')) {
        if (field == 'registration') {
          return __jsx("span", {
            className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.errorText}`
          }, this.state.error.selected_topics);
        }
      }
    }
  }

  _getStates(name) {
    let {
      countries
    } = __webpack_require__("4dC4");

    let index = countries.findIndex(country => country.country == name);
    return countries[index].states;
  }

  render() {
    const display_name = this.props.display_name;
    const {
      user
    } = this.props;
    const {
      topics
    } = this.props;

    let {
      countries
    } = __webpack_require__("4dC4");

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", {
      key: "page-title"
    }, "Register"), __jsx("meta", {
      charset: "utf-8"
    }), __jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png"
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    }), __jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    }), __jsx("meta", {
      name: "msapplication-TileImage",
      content: "/favicon-270x270.png"
    }), __jsx("meta", {
      name: "msapplication-TileColor",
      content: "#ffffff"
    }), __jsx("link", {
      rel: "manifest",
      href: "/site.webmanifest"
    }), __jsx("meta", {
      property: "og:title",
      content: "Register",
      key: "og-title"
    }), __jsx("meta", {
      name: "description",
      content: "",
      key: "description"
    }), __jsx("meta", {
      property: "og:locale",
      content: "en_US",
      key: "og-locale"
    }), __jsx("meta", {
      property: "og:title",
      content: "Register",
      key: "og-title"
    }), __jsx("meta", {
      property: "og:description",
      content: "",
      key: "og-description"
    }), __jsx("meta", {
      property: "og:site_name",
      content: "GovWhitePapers"
    })), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], _extends({}, user, {
      display_name: display_name
    })), __jsx("div", {
      className: `row ${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.pageHeader} text-center`
    }, __jsx("div", {
      className: "small-12 columns"
    }, __jsx("h1", null, "Welcome"), __jsx("img", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.hr,
      src: "/images/sep.svg",
      alt: ""
    }), __jsx("p", null, "Enter your information below or log in with a social account."))), __jsx("div", {
      className: `row ${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.pageContent}`
    }, __jsx("div", {
      className: `small-12 columns`
    }, __jsx("div", {
      id: "controls",
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.controls
    }, __jsx("ul", null, __jsx("li", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.active,
      onClick: () => {
        this._toggleTab(1);
      }
    }, __jsx("div", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.icon
    }, this._renderControlIcon(1)), __jsx("span", null, "Account")), __jsx("li", {
      onClick: () => {
        this._toggleTab(2);
      }
    }, __jsx("div", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.icon
    }, this._renderControlIcon(2)), __jsx("span", null, "Personal")), __jsx("li", {
      onClick: () => {
        this._toggleTab(3);
      }
    }, __jsx("div", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.icon
    }, this._renderControlIcon(3)), __jsx("span", null, "Organization")))), __jsx("div", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.tabs
    }, __jsx("div", {
      className: this._renderTabClass(1)
    }, __jsx("div", {
      className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.form}`
    }, __jsx("div", {
      className: `row ${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.row}`
    }, __jsx("div", {
      className: "small-12 columns"
    }, __jsx("div", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.account
    }, __jsx("label", null, "Email ", this._renderError('email_address'), __jsx("input", {
      onChange: this.handleChange,
      name: "email_address",
      value: this.state.email_address,
      type: "email",
      placeholder: "Type your email address",
      required: true
    })), __jsx("label", null, "Password ", this._renderError('password'), __jsx("span", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.subLabel
    }, __jsx("span", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dot
    }, "\xB7"), " minimum of 10 characters"), __jsx("input", {
      onChange: this.handleChange,
      name: "password",
      value: this.state.password,
      type: "password",
      placeholder: "Type your password",
      required: true
    })), __jsx("label", null, "Confim Password ", this._renderError('password_confirm'), __jsx("input", {
      onChange: this.handleChange,
      name: "password_confirm",
      value: this.state.password_confirm,
      type: "password",
      placeholder: "Verify your password",
      required: true
    }))), __jsx("div", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.nav
    }, __jsx("button", {
      onClick: () => {
        this._toggleTab(2);
      },
      className: `button ${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.button}`
    }, "Continue")), __jsx("div", {
      className: this._renderSocialWrapClass()
    }, __jsx("div", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.sep
    }, __jsx("img", {
      src: "/images/continue-with.png",
      alt: ""
    })), __jsx("div", {
      className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.socialBlock}`
    }, __jsx("div", {
      className: "small-12 columns text-center"
    }, __jsx("ul", null, __jsx("li", null, __jsx("a", {
      "data-close-modal": true,
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.google
    }, __jsx("img", {
      "data-close-modal": true,
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.social,
      src: "/images/login-google.png",
      alt: ""
    }))), __jsx("li", null, __jsx("a", {
      "data-close-modal": true,
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.fb
    }, __jsx("img", {
      "data-close-modal": true,
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.social,
      src: "/images/login-fb.png",
      alt: ""
    }))), __jsx("li", null, __jsx("a", {
      "data-close-modal": true,
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.linkedin
    }, __jsx("img", {
      "data-close-modal": true,
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.social,
      src: "/images/login-linkedin.png",
      alt: ""
    }))))))), __jsx("div", {
      className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.signUp}`
    }, __jsx("div", {
      className: "small-12 columns text-center"
    }, __jsx("h5", null, __jsx("a", {
      onClick: () => {
        this._openLogin();
      }
    }, __jsx("span", {
      "data-close-modal": true
    }, "Already have an account?"), " Log In ", __jsx("img", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.linkArrow,
      "data-close-modal": true,
      src: "/images/right-arrow-blue.svg",
      alt: ""
    }))))))))), __jsx("div", {
      className: this._renderTabClass(2)
    }, __jsx("div", {
      className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.form}`
    }, __jsx("div", {
      className: `row ${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.row}`
    }, __jsx("div", {
      className: "small-12 columns"
    }, __jsx("div", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.personal
    }, __jsx("label", null, "First Name ", this._renderError('first_name'), __jsx("input", {
      onChange: this.handleChange,
      name: "first_name",
      value: this.state.first_name,
      type: "text",
      placeholder: "Type your first name"
    })), __jsx("label", null, "Last Name ", this._renderError('last_name'), __jsx("input", {
      onChange: this.handleChange,
      name: "last_name",
      value: this.state.last_name,
      type: "text",
      placeholder: "Type your last name"
    })), __jsx("label", null, "Phone ", this._renderError('phone_number'), __jsx("input", {
      onChange: this.handleChange,
      name: "phone_number",
      value: this.state.phone_number,
      type: "tel",
      placeholder: "Type your phone number",
      required: true
    })), __jsx("div", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.country
    }, __jsx("label", null, "Country ", this._renderError('country'), __jsx("select", {
      onChange: this.handleChange,
      autoComplete: this.generateRandomString(),
      name: "country"
    }, __jsx("option", {
      value: "United States"
    }, "United States"), countries.map(country => __jsx("option", {
      key: country.country,
      value: country.country
    }, Object(entities__WEBPACK_IMPORTED_MODULE_5__["decodeHTML"])(country.country)))))), __jsx("label", null, "Address ", this._renderError('address'), __jsx("input", {
      onChange: this.handleChange,
      name: "address",
      value: this.state.address,
      type: "text",
      placeholder: "Type your street address"
    })), __jsx("label", null, "Address Line 2 ", this._renderError('address_line_two'), __jsx("input", {
      onChange: this.handleChange,
      name: "address_line_two",
      value: this.state.address_line_two,
      type: "text",
      placeholder: "(optional)"
    })), __jsx("label", null, "City ", this._renderError('city'), __jsx("input", {
      onChange: this.handleChange,
      name: "city",
      value: this.state.city,
      type: "text",
      placeholder: "City"
    })), __jsx("div", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.state
    }, __jsx("label", null, "State ", this._renderError('state'), __jsx("select", {
      onChange: this.handleChange,
      autoComplete: this.generateRandomString(),
      name: "state"
    }, __jsx("option", {
      value: "0"
    }, "Select Your State"), this.state.available_states.map(state => __jsx("option", {
      key: state,
      value: state
    }, Object(entities__WEBPACK_IMPORTED_MODULE_5__["decodeHTML"])(state)))))), __jsx("label", null, "Zip ", this._renderError('zip'), __jsx("input", {
      onChange: this.handleChange,
      name: "zip",
      value: this.state.zip,
      type: "text",
      placeholder: "Zip Code"
    })), __jsx("div", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.topics
    }, __jsx("label", null, "Areas of Interest ", this._renderError('selected_topics'), __jsx("span", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.subLabel
    }, __jsx("span", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.dot
    }, "\xB7"), " up to 5"), __jsx("select", {
      onChange: this.handleChange,
      name: "select_topic"
    }, __jsx("option", {
      value: "0"
    }, "Select Interests"), topics.map(topic => __jsx("option", {
      key: topic.term_id,
      value: topic.term_id
    }, Object(entities__WEBPACK_IMPORTED_MODULE_5__["decodeHTML"])(topic.name))))), this._renderSelectedTopics())), __jsx("div", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.nav
    }, __jsx("button", {
      onClick: () => {
        this._toggleTab(3);
      },
      className: `button ${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.button}`
    }, "Continue")))))), __jsx("div", {
      className: this._renderTabClass(3)
    }, __jsx("div", {
      className: `${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.form}`
    }, __jsx("div", {
      className: `row ${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.row}`
    }, __jsx("div", {
      className: "small-12 columns"
    }, __jsx("div", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.worksFor
    }, __jsx("label", null, "I work for ", this._renderError('works_for'), __jsx("select", {
      onChange: this.handleChange,
      autoComplete: this.generateRandomString(),
      name: "works_for"
    }, __jsx("option", {
      value: "0"
    }, "Select who you work for"), __jsx("option", {
      value: "federal_government"
    }, "Federal Government"), __jsx("option", {
      value: "military"
    }, "Military"), __jsx("option", {
      value: "state_and_local"
    }, "State and Local Government"), __jsx("option", {
      value: "education"
    }, "Education"), __jsx("option", {
      value: "government_contractor"
    }, "Government Contractor"), __jsx("option", {
      value: "private_industry"
    }, "Private Industry")))), __jsx("label", null, "Job Title ", this._renderError('job_title'), __jsx("input", {
      onChange: this.handleChange,
      name: "job_title",
      value: this.state.job_title,
      type: "text",
      placeholder: "Type your job title"
    })), __jsx("div", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.organization
    }, this._renderOrganizationSelect()), __jsx("div", {
      className: _public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.nav
    }, __jsx("button", {
      onClick: () => {
        this._handleRegistration();
      },
      className: `button js-register ${_public_styles_modules_register_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.button}`
    }, "Complete Registration")), this._renderError('registration')))))))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Register);
async function getStaticProps(ctx) {
  const wordpress = new _services_wordpress__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]();
  const topics = await wordpress.fetchTopics();
  const page = await wordpress.fetchPage('register');
  return {
    props: {
      topics,
      page
    }
  };
}

/***/ }),

/***/ "J31C":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrap": "profilesidebar_wrap__1Oai4",
	"menu": "profilesidebar_menu__2ItZw",
	"menuImage": "profilesidebar_menuImage__1Id_Z",
	"active": "profilesidebar_active__2_t5l",
	"menuItem": "profilesidebar_menuItem__7LWpb",
	"logout": "profilesidebar_logout__1l-UM"
};


/***/ }),

/***/ "K/uQ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"wrap": "loginmodal_wrap__33SjA",
	"open": "loginmodal_open__2IS4C",
	"header": "loginmodal_header__123C8",
	"close": "loginmodal_close__1yYo-",
	"hr": "loginmodal_hr__wGt4S",
	"login": "loginmodal_login__1Drfn",
	"flex": "loginmodal_flex__1LEa6",
	"button": "loginmodal_button__ZOAK4",
	"form": "loginmodal_form__3gSVL",
	"signin": "loginmodal_signin__1Jyv0",
	"signinGovEvents": "loginmodal_signinGovEvents__35D78",
	"forgot": "loginmodal_forgot__2bsu8",
	"sep": "loginmodal_sep__1hIY3",
	"socialBlock": "loginmodal_socialBlock__1Nn3f",
	"signUp": "loginmodal_signUp__1Nkxp",
	"error": "loginmodal_error__28Ubg"
};


/***/ }),

/***/ "NjeN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_styles_modules_components_profilesidebar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("J31C");
/* harmony import */ var _public_styles_modules_components_profilesidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_styles_modules_components_profilesidebar_module_css__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




/* harmony default export */ __webpack_exports__["a"] = (({
  href,
  children
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  let className = children.props.className || '';

  if (router.pathname === href) {
    className = `${className} ${_public_styles_modules_components_profilesidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.active}`;
  }

  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, {
    className
  }));
});

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "XsH+":
/***/ (function(module, exports) {

module.exports = require("entities");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "ZTWx":
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "b0oO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./public/styles/modules/header.module.css
var header_module = __webpack_require__("remQ");
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);

// CONCATENATED MODULE: ./components/MenuLink.js
var __jsx = external_react_default.a.createElement;




/* harmony default export */ var MenuLink = (({
  href,
  children
}) => {
  const router = Object(router_["useRouter"])();
  let className = children.props.className || '';

  if (router.pathname === href) {
    className = `${className} ${header_module_default.a.active}`;
  } else if (router.pathname == '/blog/[post]' && href == '/blog') {
    className = `${className} ${header_module_default.a.active}`;
  } else if (router.pathname == '/whitepapers/[whitepaper]' && href == '/find') {
    className = `${className} ${header_module_default.a.active}`;
  } else if (router.pathname == '/topic/[topic]' && href == '/find') {
    className = `${className} ${header_module_default.a.active}`;
  }

  return __jsx(link_default.a, {
    href: href
  }, external_react_default.a.cloneElement(children, {
    className
  }));
});
// EXTERNAL MODULE: ./components/ProfileMenuLink.js
var ProfileMenuLink = __webpack_require__("NjeN");

// EXTERNAL MODULE: ./public/styles/modules/components/loginmodal.module.css
var loginmodal_module = __webpack_require__("K/uQ");
var loginmodal_module_default = /*#__PURE__*/__webpack_require__.n(loginmodal_module);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./components/LoginModal.js

var LoginModal_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class LoginModal_LoginModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "_handleEscape", e => {
      if (e.which == 27) {
        this.props.toggle();
      }
    });

    _defineProperty(this, "_handleClick", e => {
      e.preventDefault();

      if (e.target.hasAttribute('data-close-modal')) {
        this.props.toggle();
      }
    });

    _defineProperty(this, "_forgotPassword", () => {
      this.props.toggle();
    });

    _defineProperty(this, "_processLogin", () => {
      let button, govButton, json, url, login, emailField, passField;
      emailField = document.querySelector('input[name="email"]');
      passField = document.querySelector('input[name="pass"]');

      if (!emailField.checkValidity()) {
        emailField.classList.add('invalid');
        return false;
      } else {
        emailField.classList.remove('invalid');
      }

      if (!passField.checkValidity()) {
        passField.classList.add('invalid');
        return false;
      } else {
        passField.classList.remove('invalid');
      }

      button = document.querySelector('.js-login');
      govButton = document.querySelector('.js-login-govevents');
      login = this;
      url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/manual-user-login';
      json = JSON.stringify({
        "email": this.state.email,
        "pass": this.state.pass
      });
      button.disabled = true;
      govButton.disabled = true;
      login.setState({
        working: true
      });
      fetch(url, {
        method: 'post',
        body: json,
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        setTimeout(function (e) {
          button.disabled = false;
          govButton.disabled = false;
          let flat = JSON.stringify(data);

          if (flat.includes('error')) {
            login.setState({
              error: data.message,
              working: false
            });
            return false;
          }

          external_js_cookie_default.a.set('user', JSON.stringify(data));
          login.setState(() => ({
            error: '',
            working: false,
            email: '',
            pass: ''
          }), () => {
            login.props.toggle();
            window.location.reload();
          });
        }, 1000);
      });
    });

    _defineProperty(this, "_processGovEventsLogin", () => {
      let button, govButton, json, url, login, emailField, passField;
      emailField = document.querySelector('input[name="email"]');
      passField = document.querySelector('input[name="pass"]');

      if (!emailField.checkValidity()) {
        emailField.classList.add('invalid');
        return false;
      } else {
        emailField.classList.remove('invalid');
      }

      if (!passField.checkValidity()) {
        passField.classList.add('invalid');
        return false;
      } else {
        passField.classList.remove('invalid');
      }

      button = document.querySelector('.js-login');
      govButton = document.querySelector('.js-login-govevents');
      login = this;
      url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/govevents-user-login';
      json = JSON.stringify({
        "email": this.state.email,
        "pass": this.state.pass
      });
      button.disabled = true;
      govButton.disabled = true;
      login.setState({
        working: true
      });
      fetch(url, {
        method: 'post',
        body: json,
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
        setTimeout(function (e) {
          button.disabled = false;
          govButton.disabled = false;
          let flat = JSON.stringify(data);

          if (flat.includes('error')) {
            login.setState({
              error: data.message,
              working: false
            });
            return false;
          }

          external_js_cookie_default.a.set('user', JSON.stringify(data));
          login.setState(() => ({
            error: '',
            working: false,
            email: '',
            pass: ''
          }), () => {
            login.props.toggle();
            window.location.reload();
          });
        }, 1000);
      });
    });

    _defineProperty(this, "_renderModalClass", () => {
      const {
        open
      } = this.props;

      if (open) {
        return `${loginmodal_module_default.a.wrap} ${loginmodal_module_default.a.open}`;
      } else {
        return `${loginmodal_module_default.a.wrap}`;
      }
    });

    this.state = {
      email: '',
      pass: '',
      error: '',
      working: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let name = event.target.getAttribute('name');
    this.setState({
      [name]: event.target.value
    });
  }

  componentDidUpdate() {
    const {
      open
    } = this.props;
    const {
      working
    } = this.state;
    let html = document.querySelector('html');

    if (open) {
      window.addEventListener('keydown', this._handleEscape);
      window.addEventListener('click', this._handleClick);
      html.classList.add('active-modal');
    } else {
      window.removeEventListener('keydown', this._handleEscape);
      window.removeEventListener('click', this._handleClick);
      html.classList.remove('active-modal');
    }

    if (working) {
      html.classList.add('working');
    } else {
      html.classList.remove('working');
    }
  }

  render() {
    const {
      email,
      pass,
      error
    } = this.state;
    return LoginModal_jsx(external_react_default.a.Fragment, null, LoginModal_jsx("div", {
      className: this._renderModalClass()
    }, LoginModal_jsx("div", {
      className: `row ${loginmodal_module_default.a.header}`
    }, LoginModal_jsx("div", {
      className: "small-6 columns"
    }, LoginModal_jsx("img", {
      className: loginmodal_module_default.a.logo,
      src: "/images/logo.svg",
      alt: ""
    })), LoginModal_jsx("div", {
      className: "small-6 columns text-right"
    }, LoginModal_jsx("button", {
      className: loginmodal_module_default.a.close,
      onClick: e => {
        this.props.toggle();
      }
    }, LoginModal_jsx("img", {
      src: "/images/close.svg",
      alt: ""
    })))), LoginModal_jsx("div", {
      className: `${loginmodal_module_default.a.login}`
    }, LoginModal_jsx("div", {
      className: "row text-center"
    }, LoginModal_jsx("div", {
      className: "small-12 columns"
    }, LoginModal_jsx("h2", null, "Welcome"), LoginModal_jsx("img", {
      className: loginmodal_module_default.a.hr,
      src: "/images/sep.svg",
      alt: ""
    }), LoginModal_jsx("p", null, "Sign in to access GovWhitePapers."))), LoginModal_jsx("div", {
      className: `${loginmodal_module_default.a.form}`
    }, LoginModal_jsx("div", {
      className: "row"
    }, LoginModal_jsx("div", {
      className: "small-12 columns"
    }, LoginModal_jsx("form", null, LoginModal_jsx("label", null, "Email Address", LoginModal_jsx("input", {
      type: "email",
      name: "email",
      value: this.state.email,
      onChange: this.handleChange,
      placeholder: "Type your email",
      required: true
    })), LoginModal_jsx("label", null, "Password", LoginModal_jsx("input", {
      type: "password",
      name: "pass",
      onChange: this.handleChange,
      value: this.state.pass,
      placeholder: "Type your password",
      required: true
    })), LoginModal_jsx("div", {
      className: loginmodal_module_default.a.error
    }, LoginModal_jsx("span", null, this.state.error)), LoginModal_jsx(link_default.a, {
      href: "/password-reset"
    }, LoginModal_jsx("a", {
      onClick: this._forgotPassword,
      className: loginmodal_module_default.a.forgot
    }, "Forgot password?")), LoginModal_jsx("div", {
      className: `row ${loginmodal_module_default.a.signin}`
    }, LoginModal_jsx("div", {
      className: "small-12 columns text-center"
    }, LoginModal_jsx("input", {
      onClick: this._processLogin,
      type: "submit",
      className: "js-login button",
      value: "Log In"
    }))), LoginModal_jsx("div", {
      className: `row ${loginmodal_module_default.a.signinGovEvents}`
    }, LoginModal_jsx("div", {
      className: "small-12 columns text-center"
    }, LoginModal_jsx("button", {
      onClick: this._processGovEventsLogin,
      type: "submit",
      className: "js-login-govevents button"
    }, LoginModal_jsx("img", {
      src: "/images/govevents-logo.png",
      alt: ""
    }), " ", LoginModal_jsx("span", null, "Log In with GovEvents")))))))), LoginModal_jsx("div", {
      className: `row ${loginmodal_module_default.a.sep}`
    }, LoginModal_jsx("div", {
      className: "small-12 columns text-center"
    }, LoginModal_jsx("img", {
      src: "/images/continue-with.png",
      alt: ""
    }))), LoginModal_jsx("div", {
      className: `row ${loginmodal_module_default.a.socialBlock}`
    }, LoginModal_jsx("div", {
      className: "small-12 columns text-center"
    }, LoginModal_jsx("ul", null, LoginModal_jsx("li", null, LoginModal_jsx("a", {
      "data-close-modal": true,
      className: loginmodal_module_default.a.google
    }, LoginModal_jsx("img", {
      "data-close-modal": true,
      className: loginmodal_module_default.a.social,
      src: "/images/login-google.png",
      alt: ""
    }))), LoginModal_jsx("li", null, LoginModal_jsx("a", {
      "data-close-modal": true,
      className: loginmodal_module_default.a.fb
    }, LoginModal_jsx("img", {
      "data-close-modal": true,
      className: loginmodal_module_default.a.social,
      src: "/images/login-fb.png",
      alt: ""
    }))), LoginModal_jsx("li", null, LoginModal_jsx("a", {
      "data-close-modal": true,
      className: loginmodal_module_default.a.linkedin
    }, LoginModal_jsx("img", {
      "data-close-modal": true,
      className: loginmodal_module_default.a.social,
      src: "/images/login-linkedin.png",
      alt: ""
    })))))), LoginModal_jsx("div", {
      className: `row ${loginmodal_module_default.a.signUp}`
    }, LoginModal_jsx("div", {
      className: "small-12 columns text-center"
    }, LoginModal_jsx(link_default.a, {
      href: "/register"
    }, LoginModal_jsx("h5", null, LoginModal_jsx("a", {
      "data-close-modal": true
    }, LoginModal_jsx("span", {
      "data-close-modal": true
    }, "Don't have an account?"), " Sign Up ", LoginModal_jsx("img", {
      className: loginmodal_module_default.a.linkArrow,
      "data-close-modal": true,
      src: "/images/right-arrow-blue.svg",
      alt: ""
    })))))))));
  }

}

/* harmony default export */ var components_LoginModal = (LoginModal_LoginModal);
// EXTERNAL MODULE: ./services/wordpress.js
var wordpress = __webpack_require__("kE1S");

// CONCATENATED MODULE: ./components/Header.js

var Header_jsx = external_react_default.a.createElement;

function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Header_Header extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    Header_defineProperty(this, "_toggleMenu", () => {
      this.setState(state => ({
        mobile_menu_open: !state.mobile_menu_open
      }));
    });

    Header_defineProperty(this, "_toggleUserProfileMenu", () => {
      this.setState(state => ({
        user_profile_menu_open: !state.user_profile_menu_open
      }));
    });

    Header_defineProperty(this, "_toggleLogin", () => {
      this.setState(state => ({
        login_open: !state.login_open
      }));
    });

    Header_defineProperty(this, "_handleEscape", e => {
      if (e.which == 27) {
        this._toggleMenu();
      }
    });

    Header_defineProperty(this, "_handleClick", e => {// console.log('click');
      // this._toggleUserProfileMenu();
    });

    this.state = {
      mobile_menu_open: false,
      user_profile_menu_open: false,
      login_open: false //display_name: ''

    };
  } // static async getInitialProps(ctx) {
  // 	const wordpress = new WordpressService
  // 	const post = await wordpress.fetchPost(ctx.query.post);
  //
  // 	const user = wordpress.getUser();
  // 	return wordpress.pageProps('test', post)
  // }
  // async _fetchToken() {
  // 	const token = await window.localStorage.getItem('user');
  // 	return token;
  // }
  // async componentDidMount() {
  // 	const {access_token} = this.props;
  // 	const wordpress = new WordpressService
  // 	const user = await wordpress.getUser(access_token);
  // 	this.setState(state => ({
  // 		display_name: user.first_name + ' ' + user.last_name
  // 	}));
  // }


  _logOut() {
    event.preventDefault();
    setTimeout(function (e) {
      external_js_cookie_default.a.remove('user');
      window.location.href = '/';
    }, 750);
  }

  _renderUserProfileMenu() {
    if (this.state.user_profile_menu_open == false) {
      return null;
    } else {
      return Header_jsx("ul", {
        id: "header-profile-menu",
        className: `vertical menu ${header_module_default.a.menu} ${header_module_default.a.profileMenu} clearfix`
      }, Header_jsx("li", {
        className: header_module_default.a.menuItem
      }, Header_jsx(ProfileMenuLink["a" /* default */], {
        href: "/profile"
      }, Header_jsx("a", null, Header_jsx("img", {
        className: header_module_default.a.menuImage,
        src: "/images/profile-menu-profile.svg",
        alt: ""
      }), Header_jsx("img", {
        className: `${header_module_default.a.menuImage} ${header_module_default.a.active}`,
        src: "/images/profile-menu-profile-active.svg",
        alt: ""
      }), Header_jsx("span", null, "Dashboard")))), Header_jsx("li", {
        className: header_module_default.a.menuItem
      }, Header_jsx(ProfileMenuLink["a" /* default */], {
        href: "/promote"
      }, Header_jsx("a", null, Header_jsx("img", {
        className: header_module_default.a.menuImage,
        src: "/images/profile-menu-upgrade.svg",
        alt: ""
      }), Header_jsx("img", {
        className: `${header_module_default.a.menuImage} ${header_module_default.a.active}`,
        src: "/images/profile-menu-upgrade-active.svg",
        alt: ""
      }), Header_jsx("span", null, "Promote")))), Header_jsx("li", {
        className: header_module_default.a.menuItem
      }, Header_jsx(ProfileMenuLink["a" /* default */], {
        href: "/contact"
      }, Header_jsx("a", null, Header_jsx("img", {
        className: header_module_default.a.menuImage,
        src: "/images/profile-menu-contact.svg",
        alt: ""
      }), Header_jsx("img", {
        className: `${header_module_default.a.menuImage} ${header_module_default.a.active}`,
        src: "/images/profile-menu-contact-active.svg",
        alt: ""
      }), Header_jsx("span", null, "Contact")))), Header_jsx("li", {
        className: header_module_default.a.menuItem
      }, Header_jsx(ProfileMenuLink["a" /* default */], {
        href: "/settings"
      }, Header_jsx("a", null, Header_jsx("img", {
        className: header_module_default.a.menuImage,
        src: "/images/profile-menu-settings.svg",
        alt: ""
      }), Header_jsx("img", {
        className: `${header_module_default.a.menuImage} ${header_module_default.a.active}`,
        src: "/images/profile-menu-settings-active.svg",
        alt: ""
      }), Header_jsx("span", null, "Settings")))), Header_jsx("li", {
        className: `${header_module_default.a.menuItem} ${header_module_default.a.logout}`
      }, Header_jsx("a", {
        onClick: this._logOut
      }, Header_jsx("img", {
        className: header_module_default.a.menuImage,
        src: "/images/log-out-profile-menu.svg",
        alt: ""
      }), Header_jsx("span", null, "Log Out"))));
    }
  }

  componentDidUpdate() {// const {user_profile_menu_open} = this.state;
    // if( user_profile_menu_open == true) {
    // 	window.addEventListener('click', this._handleClick );
    // } else {
    // 	window.removeEventListener('click', this._handleClick );
    // }
  }

  _renderUserMenuIcon() {
    if (this.state.user_profile_menu_open == false) {
      return Header_jsx("img", {
        src: "/images/account-arrow.svg",
        alt: ""
      });
    } else {
      return Header_jsx("img", {
        className: header_module_default.a.iconOpen,
        src: "/images/account-arrow.svg",
        alt: ""
      });
    }
  }

  _renderUserMenu() {
    const {
      user
    } = this.props;
    const display_name = this.props.display_name;

    if (user !== false && user !== undefined) {
      return Header_jsx(external_react_default.a.Fragment, null, Header_jsx("ul", {
        className: `${header_module_default.a.userMenu} clearfix`,
        "aria-expanded": "false"
      }, Header_jsx("li", {
        className: `menu-item ${header_module_default.a.search}`
      }, Header_jsx(link_default.a, {
        href: "/find"
      }, Header_jsx("a", null, Header_jsx("img", {
        className: header_module_default.a.search,
        src: "/images/search.svg",
        alt: "GovWhitePapers Search"
      })))), Header_jsx("li", {
        className: `js-account-menu menu-item ${header_module_default.a.account}`
      }, Header_jsx("a", {
        onClick: this._toggleUserProfileMenu
      }, display_name, " ", this._renderUserMenuIcon()), this._renderUserProfileMenu())));
    } else {
      return Header_jsx(external_react_default.a.Fragment, null, Header_jsx("ul", {
        className: `${header_module_default.a.userMenu} clearfix`,
        "aria-expanded": "false"
      }, Header_jsx("li", {
        className: `menu-item ${header_module_default.a.search}`
      }, Header_jsx(link_default.a, {
        href: "/find"
      }, Header_jsx("a", null, Header_jsx("img", {
        className: header_module_default.a.search,
        src: "/images/search.svg",
        alt: "GovWhitePapers Search"
      })))), Header_jsx("li", {
        className: `js-account-menu menu-item ${header_module_default.a.login}`
      }, Header_jsx("a", {
        onClick: this._toggleLogin,
        className: `js-login ${header_module_default.a.login}`
      }, "Login")), Header_jsx("li", {
        className: `menu-item ${header_module_default.a.getStarted}`
      }, Header_jsx(link_default.a, {
        href: "/register"
      }, Header_jsx("a", {
        className: `button ${header_module_default.a.button}`
      }, "Get started")))));
    }
  }

  render() {
    return Header_jsx(external_react_default.a.Fragment, null, Header_jsx("header", {
      className: header_module_default.a.header
    }, Header_jsx("div", {
      className: "row"
    }, Header_jsx("div", {
      className: "small-9 medium-10 large-8 columns"
    }, Header_jsx(link_default.a, {
      href: "/"
    }, Header_jsx("a", null, Header_jsx("img", {
      className: header_module_default.a.logo,
      src: "/images/logo.svg",
      alt: "GovWhitePapers Logo"
    }))), Header_jsx("div", {
      className: header_module_default.a.navigationWrap
    }, Header_jsx("nav", {
      id: "site-navigation",
      className: this.state.mobile_menu_open == true ? `${header_module_default.a.mainNavigation} clearfix ${header_module_default.a.toggled}` : `${header_module_default.a.mainNavigation} clearfix`
    }, Header_jsx("button", {
      onClick: this._toggleMenu,
      className: header_module_default.a.menuToggle,
      "aria-controls": "primary-menu",
      "aria-expanded": "false"
    }, Header_jsx("span", {
      className: "screen-reader-text"
    }, "Toggle Mobile Menu"), Header_jsx("div", {
      id: "burger",
      className: this.state.mobile_menu_open == true ? `${header_module_default.a.burger} ${header_module_default.a.open}` : `${header_module_default.a.burger}`
    }, Header_jsx("span", null), Header_jsx("span", null), Header_jsx("span", null))), Header_jsx("div", {
      className: `${header_module_default.a.menuPrimaryMenuContainer} clearfix`
    }, Header_jsx("ul", {
      id: "primary-menu",
      className: `menu ${header_module_default.a.menu} clearfix`,
      "aria-expanded": "false"
    }, Header_jsx("li", {
      className: `menu-item ${header_module_default.a.homeMenuLink}`
    }, Header_jsx(MenuLink, {
      href: "/"
    }, Header_jsx("a", null, Header_jsx("img", {
      className: header_module_default.a.menuImage,
      src: "/images/menu-home.png",
      alt: ""
    }), "Home"))), Header_jsx("li", {
      className: "menu-item"
    }, Header_jsx(MenuLink, {
      href: "/find"
    }, Header_jsx("a", null, Header_jsx("img", {
      className: header_module_default.a.menuImage,
      src: "/images/menu-find.png",
      alt: ""
    }), "Find"))), Header_jsx("li", {
      className: "menu-item"
    }, Header_jsx(MenuLink, {
      href: "/post"
    }, Header_jsx("a", null, Header_jsx("img", {
      className: header_module_default.a.menuImage,
      src: "/images/menu-post.png",
      alt: ""
    }), "Post"))), Header_jsx("li", {
      className: "menu-item"
    }, Header_jsx(MenuLink, {
      href: "/promote"
    }, Header_jsx("a", null, Header_jsx("img", {
      className: `${header_module_default.a.menuImage} ${header_module_default.a.promote}`,
      src: "/images/menu-promote.png",
      alt: ""
    }), "Promote"))), Header_jsx("li", {
      className: "menu-item"
    }, Header_jsx(MenuLink, {
      href: "/about"
    }, Header_jsx("a", null, Header_jsx("img", {
      className: header_module_default.a.menuImage,
      src: "/images/menu-about.png",
      alt: ""
    }), "About"))), Header_jsx("li", {
      className: "menu-item"
    }, Header_jsx(MenuLink, {
      href: "/team"
    }, Header_jsx("a", null, Header_jsx("img", {
      className: `${header_module_default.a.menuImage} ${header_module_default.a.team}`,
      src: "/images/menu-team.png",
      alt: ""
    }), "Team"))), Header_jsx("li", {
      className: "menu-item"
    }, Header_jsx(MenuLink, {
      href: "/blog"
    }, Header_jsx("a", null, Header_jsx("img", {
      className: `${header_module_default.a.menuImage} ${header_module_default.a.blog}`,
      src: "/images/menu-blog.png",
      alt: ""
    }), "Blog"))), Header_jsx("li", {
      className: `menu-item ${header_module_default.a.eventsMenuLink}`
    }, Header_jsx("a", {
      target: "_blank",
      href: "https://govevents.com"
    }, Header_jsx("img", {
      className: header_module_default.a.menuImage,
      src: "/images/menu-events.png",
      alt: ""
    }), "Go to GovEvents"))), Header_jsx("div", {
      className: `${header_module_default.a.mobileUserMenuWrap} clearfix`
    }, this._renderUserMenu()))))), Header_jsx("div", {
      className: "small-3 medium-2 large-4 columns text-right"
    }, Header_jsx("div", {
      className: `${header_module_default.a.mainUserMenuWrap} clearfix`
    }, this._renderUserMenu()))), Header_jsx(components_LoginModal, {
      open: this.state.login_open,
      toggle: () => this._toggleLogin()
    })), Header_jsx("div", {
      id: "ie-killa"
    }, Header_jsx("img", {
      src: "/images/logo.svg",
      alt: "GovWhitePapers Logo"
    }), Header_jsx("h3", null, "Sorry, your browser is not compatible with this application. Please use the latest version of Google Chrome/Chromium, Mozilla Firefox or Safari.")));
  }

}

/* harmony default export */ var components_Header = __webpack_exports__["a"] = (Header_Header);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "daOy":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"hr": "register_hr__2lqxc",
	"pageHeader": "register_pageHeader__2ljdY",
	"pageContent": "register_pageContent__20W5A",
	"controls": "register_controls__XoWiy",
	"icon": "register_icon__306mF",
	"tabs": "register_tabs__At_uX",
	"tab": "register_tab__1KE_S",
	"open": "register_open__1LRlq",
	"form": "register_form__64fCT",
	"row": "register_row__x9wO1",
	"sep": "register_sep__2Wrxd",
	"socialWrap": "register_socialWrap__1O6qo",
	"hide": "register_hide__23flX",
	"socialBlock": "register_socialBlock__3NDhW",
	"signUp": "register_signUp__1q6zi",
	"addAuthor": "register_addAuthor__1tMM-",
	"authorBlock": "register_authorBlock__Ovuvc",
	"deleteAuthor": "register_deleteAuthor__2NhkW",
	"addFile": "register_addFile__PwYwc",
	"addPhoto": "register_addPhoto__3dbsP",
	"dateBlock": "register_dateBlock__1p0lP",
	"cal": "register_cal__3pKT1",
	"agree": "register_agree__3Z2TD",
	"label": "register_label__YMGNs",
	"checkmark": "register_checkmark__3SFN7",
	"externalLink": "register_externalLink__29erC",
	"line": "register_line__1drMo",
	"copyright": "register_copyright__3iWPC",
	"nav": "register_nav__3fVg_",
	"button": "register_button__2qj6X",
	"errorText": "register_errorText__1-mY7",
	"question": "register_question__3DVVw",
	"subLabel": "register_subLabel__1SGOp",
	"dot": "register_dot__1_iPX",
	"signin": "register_signin__3WwE_",
	"agency": "register_agency__31-1Q",
	"agencyTypeSelector": "register_agencyTypeSelector__315by",
	"active": "register_active__Qe3KM",
	"agencySelector": "register_agencySelector__dCwZo",
	"agencyWrap": "register_agencyWrap__eXpsF",
	"relevant": "register_relevant__2iBgq",
	"addDivider": "register_addDivider__rMmhy",
	"topics": "register_topics__17gsz",
	"selectedTopic": "register_selectedTopic__3Cwq3",
	"close": "register_close__1eV30",
	"findOrganization": "register_findOrganization__1u-k4",
	"selectedOrganization": "register_selectedOrganization__3jc_Y",
	"results": "register_results__ADK7k"
};


/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "kE1S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordpressService; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);

const apiURL = 'https://gwpadmin.codewrangler.io/api/gwp/v1';
class WordpressService {
  async fetchWhitepapers(items, offset, topics = [], tags = [], format = '', agencies = [], search = '', start_date = '', end_date = '', sort_by = 'relevance', user_id = '', organization_id = '') {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/whitepapers/?items=${items}&offset=${offset}&topics=${topics}&tags=${tags}&format=${format}&agencies=${agencies}&s=${search}&start_date=${start_date}&end_date=${end_date}&sort_by=${sort_by}&user_id=${user_id}&organization_id=${organization_id}`);
    const whitepapers = await res.json();
    return whitepapers;
  }

  async fetchSavedSearch(id) {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/saved-search/${id}`);
    const search = await res.json();
    return search;
  }

  async fetchSavedSearches(user_id, access_token) {
    const url = `${apiURL}/saved-searches/`;
    const json = JSON.stringify({
      "access_token": access_token,
      "user_id": user_id
    });
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {
      method: 'post',
      body: json,
      headers: {
        "Content-Type": "application/json"
      }
    });
    const saved_searches = await res.json();
    return saved_searches;
  }

  async fetchWhitepaper(slug) {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/whitepapers/${slug}`);
    const whitepaper = await res.json();
    return whitepaper;
  }

  async fetchPosts(items, offset, search = '') {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/posts/?items=${items}&offset=${offset}&s=${search}`);
    const posts = await res.json();
    return posts;
  }

  async fetchSlides() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/slides`);
    const slides = await res.json();
    return slides;
  }

  async fetchPost(slug) {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/posts/${slug}`);
    const post = await res.json();
    return post;
  }

  async fetchPage(slug) {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/pages/${slug}`);
    const page = await res.json();
    return page;
  }

  async fetchFormats() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/formats/`);
    const formats = await res.json();
    return formats;
  }

  async fetchTopics() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/topics/`);
    const topics = await res.json();
    return topics;
  }

  async fetchTopic(slug) {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/topic/${slug}`);
    const topic = await res.json();
    return topic;
  }

  async fetchTags() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/tags/`);
    const tags = await res.json();
    return tags;
  }

  async fetchStats() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/fetch-stats/`);
    const stats = await res.json();
    return stats;
  }

  async fetchTeam() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/team/`);
    const team = await res.json();
    return team;
  }

  async fetchAgencies(parent) {
    let res;

    if (parent == '') {
      res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/agencies/?orderby=name`);
    } else {
      res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/agencies/?parent=${parent}`);
    }

    const agencies = await res.json();
    return agencies;
  }

  async searchOrganizations(search, items = 10) {
    if (search == '') {
      return [];
    }

    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/organizations/?search=${search}&items=${items}`);
    const orgs = await res.json();
    return orgs;
  }

  async fetchOrganization(id) {
    if (id == '') {
      return false;
    }

    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(`${apiURL}/organizations/${id}`);
    const org = await res.json();
    return org;
  }

  async fetchFavorites(access_token, items, offset) {
    const url = `${apiURL}/favorites/`;
    const json = JSON.stringify({
      "access_token": access_token,
      "items": items,
      "offset": offset
    });
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {
      method: 'post',
      body: json,
      headers: {
        "Content-Type": "application/json"
      }
    });
    const whitepapers = await res.json();
    return whitepapers;
  }

  async fetchOrganizationMembers(access_token) {
    const url = `${apiURL}/organization-members/`;
    const json = JSON.stringify({
      "access_token": access_token
    });
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {
      method: 'post',
      body: json,
      headers: {
        "Content-Type": "application/json"
      }
    });
    const members = await res.json();
    return members;
  }

  async checkFavorite(id, token) {
    //	const res = await fetch(`${apiURL}/is-favorite/`)
    const url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/is-favorite';
    const json = JSON.stringify({
      "ID": id,
      "access_token": token
    });
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {
      method: 'post',
      body: json,
      headers: {
        "Content-Type": "application/json"
      }
    });
    const r = await res.json();
    return r;
  }

  async getUser(token) {
    if (!token) {
      return false;
    }

    const url = 'https://gwpadmin.codewrangler.io/api/gwp/v1/user';
    const json = JSON.stringify({
      "access_token": token
    });
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url, {
      method: 'post',
      body: json,
      headers: {
        "Content-Type": "application/json"
      }
    });
    const r = await res.json();
    return r;
  } // async fetchHomeSlides() {
  // 	const res = await fetch(`${apiURL}/home-slides?items=4`)
  // 	const slides = await res.json()
  //
  // 	return slides
  // }


}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "remQ":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navigationWrap": "header_navigationWrap__3W-tx",
	"mainNavigation": "header_mainNavigation__1mZvu",
	"menuPrimaryMenuContainer": "header_menuPrimaryMenuContainer__2Ethz",
	"focus": "header_focus__1JPvY",
	"menu": "header_menu__18IKw",
	"eventsMenuLink": "header_eventsMenuLink__1BkQ-",
	"homeMenuLink": "header_homeMenuLink__3PtGg",
	"menuImage": "header_menuImage__1yvNa",
	"promote": "header_promote__IctKI",
	"team": "header_team__1likC",
	"blog": "header_blog__1Klgw",
	"active": "header_active__dxtyn",
	"current_page_item": "header_current_page_item__18edO",
	"current-menu-item": "header_current-menu-item__21UmS",
	"current_page_ancestor": "header_current_page_ancestor__3QbdO",
	"current-menu-ancestor": "header_current-menu-ancestor__3XyAW",
	"mobileUserMenuWrap": "header_mobileUserMenuWrap__1CwPT",
	"userMenu": "header_userMenu__iy9Aw",
	"login": "header_login__103WU",
	"button": "header_button__3QcdT",
	"getStarted": "header_getStarted__15WnA",
	"mainUserMenuWrap": "header_mainUserMenuWrap__1nbrl",
	"iconOpen": "header_iconOpen__3mybx",
	"account": "header_account__3rhBI",
	"toggled": "header_toggled__1ANyR",
	"search": "header_search__2ulKS",
	"header_button": "header_header_button__1T0Ay",
	"menuToggle": "header_menuToggle__1pz3i",
	"burger": "header_burger__vIcBc",
	"open": "header_open__1ATjX",
	"header": "header_header__22WbX",
	"logo": "header_logo__2AmUG",
	"profileMenu": "header_profileMenu__199Zd",
	"js-account-menu": "header_js-account-menu__2TnNf",
	"menuItem": "header_menuItem__22eB1",
	"logout": "header_logout__uC4Hm"
};


/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });