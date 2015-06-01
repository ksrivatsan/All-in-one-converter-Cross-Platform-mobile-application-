import Ember from 'ember';

var DistanceController = Ember.ArrayController.extend({

  firstSelectOptions: [    
    {
      label: 'Select unit 1',
      value: ''
    },
    {
      label: 'Kilometers',
      value: 'km'
    },
    {
      label: 'Miles',
      value: 'm'
    },
    {
      label: 'Meters',
      value: 'mt'
    },
    {
      label: 'Millimeters',
      value: 'mmt'
    },
    {
      label: 'Centimeters',
      value: 'cm'
    },
    {
      label: 'Inches',
      value: 'in'
    },
    {
      label: 'Yards',
      value: 'y'
    },
    {
      label: 'Foot',
      value: 'f'
    }
  ],

  secondSelectOptions: [
    {
      label: 'Select unit 2',
      value: ''
    },
    {
      label: 'Kilometers',
      value: 'km'
    },
    {
      label: 'Miles',
      value: 'm'
    },
    {
      label: 'Meters',
      value: 'mt'
    },
    {
      label: 'Millimeters',
      value: 'mmt'
    },
    {
      label: 'Centimeters',
      value: 'cm'
    },
    {
      label: 'Inches',
      value: 'in'
    },
    {
      label: 'Yards',
      value: 'y'
    },
    {
      label: 'Foot',
      value: 'f'
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
        if (first_option.value == "km") {
          this.kilometerToOther(second_option);
        } else if (first_option.value == "m") {
          this.mileToOther(second_option);
        } else if (first_option.value == "mt") {
          this.meterToOther(second_option);
        } else if (first_option.value == "mmt") {
          this.millimeterToOther(second_option);
        } else if (first_option.value == "cm") {
          this.centimeterToOther(second_option);
        } else if (first_option.value == "in") {
          this.inchToOther(second_option);
        } else if (first_option.value == "y") {
          this.yardToOther(second_option);
        } else if (first_option.value == "f") {
          this.footToOther(second_option);
        }
      } else {
        this.set('outputValue', "Enter some input value")
      }

    }
  }.observes('firstInputValue', 'selectedSecondOption'),

  kilometerToOther: function(second_option) {
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption')
    if(second_value == "m") {
      alert(input_value)
      var output_value = (input_value * 0.621371);
    }else if(second_value == "mt") {
      var output_value = (input_value * 1000);
    } else if(second_value == "cm") {
      var output_value = (input_value * 100000);
    } else if(second_value == "mmt") {
      var output_value = (input_value * 1000000);
    } else if(second_value == "in") {
      var output_value = (input_value * 39370.1);
    } else if(second_value == "y") {
      var output_value = (input_value * 1093.61);
    } else if(second_value == "f") {
      var output_value = (input_value * 3280.84);
    }
    this.set('outputValue', output_value);
    this.setLocalStorage(firstUnit, secondUnit, input_value, output_value);
    // this.setLocalStorage();
  },

  mileToOther: function(second_option) {
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    if (second_value == "km") {
      var output_value = (input_value / 0.621371);
    } else if(second_value == "mt") {
      var output_value = (input_value * 1609.34);
    } else if(second_value == "cm") {
      var output_value = (input_value * 160934);
    } else if(second_value == "mmt") {
      var output_value = (input_value * 1.609e+6);
    } else if(second_value == "in") {
      var output_value = (input_value * 63360);
    } else if(second_value == "y") {
      var output_value = (input_value * 1760);
    } else if(second_value == "f") {
      var output_value = (input_value * 5280);
    }
    this.set('outputValue', output_value);
  },

  meterToOther: function(second_option){
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    if (second_value == "km") {
      var output_value = (input_value * 0.001);
    } else if(second_value == "m") {
      var output_value = (input_value * 0.000621371);
    } else if(second_value == "cm") {
      var output_value = (input_value * 100);
    } else if(second_value == "mmt") {
      var output_value = (input_value * 1000);
    } else if(second_value == "in") {
      var output_value = (input_value * 39.3701);
    } else if(second_value == "y") {
      var output_value = (input_value * 1.09361);
    } else if(second_value == "f") {
      var output_value = (input_value * 3.28084);
    }
    this.set('outputValue', output_value);
  },

  millimeterToOther: function(second_option){
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    if (second_value == "km") {
      var output_value = (input_value * 1e-6);
    } else if(second_value == "m") {
      var output_value = (input_value * 6.2137e-7);
    } else if(second_value == "cm") {
      var output_value = (input_value * 0.1);
    } else if(second_value == "mt") {
      var output_value = (input_value * 0.001);
    } else if(second_value == "in") {
      var output_value = (input_value * 0.0393701);
    } else if(second_value == "y") {
      var output_value = (input_value * 0.00109361);
    } else if(second_value == "f") {
      var output_value = (input_value * 0.00328084);
    }
    this.set('outputValue', output_value);
  }, 

  centimeterToOther: function(second_option) {
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    if (second_value == "km") {
      var output_value = (input_value * 1e-5);
    } else if(second_value == "m") {
      var output_value = (input_value * 6.2137e-6);
    } else if(second_value == "mmt") {
      var output_value = (input_value * 10);
    } else if(second_value == "mt") {
      var output_value = (input_value * 0.01);
    } else if(second_value == "in") {
      var output_value = (input_value * 0.393701);
    } else if(second_value == "y") {
      var output_value = (input_value * 0.0109361);
    } else if(second_value == "f") {
      var output_value = (input_value * 0.0328084);
    }
    this.set('outputValue', output_value);
  }, 

  inchToOther: function(second_option){
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    if (second_value == "km") {
      var output_value = (input_value / 2.54e-5);
    } else if(second_value == "m") {
      var output_value = (input_value * 0.0254);
    } else if(second_value == "mmt") {
      var output_value = (input_value * 25.4);
    } else if(second_value == "mt") {
      var output_value = (input_value * 0.0254);
    } else if(second_value == "cm") {
      var output_value = (input_value * 2.54);
    } else if(second_value == "y") {
      var output_value = (input_value * 0.0277778);
    } else if(second_value == "f") {
      var output_value = (input_value * 0.0833333);
    }
    this.set('outputValue', output_value);
  },

  yardToOther: function(second_option){
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    if (second_value == "km") {
      var output_value = (input_value * 0.0009144);
    } else if(second_value == "m") {
      var output_value = (input_value * 0.000568182);
    } else if(second_value == "mmt") {
      var output_value = (input_value * 914.4);
    } else if(second_value == "mt") {
      var output_value = (input_value * 0.9144);
    } else if(second_value == "cm") {
      var output_value = (input_value * 91.44);
    } else if(second_value == "in") {
      var output_value = (input_value * 36);
    } else if(second_value == "f") {
      var output_value = (input_value * 3);
    }
    this.set('outputValue', output_value);
  },

  footToOther: function(second_option){
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    if (second_value == "km") {
      var output_value = (input_value * 0.0088392);
    } else if(second_value == "m") {
      var output_value = (input_value * 0.00549242);
    } else if(second_value == "mmt") {
      var output_value = (input_value * 8839.2);
    } else if(second_value == "mt") {
      var output_value = (input_value * 8.8392);
    } else if(second_value == "cm") {
      var output_value = (input_value * 883.92);
    } else if(second_value == "in") {
      var output_value = (input_value * 348);
    } else if(second_value == "y") {
      var output_value = (input_value * 9.66667);
    }
    this.set('outputValue', output_value);
  },

  setLocalStorage: function(firstUnit, secondUnit, input_value, output_value){
    var self = this;
    // var store_value = this.store.find('conversionstore');
    // console.log(store_value);
    var id_for_object = Math.random();
    var detailsObject = {
      metricName: 'Distance',
      metricFirstUnit: firstUnit.value,
      metricSecondUnit: secondUnit.value,
      metricFirstUnitValue: input_value,
      metricSecondUnitValue: output_value
    }
    var new_record = this.store.createRecord('conversionstore', JSON.stringify(detailsObject));
    new_record.save();
  }
  
});


export default DistanceController;
