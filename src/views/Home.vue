<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="mx-auto text-center">
          <div class="logo">
            <img src="https://sigma-studios.s3-us-west-2.amazonaws.com/test/sigma-logo.png" alt />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="mx-auto text-center">
          <div class="title">
            <h1>Prueba de desarrollo Sigma</h1>
          </div>
        </div>
      </div>

      <div class="row">
        <div
          class="subtitle text-center"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi voluptatibus corporis id commodi odio non quia facere nobis dignissimos nulla? Pariatur quas quibusdam nulla consectetur, perspiciatis vel porro esse optio.</div>
      </div>

      <div class="row contenido">
        <!-- image -->
        <div class="col-md-6">
          <img
            src="https://sigma-studios.s3-us-west-2.amazonaws.com/test/sigma-image.png"
            width="500px"
            alt
          />
        </div>

        <!-- form -->
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <form v-on:submit="sendInformation">
                <div class="form-group">
                  <label class="label-form" for="state">Departamento*</label>
                  <div class="inner-addon right-addon">
                    <i class="fa fa-chevron-right color-row"></i>
                    <select
                      required
                      class="custom-select custom-select-edit"
                      id="state"
                      v-model="form.state"
                      @change="searchCity(form.state)"
                    >
                      <option value="" selected>[Escoger opcion]</option>
                      <option v-for="item in State" :key="item">{{item}}</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="label-form" for="ciudad">Ciudad*</label>
                  <div class="inner-addon right-addon color-row">
                    <i class="fa fa-chevron-right"></i>
                    <select
                      required
                      class="custom-select custom-select-edit"
                      id="ciudad"
                      v-model="form.city"
                    >
                      <option value="" selected>[Escoger opcion]</option>
                      <option v-for="item in City" :key="item">{{item}}</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label class="label-form" for="name">Nombre*</label>
                  <input
                    required
                    type="text"
                    class="form-control"
                    maxlength="50"
                    id="name"
                    placeholder="Digite Nombre"
                    v-model="form.name"
                  />
                </div>
                <div class="form-group">
                  <label class="label-form" for="email">Correo*</label>
                  <input
                    required
                    type="email"
                    maxlength="30"
                    class="form-control"
                    id="email"
                    placeholder="Digite Correo"
                    v-model="form.email"
                  />
                </div>

                <div class="mx-auto text-center">
                  <button class="boton-enviar">ENVIAR</button>
                </div>

                <!--                <div class="inner-addon right-addon">
                  <i class="fa fa-chevron-right"></i>
                  <input type="text" class="form-control" />
                </div>-->
              </form>
            </div>
          </div>
        </div>

        <!-- close -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import "jquery";
import "bootstrap/dist/css/bootstrap.css";
import json from "@/data/colombia.json";
import axios from "axios";
import swal from "sweetalert";

export default {
  name: "Home",
  data() {
    return {
      Author: "Marlon Zayro Arias Vargas",
      info: json,
      form: {},
      State: [],
      City: [],
    };
  },
  methods: {
    searchCity: function (data) {
      console.log(data);
      this.City = this.info[data];
      console.log(this.City);
    },

    sendInformation: function (event) {
      event.preventDefault();
      console.log(this.form);
      axios
        .post("http://localhost:3000/api/v1/contacts", this.form)
        .then(function (response) {
          console.log(response.data);
          if (response.data.status == true) {
            swal({
              title: "Datos Enviados",
              text: "Tu información ha sido recibida satisfactoriamente",
              icon: "success",
            });

            event.target.reset()
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {},
  mounted() {
    /*
    axios
      .get('https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json')
      .then(response => (this.info = response));
      */

    this.State = Object.keys(this.info);
    //this.City = Object.values(this.info);
  },
};
</script>


<style lang="scss">


/**
* ----------- style container page ------------
*/

.contenido {
  padding-top: 60px;
}

.logo {
  padding: 20px;
}

.title {
  padding: 20px;
}

.subtitle {
  color: gray;
  font-weight: 500;
  padding: 10px;
}


/**
* ----------- style card ------------
*/

.card {
  border: 0px solid;
}
.card-body {
  -webkit-box-shadow: 0px 0px 29px -8px rgba(158, 158, 158, 1);
  -moz-box-shadow: 0px 0px 29px -8px rgba(158, 158, 158, 1);
  box-shadow: 0px 0px 29px -8px rgba(158, 158, 158, 1);

  border-radius: 25px;
  padding: 40px;
}



/**
* ----------- style form ------------
*/

.label-form {
  font-weight: bold;
  text-align: left;
}

 .color-row {
   color: #c7c7c7;
 }

.right-addon select {
  padding-right: 30px;
}

.boton-enviar {
  background-color: #e03b65;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 25px;
}

.custom-select-edit {
  display: inline-block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 1.75rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  vertical-align: middle;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: white;
}

/* enable absolute positioning */
.inner-addon {
  position: relative;
}

/* style icon */
.inner-addon .fa {
  position: absolute;
  padding: 10px;
  pointer-events: none;
}

/* align icon */
.left-addon .fa {
  left: 0px;
  }
.right-addon .fa {
  right: 0px;
}

/* add padding  */
.left-addon input {
  padding-left: 30px;
}
.right-addon input {
  padding-right: 30px;
}
</style>
