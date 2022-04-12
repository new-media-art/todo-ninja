<template>
  <div class="dashboard">
    <v-subheader>Dashboard</v-subheader>

     <v-container class="my-5">
        
   <!--     <v-row>
        <v-col cols="12" md="6" lg="3">
          <v-btn outlined block color="primary"><v-sheet class="black--text">Black Text 1</v-sheet></v-btn>
        </v-col>
        </v-row>
    -->
        <v-card flat class="pa-3" v-for="project in projects" :key="project.title">
          <v-row :class="`pa project ${project.status }`">
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
            <div class="caption grey--text">Status</div>
            <div>{{ project.status}} </div>
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
        { title: 'Design a new website', person: 'The Net Ninga', due: "1st Jan 2019", status: 'ongoing', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur blanditiis perferendis rerum repellendus eaque odio accusamus doloribus cupiditate consectetur illo a, distinctio soluta. Deserunt sequi consequatur officiis voluptas debitis error?'},
        { title: 'Code up the homepage', person: 'The Net Ninga', due: "1st Jan 2019", status: 'complete', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur blanditiis perferendis rerum repellendus eaque odio accusamus doloribus cupiditate consectetur illo a, distinctio soluta. Deserunt sequi consequatur officiis voluptas debitis error?'},
        { title: 'Design some thumbnails', person: 'The Net Ninga', due: "1st Jan 2019", status: 'ongoing', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur blanditiis perferendis rerum repellendus eaque odio accusamus doloribus cupiditate consectetur illo a, distinctio soluta. Deserunt sequi consequatur officiis voluptas debitis error?'},
        { title: 'Create community forum', person: 'The Net Ninga', due: "1st Jan 2019", status: 'overdue', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur blanditiis perferendis rerum repellendus eaque odio accusamus doloribus cupiditate consectetur illo a, distinctio soluta. Deserunt sequi consequatur officiis voluptas debitis error?'}
      ]
      
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
</style>
