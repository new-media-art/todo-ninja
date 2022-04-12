<template>
  <div class="dashboard">
    <v-subheader>Dashboard</v-subheader>

     <v-container class="my-5">
        
   <!--     <v-row>
        <v-col cols="12" md="6" lg="3">
          <v-btn outlined block color="primary"><v-sheet class="black--text">Black Text 1</v-sheet></v-btn>
        </v-col>
        </v-row>
   


        <v-row class="mb-3">
        <v-btn small depressed class="grey--text" @click="sortBy('title')">
          <v-icon left small> mdi-folder </v-icon>
          <span class="caption text-lowercase">By project name</span>
        </v-btn>
        
        <v-btn small depressed class="grey--text" @click="sortBy('person')">
          <v-icon left small> mdi-account </v-icon>
          <span class="caption text-lowercase">By project name</span>
        </v-btn>
        </v-row >
 -->
          <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span right class="caption text-lowercase">by projects name</span>
            </v-btn>
          </template>
          <span>Sorts projects by name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span right class="caption text-lowercase">by person name</span>
            </v-btn>
          </template>
          <span>Sorts projects by person name</span>
        </v-tooltip>


        <v-card flat class="pa-3" v-for="project in projects" :key="project.title">
          <v-row :class="`pa project ${project.status}`">
            <v-col cols="12" md="6">
              <div class="caption grey--text">Project Title</div>
              <div>{{ project.title}} </div>
            </v-col>
            <v-col xs="2">
              <div class="caption grey--text">Person</div>
              <div>{{ project.person}} </div>
            </v-col>
            <v-col xs="2">
            <div class="caption grey--text">Due Date</div>
            <div>{{ project.due}} </div>
            </v-col>
            <v-col xs="2">
            <div>
              <v-chip
                  small
                  class="v-chip--active white--text caption my-2"
                  :color="project.status"
                >{{project.status}}</v-chip>
            </div>
            </v-col>
          </v-row>
          <v-row>
        <v-divider></v-divider>
      </v-row>
      </v-card>
    

   </v-container>

  </div>
</template>

<script>

export default {
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Aet Ninga', due: "1st Jan 2019", status: 'ongoing', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur blanditiis perferendis rerum repellendus eaque odio accusamus doloribus cupiditate consectetur illo a, distinctio soluta. Deserunt sequi consequatur officiis voluptas debitis error?'},
        { title: 'Code up the homepage', person: 'The Bet Ninga', due: "1st Jan 2019", status: 'complete', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur blanditiis perferendis rerum repellendus eaque odio accusamus doloribus cupiditate consectetur illo a, distinctio soluta. Deserunt sequi consequatur officiis voluptas debitis error?'},
        { title: 'Design some thumbnails', person: 'The Cet Ninga', due: "1st Jan 2019", status: 'ongoing', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur blanditiis perferendis rerum repellendus eaque odio accusamus doloribus cupiditate consectetur illo a, distinctio soluta. Deserunt sequi consequatur officiis voluptas debitis error?'},
        { title: 'Create community forum', person: 'The Det Ninga', due: "1st Jan 2019", status: 'overdue', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur blanditiis perferendis rerum repellendus eaque odio accusamus doloribus cupiditate consectetur illo a, distinctio soluta. Deserunt sequi consequatur officiis voluptas debitis error?'}
      ]
      
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1 )
    }
  }
};
</script>

<style>
  .project.complete {
    border-left: 4px solid #3cd1c2
  }
  .project.ongoing {
    border-left: 4px solid #d18c3c
  }
  .project.overdue {
    border-left: 4px solid #f30808
  }
   .v-chip.complete {
     background: #3cd1c2
  }
  .v-chip.ongoing {
     background: #d18c3c
  }
  .v-chip.overdue {
     background: #f30808
  }
</style>

<style>
  .dashboard {
    background: rgb(246, 243, 243);
  }
</style>
