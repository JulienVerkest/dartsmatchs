 <template> 
  <div
    v-for="item in groceryList"
    v-bind:todo="item">
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('matchs', {
  // The todo-item component now accepts a
  // "prop", which is like a custom attribute.
  // This prop is called todo.
  props: ['todo'],
  template: '<li>{{ todo.j1 }} {{ todo.j2 }}</li>'
})
</script>
