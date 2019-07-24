<template>
  <v-container>
    <v-card max-width="900" class="mx-auto">
      <v-toolbar color="pink" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Todo List</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon @click="add">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list two-line>
        <v-list-item-group multiple active-class="pink--text">
          <template v-for="(task, index) in tasks">
            <v-list-item :key="index">
              <v-list-item-icon>
                <v-icon v-show="task.finish" color="green" class="finish-mark">mdi-check</v-icon>
              </v-list-item-icon>
              <v-list-item-content @click="focusTask(index)">
                <v-list-item-title v-text="task.text" class="text-right"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action class="task-opts" :class="onfocusClass(index)">
                <v-layout wrap>
                  <v-flex xs6>
                    <v-btn text icon small color="pink" @click="finishTask(index)">
                      <v-icon>mdi-check</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs6>
                    <v-btn text icon small color="pink" @click="deleteTask(index)">
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-flex>  
                </v-layout>
              </v-list-item-action>
            </v-list-item>

            <v-divider v-if="index + 1 < tasks.length" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>

    <v-dialog v-model="taskDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">New Task</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-textarea
                  label="what's your plan"
                  rows="1"
                  prepend-icon="mdi-calendar-check-outline"
                  v-model="newTaskText"
                ></v-textarea>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeTaskDialog">Close</v-btn>
          <v-btn color="blue darken-1" text @click="addTask">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tasks: [],
    taskDialog: false,
    newTaskText: '',
    focusTaskIndex: null
  }),
  methods: {
    add(){
      this.taskDialog = true;
    },
    finishTask(index){
      this.tasks[index].finish = true;
      this.focusTaskIndex = null;
    },
    deleteTask(index){
      this.tasks.splice(index, 1);
      this.focusTaskIndex = null;
    },
    addTask(){
      if(this.newTaskText != ''){
        this.tasks.push({text:this.newTaskText, finish: false})
      }
      this.closeTaskDialog();
    },
    closeTaskDialog(){
      this.taskDialog = false;
      this.newTaskText = '';
    },
    focusTask(index){
      if(this.focusTaskIndex === index){
        this.focusTaskIndex = null;
      }else{
        this.focusTaskIndex = index;
      }
    },
    onfocusClass(index){
      return index === this.focusTaskIndex ? 'on-focus' : 'not-on-focus';
    }
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .task-opts{
    width: 0 !important;
    min-width: 0;
    overflow: hidden;
    margin-left: 0 !important;
    transition: all .3s;
    -moz-transition: all .3s; 
    -webkit-transition: all .3s; 
    -o-transition: all .3s; 
  }
  .task-opts.on-focus{
    width: 80px !important;
    min-width: 80px;
    overflow: hidden;
    margin-left: 16px !important;
  }
  .v-list-item:before{
    background: transparent;
  }
  .v-list-item__icon{
    margin: 0;
  }
  .v-list-item__icon i{
    position: relative;
    top: 6px;
  }
</style>
