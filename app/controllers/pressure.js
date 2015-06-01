import Ember from 'ember';

var PressureController = Ember.ArrayController.extend({

  firstSelectOptions: [    
    {
      label: 'Select unit 1',
      value: ''
    },
    {
      label: 'Atmosphere',
      value: 'atm'
    },
    {
      label: 'bar',
      value: 'b'
    },
    {
      label: 'dynes/cm2',
      value: 'dcm'
    },
    {
      label: 'in. Hg',
      value: 'ihg'
    },
    {
      label: 'in. water',
      value: 'iw'
    },
    {
      label: 'kg/cm2',
      value: 'k'
    },
    {
      label: 'mbar',
      value: 'm'
    },
    {
      label: 'mtorr or micron',
      value: 'mtm'
    },
    {
      label: 'Pa or N/m2',
      value: 'pnm'
    },
    {
      label: 'PSI or lb/in2',
      value: 'psi'
    }

  ],

  secondSelectOptions: [
    {
      label: 'Select unit 1',
      value: ''
    },
    {
      label: 'Atmosphere',
      value: 'atm'
    },
    {
      label: 'bar',
      value: 'b'
    },
    {
      label: 'dynes/cm2',
      value: 'dcm'
    },
    {
      label: 'in. Hg',
      value: 'ihg'
    },
    {
      label: 'in. water',
      value: 'iw'
    },
    {
      label: 'kg/cm2',
      value: 'k'
    },
    {
      label: 'mbar',
      value: 'm'
    },
    {
      label: 'mtorr or micron',
      value: 'mtm'
    },
    {
      label: 'Pa or N/m2',
      value: 'pnm'
    },
    {
      label: 'PSI or lb/in2',
      value: 'psi'
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
        if(first_option.value == "atm"){
          this.atmToOther(second_option);
        }
        else if(first_option.value == "b"){
          this.bToOther(second_option);
        }
        else if(first_option.value == "dcm"){
          this.dcmToOther(second_option);
        }
        else if(first_option.value == "ihg"){
          this.ihgToOther(second_option);
        }
        else if(first_option.value == "iw"){
          this.iwToOther(second_option);
        }
        else if(first_option.value == "k"){
          this.kToOther(second_option);
        }
        else if(first_option.value == "m"){
          this.mToOther(second_option);
        }
        else if(first_option.value == "mtm"){
          this.mtmToOther(second_option);
        }
        else if(first_option.value == "pnm"){
          this.pnmToOther(second_option);
        }
        else if(first_option.value == "psi"){
          this.psiToOther(second_option);
        }
      } else {
        this.set('outputValue', "Enter some input value")
      }

    }
  }.observes('firstInputValue', 'selectedSecondOption'),

  atmToOther: function(second_option) {
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption');
    if(second_value == "b"){
      var output_value = input_value * 1.01295;
    }
    else if(second_value == "dcm"){
      var output_value = input_value * 1.01295 * 10e6;
    }
    else if(second_value == "ihg"){
      var output_value = input_value * 29.9213;
    }
    else if(second_value == "iw"){
      var output_value = input_value * 406.86;
    }
    else if(second_value == "k"){
      var output_value = input_value * 1.03325;
    }
    else if(second_value == "m"){
      var output_value = input_value * 1012.95;
    }
    else if(second_value == "mtm"){
      var output_value = input_value * 7.6 * 10e5;
    }
    else if(second_value == "pnm"){
      var output_value = input_value * 1.01295 * 10e5;
    }
    else if(second_value == "psi"){
      var output_value = input_value * 14.696;
    }
    this.set('outputValue', output_value);
  },

  bToOther: function(second_option){
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption');
    if(second_value == "atm"){
      var output_value = input_value * 0.9872;
    }
    else if(second_value == "dcm"){
      var output_value = input_value * 1 * 10e6;
    }
    else if(second_value == "ihg"){
      var output_value = input_value * 29.54;
    }
    else if(second_value == "iw"){
      var output_value = input_value * 401.65;
    }
    else if(second_value == "k"){
      var output_value = input_value * 1.02;
    }
    else if(second_value == "m"){
      var output_value = input_value * 1000;
    }
    else if(second_value == "mtm"){
      var output_value = input_value * 7.5028 * 10e5;
    }
    else if(second_value == "pnm"){
      var output_value = input_value * 1 * 10e5;
    }
    else if(second_value == "psi"){
      var output_value = input_value * 14.503861;
    }
    this.set('outputValue', output_value);


  },
  dcmToOther: function(second_option){
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption');
    if(second_value == "b"){
      var output_value = input_value * 1 * 10e-6;
    }
    else if(second_value == "atm"){
      var output_value = input_value * 9.872 * 10e-7;
    }
    else if(second_value == "ihg"){
      var output_value = input_value * 2.954 * 10e-5;
    }
    else if(second_value == "iw"){
      var output_value = input_value * 4.0165 * 10e-4;
    }
    else if(second_value == "k"){
      var output_value = input_value * 1.0200 * 10e-6;
    }
    else if(second_value == "m"){
      var output_value = input_value * 1 * 10e-3;
    }
    else if(second_value == "mtm"){
      var output_value = input_value * 0.75028;
    }
    else if(second_value == "pnm"){
      var output_value = input_value * 0.1;
    }
    else if(second_value == "psi"){
      var output_value = input_value * 1.4508 * 10e-5;
    }
    this.set('outputValue', output_value);


  },
  ihgToOther: function(second_option){
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption');
    if(second_value == "b"){
      var output_value = input_value * 3.385 * 10e-2;
    }
    else if(second_value == "dcm"){
      var output_value = input_value * 3.385 * 10e4;
    }
    else if(second_value == "atm"){
      var output_value = input_value * 3.342 * 10e-2;
    }
    else if(second_value == "iw"){
      var output_value = input_value * 13.598;
    }
    else if(second_value == "k"){
      var output_value = input_value * 3.4532 * 10e-2;
    }
    else if(second_value == "m"){
      var output_value = input_value * 33.85;
    }
    else if(second_value == "mtm"){
      var output_value = input_value * 2.54 * 10e4;
    }
    else if(second_value == "pnm"){
      var output_value = input_value * 3385;
    }
    else if(second_value == "psi"){
      var output_value = input_value * 0.4912;
    }
    this.set('outputValue', output_value);


  },
  iwToOther: function(second_option){
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption');
    if(second_value == "b"){
      var output_value = input_value * 2.489 * 10e-3;
    }
    else if(second_value == "dcm"){
      var output_value = input_value * 2.489 * 10e3;
    }
    else if(second_value == "ihg"){
      var output_value = input_value * 7.354 * 10e-2;
    }
    else if(second_value == "atm"){
      var output_value = input_value * 2.458 * 10e-3;
    }
    else if(second_value == "k"){
      var output_value = input_value * 2.5396 * 10e-3;
    }
    else if(second_value == "m"){
      var output_value = input_value * 2.489;
    }
    else if(second_value == "mtm"){
      var output_value = input_value * 1.868 * 10e-3;
    }
    else if(second_value == "pnm"){
      var output_value = input_value * 248.9;
    }
    else if(second_value == "psi"){
      var output_value = input_value * 3.612 * 10e-2;
    }
    this.set('outputValue', output_value);


  },
  kToOther: function(second_option){
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption');
    if(second_value == "b"){
      var output_value = input_value * 0.9804;
    }
    else if(second_value == "dcm"){
      var output_value = input_value * 9.804 * 10e5;
    }
    else if(second_value == "ihg"){
      var output_value = input_value * 28.958;
    }
    else if(second_value == "iw"){
      var output_value = input_value * 393.76;
    }
    else if(second_value == "atm"){
      var output_value = input_value * 0.9678;
    }
    else if(second_value == "m"){
      var output_value = input_value * 9.804 * 10e2;
    }
    else if(second_value == "mtm"){
      var output_value = input_value * 7.3554 * 10e5;
    }
    else if(second_value == "pnm"){
      var output_value = input_value * 9.804 * 10e4;
    }
    else if(second_value == "psi"){
      var output_value = input_value * 14.223;
    }
    this.set('outputValue', output_value);


  },
  mToOther: function(second_option){
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption');
    if(second_value == "b"){
      var output_value = input_value * 0.001;
    }
    else if(second_value == "dcm"){
      var output_value = input_value * 1000;
    }
    else if(second_value == "ihg"){
      var output_value = input_value * 2.954 * 10e-2;
    }
    else if(second_value == "iw"){
      var output_value = input_value * 0.4018;
    }
    else if(second_value == "k"){
      var output_value = input_value * 1.0200 * 10e-3;
    }
    else if(second_value == "atm"){
      var output_value = input_value * 9.872 * 10e-4;
    }
    else if(second_value == "mtm"){
      var output_value = input_value * 7.6 * 7.5028 * 10e2;
    }
    else if(second_value == "pnm"){
      var output_value = input_value * 100;
    }
    else if(second_value == "psi"){
      var output_value = input_value * 1.450 * 10e-2;
    }
    this.set('outputValue', output_value);


  },
  mtmToOther: function(second_option){
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption');
    if(second_value == "b"){
      var output_value = input_value * 1.3328 * 10e-6;
    }
    else if(second_value == "dcm"){
      var output_value = input_value * 1.3328;
    }
    else if(second_value == "ihg"){
      var output_value = input_value * 3.937 * 10e-5;
    }
    else if(second_value == "iw"){
      var output_value = input_value * 5.353 * 10e-4;
    }
    else if(second_value == "k"){
      var output_value = input_value * 1.3595 * 10e-6;
    }
    else if(second_value == "m"){
      var output_value = input_value * 1.3328 * 10e-3;
    }
    else if(second_value == "atm"){
      var output_value = input_value * 1.316 * 10e-6;
    }
    else if(second_value == "pnm"){
      var output_value = input_value * 0.13328;
    }
    else if(second_value == "psi"){
      var output_value = input_value * 1.934 * 10e-5;
    }
    this.set('outputValue', output_value);


  },
  pnmToOther: function(second_option){
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption');
    if(second_value == "b"){
      var output_value = input_value * 1 * 10e-5;
    }
    else if(second_value == "dcm"){
      var output_value = input_value * 10;
    }
    else if(second_value == "ihg"){
      var output_value = input_value * 2.954 * 10e-4;
    }
    else if(second_value == "iw"){
      var output_value = input_value * 4.018 * 10e-3;
    }
    else if(second_value == "k"){
      var output_value = input_value * 1.020 * 10e-5;
    }
    else if(second_value == "m"){
      var output_value = input_value * 0.01;
    }
    else if(second_value == "mtm"){
      var output_value = input_value * 7.5028;
    }
    else if(second_value == "atm"){
      var output_value = input_value * 9.869 * 10e-6;
    }
    else if(second_value == "psi"){
      var output_value = input_value * 1.4508 * 10e-4;
    }
    this.set('outputValue', output_value);


  },
  psiToOther: function(second_option){
    var input_value = this.get('firstInputValue');
    var second_value = second_option.value;
    var firstUnit = this.get('selectedFirstOption');
    var secondUnit = this.get('selectedSecondOption');
    if(second_value == "b"){
      var output_value = input_value * 0.068948;
    }
    else if(second_value == "dcm"){
      var output_value = input_value * 6.8948 * 10e4;
    }
    else if(second_value == "ihg"){
      var output_value = input_value * 2.036;
    }
    else if(second_value == "iw"){
      var output_value = input_value * 27.68;
    }
    else if(second_value == "k"){
      var output_value = input_value * 7.0309 * 10e-2;
    }
    else if(second_value == "m"){
      var output_value = input_value * 68.948;
    }
    else if(second_value == "mtm"){
      var output_value = input_value * 5.171 * 10e4;
    }
    else if(second_value == "pnm"){
      var output_value = input_value * 6.8927 * 10e3;
    }
    else if(second_value == "atm"){
      var output_value = input_value * 0.068046;
    }
    this.set('outputValue', output_value);


  },
  
});


export default PressureController;
