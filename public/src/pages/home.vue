<template>
  <f7-page>
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-if-ios="f7:add" icon-if-md="material:add" href="/add/"></f7-link>
      </f7-nav-left>
      <f7-nav-title>Videos</f7-nav-title>
    </f7-navbar>
    
    <f7-block>
    <f7-list class="no-margin-top" media-list v-for="video in videos" inset>
      <f7-list-item
        link="#"
        v-bind:title= video.id
        v-bind:subtitle= video.length
        v-bind:text= video.description
        >
      <img slot="media" v-bind:src="video.src" width="80" />
      </f7-list-item>
    </f7-list>
    </f7-block>
  </f7-page>
</template>
<script>
import axios from 'axios';

export default {

  data() {
    return {
      videos: [],
    };
  },
  beforeCreate: function() {
      axios.get("http://localhost:3000/videos/").then((response) => {
        this.videos = response.data
      }, (error) => {
        
      })
  }
};
</script>
