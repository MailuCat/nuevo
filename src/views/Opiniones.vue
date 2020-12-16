<template>
    <section class="container my-5" >
        <br>
        <h2 class="my-5">Opiniones</h2>
        <div v-if="enviarOpinion.length > 0">
            <!-- acordion -->
            <div class="accordion" id="accordionExample" v-for="(item,index) in enviarOpinion" :key="index">
                <div class="accordion-item">
                    <h4 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-toggle="collapse" :data-target="'#collapseOne'+index" aria-expanded="false" aria-controls="collapseOne">
                            Opinión Sobre: {{item.name}}. Realizado por: {{item.nombre}}
                        </button>
                    </h4>
                    <div :id="'collapseOne'+index" class="accordion-collapse collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="accordion-body">
                          
                            <strong>{{item.opinar}}.</strong>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
        <div v-else>
            <div class="alert alert-danger" role="alert">
               No hay opiniones
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'Opiniones',
    computed: {
        ...mapGetters(['enviarOpinion'])
    },
}