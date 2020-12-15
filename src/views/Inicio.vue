<template>
<div class="container mt-5">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4  my-3" v-for="(item,index) in enviarDatosApi" :key="index">
             <div class="card">
                 <img :src="item.image" class="card-img-top" alt="item.image">
              <div class="card-body">
                  <h5 class="card-title">{{item.name}}</h5>
               </div>
                <div class="card-body">
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="'#personaje'+index" data-whatever="@mdo">Opinar</button>>
        <!-- Button trigger modal -->
                   <button type="button" class="btn btn-primary" data-toggle="modal" :data-target="'#personaje'+index">
                   Ver más</button>

        <!-- Modal -->
                  <div class="modal fade" :id="'personaje'+index" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">{{item.name}}</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                           </button>
                        </div>
                          <div class="modal-body">
                            <p> El estado del pesronaje es {{item.status}}</p>
                            <p> Vive en {{item.species}}</p>
                            <p> El personaje vive en {{item.origin.name}}</p>
                            <p> Ha participado en {{item.episode.length}} capítulos</p>
                            <p> Nació el {{item.created}}</p>
                          </div>
                          <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                          <button type="button" class="btn btn-primary" @click="agregarFavorito(item)">Agregar a Favoritos</button>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>          
           </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import { mapGetters, mapActions} from "vuex";
export default {
    name: 'Inicio',
    computed: {
      ...mapGetters(['enviarDatosApi'])
  },
  methods: {
    ...mapActions (['agregarFavorito'])
  },
}
</script>
<style scoped>
</style>