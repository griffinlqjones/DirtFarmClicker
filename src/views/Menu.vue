<template>
  <div id="menu">
    <h1 class="section-heading">Welcome to the Dirt Farm</h1>
    <!-- @click="startGame" -->
    <div class="lore">
      <p>
        Allow me to paint you a picture. You're out of college,
        you don't have a job, that special person in your life is now that
        special person in someone else's life, you're tired and beaten down.
      </p>
      <p>
        (food or beverage you enjoy) doesn't taste as good as it used to,
        your dreams are oddly specific in their focus on your teeth spontaneously
        shattering in the middle of conversations with people possessing perfectly
        normal teeth. But then it hits you like a 300 pound ball of lab-grown beef; a way out.
      </p>
      <p>
        You grab the $100 your extremely supportive (living relative) gave you
        for (insert holiday), some shovels, and some decaying food matter from
        your garbage can and begin tearing up your back yard.
        It's time to build a dirt farm!
      </p>
    </div>
    <router-link to="/dirt-farm" class="start-button"><span @click="startGame">Start Farming</span></router-link>
    <router-view/>
    <div class="buttons-wrapper">
      <button @click="test">Test</button>
      <button @click="saveGame">Save Game</button>
      <button @click="loadGame">Load Game</button>
      <button>This Button Does NOTHING!</button>
      <button class="delete-button" @click="deleteGame">Delete Game</button>
    </div>
    <div class="response-data">
      <code>{{userData}}</code>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
// const uuid = require('uuid/[v1|v3|v4|v5]');

export default {
  name: "Menu",

  data() {
    return {
      uri: "http://localhost:3000/api",
      savingGame: null,
      // userID: uuid(''),
      // randomUser: "",
      userData: {
        id: "124abc",
        money: 500,
        goodDirt: 25,
        upgrades: [{
          name: "Smelly Teenagers",
          available: true,
          owned: true,
          count: 4
        }]
      },
      incomingData: null
    };
  },
  methods: {
    ...mapActions(["startTimer"]),
    test() {
      fetch(this.uri + "/", {
        headers: {
          "Content-Type": "application/json",
          "Origin"      : "http://localhost:3000"
        },
      })
      .then((response) => {
        console.log("SUCcESS: " + response);
      })
      .catch((error) => {
        console.log("This test failed: " + error);
      });
    },
    startGame() {
      this.startTimer();
    },
    saveGame() {
      // Random user dummy data: "https://randomuser.me/api/"
      // Save Game
      // let userData = this.stateForSave;

      /* PUT request or POST request */
      fetch(this.uri + "/add", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Origin"      : "http://localhost:8080/"
        },
        body: JSON.stringify(this.userData)
      })
      .then(() => {
        this.savingGame = null;
      })
      .catch((error) => {
        console.log("Something bwonked." + error);
      });
    },
    // This works
    loadGame() {
      // Load Game
      fetch(this.uri + "/" + this.userData.id)
      .then((response) => response.json())
      .then((data) => {
        this.incomingData = JSON.stringify(data.results);
        console.log(JSON.stringify(data));
      })
      .catch((error) => {
        console.log("Loading failed for some reason: " + error);
      });
    },
    // This will probably work
    deleteGame() {
      // Delete Game
      fetch(this.uri + "/delete/" + this.userData.id, {
        method: "DELETE"
      }).then(() => {
        console.log("DELETED?");
      })
      .catch((error) => {
        console.log("Deleting failed for some reason: " + error);
      });;
    }
  },
  computed: {
    ...mapGetters(["stateForSave"])
  }
};
</script>

<style lang="less" scoped>
@import "../variables.less";

#menu {
  width: 100%;
  text-align: center;
}

.lore {
  width: 50%;
  margin: auto;
}

.start-button {
  display: block;
  width: 30%;
  font-size: 30px;
  margin: 30px auto;
  padding: 20px;
  color: #ffffff;
  border-radius: 10px;
  border: 2px solid #25072e;
  text-decoration: none;
  background-image: linear-gradient(to top, @button-dark, @button-light);

  &:active {
    background-image: linear-gradient(to bottom, @button-dark, @button-light);
  }
}

button {
  width: 25%;
  height: 3.5rem;
  font-size: 20px;
  margin: 20px auto;
  color: @base-text-color;
  border-radius: 5px;
  border: 2px solid #25072e;
  background-image: linear-gradient(to top, @button-basic-dark, @button-basic-light);
  &:active {
    background-image: linear-gradient(to bottom, @button-basic-dark, @button-basic-light);
  }
}

.buttons-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .delete-button {
    color: #ffffff;
    background-image: linear-gradient(to top, darken(@destructive-red, 10%), @destructive-red);
    &:active {
      background-image: linear-gradient(to bottom, darken(@destructive-red, 10%), @destructive-red);
    }
  }
}
</style>
