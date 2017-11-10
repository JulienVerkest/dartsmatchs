<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
    <div class="container">
      <!--  Lieu Division Poule Journée Date -->
      <div class="row ">
        <div class="col-md-7 form-control-sm">
          <div class="form-inline">
            <label class="mr-sm-2" for="division">Division</label>
            <select class="form-control-sm custom-select mb-2 mr-sm-2 mb-sm-0" id="division">
              <option selected>...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            <label class="mr-sm-2 ml-md-4" for="poule">Poule</label>
            <select class="form-control-sm custom-select mb-2 mr-sm-2 mb-sm-0" id="poule">
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
            <select class="form-control-sm custom-select mb-2 mr-sm-2 mb-sm-0" id="journee">
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
            <input class="form-control form-control-sm " type="date" value="" id="date" >
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
          <input type="text" class="form-control-lg form-control" id="equipeA" placeholder="Nom de l'équipe A">
          <div class="mt-2">
            <label class="form-control-sm">Simples</label>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">A</div>
              <input type="text" class="form-control" id="joueurA" placeholder="Joueur 1">
            </div>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">B</div>
              <input type="text" class="form-control" id="joueurB" placeholder="Joueur 2">
            </div>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">C</div>
              <input type="text" class="form-control" id="joueurC" placeholder="Joueur 3">
            </div>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">D</div>
              <input type="text" class="form-control" id="joueurD" placeholder="Joueur 4">
            </div>
          </div>
          <div class="mt-2">
            <label class="form-control-sm">Doubles</label>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">A1</div>
              <input type="text" class="form-control" id="joueurA1" placeholder="Joueur / Joueur">
            </div>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">A2</div>
              <input type="text" class="form-control" id="joueurA2" placeholder="Joueur / Joueur">
            </div>
          </div>
          <div class="mt-2">
            <label class="form-control-sm">Remplaçant</label>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">Y</div>
              <input type="text" class="form-control" id="joueurY" placeholder="Joueur 5">
            </div>
            <div class="form-inline mt-2 form-control-sm">
              <label class="mr-sm-2">remplace le joueur</label>
              <select class="form-control-sm custom-select mb-2 mr-sm-2 mb-sm-0" id="equipe-A-remplace-joueur">
                <option selected>...</option>
                <option value="joueurA">A</option>
                <option value="joueurA">B</option>
                <option value="joueurA">C</option>
                <option value="joueurA">D</option>
              </select>
              <label class="mr-sm-2 ml-md-4">après le match</label>
              <select class="form-control-sm custom-select mb-2 mr-sm-2 mb-sm-0" id="equipe-A-apres-match">
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
          <input type="text" class="form-control-lg form-control" id="equipeA" placeholder="Nom de l'équipe E">
          <div class="mt-2">
            <label class="form-control-sm">Simples</label>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">E</div>
              <input type="text" class="form-control" id="joueurE" placeholder="Joueur 1">
            </div>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">F</div>
              <input type="text" class="form-control" id="joueurF" placeholder="Joueur 2">
            </div>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">G</div>
              <input type="text" class="form-control" id="joueurG" placeholder="Joueur 3">
            </div>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">H</div>
              <input type="text" class="form-control" id="joueurH" placeholder="Joueur 4">
            </div>
          </div>
          <div class="mt-2">
            <label class="form-control-sm">Doubles</label>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">E1</div>
              <input type="text" class="form-control" id="joueurE1" placeholder="Joueur / Joueur">
            </div>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">E2</div>
              <input type="text" class="form-control" id="joueurE2" placeholder="Joueur / Joueur">
            </div>
          </div>
          <div class="mt-2">
            <label class="form-control-sm">Remplaçant</label>
            <div class="input-group mb-2 mr-sm-2 mb-sm-0">
              <div class="input-group-addon">Z</div>
              <input type="text" class="form-control" id="joueurZ" placeholder="Joueur 5">
            </div>
            <div class="form-inline mt-2 form-control-sm">
              <label class="mr-sm-2">remplace le joueur</label>
              <select class="form-control-sm custom-select mb-2 mr-sm-2 mb-sm-0" id="equipe-E-remplace-joueur">
                <option selected>...</option>
                <option value="joueurA">A</option>
                <option value="joueurA">B</option>
                <option value="joueurA">C</option>
                <option value="joueurA">D</option>
              </select>
              <label class="mr-sm-2 ml-md-4">après le match</label>
              <select class="form-control-sm custom-select mb-2 mr-sm-2 mb-sm-0" id="equipe-E-apres-match">
                <option selected>...</option>
                <option value="joueurA">A</option>
                <option value="joueurB">B</option>
                <option value="joueurC">C</option>
                <option value="joueurD">D</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <!-- MATCHS -->
      <div class="row">
        <div class="col">
          <div class="card-group">
            <div class="card" id="match-1">
              <div class="card-header">Match 1</div>
              <div class="card-body">
                <div>
                  <label class="mr-sm-2"><b>A</b></label>
                  <span></span>
                </div>
                <div class="row justify-content-center">
                  <div class=" col-2 form-check">
                    <label class="form-check-label">
                      <input class="form-check-input position-static" type="checkbox" name="m1-leg1" id="m1-leg1-A" value="1"  >
                    </label><br/>
                    <label class="form-check-label">
                      <input class="form-check-input position-static" type="checkbox" name="m1-leg1" id="m1-leg1-E" value="1"  >
                    </label>
                  </div>
                  <div class="col-2 form-check">
                    <label class="form-check-label">
                      <input class="form-check-input position-static" type="checkbox" name="m1-leg2" id="m1-leg2-A" value="1"  >
                    </label><br/>
                    <label class="form-check-label">
                      <input class="form-check-input position-static" type="checkbox" name="m1-leg2" id="m1-leg2-E" value="1"  >
                    </label>
                  </div>
                  <div class="col-2 form-check">
                    <label class="form-check-label">
                      <input class="form-check-input position-static" type="checkbox" name="m1-leg3" id="m1-leg3-A" value="1"  >
                    </label><br/>
                    <label class="form-check-label">
                      <input class="form-check-input position-static" type="checkbox" name="m1-leg3" id="m1-leg3-E" value="1"  >
                    </label>
                  </div>
                </div>
                <div>
                  <label class="mr-sm-2">F</label>
                  <span></span>
                </div>

              </div>
                
              </div>
            <div class="card" id="match-2">
              <div class="card-header">Match 2</div>
              <div class="card-body">
                 
              </div>
            </div>
          </div>
        </div>
        <div class="col">
<todo-item
      v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id">
    </todo-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Fédération Française de Darts Championnat par équipes',
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
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
