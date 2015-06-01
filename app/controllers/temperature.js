import Ember from 'ember';

var TemperatureController = Ember.ArrayController.extend({

  firstSelectOptions: [    
    {
      label: 'Select unit 1',
      value: ''
    },
    {
      label: 'Celcius',
      value: 'c'
    },
    {
      label: 'Farenheit',
      value: 'f'
    },
    {
      label: 'Kelvin',
      value: 'k'
    },
  ],

  secondSelectOptions: [
    {
      label: 'Select unit 1',
      value: ''
    },
    {
      label: 'Celcius',
      value: 'c'
    },
    {
      label: 'Farenheit',
      value: 'f'
    },
    {
      label: 'Kelvin',
      value: 'k'
    }
  ],


  selectedFirstOptionDidChange: function() {
    this.set('outputValue', 'Select second unit');
  }.observes('selectedFirstOption', 'selectedSecondOption'),

  firstInputValueDidChange: function() {
    var input_value = this.get('firstInputValue');
    var first_option = this.get('selectedFirstOption');
    var second_option = this.get('selectedSecondOption');
    if (first_option.value == second_option.value) {
      if (input_value) {
        this.set('outputValue', input_value);
      } else {
        this.set('outputValue', "Select Unit to Convert");
      }
    } else if(first_option.value != second_option.value) {
      if(input_value){
        if (first_option.value == "c") {
          this.celcuisToOther(second_option);
        } else if (first_option.value == "f") {
          this.farenheitToOther(second_option);
        } else if (first_option.value == "k") {
          this.kelvinToOther(second_option);
        }
      } else {
        this.set('outputValue', "Enter some input value")
      }

    }
  }.observes('firstInputValue', 'selectedSecondOption'),

  celcuisToOther: function(second_option) {
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption')
    if(second_value == "f") {
      var output_value = (((input_value * 9)/5) + 32 );
    }else if(second_value == "k") {
      var output_value = (input_value + 273.15);
    }
    this.set('outputValue', output_value);
  },

  farenheitToOther: function(second_option) {
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption')
    if(second_value == "c") {
      var output_value = ((input_value - 32) * 5/9);
    }else if(second_value == "k") {
      var output_value = ((input_value + 459.67) * (5/9));
    }
    this.set('outputValue', output_value);
  },

  kelvinToOther: function(second_option) {
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption')
    if(second_value == "c") {
      var output_value = (input_value - 273.15);
    }else if(second_value == "f") {
      var output_value = ((input_value * 1.8) - 459.67);
    }
    this.set('outputValue', output_value);
  },
  
});


export default TemperatureController;
