<template>
  <div class="dartsmatchs">
    <h5>{{ ffd }}</h5>
    <div class="container">
      <!--  Lieu Division Poule Journée Date -->
      <div class="row ">
        <div class="col-md-7 form-control-sm">
          <div class="form-inline">
            <label class="mr-sm-2" for="division">Division</label>
            <select class="form-control-sm custom-select mb-2 mr-sm-2 mb-sm-0" v-model="options.division" id="division">
              <option selected>...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            <label class="mr-sm-2 ml-md-4" for="poule">Poule</label>
            <select class="form-control-sm custom-select mb-2 mr-sm-2 mb-sm-0" v-model="options.poule" id="poule">
              <option selected>...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>

            <label class="mr-sm-2 ml-md-4" for="journee">Journée</label>
            <select class="form-control-sm custom-select mb-2 mr-sm-2 mb-sm-0" v-model="options.journee" id="journee">
              <option selected>...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>

            <label for="date" class="mr-sm-2 ml-md-4">Date</label>
            <input class="form-control form-control-sm " type="date" v-model="options.date" value="" id="date" >
          </div>
        </div>
        <div class="col-md-5 ">
          <div class="form-group">
            <input type="text" class="form-control" id="" placeholder="Lieu">
          </div>
        </div>
      </div>
      <!-- JOUEURS -->
      <div class="row ">
        <div class="col mt-4">
          <input type="text" class="form-control-lg form-control" id="equipeA" v-model="equipeA.name" placeholder="Nom de l'équipe A">
          <div class="mt-2">
            <label class="form-control-sm">Simples</label>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">A</div>
              <input type="text" class="form-control" id="joueurA" v-model="equipeA.j1" placeholder="Joueur 1">
            </div>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">B</div>
              <input type="text" class="form-control" id="joueurB" v-model="equipeA.j2" placeholder="Joueur 2">
            </div>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">C</div>
              <input type="text" class="form-control" id="joueurC" v-model="equipeA.j3" placeholder="Joueur 3">
            </div>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">D</div>
              <input type="text" class="form-control" id="joueurD" v-model="equipeA.j4" placeholder="Joueur 4">
            </div>
          </div>
          <div class="mt-2">
            <label class="form-control-sm">Doubles</label>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">A1</div>
              <input type="text" class="form-control" id="joueurA1" v-model="equipeA.double1" placeholder="Joueur / Joueur">
            </div>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">A2</div>
              <input type="text" class="form-control" id="joueurA2" v-model="equipeA.double2" placeholder="Joueur / Joueur">
            </div>
          </div>
          <div class="mt-2">
            <label class="form-control-sm">Remplaçant</label>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">Y</div>
              <input type="text" class="form-control" id="joueurY" v-model="equipeA.j5" placeholder="Joueur 5">
            </div>
            <div class="form-inline mt-2 form-control-sm">
              <label class="mr-sm-2">remplace le joueur</label>
              <select class="form-control-sm custom-select mb-2 mr-sm-2 mb-sm-0" v-model="equipeA.remplace" id="equipe-A-remplace-joueur">
                <option selected>...</option>
                <option value="joueurA">A</option>
                <option value="joueurA">B</option>
                <option value="joueurA">C</option>
                <option value="joueurA">D</option>
              </select>
              <label class="mr-sm-2 ml-md-4">après le match</label>
              <select class="form-control-sm custom-select mb-2 mr-sm-2 mb-sm-0" v-model="equipeA.remplaceapres" id="equipe-A-apres-match">
                <option selected>...</option>
                <option value="joueurA">A</option>
                <option value="joueurB">B</option>
                <option value="joueurC">C</option>
                <option value="joueurD">D</option>
              </select>
            </div>
          </div>
        </div>
        <div class="col mt-4">
          <input type="text" class="form-control-lg form-control" id="equipeE" v-model="equipeE.name" placeholder="Nom de l'équipe E">
          <div class="mt-2">
            <label class="form-control-sm">Simples</label>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">E</div>
              <input type="text" class="form-control" id="joueurE" v-model="equipeE.j1" placeholder="Joueur 1">
            </div>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">F</div>
              <input type="text" class="form-control" id="joueurF" v-model="equipeE.j2" placeholder="Joueur 2">
            </div>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">G</div>
              <input type="text" class="form-control" id="joueurG" v-model="equipeE.j3" placeholder="Joueur 3">
            </div>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">H</div>
              <input type="text" class="form-control" id="joueurH" v-model="equipeE.j4" placeholder="Joueur 4">
            </div>
          </div>
          <div class="mt-2">
            <label class="form-control-sm">Doubles</label>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">E1</div>
              <input type="text" class="form-control" id="joueurE1" v-model="equipeE.double1"  placeholder="Joueur / Joueur">
            </div>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">E2</div>
              <input type="text" class="form-control" id="joueurE2" v-model="equipeE.double2" placeholder="Joueur / Joueur">
            </div>
          </div>
          <div class="mt-2">
            <label class="form-control-sm">Remplaçant</label>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">Z</div>
              <input type="text" class="form-control" id="joueurZ" v-model="equipeE.j5" placeholder="Joueur 5">
            </div>
            <div class="form-inline mt-2 form-control-sm">
              <label class="mr-sm-2">remplace le joueur</label>
              <select class="form-control-sm custom-select mb-2 mr-sm-2 mb-sm-0" v-model="equipeE.remplace" id="equipe-E-remplace-joueur">
                <option selected>...</option>
                <option value="joueurE">E</option>
                <option value="joueurF">F</option>
                <option value="joueurG">G</option>
                <option value="joueurH">H</option>
              </select>
              <label class="mr-sm-2 ml-md-4">après le match</label>
              <select class="form-control-sm custom-select mb-2 mr-sm-2 mb-sm-0" v-model="equipeE.remplaceapres" id="equipe-E-apres-match">
                <option selected>...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- MATCHS -->
      <div class="row mt-4">
        <div class="col-md-10">
          <div class="row">
            <matchs
              v-bind:equipeA="equipeA"
              v-bind:equipeE="equipeE"
              v-for="item in matchsList"
              :key="item.id"
              v-bind:match="item"
              >
            </matchs>
          </div>
          <div class="row">
            <div class="col-md-2 ">
              <div class="card">
                <div class="card-header">Résultats</div>
                <div class="card-body">
                  <div v-html="this.resultats"></div>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <div class="card">
                <div class="card-header">Score</div>
                <div class="card-body">
                  {{ totalA }} - {{ totalE }}
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <div class="card">
                <div class="card-header">Points</div>
                <div class="card-body">
                  {{ ptsA }} - {{ ptsE }}
                </div>
              </div>
            </div>
            <div class="col">
              <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                <div class="input-group-addon">CAPITAINE A</div>
                <input type="text" class="form-control" id="capitaineA" v-model="equipeA.captain" placeholder="nom"><input type="text" class="form-control" id="capitaineAsignature" placeholder="signature" >
              </div>
              <hr>
              <div class="input-group mb-2 mr-sm-2 mb-sm-0">
                <div class="input-group-addon">CAPITAINE E</div>
                <input type="text" class="form-control" id="capitaineE" v-model="equipeE.captain" placeholder="nom"><input type="text" class="form-control" id="capitaineEsignature" placeholder="signature" >
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <table class="table table-bordered ">
            <thead>
              <tr>
                <th>A</th>
                <th>SCORE</th>
                <th>E</th>
              </tr>
            </thead> 
            <tbody>
              <tr v-for="match in matchsList">
               <td>{{ match.pts1 }}</td>
               <td><small>match {{ match.id }}</small></td>
               <td>{{ match.pts2 }}</td>
             </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col mt-4 mb-4">
          <button class="btn btn-lg btn-primary" type="submit" value="">Envoyer la feuille de match</button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <code>
            <textarea rows="100" cols="80">{{ matchsList }}</textarea>
          </code>
        </div> 
      </div>
      <div class="row">
        <div class="col">
          <code>
            <textarea rows="100" cols="80">{{ api }}</textarea>
          </code>
        </div> 
      </div>
    </div><!--  container -->
  </div>
