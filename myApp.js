var ownApp= angular.module("myApp",["ngRoute"]);
ownApp.config(function($routeProvider) {
		$routeProvider
		.when("/Exercise1", {
				templateUrl : "http://home.tamk.fi/~c6mahmad/WAP/Exercise1.html"
		})
		.when("/webexercise2", {
				templateUrl : "http://home.tamk.fi/~c6mahmad/WAP/webexercise2.html"
		})
		.when("/wFormExercise", {
				templateUrl : "http://home.tamk.fi/~c6mahmad/WAP/wFormExercise.html"
		})
		.when("/HomePageCSS", {
				templateUrl : "http://home.tamk.fi/~c6mahmad/WAP/HomePageCSS.html"
		})
		.when("/bootstrap2", {
				templateUrl : "http://home.tamk.fi/~c6mahmad/WAP/bootstrap2.html"
		})
		.when("/bootstrap3", {
				templateUrl : "http://home.tamk.fi/~c6mahmad/WAP/bootstrap3.html"
		})
		.when("/bootstrap4", {
				templateUrl : "http://home.tamk.fi/~c6mahmad/WAP/bootstrap4.html"
		})
		.when("/Angular1", {
				templateUrl : "http://home.tamk.fi/~c6mahmad/WAP/Angular1.html"
		})
		.when("/angular2", {
				templateUrl : "http://home.tamk.fi/~c6mahmad/WAP/angular2.html"
		})
		.when("/angular3", {
				templateUrl : "http://home.tamk.fi/~c6mahmad/WAP/angular3.html"
		})
		.when("/angular4", {
				templateUrl : "http://home.tamk.fi/~c6mahmad/WAP/angular4.html"
		})
		.when("/angular5", {
				templateUrl : "http://home.tamk.fi/~c6mahmad/WAP/angular5.html"
		})
		.when("/Employee", {
				templateUrl : "http://home.tamk.fi/~c6mahmad/WAP/Employees.html"
		})
		.when("/Departments", {
				templateUrl : "http://home.tamk.fi/~c6mahmad/WAP/Departments.html"
		})
		.when("/Projects", {
				templateUrl : "http://home.tamk.fi/~c6mahmad/WAP/Projects.html"
		});
});


