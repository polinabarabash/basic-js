const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {  
  const k = 0.693/HALF_LIFE_PERIOD;
  let numberSampleActivity = parseFloat(sampleActivity);

  if (typeof sampleActivity !== 'string' 
      || (numberSampleActivity <= 0) 
      || (numberSampleActivity > MODERN_ACTIVITY)
      || !sampleActivity
      || isNaN(numberSampleActivity)) {
    return false;
  }  
  let age = Math.ceil(Math.log(MODERN_ACTIVITY/numberSampleActivity)/k);
  return age;
};