</template>

<script>
import matchs from './Matchs.vue'
import axios from 'axios'
export default {
  name: 'DartsMatchs',
  components: {
    matchs
  },
  data () {
    return {
      ffd: 'Fédération Française de Darts Championnat par équipes',
      api: '',
      options: {
        division: 1,
        poule: 1,
        journee: 1,
        date: ''
      },
      equipeA: {
        name: '',
        j1: '',
        j2: '',
        j3: '',
        j4: '',
        j5: '',
        double1: '',
        double2: '',
        captain: ''
      },
      equipeE: {
        name: '',
        j1: '',
        j2: '',
        j3: '',
        j4: '',
        j5: '',
        double1: '',
        double2: '',
        captain: ''
      },
      matchsList: [
        { id: 1, matchid: 'match-1', j1: 'A', j2: 'F', start: 'A', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 2, matchid: 'match-2', j1: 'B', j2: 'E', start: 'E', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 3, matchid: 'match-3', j1: 'C', j2: 'H', start: 'C', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 4, matchid: 'match-4', j1: 'D', j2: 'G', start: 'G', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 5, matchid: 'match-5', j1: 'A', j2: 'E', start: 'E', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 6, matchid: 'match-6', j1: 'B', j2: 'F', start: 'B', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 7, matchid: 'match-7', j1: 'C', j2: 'G', start: 'G', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 8, matchid: 'match-8', j1: 'D', j2: 'H', start: 'D', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 9, matchid: 'match-9', j1: 'A1', j2: 'E1', start: 'A1', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 10, matchid: 'match-10', j1: 'A2', j2: 'E2', start: 'A2', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 11, matchid: 'match-11', j1: 'A', j2: 'G', start: 'A', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 12, matchid: 'match-12', j1: 'C', j2: 'E', start: 'C', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 13, matchid: 'match-13', j1: 'B', j2: 'H', start: 'H', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 14, matchid: 'match-14', j1: 'D', j2: 'F', start: 'F', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 15, matchid: 'match-15', j1: 'A', j2: 'H', start: 'H', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 16, matchid: 'match-16', j1: 'D', j2: 'E', start: 'D', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 17, matchid: 'match-17', j1: 'B', j2: 'G', start: 'B', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 18, matchid: 'match-18', j1: 'C', j2: 'F', start: 'F', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 19, matchid: 'match-19', j1: 'A1', j2: 'E2', start: 'E2', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 },
        { id: 20, matchid: 'match-20', j1: 'A2', j2: 'E1', start: 'E1', pts1: 0, pts2: 0, leg1j1: 0, leg2j1: 0, leg3j1: 0, leg1j2: 0, leg2j2: 0, leg3j2: 0, scorej1: 0, scorej2: 0 }
      ]
    }
  },
  computed: {
    totalA: function () {
      var score = 0
      for (var i = this.matchsList.length - 1; i >= 0; i--) {
        score += this.matchsList[i].pts1
      }
      return score
    },
    totalE: function () {
      var score = 0
      for (var i = this.matchsList.length - 1; i >= 0; i--) {
        score += this.matchsList[i].pts2
      }
      return score
    },
    ptsA: function () {
      if (this.totalA > 10) {
        return 3
      } else if (this.totalA === 10) {
        return 2
      } else if (this.totalA === 0) {
        return 0
      } else {
        return 1
      }
    },
    ptsE: function () {
      if (this.totalE > 10) {
        return 3
      } else if (this.totalE === 10) {
        return 2
      } else if (this.totalE === 0) {
        return 0
      } else {
        return 1
      }
    },
    resultats: function () {
      // if ((this.totalA + this.totalE) === 20) {
      if (this.totalA > this.totalE) {
        return this.equipeA.name + '<br> bat  <br>' + this.equipeE.name
      } else if (this.totalA < this.totalE) {
        return this.equipeE.name + '<br> bat  <br>' + this.equipeA.name
      } else {
        return 'match nul'
      }
      // }
    }
  },
  mounted () {
    axios
      .get('http://localhost:3000/players')
      .then(response => (this.api = response))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