ownApp.controller("bodyController",function($scope){
	$scope.name="I come from name";
	$scope.makeUpdate = function (){
		$scope.value1 += $scope.value2;
		$scope.countries =
							 [{"ID":"1067","name":"China","population":"1359821466","percentage":"19,66%","position":"1"},{"ID":"1068","name":"India","population":"1205624727","percentage":"17,43%","position":"2"},{"ID":"1069","name":"United States of America","population":"312237216","percentage":"4,51%","position":"3"},{"ID":"1070","name":"Indonesia","population":"240676485","percentage":"3,48%","position":"4"},{"ID":"1071","name":"Brazil","population":"195210154","percentage":"2,82%","position":"5"},{"ID":"1072","name":"Pakistan","population":"173113821","percentage":"2,50%","position":"6"},{"ID":"1073","name":"Nigeria","population":"159685249","percentage":"2,31%","position":"7"},{"ID":"1074","name":"Bangladesh","population":"151125475","percentage":"2,19%","position":"8"},{"ID":"1075","name":"Russian Federation","population":"143615916","percentage":"2,08%","position":"9"},{"ID":"1076","name":"Japan","population":"127352833","percentage":"1,84%","position":"10"},{"ID":"1077","name":"Mexico","population":"117886404","percentage":"1,70%","position":"11"},{"ID":"1078","name":"Philippines","population":"93444322","percentage":"1,35%","position":"12"},{"ID":"1079","name":"Viet Nam","population":"89047402","percentage":"1,29%","position":"13"},{"ID":"1080","name":"Ethiopia","population":"87095281","percentage":"1,26%","position":"14"},{"ID":"1081","name":"Germany","population":"83017404","percentage":"1,20%","position":"15"},{"ID":"1082","name":"Egypt","population":"78075705","percentage":"1,13%","position":"16"},{"ID":"1083","name":"Iran (Islamic Republic of)","population":"74462314","percentage":"1,08%","position":"17"},{"ID":"1084","name":"Turkey","population":"72137546","percentage":"1,04%","position":"18"},{"ID":"1085","name":"Thailand","population":"66400698","percentage":"0,96%","position":"19"},{"ID":"1086","name":"France","population":"63230866","percentage":"0,91%","position":"20"},{"ID":"1087","name":"Democratic Republic of the Congo","population":"62191161","percentage":"0,90%","position":"21"},{"ID":"1088","name":"United Kingdom","population":"62066350","percentage":"0,90%","position":"22"},{"ID":"1089","name":"Italy","population":"60508978","percentage":"0,87%","position":"23"},{"ID":"1090","name":"Myanmar","population":"51931231","percentage":"0,75%","position":"24"},{"ID":"1091","name":"South Africa","population":"51452352","percentage":"0,74%","position":"25"},{"ID":"1092","name":"Republic of Korea","population":"48453931","percentage":"0,70%","position":"26"},{"ID":"1093","name":"Colombia","population":"46444798","percentage":"0,67%","position":"27"},{"ID":"1094","name":"Spain","population":"46182038","percentage":"0,67%","position":"28"},{"ID":"1095","name":"Ukraine","population":"46044304","percentage":"0,67%","position":"29"},{"ID":"1096","name":"United Republic of Tanzania","population":"44973330","percentage":"0,65%","position":"30"},{"ID":"1097","name":"Kenya","population":"40909194","percentage":"0,59%","position":"31"},{"ID":"1098","name":"Argentina","population":"40374224","percentage":"0,58%","position":"32"},{"ID":"1099","name":"Poland","population":"38198754","percentage":"0,55%","position":"33"},{"ID":"1100","name":"Algeria","population":"37062820","percentage":"0,54%","position":"34"},{"ID":"1101","name":"Sudan","population":"35652002","percentage":"0,52%","position":"35"},{"ID":"1102","name":"Canada","population":"34127285","percentage":"0,49%","position":"36"},{"ID":"1103","name":"Uganda","population":"33987213","percentage":"0,49%","position":"37"},{"ID":"1104","name":"Morocco","population":"31642360","percentage":"0,46%","position":"38"},{"ID":"1105","name":"Iraq","population":"30962380","percentage":"0,45%","position":"39"},{"ID":"1106","name":"Peru","population":"29262830","percentage":"0,42%","position":"40"},{"ID":"1107","name":"Venezuela (Bolivarian Republic of)","population":"29043283","percentage":"0,42%","position":"41"},{"ID":"1108","name":"Afghanistan","population":"28397812","percentage":"0,41%","position":"42"},{"ID":"1109","name":"Malaysia","population":"28275835","percentage":"0,41%","position":"43"},{"ID":"1110","name":"Uzbekistan","population":"27769270","percentage":"0,40%","position":"44"},{"ID":"1111","name":"Saudi Arabia","population":"27258387","percentage":"0,39%","position":"45"},{"ID":"1112","name":"Nepal","population":"26842334","percentage":"0,39%","position":"46"},{"ID":"1113","name":"Dem. Peoples Republic of Korea","population":"24500520","percentage":"0,35%","position":"47"},{"ID":"1114","name":"Ghana","population":"24262901","percentage":"0,35%","position":"48"},{"ID":"1115","name":"Mozambique","population":"23967265","percentage":"0,35%","position":"49"},{"ID":"1116","name":"Other non-specified areas","population":"23145847","percentage":"0,33%","position":"50"},{"ID":"1117","name":"Yemen","population":"22763008","percentage":"0,33%","position":"51"},{"ID":"1118","name":"Australia","population":"22403889","percentage":"0,32%","position":"52"},{"ID":"1119","name":"Romania","population":"21861476","percentage":"0,32%","position":"53"},{"ID":"1120","name":"Syrian Arab Republic","population":"21532647","percentage":"0,31%","position":"54"},{"ID":"1121","name":"Madagascar","population":"21079532","percentage":"0,30%","position":"55"},{"ID":"1122","name":"Sri Lanka","population":"20758066","percentage":"0,30%","position":"56"},{"ID":"1123","name":"Cameroon","population":"20624343","percentage":"0,30%","position":"57"},{"ID":"1124","name":"Angola","population":"19549124","percentage":"0,28%","position":"58"},{"ID":"1125","name":"C?te d`Ivoire","population":"18976588","percentage":"0,27%","position":"59"},{"ID":"1126","name":"Chile","population":"17150760","percentage":"0,25%","position":"60"},{"ID":"1127","name":"Netherlands","population":"16615243","percentage":"0,24%","position":"61"},{"ID":"1128","name":"Kazakhstan","population":"15921127","percentage":"0,23%","position":"62"},{"ID":"1129","name":"Niger","population":"15893746","percentage":"0,23%","position":"63"},{"ID":"1130","name":"Burkina Faso","population":"15540284","percentage":"0,22%","position":"64"},{"ID":"1131","name":"Malawi","population":"15013694","percentage":"0,22%","position":"65"},{"ID":"1132","name":"Ecuador","population":"15001072","percentage":"0,22%","position":"66"},{"ID":"1133","name":"Cambodia","population":"14365539","percentage":"0,21%","position":"67"},{"ID":"1134","name":"Guatemala","population":"14341576","percentage":"0,21%","position":"68"},{"ID":"1135","name":"Mali","population":"13989110","percentage":"0,20%","position":"69"},{"ID":"1136","name":"Zambia","population":"13216985","percentage":"0,19%","position":"70"},{"ID":"1137","name":"Zimbabwe","population":"13076978","percentage":"0,19%","position":"71"},{"ID":"1138","name":"Senegal","population":"12947311","percentage":"0,19%","position":"72"},{"ID":"1139","name":"Chad","population":"11720781","percentage":"0,17%","position":"73"},{"ID":"1140","name":"Cuba","population":"11281768","percentage":"0,16%","position":"74"},{"ID":"1141","name":"Greece","population":"11110803","percentage":"0,16%","position":"75"},{"ID":"1142","name":"Belgium","population":"10941288","percentage":"0,16%","position":"76"},{"ID":"1143","name":"Guinea","population":"10874453","percentage":"0,16%","position":"77"},{"ID":"1144","name":"Rwanda","population":"10836732","percentage":"0,16%","position":"78"},{"ID":"1145","name":"Tunisia","population":"10631830","percentage":"0,15%","position":"79"},{"ID":"1146","name":"Portugal","population":"10589792","percentage":"0,15%","position":"80"},{"ID":"1147","name":"Czech Republic","population":"10553701","percentage":"0,15%","position":"81"},{"ID":"1148","name":"Bolivia (Plurinational State of)","population":"10156601","percentage":"0,15%","position":"82"},{"ID":"1149","name":"Dominican Republic","population":"10016797","percentage":"0,14%","position":"83"},{"ID":"1150","name":"Hungary","population":"10014633","percentage":"0,14%","position":"84"},{"ID":"1151","name":"South Sudan","population":"9940929","percentage":"0,14%","position":"85"},{"ID":"1152","name":"Haiti","population":"9896400","percentage":"0,14%","position":"86"},{"ID":"1153","name":"Serbia","population":"9647109","percentage":"0,14%","position":"87"},{"ID":"1154","name":"Somalia","population":"9636173","percentage":"0,14%","position":"88"},{"ID":"1155","name":"Benin","population":"9511082","percentage":"0,14%","position":"89"},{"ID":"1156","name":"Belarus","population":"9491072","percentage":"0,14%","position":"90"},{"ID":"1157","name":"Sweden","population":"9382122","percentage":"0,14%","position":"91"},{"ID":"1158","name":"Burundi","population":"9232753","percentage":"0,13%","position":"92"},{"ID":"1159","name":"Azerbaijan","population":"9093265","percentage":"0,13%","position":"93"},{"ID":"1160","name":"United Arab Emirates","population":"8441495","percentage":"0,12%","position":"94"},{"ID":"1161","name":"Austria","population":"8401924","percentage":"0,12%","position":"95"},{"ID":"1162","name":"Switzerland","population":"7830534","percentage":"0,11%","position":"96"},{"ID":"1163","name":"Tajikistan","population":"7627326","percentage":"0,11%","position":"97"},{"ID":"1164","name":"Honduras","population":"7621204","percentage":"0,11%","position":"98"},{"ID":"1165","name":"Israel","population":"7420589","percentage":"0,11%","position":"99"},{"ID":"1166","name":"Bulgaria","population":"7389451","percentage":"0,11%","position":"100"},{"ID":"1167","name":"China, Hong Kong SAR","population":"7049514","percentage":"0,10%","position":"101"},{"ID":"1168","name":"Papua New Guinea","population":"6858945","percentage":"0,10%","position":"102"},{"ID":"1169","name":"Paraguay","population":"6459721","percentage":"0,09%","position":"103"},{"ID":"1170","name":"Jordan","population":"6454554","percentage":"0,09%","position":"104"},{"ID":"1171","name":"Lao Peoples Democratic Republic","population":"6395713","percentage":"0,09%","position":"105"},{"ID":"1172","name":"Togo","population":"6306014","percentage":"0,09%","position":"106"},{"ID":"1173","name":"El Salvador","population":"6218195","percentage":"0,09%","position":"107"},{"ID":"1174","name":"Libya","population":"6040612","percentage":"0,09%","position":"108"},{"ID":"1175","name":"Nicaragua","population":"5822209","percentage":"0,08%","position":"109"},{"ID":"1176","name":"Sierra Leone","population":"5751976","percentage":"0,08%","position":"110"},{"ID":"1177","name":"Eritrea","population":"5741159","percentage":"0,08%","position":"111"},{"ID":"1178","name":"Denmark","population":"5550875","percentage":"0,08%","position":"112"},{"ID":"1179","name":"Slovakia","population":"5433437","percentage":"0,08%","position":"113"},{"ID":"1180","name":"Finland","population":"5367878","percentage":"0,08%","position":"114"},{"ID":"1181","name":"Kyrgyzstan","population":"5333320","percentage":"0,08%","position":"115"},{"ID":"1182","name":"Singapore","population":"5078969","percentage":"0,07%","position":"116"},{"ID":"1183","name":"Turkmenistan","population":"5041995","percentage":"0,07%","position":"117"},{"ID":"1184","name":"Norway","population":"4891314","percentage":"0,07%","position":"118"},{"ID":"1185","name":"Costa Rica","population":"4669685","percentage":"0,07%","position":"119"},{"ID":"1186","name":"Ireland","population":"4467561","percentage":"0,06%","position":"120"},{"ID":"1187","name":"Georgia","population":"4388674","percentage":"0,06%","position":"121"},{"ID":"1188","name":"New Zealand","population":"4367706","percentage":"0,06%","position":"122"},{"ID":"1189","name":"Central African Republic","population":"4349921","percentage":"0,06%","position":"123"},{"ID":"1190","name":"Lebanon","population":"4341092","percentage":"0,06%","position":"124"},{"ID":"1191","name":"Croatia","population":"4338027","percentage":"0,06%","position":"125"},{"ID":"1192","name":"Congo","population":"4111715","percentage":"0,06%","position":"126"},{"ID":"1193","name":"State of Palestine","population":"4012880","percentage":"0,06%","position":"127"},{"ID":"1194","name":"Liberia","population":"3957004","percentage":"0,06%","position":"128"},{"ID":"1195","name":"Bosnia and Herzegovina","population":"3845929","percentage":"0,06%","position":"129"},{"ID":"1196","name":"Puerto Rico","population":"3709671","percentage":"0,05%","position":"130"},{"ID":"1197","name":"Panama","population":"3678128","percentage":"0,05%","position":"131"},{"ID":"1198","name":"Mauritania","population":"3609420","percentage":"0,05%","position":"132"},{"ID":"1199","name":"Republic of Moldova","population":"3573024","percentage":"0,05%","position":"133"},{"ID":"1200","name":"Uruguay","population":"3371982","percentage":"0,05%","position":"134"},{"ID":"1201","name":"Albania","population":"3150143","percentage":"0,05%","position":"135"},{"ID":"1202","name":"Lithuania","population":"3068569","percentage":"0,04%","position":"136"},{"ID":"1203","name":"Kuwait","population":"2991574","percentage":"0,04%","position":"137"},{"ID":"1204","name":"Armenia","population":"2963352","percentage":"0,04%","position":"138"},{"ID":"1205","name":"Oman","population":"2802768","percentage":"0,04%","position":"139"},{"ID":"1206","name":"Jamaica","population":"2741485","percentage":"0,04%","position":"140"},{"ID":"1207","name":"Mongolia","population":"2712738","percentage":"0,04%","position":"141"},{"ID":"1208","name":"Namibia","population":"2178967","percentage":"0,03%","position":"142"},{"ID":"1209","name":"TFYR Macedonia","population":"2102216","percentage":"0,03%","position":"143"},{"ID":"1210","name":"Latvia","population":"2090484","percentage":"0,03%","position":"144"},{"ID":"1211","name":"Slovenia","population":"2054232","percentage":"0,03%","position":"145"},{"ID":"1212","name":"Lesotho","population":"2008921","percentage":"0,03%","position":"146"},{"ID":"1213","name":"Botswana","population":"1969341","percentage":"0,03%","position":"147"},{"ID":"1214","name":"Qatar","population":"1749671","percentage":"0,03%","position":"148"},{"ID":"1215","name":"Gambia","population":"1680640","percentage":"0,02%","position":"149"},{"ID":"1216","name":"Guinea-Bissau","population":"1586624","percentage":"0,02%","position":"150"},{"ID":"1217","name":"Gabon","population":"1556222","percentage":"0,02%","position":"151"},{"ID":"1218","name":"Trinidad and Tobago","population":"1328095","percentage":"0,02%","position":"152"},{"ID":"1219","name":"Estonia","population":"1298540","percentage":"0,02%","position":"153"},{"ID":"1220","name":"Bahrain","population":"1251510","percentage":"0,02%","position":"154"},{"ID":"1221","name":"Mauritius","population":"1230659","percentage":"0,02%","position":"155"},{"ID":"1222","name":"Swaziland","population":"1193148","percentage":"0,02%","position":"156"},{"ID":"1223","name":"Cyprus","population":"1103685","percentage":"0,02%","position":"157"},{"ID":"1224","name":"Timor-Leste","population":"1079450","percentage":"0,02%","position":"158"},{"ID":"1225","name":"Fiji","population":"860559","percentage":"0,01%","position":"159"},{"ID":"1226","name":"R?union","population":"844579","percentage":"0,01%","position":"160"},{"ID":"1227","name":"Djibouti","population":"834036","percentage":"0,01%","position":"161"},{"ID":"1228","name":"Guyana","population":"786126","percentage":"0,01%","position":"162"},{"ID":"1229","name":"Bhutan","population":"716939","percentage":"0,01%","position":"163"},{"ID":"1230","name":"Equatorial Guinea","population":"696167","percentage":"0,01%","position":"164"},{"ID":"1231","name":"Comoros","population":"683081","percentage":"0,01%","position":"165"},{"ID":"1232","name":"Montenegro","population":"620078","percentage":"0,01%","position":"166"},{"ID":"1233","name":"China, Macao SAR","population":"534626","percentage":"0,01%","position":"167"},{"ID":"1234","name":"Solomon Islands","population":"526447","percentage":"0,01%","position":"168"},{"ID":"1235","name":"Suriname","population":"524960","percentage":"0,01%","position":"169"},{"ID":"1236","name":"Western Sahara","population":"514648","percentage":"0,01%","position":"170"},{"ID":"1237","name":"Luxembourg","population":"507896","percentage":"0,01%","position":"171"},{"ID":"1238","name":"Cape Verde","population":"487601","percentage":"0,01%","position":"172"},{"ID":"1239","name":"Guadeloupe","population":"458570","percentage":"0,01%","position":"173"},{"ID":"1240","name":"Malta","population":"424738","percentage":"0,01%","position":"174"},{"ID":"1241","name":"Martinique","population":"400810","percentage":"0,01%","position":"175"},{"ID":"1242","name":"Brunei Darussalam","population":"400569","percentage":"0,01%","position":"176"},{"ID":"1243","name":"Bahamas","population":"360498","percentage":"0,01%","position":"177"},{"ID":"1244","name":"Maldives","population":"325639","percentage":"0,00%","position":"178"},{"ID":"1245","name":"Iceland","population":"318057","percentage":"0,00%","position":"179"},{"ID":"1246","name":"Belize","population":"308595","percentage":"0,00%","position":"180"},{"ID":"1247","name":"Barbados","population":"280396","percentage":"0,00%","position":"181"},{"ID":"1248","name":"French Polynesia","population":"268065","percentage":"0,00%","position":"182"},{"ID":"1249","name":"New Caledonia","population":"246379","percentage":"0,00%","position":"183"},{"ID":"1250","name":"Vanuatu","population":"236299","percentage":"0,00%","position":"184"},{"ID":"1251","name":"French Guiana","population":"231169","percentage":"0,00%","position":"185"},{"ID":"1252","name":"Mayotte","population":"204353","percentage":"0,00%","position":"186"},{"ID":"1253","name":"Samoa","population":"186029","percentage":"0,00%","position":"187"},{"ID":"1254","name":"Sao Tome and Principe","population":"178228","percentage":"0,00%","position":"188"},{"ID":"1255","name":"Saint Lucia","population":"177397","percentage":"0,00%","position":"189"},{"ID":"1256","name":"Channel Islands","population":"159518","percentage":"0,00%","position":"190"},{"ID":"1257","name":"Guam","population":"159440","percentage":"0,00%","position":"191"},{"ID":"1258","name":"Cura?ao","population":"147560","percentage":"0,00%","position":"192"},{"ID":"1259","name":"Saint Vincent and the Grenadines","population":"109316","percentage":"0,00%","position":"193"},{"ID":"1260","name":"United States Virgin Islands","population":"106382","percentage":"0,00%","position":"194"},{"ID":"1261","name":"Grenada","population":"104677","percentage":"0,00%","position":"195"},{"ID":"1262","name":"Tonga","population":"104098","percentage":"0,00%","position":"196"},{"ID":"1263","name":"Micronesia (Fed. States of)","population":"103619","percentage":"0,00%","position":"197"},{"ID":"1264","name":"Aruba","population":"101597","percentage":"0,00%","position":"198"},{"ID":"1265","name":"Kiribati","population":"97743","percentage":"0,00%","position":"199"},{"ID":"1266","name":"Seychelles","population":"91208","percentage":"0,00%","position":"200"},{"ID":"1267","name":"Antigua and Barbuda","population":"87233","percentage":"0,00%","position":"201"},{"ID":"1268","name":"Isle of Man","population":"83992","percentage":"0,00%","position":"202"},{"ID":"1269","name":"Andorra","population":"77907","percentage":"0,00%","position":"203"},{"ID":"1270","name":"Dominica","population":"71167","percentage":"0,00%","position":"204"},{"ID":"1271","name":"Bermuda","population":"64951","percentage":"0,00%","position":"205"},{"ID":"1272","name":"Greenland","population":"56546","percentage":"0,00%","position":"206"},{"ID":"1273","name":"American Samoa","population":"55636","percentage":"0,00%","position":"207"},{"ID":"1274","name":"Cayman Islands","population":"55509","percentage":"0,00%","position":"208"},{"ID":"1275","name":"Northern Mariana Islands","population":"53860","percentage":"0,00%","position":"209"},{"ID":"1276","name":"Marshall Islands","population":"52428","percentage":"0,00%","position":"210"},{"ID":"1277","name":"Saint Kitts and Nevis","population":"52352","percentage":"0,00%","position":"211"},{"ID":"1278","name":"Faeroe Islands","population":"49581","percentage":"0,00%","position":"212"},{"ID":"1279","name":"Sint Maarten (Dutch part)","population":"42519","percentage":"0,00%","position":"213"},{"ID":"1280","name":"Monaco","population":"36845","percentage":"0,00%","position":"214"},{"ID":"1281","name":"Liechtenstein","population":"36120","percentage":"0,00%","position":"215"},{"ID":"1282","name":"Turks and Caicos Islands","population":"30993","percentage":"0,00%","position":"216"},{"ID":"1283","name":"San Marino","population":"30861","percentage":"0,00%","position":"217"},{"ID":"1284","name":"Gibraltar","population":"29253","percentage":"0,00%","position":"218"},{"ID":"1285","name":"British Virgin Islands","population":"27223","percentage":"0,00%","position":"219"},{"ID":"1286","name":"Palau","population":"20470","percentage":"0,00%","position":"220"},{"ID":"1287","name":"Cook Islands","population":"20284","percentage":"0,00%","position":"221"},{"ID":"1288","name":"Caribbean Netherlands","population":"17616","percentage":"0,00%","position":"222"},{"ID":"1289","name":"Anguilla","population":"13768","percentage":"0,00%","position":"223"},{"ID":"1290","name":"Wallis and Futuna Islands","population":"13565","percentage":"0,00%","position":"224"},{"ID":"1291","name":"Nauru","population":"10025","percentage":"0,00%","position":"225"},{"ID":"1292","name":"Tuvalu","population":"9827","percentage":"0,00%","position":"226"},{"ID":"1293","name":"Saint Pierre and Miquelon","population":"6047","percentage":"0,00%","position":"227"},{"ID":"1294","name":"Montserrat","population":"4953","percentage":"0,00%","position":"228"},{"ID":"1295","name":"Saint Helena","population":"4244","percentage":"0,00%","position":"229"},{"ID":"1296","name":"Falkland Islands (Malvinas)","population":"3017","percentage":"0,00%","position":"230"},{"ID":"1297","name":"Niue","population":"1468","percentage":"0,00%","position":"231"},{"ID":"1298","name":"Tokelau","population":"1135","percentage":"0,00%","position":"232"},{"ID":"1299","name":"Holy See","population":"799","percentage":"0,00%","position":"233"}];
	};
	$scope.doingClick = function (index){
	console.log($scope.nameArray[index].email);
	$scope.value1 = $scope.nameArray[index].email;
	}
});

