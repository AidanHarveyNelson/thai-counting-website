console.log('Thai Game Code Running')

const number_dict = {
    0 : 'ศูนย์',
    1 : 'หนึ่ง',
    2 : 'สอง',
    3 : 'สาม',
    4 : 'สี่',
    5 : 'ห้า',
    6 : 'หก',
    7 : 'เจ็ด',
    8 : 'แปด',
    9 : 'เก้า',
    10 : 'สิบ',
    11 : 'สิบเอ็ด',
    20 : 'ยี่สิบ',
    21 : 'ยี่สิบเอ็ด',
    31 : 'สามสิบเอ็ด',
    41 : 'สี่สิบเอ็ด',
    51 : 'ห้าสิบเอ็ด',
    61 : 'หกสิบเอ็ด',
    71 : 'เจ็ดสิบเอ็ด',
    81 : 'แปดสิบเอ็ด',
    91 : 'เก้าสิบเอ็ด',
    100 : 'ร้อย',
    1000 : 'พัน',
}

var thai_text = document.getElementById('thainumber');
var submit_box = document.getElementById('submit');
var input_box = document.getElementById('responsenumber');
input_box.value = ""
var response_message = document.getElementById("responsemessage")

play_game(10, 100, 0)

// Number Dictionary that is being used for reference


function is_number_in_dict(number) {
    // Check if Supplied Number is in the Number Dict
    return number in number_dict;
}

function getPromiseFromEvent(item, event) {
    return new Promise((resolve) => {
      const listener = () => {
        item.removeEventListener(event, listener);
        resolve();
      }
      item.addEventListener(event, listener);
    })
  }

async function play_game(number_count, max, min) {
    console.log('SETTING UP GAME')
    // Add Text Here SOMETHING LIKE THE FOLLOWING
    //print('''
    //Welcome to the Thai Counting Game.
    //You will see a Thai Number on the screen 
    //Please enter the English Number that Matches the Thai number
    //Then Press the enter key to check if the result is Correct
    //''')

    var number_list = []
    var correct_count = 0



    for (const _ of Array(number_count).keys()) {
        result = generate_random_thai_number(max, min)
        number_list.push(result)
    }

    for ([english, thai] of number_list) {
        console.log(english)
        console.log(thai)
        thai_text.innerText = thai
        await getPromiseFromEvent(submit_box, "click")
        console.log('Button Has Been Clicked')
        console.log(input_box.value)
        if (english == parseInt(input_box.value)) {
            response_message.innerText = "That is Correct Well Done!"
            correct_count += 1
        }
        else {
            response_message.innerText = "That is incorrect the correct answer is " + english
        }
        response_message.innerText = response_message.innerText + "\n " + correct_count + "/" + number_count
        input_box.value = ""
        input_box.focus()
    }

    if (correct_count >= 7) {
        thai_text.innerText = "Well done you got " + correct_count + " out of " + number_count
    }
    else {
        thai_text.innerText = "Keep practising you got  " + correct_count + " out of " + number_count
    }

    response_message.innerText = "Would you like to play again?"
    submit_box.innerText = "Restart"

}

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

    var completed_string = ''
    var thai_string
    while (true) {
        if (is_number_in_dict(english_number)){
            // Thai Language Only Includes Zero When the number occurs
            // By Itself it does not list Zeroe for other numbers
            // e.g 0 is ศูนย์
            // 10 is สิบ so no 0 is listed
            if ((completed_string && english_number == 0) == false){
                completed_string += number_dict[english_number]
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
    // console.log('Start Largest Portiton')
    var str_number = number.toString()
    // .log(`First Digit ${str_number[0]}`)
    const base_value = number_dict[parseInt('1'.padEnd(str_number.length, '0'))]
    // console.log(`Base Thai Value ${base_value}`)
    const thai_string = number_dict[parseInt(str_number[0])] + base_value
    // console.log(`Thai String ${thai_string}`)
    // console.log(`End Largest Portiton`)
    return [thai_string, parseInt(str_number.substring(1))]
}
