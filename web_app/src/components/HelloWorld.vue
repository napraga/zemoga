<template>
  <div class="hello">
    <b-modal id="modal-1" title="Edit Content" hide-footer>
      <div class="my-4">

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Name:</span>
          </div>
          <input type="text" class="form-control"  v-model="content_data.title" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">Image URL:</span>
          </div>
          <input type="text" class="form-control"  v-model="content_data.image" aria-describedby="basic-addon1">
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Description:</span>
          </div>
          <textarea class="form-control" aria-label="With textarea" v-model="content_data.description">
          </textarea>
        </div>
        <div v-if="error">
        <span class="alert alert-danger">{{error}}</span>
        </div>
        <b-button class="mt-3" block @click="saveData()">Save Data</b-button>
      </div>
    </b-modal>
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-5">
        <div class="row ppal-content">
          <div class="col-sm-12 col-md-6">
            <img :src="content_data.image" class="img-ppal img-thumbnail" v-if="content_data.image" />

            <div class="internal-content">
              <h1>
                John's Timeline
              </h1>
              <ul>
                <li v-for="(tw, index) in twitter" :key="index">
                  <img :src="tw.user.profile_image_url" class="img-thumbnail" />
                  <span>{{tw.user.name}}</span>
                  <span>{{tw.text}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md-6" v-if="content_data">
            <b-button class="btn-edit" v-b-modal.modal-1>Edit</b-button>
            <h1>
              {{content_data.title}}
            </h1>
            <div class="internal-content">
              <h1>
                My Work Experience
              </h1>
              <div>
                {{content_data.description}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'HelloWorld',
  data(){
    return {
      url: 'https://cjtoygwvjhc25kn2uylaxax52i0ivqmz.lambda-url.us-east-2.on.aws/',
      twitter: [],
      content_data:{
        id: 1,
        title: '',
        image: '',
        description: ''
      },
      error: ''
    }
  },
  created() {
    this.getData();
  }, 
  methods: {
    async saveData(){
      try{
        await axios.put(this.url, this.content_data);
        this.$bvModal.hide('modal-1');
      }catch (err){
        this.error = 'Error: ' + err.message
      }
    },
    getData(){
      axios.get(this.url).then((result) => {
        if(result.data){
          this.content_data.title = result.data.results.Items[0].title
          this.content_data.image = result.data.results.Items[0].image
          this.content_data.description = result.data.results.Items[0].description
          if(result.data.twitter){
            this.twitter = JSON.parse(result.data.twitter)
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.btn-edit{
  float: right;
  margin: -40px -12px;
}
.img-ppal{
  max-width: 95%;
  min-width: 95%;
  width: 95%;
  margin: 5px 0 0 0;
}
.ppal-content{
  background-color: #c0c0c0;
  border-radius: 7px;
}
.internal-content{
  background-color: #ffffff;
  margin: 10px;
  border-radius: 7px;
  padding: 5px;
}

h1{
  text-transform: capitalize;
}

.internal-content h1{
  font-size: 18px;
  color: #555555;
  margin: 0px;
  border-bottom: 1px solid #c0c0c0;
  text-transform: capitalize;
  padding: 5px;
}

.internal-content div{
  text-align: left;
  padding: 5px;
}

.internal-content ul{
  list-style: none;
}

.internal-content ul li{
  text-align: left;
  margin: 5px 0;
  min-height: 60px;
  display: block;
}
.internal-content ul li img{
  float:left; 
  margin: 0 5px;
}
.internal-content ul li span{
  display: block;
}
</style>