// working with country list
ownApp.controller('countriesCtrl', function($scope, $http) {
  $http.get("http://home.tamk.fi/~kujesa/countries.php").then(function (response) {
      $scope.countriesData = response.data;
  });
});

//(Employee controller)
ownApp.controller('EmployeesCtrl', function($scope, $http) {
  $http.get("http://home.tamk.fi/~kujesa/api_cmd/index.php/employees").then(function (response) {
      $scope.EmployeesData = response.data.data;
			$scope.showData= function(index){
				$scope.selectedIndex=index;
			};
			$scope.addEmployee= function(){
			};
			$scope.editIndex= function(){
			};
			$scope.delete = function(index) {
    		if (confirm("Are you sure?")) {
        	$scope.filteredEmployee.splice(index,1);
    		}
			};
  });
});

//(Employee controller)
ownApp.controller('DepartmentsCtrl', function($scope, $http) {
  $http.get("http://home.tamk.fi/~kujesa/api_cmd/index.php/departments").then(function (response) {
      $scope.departmentsData = response.data.data;
			$scope.showData= function(index){
				$scope.selectedIndex=index;
			};
			$scope.addDepartment= function(){
			};
			$scope.editIndex= function(){
			};
			$scope.delete = function(index) {
    		if (confirm("Are you sure?")) {
        	$scope.filteredDepartment.splice(index,1);
    		}
			};
  });
});

