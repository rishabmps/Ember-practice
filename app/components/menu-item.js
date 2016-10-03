import Ember from 'ember';

export default Ember.Component.extend({
	orderManager: Ember.inject.service('order-manager'),
	mealCatagory: 'breakfast',
	actions:{
		changeCatagory(catagory){
			this.set('mealCatagory',catagory);
		},
		chooseItem(menuItemname){
			this.get('orderManager').chooseMenuOption(this.mealCatagory,menuItemname);
			
		}

	}
});
