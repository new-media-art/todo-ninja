import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);



export default new Vuetify({
    icons: {
      iconfont: 'mdi'
  
    },
  
    theme: {
      themes: {
        light: {
            primary: '2974E4',
            success: '42FCD0',
            info:'F3DA5D', 
            error: 'F0268E'
        }
      }
    }
  })


