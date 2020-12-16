<template>
<div class="container mt-5">
      <div class="row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4  my-3" v-for="(item,index) in enviarDatosApi" :key="index">
             <div class="card">
                 <img :src="item.image" class="card-img-top" alt="item.image">
              <div class="card-body">
                  <h5 class="card-title">{{item.name}}</h5>
              </div>
          <!-- Button trigger modal -->
                <div class="card-body">
                   <button type="button" class="btn btn-primary mr-4" data-toggle="modal" :data-target="'#opinar'+index">
                    Opinar</button>  
                     <button type="button" class="btn btn-primary mr-4" data-toggle="modal" :data-target="'#personaje'+index">
                   Ver más</button>  
                </div>
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
                            <p> El estado del personaje es {{item.status}}</p>
                            <p> Vive en {{item.species}}</p>
                            <p> Su origen es {{item.origin.name}}</p>
                            <p> Ha participado en {{item.episode.length}} capítulos</p>
                            <p> Nació el {{item.created}}</p>
                          </div>
                          <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                          <button type="button" class="btn btn-primary" @click="agregarFavorito(item)">Agregar a Favoritos</button>
                        </div>
                      </div>
                    </div>
       <!-- Modal opinando -->
               <div class="modal fade" tabindex="-1" :id="'opinar'+index"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{{item.name}}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                            <div class="modal-body">
                          <form>
                            <div class="form-group">
                              <label for="recipient-name" class="col-form-label">Nombre</label>
                               <input v-model="nombre" type="text" class="form-control" id="recipient-name">
                             </div>
                            <div class="form-group">
                              <label for="message-text" class="col-form-label">Opinión</label>
                              <textarea  class="form-control" id="message-text" v-model="opinar" ></textarea>
                            </div>
                          </form>
                      </div>
                     <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                      <button type="button" class="btn btn-secondary" @click="guardarOpinion(item)">Enviar</button>
                    </div>
                    <div>
                    </div>
                 </div>
           <!-- Modal --> 
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
    
      data (){
         return{
           
           nombre: '',
           opinar: '',

         }
       },
     computed: {
      ...mapGetters(['enviarDatosApi'])
    },

    methods: {
        ...mapActions (['agregarFavorito']),
        guardarOpinion(item){
            if (item.nombre !== null && item.opinar !== null){
                let opinion = {
                    nombre: this.nombre,
                    opinar: this.opinar,
                    usuario: item.name
                   
                }
                this.$store.dispatch('guardarOpinion', opinion);
                this.$router.push({name: 'Opiniones'});
                this.nombre =''
                this.opinar =''
            } else {
                console.log("error")
            }
        },
        // resetea los campos con el boron X
        cerrarModal(item){
            item.nombre =''
            item.opinar =''
        }
    },
}
        

</script>
