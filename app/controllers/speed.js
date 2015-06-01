import Ember from 'ember';

var SpeedController = Ember.ArrayController.extend({

  firstSelectOptions: [    
    {
      label: 'Select unit 1',
      value: ''
    },
    {
      label: 'Kilometers per hour',
      value: 'kmph'
    },
    {
      label: 'Miles per hour',
      value: 'mph'
    },
    {
      label: 'Meters per second',
      value: 'ms'
    },
    {
      label: 'Mach',
      value: 'm'
    },
    {
      label: 'Speed of light',
      value: 'sol'
    },
  ],

  secondSelectOptions: [
    {
      label: 'Select unit 2',
      value: ''
    },
    {
      label: 'Kilometers per hour',
      value: 'kmph'
    },
    {
      label: 'Miles per hour',
      value: 'mph'
    },
    {
      label: 'Meters per second',
      value: 'ms'
    },
    {
      label: 'Mach',
      value: 'm'
    },
    {
      label: 'Speed of light',
      value: 'sol'
    },
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
      	if(first_option.value == "kmph"){
          this.kmphToOther(second_option);
				}
				else if(first_option.value == "mph"){
          this.mphToOther(second_option);
				}
				else if(first_option.value == "ms"){
          this.msToOther(second_option);
				}
				else if(first_option.value == "sol"){
          this.solToOther(second_option);
				}
      } else {
        this.set('outputValue', "Enter some input value")
      }

    }
  }.observes('firstInputValue', 'selectedSecondOption'),

  kmphToOther: function(second_option) {
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption')
    if(second_value == "mph") {
      var output_value = (input_value * 0.621371);
    }else if(second_value == "ms") {
      var output_value = (input_value * 0.277778);
    } else if(second_value == "m") {
      var output_value = (input_value * 0.00081630);
    } else if(second_value == "sol") {
      var output_value = (input_value * 9.2656693110598e-10);
    }
    this.set('outputValue', output_value);
    // this.setLocalStorage(firstUnit, secondUnit, input_value, output_value);
  },

  mphToOther: function(second_option) {
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption')
    if(second_value == "kmph") {
      var output_value = (input_value * 1.609344);
    }else if(second_value == "ms") {
      var output_value = (input_value * 0.44704);
    } else if(second_value == "m") {
      var output_value = (input_value * 0.00130332361516);
    } else if(second_value == "sol") {
      var output_value = (input_value * 1.491164931174e-9);
    }
    this.set('outputValue', output_value);
    // this.setLocalStorage(firstUnit, secondUnit, input_value, output_value);
  },

  msToOther: function(second_option) {
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption')
    if(second_value == "mph") {
      var output_value = (input_value * 2.236936292054 );
    }else if(second_value == "kmph") {
      var output_value = (input_value * 3.6);
    } else if(second_value == "m") {
      var output_value = (input_value * 0.002915451895044);
    } else if(second_value == "sol") {
      var output_value = (input_value * 3.335640951982e-9);
    }
    this.set('outputValue', output_value);
    // this.setLocalStorage(firstUnit, secondUnit, input_value, output_value);
  },

  solToOther: function(second_option) {
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption')
    if(second_value == "mph") {
      var output_value = (input_value * 670616629.3844);
    }else if(second_value == "ms") {
      var output_value = (input_value * 299792458);
    } else if(second_value == "m") {
      var output_value = (input_value * 582749918.3585);
    } else if(second_value == "kmph") {
      var output_value = (input_value * 1079252848.8);
    }
    this.set('outputValue', output_value);
    // this.setLocalStorage(firstUnit, secondUnit, input_value, output_value);
  },
});


export default SpeedController;
