<template>
<div class="container mt-5">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4  my-3" v-for="(item,index) in enviarDatosApi" :key="index">
             <div class="card">
          <img :src="item.image" class="card-img-top" alt="item.image">
      <div class="card-body">
          <h5 class="card-title">{{item.name}}</h5>
          <p class="card-text">p the bulk of the card's content.</p>
      </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
       <div class="card-body">
           <a href="#" class="card-link">Opiniones</a>
             <a href="#" class="card-link">Ver más</a>
      </div>
    </div>
  </div>
  </div>
</div>
</template>
<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
  name: 'Inicio',
  computed: {
      ...mapGetters(['enviarDatosApi'])
  }
}
</script>
<style scoped>
</style>