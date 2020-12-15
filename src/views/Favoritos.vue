<template>
<div class="container mt-5">
        <div class="row" v-if="enviarFavorito.length>0" >
           <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4  my-3"  v-for="(item,index) in enviarFavorito" :key="index">
                   <div class="card">
                        <img :src="item.image" class="card-img-top" :alt="item.id">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                         <button type="button" class="btn btn-secondary">Eliminar</button>
                     </div>
                </div>  
            </div>        
        </div> 
    <div v-else mt-5>
        <div class="alert alert-secondary" role="alert">
             A simple secondary alert—check it out!
        </div>
    </div>   
 </div>
 </template>
<script>
 import { mapGetters } from "vuex";

export default {
  name: 'Favoritos',
  computed: {
      ...mapGetters(['enviarFavorito'])
  },
 }
</script>
