// angular.module('facts', [])
// .directive('tab', function() {
// 	return function($scope, element, attributes) {
// 		$(element).child('a').click(function(e) {
// 			e.preventDefault();
// 			$(this).tab('show');
// 		});
// 	};
// });

angular.module('Facts', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/fact/:factName*', {
			templateUrl: 'partials/fact.html',
			controller: 'FactCtrl'
		});
}])
.controller('FactCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	console.log($routeParams);
	$scope.fact = {
		text: 'This is a fact.',
		detail: 'This is more detailed information about the fact.',
		evidence: [{
			brief: 'Facts are facts',
			link: 'facts_are_facts',
			citation: {
				title: 'This is a fact.',
				author: 'Blake La Pierre',
				date: 'October 14, 2013'
			}
		}],
		relevance: [],
		domain: [{
			name: 'All'
		},{
			name: 'Facts'
		}],
		history: [],
		discussions: []
	};
}])
.directive('domainBreadcrumb', function() {
	return {
		restrict: 'E',
		scope: {
			domain: '=domain'
		},
		template: '<ol class="breadcrumb"><li ng-repeat="d in domain">{{d.name}}</li></ol>'
	};
})
.directive('evidenceList', function() {
	return {
		restrict: 'E',
		template: 
			'<ul class="list-group">' +
				'<li class="list-group-item" ng-repeat="evidence in fact.evidence">' +
					'{{evidence.brief}} - <a href="{{evidence.link}}">{{evidence.citation.title}} {{evidence.citation.author}} {{evidence.citation.date}}</a>' +
				'</li>' +
			'</ul>'
	};
});