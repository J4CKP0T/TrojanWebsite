'use strict';

angular.module('trojanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('contacts', {
      	abstract: true,
      	url: '/contacts',
      	templateUrl: 'app/contacts/contacts.html'
      })
      .state('contacts.phone', {
      	url: '',
      	views: {
      		'': {
      			templateUrl: 'app/contacts/phone/phone.html'
      		}
      	}
      	
      })
      .state('contacts.location', {
      	url: '/location',
      	views: {
      		'': {
      			templateUrl: 'app/contacts/location/location.html',
            controller: 'LocationCtrl'
      		}
      	}
      })
      .state('contacts.mail', {
      	url: '/message',
      	views: {
      		'': {
      			templateUrl: 'app/contacts/mail/mail.html'
      		}
      	}
      });
  });