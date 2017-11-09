<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="form-group">
            <input type="text" class="form-control" id="" placeholder="Lieu">
          </div>
        </div>
      </div>
      <div class="row">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Fédération Française de Darts Championnat par équipes'
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
