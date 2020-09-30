import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listOfEvents: [
      {
        id: 1,
        name: "Meetup with your pet rabbit",
        date: "1 Oct",
        info:
          "Hop toghether with other pet-rabbits and their owners! Carrots are free of charge!",
        image: "bunny-1149060_640.jpg"
      },

      {
        id: 2,
        name: "Cook Dinner",
        date: "14 Nov",
        info:
          "Cook toghether in a restaurant-kitchen and be led by the famous chef Clarissa Tomato",
        image: "kitchen-731351_640.jpg"
      },

      {
        id: 3,
        name: "Shop til´you drop",
        date: " 28 Oct",
        info:
          "Shop toghether with personal stylists",
        image: "woman-3040029_640.jpg"
      },

      {
        id: 4,
        name: "We love 2 code",
        date: "17 Oct",
        info:
          "Meetup for coders! Join this event to meet new code-loving friends!",
        image: "computer-1209641_640.jpg"
      },

    ],
    listOfAttendedEvents: [2, 4],


  },
  getters: {
    listOfEvents(state) {
      return state.listOfEvents
    },
    listOfAttendedEvents(state) {
      return state.listOfEvents.filter(event => {
        return state.listOfAttendedEvents.includes(event.id)
      })
    }
  }
})
