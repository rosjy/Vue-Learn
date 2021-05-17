const App = {
    data() {
        return {
            title: 'Task list',
            myplaceholder: 'Enter task name',
            inputValue: '',
            notes: ['Note 1', 'Note 1', 'Note 1']
        }
    },
    methods: {
        inputChange(event) {

            this.inputValue = event.target.value

        },
        add() {
            this.notes.push(this.inputValue)
        },
        remove(i) {
            this.notes.splice(i, 1);
        }

    }
}

Vue.createApp(App).mount('#app')