<template>
  <div class="col-autom mb-4 ml-3 card" v-bind:id=match.matchid>
   <div class="card-header">Match {{ match.id }}</div>
   <div class="card-body">
     <div>
      <label class="mr-sm-2" v-bind:class="{ start: match.start === match.j1 }">{{ match.j1 }}</label>
       <span>{{ calculScorej1 }} {{ equipeA.name }}</span>
     </div>
     <div class="row justify-content-center">
       <div class=" col-2 form-check">
         <label class="form-check-label">
           <input :disabled="match.leg1j2 == 1" class="form-check-input position-static" type="checkbox" v-model="match.leg1j1" v-bind:true-value="1" v-bind:false-value="0"     >
         </label><br/>
         <label class="form-check-label">
           <input :disabled="match.leg1j1 == 1" class="form-check-input position-static" type="checkbox" v-model="match.leg1j2" v-bind:true-value="1" v-bind:false-value="0"     >
         </label>
       </div>
       <div class="col-2 form-check">
         <label class="form-check-label">
           <input :disabled="match.leg2j2 == 1"  class="form-check-input position-static" type="checkbox" v-model="match.leg2j1" v-bind:true-value="1" v-bind:false-value="0"    >
         </label><br/>
         <label class="form-check-label">
           <input :disabled="match.leg2j1 == 1" class="form-check-input position-static" type="checkbox" v-model="match.leg2j2" v-bind:true-value="1" v-bind:false-value="0"  >
         </label>
       </div>
       <div class="col-2 form-check" >
         <label class="form-check-label">
           <input :disabled="match.leg3j2 == 1" class="form-check-input position-static" type="checkbox" v-model="match.leg3j1" v-bind:true-value="1" v-bind:false-value="0"   >
         </label><br/>
         <label class="form-check-label">
           <input :disabled="match.leg3j1 == 1" class="form-check-input position-static" type="checkbox" v-model="match.leg3j2" v-bind:true-value="1" v-bind:false-value="0"   >
         </label>
       </div>
     </div>
    <div>
       <label class="mr-sm-2" v-bind:class="{ start: match.start === match.j2 }">{{ match.j2 }}</label>
       <span>{{ calculScorej2 }}</span>
     </div>
   </div>
  </div> 
</template>
<script>
export default {
  name: 'Matchs',
  props: ['match', 'equipeA', 'equipeE'],
  computed: {
    calculScorej1: function () {
      this.match.scorej1 = this.match.leg1j1 + this.match.leg2j1 + this.match.leg3j1
      if (this.match.scorej1 > 1) {
        this.match.pts1 = 1
      }
      return this.match.scorej1
    },
    calculScorej2: function () {
      this.match.scorej2 = this.match.leg1j2 + this.match.leg2j2 + this.match.leg3j2
      if (this.match.scorej2 > 1) {
        this.match.pts2 = 1
      }
      return this.match.scorej2
    }
  }
}
</script>
