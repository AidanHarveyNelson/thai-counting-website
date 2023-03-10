console.log('Thai Game Code Running')

class ThaiGame {
    constructor() {
        this.current_index = 0
        this.correct_count = 0
        this.number_list = []
        this.thai_text = document.getElementById('thainumber');
        this.submit_box = document.getElementById('submit');
        this.input_box = document.getElementById('responsenumber');
        this.response_message = document.getElementById("responsemessage")

        // Add Event Listeners
        this.submit_box.addEventListener('click', this.checkResult.bind(this))
        this.input_box.addEventListener('keypress', (event) => {
            if (event.key == 'Enter') {
                this.checkResult()
            }
        });

        this.setup_game()
    }

    checkResult() {
        var english, thai

        [english, thai] = this.number_list[this.current_index]
        console.log(english)
        console.log(thai)
        this.thai_text.innerText = thai
        console.log('Button Has Been Clicked')
        console.log(this.input_box.value)
        if (english == parseInt(this.input_box.value)) {
            this.response_message.innerText = "That is Correct Well Done!"
            this.correct_count += 1
        }
        else {
            this.response_message.innerText = "That is incorrect the correct answer is " + english
        }
        this.current_index += 1
        if (this.current_index == this.number_list.length) {
            if (this.correct_count >= 7) {
                this.thai_text.innerText = "Well done you got " + this.correct_count + " out of " + this.number_list.length
            }
            else {
                this.thai_text.innerText = "Keep practising you got  " + this.correct_count + " out of " + this.number_list.length
            } 
        }
        else {
            this.response_message.innerText =this. response_message.innerText + "\n " + this.correct_count + "/" + this.number_list.length
            this.update_text()
            this.input_box.focus()
        }
    }

    update_text() {
        // Setup Text Boxes
        var english, thai
        [english, thai] = this.number_list[this.current_index]

        this.input_box.value = ""
        this.thai_text.innerText = thai
    }

    async generate_data() {
        // Set Variables
        var game_count = 10
        var max_value = 100
        var min_value = 0

        var response = await fetch(`/thaigame/generate?games=${game_count}&max=${max_value}&min=${min_value}`)
        if (response.status == 200) {
            return await response.json()
        }
        else {
            throw (`${response.status} Unable to Get Data`)
        }
    }
    
    async setup_game() {
        console.log('SETTING UP GAME')
        this.current_index = 0
        this.correct_count = 0
    
        this.number_list = await this.generate_data()

        this.update_text()
    }
    
}

var current_game = new ThaiGame()