//(Employee controller)
ownApp.controller('ProjectsCtrl', function($scope, $http) {
  $http.get( "http://home.tamk.fi/~kujesa/api_cmd/index.php/projects")
	.then(function (response) {
      $scope.projectsData = response.data.data;
		});

		//Post data(Project) to or current project list
			$scope.postData= function() {

				var data = {"id" : " ","pname" : $scope.pAddName, "plocation" : $scope.pAddLocation, "dno": $scope.pAddDno};
				$scope.projectsData.push(data);
				$http.post('http://home.tamk.fi/~kujesa/api_cmd/index.php/projects', data)
				.success(function (data, status, headers, config) {
					    $scope.PostDataResponse = data;
				  })
				.error(function (data, status, header, config) {
					    $scope.ResponseDetails = "Data: " + data +
						    "<hr />status: " + status +
					      "<hr />headers: " + header +
					      "<hr />config: " + config;
					});
				$scope.clearAddModal();
		  };
			//Clear all field in Add modal
			$scope.clearAddModal= function(){
				$scope.pAddName="";
				$scope.pAddLocation="";
				$scope.pAddDno="";
			}
			//save index of data in table in order to further case
			$scope.saveIndex= function(index){
				$scope.selectedIndex=index;
				};

			//clone an object
			$scope.clone= function(item){
				$scope.cloneObject=angular.copy(item);
				$scope.EditingIndex= $scope.projectsData.indexOf(item);
			};

			//the last state of editing process
			$scope.submitEdit=function(){
				$scope.projectsData[$scope.EditingIndex]=$scope.cloneObject;
				var data = {"pname" : $scope.cloneObject.pname , "plocation" : $scope.cloneObject.plocation , "dno": $scope.cloneObject.dno };
				$scope.projectsData.push(data);
				$http.put('http://home.tamk.fi/~kujesa/api_cmd/index.php/projects/'+ $scope.cloneObject.id, data)
				.success(function (data, status, headers, config) {
					    $scope.PostDataResponse = data;
				  })
				.error(function (data, status, header, config) {
					    $scope.ResponseDetails = "Data: " + data +
						    "<hr />status: " + status +
					      "<hr />headers: " + header +
					      "<hr />config: " + config;
					});
			};

			//Delete an object from list
			$scope.deleteData = function(item) {
				var index= $scope.projectsData.indexOf(item);
    		if (confirm("Are you sure?")) {
					$http.delete( "http://home.tamk.fi/~kujesa/api_cmd/index.php/projects/"+item.id)
        	$scope.projectsData.splice(index,1);
    		}
			};

});
