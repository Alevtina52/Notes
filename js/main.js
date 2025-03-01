let eventBus = new Vue()

Vue.component('list', {
    template: `
    <div>
        <h3>{{ nameOfList }}</h3>
        <hr></hr>
        <div class="d-flex"><p>{{ firstItem }}</p><button v-on:click="firstComplete" v-show="!oneStatus">Выполнить</button><img src="assets/check.svg" alt="check" width="30" height="30" v-show="oneStatus"></div>
        <div class="d-flex"><p>{{ secondItem }}</p><button v-on:click="secondComplete" v-show="!twoStatus">Выполнить</button><img src="assets/check.svg" alt="check"  width="30" height="30" v-show="twoStatus"></div>
        <div class="d-flex"><p>{{ thirdItem }}</p><button v-on:click="thirdComplete" v-show="!threeStatus">Выполнить</button><img src="assets/check.svg" alt="check"  width="30" height="30" v-show="threeStatus"></div>
        <p>{{ counter }}</p>
    </div>
    `,
    data() {
        return {
            nameOfList: "test",
            firstItem: "test",
            secondItem: "test",
            thirdItem: "test",
            oneStatus: false,
            twoStatus: false,
            threeStatus: false,
            counter: 0
        }
    },
    methods: {
        firstComplete() {
            this.oneStatus = true
            this.counter += 1
        },
        secondComplete() {
            this.twoStatus = true
            this.counter += 1
        },
        thirdComplete() {
            this.threeStatus = true
            this.counter += 1
        }
    }
})


//mounted() {
//eventBus.$on('list-submitted', list => {
//if (this.lists.length < 3) {
//this.lists.push(list)}
//})
//}



Vue.component('create', {
    template: `
    <div class="p-3 border border-primary w-25 m-3">
        <form @submit.prevent="onSubmit">
        <h3>Создать список</h3>
        <label for="nameOfList">Название:</label><br>
        <input type="text" id="nameOfList" name="nameOfList" v-model="nameOfList"><br>
        <label for="firstItem">Пункт 1:</label><br>
        <input type="firstItem" id="firstItem" name="firstItem" v-model="firstItem"><br>
        <label for="secondItem">Пункт 2:</label><br>
        <input type="secondItem" id="secondItem" name="secondItem" v-model="secondItem"><br>
        <label for="thirdItem">Пункт 3:</label><br>
        <input type="thirdItem" id="thirdItem" name="thirdItem" v-model="thirdItem"><br><br>
        <input type="submit" value="Создать" class="btn btn-primary">
        </form>
    </div>
    `,
    data() {
        return {
            nameOfList: null,
            firstItem: null,
            secondItem: null,
            thirdItem: null
        }
    },
    methods: {
        onSubmit() {
            let list = {
                nameOfList: this.nameOfList,
                firstItem: this.firstItem,
                secondItem: this.secondItem,
                thirdItem: this.thirdItem
            }
            eventBus.$emit('list-submitted', list)
            this.nameOfList = null
            this.firstItem = null
            this.secondItem = null
            this.thirdItem = null
        }
    }
})

let app = new Vue({
    el: '#app',
})