console.log('Thai Game Code Running')

function setup_game(number_count, max, min) {
    // Add Text Here SOMETHING LIKE THE FOLLOWING
    //print('''
    //Welcome to the Thai Counting Game.
    //You will see a Thai Number on the screen 
    //Please enter the English Number that Matches the Thai number
    //Then Press the enter key to check if the result is Correct
    //''')

    var number_list = []

    for (const _ of Array(number_count).keys()) {
        result = generate_random_thai_number(max, min)
        number_list.push(result)
    }

    run_game(number_list)
}

function run_game(number_list) {
    console.log('RUNNING GAME')

}

setup_game(10, 100, 0)
