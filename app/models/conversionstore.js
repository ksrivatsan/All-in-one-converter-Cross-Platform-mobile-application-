import DS from 'ember-data';

var conversionstore = DS.Model.extend({
  metricName: DS.attr('string'),
  metricFirstUnit: DS.attr('string'),
  metricSecondUnit: DS.attr('string'),
  metricFirstUnitValue: DS.attr('number'),
  metricSecondUnitValue: DS.attr('number'),
});

export default conversionstore;