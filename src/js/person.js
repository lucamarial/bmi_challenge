function Person(attr) {
    this.weight = attr.weight;
    this.height = attr.height;
    this.calculate_bmi = function() {
        calculator = new BMICalculator();
        calculator.metric_bmi(this)
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Person;
} 

// 1. This means person, it refers to the object
// 2. We loose the code after refreshing the webside