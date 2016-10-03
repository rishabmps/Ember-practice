import Ember from 'ember';

export default Ember.Service.extend({
	selectedDay: 'Monday',

	menuSelection:{
		Monday:{},
		Tuesday:{},
		Wednesday:{},
		Thursday:{},
		Friday:{},

	},

	selectedDayTo(day){
		this.set('selectedDay',day);
	},

	chooseMenuOption(mealcategory, menuItemName){

		this.set('menuSelection'+'.'+this.get('selectedDay')+'.'+mealcategory,menuItemName);
		
	},

	removeMenuOption(day, mealcategory){
		this.set('menuSelection.'+day+'.'+mealcategory,'');
	}


});
