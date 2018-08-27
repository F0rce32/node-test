<template>
  <f7-page>
        <f7-navbar>
            <f7-nav-left back-link="Back"></f7-nav-left>
            <f7-nav-title>Add Video</f7-nav-title>
        </f7-navbar>
        <f7-list inset>
            <f7-list-item>
                <f7-input type="text" placeholder="Description" :value="videoDescription" @input="videoDescription = $event.target.value"></f7-input>
            </f7-list-item>
        </f7-list>

        <f7-block>
            <f7-button big fill @click="addVideo()">Add Video</f7-button>
        </f7-block>
  </f7-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
        videoDescription: ''
    };
  },
  methods: {
    addVideo: function() {
        const self = this;
        const app = self.$f7;
        axios.post("http://localhost:3000/videos/", {
            description: this.videoDescription
        })
        app.views.main.router.back()
  }
}
}
</script>
