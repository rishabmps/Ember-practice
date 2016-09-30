import Ember from 'ember';

export default Ember.Route.extend({
	return Ember.$.get('/menu/'+params.item_name+'.json');
});
