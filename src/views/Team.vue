<template>
  <div class="team">
    <v-subheader>Team</v-subheader>

    <v-container class="my-5">   
        <v-row >
            <v-col cols="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
                <v-card class="text-center ma-3" >
                <v-responsive class="pt-4">
                    image
                </v-responsive>
                <v-card-text>
                    <div class=" text-subtitle-1 ">{{person.name}}</div>
                    <div class="grey--text">{{person.role}}</div>
                </v-card-text>
                <v-card-actions>
                    
            <v-btn depressed class="grey--text" >
                
          <v-icon small> mdi-message </v-icon>
          
          <span>Message</span>
          
        </v-btn>
      </v-card-actions>
      
    </v-card>
  </v-col>
</v-row>
   </v-container>

  </div>
</template>

<script>

export default {
    data() {
        return {
            team: [
                { name: 'The Web Ninja', role: 'Web developer' },
                { name: 'The Beb Ninja', role: 'Web designer' },
                { name: 'The Geb Ninja', role: 'Web webber' },
                { name: 'The Zeb Ninja', role: 'Web x' },
                { name: 'The Xeb Ninja', role: 'Web a' },
                { name: 'The Feb Ninja', role: 'Web web' },
            ]
        }
    }

};
</script>