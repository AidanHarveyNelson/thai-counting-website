const numbers = require('./numbers.js')

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


function generate_random_thai_number(max = 100, min = 0) {
    // Generates A random Thai Number between two values.
    // Returns the english Number and the Thai Number

    english_number = getRndInteger(min, max)
    thai_number = get_thai_number_from_english(english_number)

    return [english_number, thai_number]
}


function get_thai_number_from_english(english_number) {

    console.log(english_number)
    var completed_string = ''
    var thai_string
    while (true) {
        if (numbers.is_number_in_dict(english_number)){
            // Thai Language Only Includes Zero When the number occurs
            // By Itself it does not list Zeroe for other numbers
            // e.g 0 is ศูนย์
            // 10 is สิบ so no 0 is listed
            if ((completed_string && english_number == 0) == false){
                completed_string += numbers.number_dict[english_number]
            }
            return completed_string
        }
        else {
            [thai_string, english_number] = get_largest_portition(english_number)
            completed_string += thai_string
        }

    }

}


function get_largest_portition(number){
    console.log('Start Largest Portiton')
    var str_number = number.toString()
    console.log(`First Digit ${str_number[0]}`)
    const base_value = numbers.number_dict[parseInt('1'.padEnd(str_number.length, '0'))]
    console.log(`Base Thai Value ${base_value}`)
    const thai_string = numbers.number_dict[parseInt(str_number[0])] + base_value
    console.log(`Thai String ${thai_string}`)
    console.log(`End Largest Portiton`)
    return [thai_string, parseInt(str_number.substring(1))]
}


module.exports = {get_thai_number_from_english, generate_random_thai_number}
