<template>
  <v-container>
    <v-card max-width="900" class="mx-auto">
      <v-toolbar color="pink" dark>
        <v-toolbar-title>Todo List</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click.stop="showTaskCreate">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn icon @click.stop="showTaskPool">
          <v-icon>mdi-calendar-check-outline</v-icon>
        </v-btn>
      </v-toolbar>

      <v-list two-line>
        <v-list-item-group multiple active-class="pink--text">
          <template v-for="(task, index) in currentTasks">
            <v-list-item :key="task.id">
              <v-list-item-content>
                <v-list-item-title class="text-left">
                  <span>{{task.text}}</span>
                </v-list-item-title>
              </v-list-item-content>
              <v-list-item-action class="task-opts">
                <v-btn text icon small color="pink" @click="showTaskOpt(task)">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-divider v-if="index + 1 < tasks.length" :key="index"></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>

    <v-dialog v-model="showTaskOptDlg" max-width="300px">
      <v-card class="mx-auto" max-width="300" tile>
        <v-list>
          <v-subheader>
            Options
          </v-subheader>
          <v-list-item-group multiple color="primary">
            <v-list-item v-show="showPickUpOpt()" @click="pickUpTask">
              <v-list-item-icon>
                <v-icon color="pink">mdi-flag</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Pick it</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item v-show="showFinishOpt()" @click="finishTask">
              <v-list-item-icon>
                <v-icon color="green">mdi-check</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Finish</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item @click="showTaskPrepend">
              <v-list-item-icon>
                <v-icon color="purple">mdi-lightbulb-on-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Something first</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item v-show="showNextTimeOpt()" @click="putBackTask">
              <v-list-item-icon>
                <v-icon color="orange">mdi-keyboard-return</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Next time</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item @click="showTaskEdit">
              <v-list-item-icon>
                <v-icon color="green">mdi-lead-pencil</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Edit</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item @click="deleteTask">
              <v-list-item-icon>
                <v-icon color="red">mdi-close</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Delete</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showTaskEditDlg" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline" v-text="taskEditDlgHeadline"></span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-textarea
                  :label="taskEditDlgLabel"
                  rows="1"
                  prepend-icon="mdi-calendar-check-outline"
                  v-model="onEditTaskText"
                ></v-textarea>
              </v-flex>

              <v-flex xs12>
                <v-select
                  v-model="onEditTaskParentId"
                  :items="RootTasks"
                  hint="Parent Task"
                  persistent-hint
                  prepend-icon="mdi-nature"
                ></v-select>
              </v-flex>

              <v-flex xs12>
                <v-checkbox
                  v-model="onEditTaskFinish"
                  label="Finish"
                  disabled
                ></v-checkbox>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeTaskEditDlg">Close</v-btn>
          <v-btn color="blue darken-1" text @click="confirmTaskEdit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="showTaskPoolDlg" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="pink">
          <v-btn icon dark @click="showTaskPoolDlg = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>All Tasks</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click.stop="showTaskCreate">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card class="my-0 task-card" v-for="(task, index) in tasks" :key="index" :class="taskCardClass(task)" @click="onClickTaskItem(task)">
          <v-card-text class="task-text">
            <p>
              <v-icon color="pink" class="flag">mdi-flag</v-icon>
              {{task.text}}
              <span>{{progressText(task)}}</span>
            </p>
          </v-card-text>              
          <v-card-text class="top-task-text">
            <p>{{topTaskText(task)}}</p>
          </v-card-text>
          <v-card-text class="task-children">
            <v-divider v-if="index + 1 < tasks.length" :key="index"></v-divider>
            <v-chip class="ma-2" left outlined v-for="(childTask, index) in task.child" :key="index" label color="grey" darken-2 :class="taskClass(childTask)" @click.stop="showTaskOpt(childTask)">
              <v-icon color="pink" class="flag">mdi-flag</v-icon>
              {{childTask.text}}
            </v-chip>
            <v-chip class="ma-2" color="grey" darken-2 outlined label @click.stop="showTaskOpt(task)" :class="taskClass(task)">
              <v-icon color="pink" class="flag">mdi-flag</v-icon>
              {{task.text}}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    view: 'current',
    showTaskOptDlg: false,
    showTaskEditDlg: false,
    showTaskPoolDlg: false,
    taskEditDlgStatus: 'create',
    onEditTaskText: '',
    onEditTaskParentId: '',
    onEditTaskFinish: false,
    taskExpandIndex: null
  }),
  computed: {
    currentTasks(){
      return this.$store.getters.currentTasks;
    },
    tasks(){
      return this.$store.state.tasks;
    },
    RootTasks(){
      let t =  this.$store.state.tasks.map((i) => {
        return {text: i.text, value: i.id}
      })
      t.unshift({text: "It's the final task", value: 'na'})
      return t;
    },
    taskEditDlgHeadline(){
      if(this.taskEditDlgStatus == 'create'){
        return 'Task Create';
      }
      if(this.taskEditDlgStatus == 'prepend'){
        return 'Task prepend';
      }
      return "";
    },
    taskEditDlgLabel(){
      if(this.taskEditDlgStatus == 'create'){
        return "Something plan to do";
      }
      if(this.taskEditDlgStatus == 'prepend'){
        return 'Something to do first';
      }
      return "";
    },
    currentView(){
      return this.view == 'current';
    }
  },
  methods: {
    showTaskOpt(task){
      this.onEditTask = task;
      this.showTaskOptDlg = true; 
    },
    showTaskCreate(){
      this.onEditTaskText = '';
      this.onEditTaskParentId = 'na';
      this.openTaskEditDlg('create');
    },
    showTaskPrepend(){
      this.onEditTaskText = '';
      this.onEditTaskParentId = this.onEditTask.parentId || this.onEditTask.id;
      this.openTaskEditDlg('prepend');
    },
    showTaskEdit(){
      this.onEditTaskText = this.onEditTask.text;
      this.onEditTaskParentId = this.onEditTask.parentId || 'na';
      this.openTaskEditDlg('edit');
    },
    confirmTaskEdit(){
      if(this.taskEditDlgStatus == 'create'){
        let parentId = this.onEditTaskParentId != 'na' ? this.onEditTaskParentId : ''; 
        this.$store.commit('taskCreate', {text:this.onEditTaskText, parentId: parentId, current: this.currentView});
      }
      if(this.taskEditDlgStatus == 'edit'){
        let parentId = this.onEditTaskParentId != 'na' ? this.onEditTaskParentId : ''; 
        this.$store.commit('taskUpdate', {id: this.onEditTask.id, parentId: this.onEditTask.parentId, text:this.onEditTaskText, updateParentId: parentId});
      }
      if(this.taskEditDlgStatus == 'prepend'){
        let parentId = this.onEditTask.parentId ? this.onEditTask.parentId : this.onEditTask.id; 
        this.$store.commit('taskPrepend', {parentId: parentId, originId: this.onEditTask.id, text:this.onEditTaskText});
      }
      this.closeTaskEditDlg();
    },
    pickUpTask(){
      this.$store.commit('taskPickUp', {id:this.onEditTask.id, parentId:this.onEditTask.parentId});
      this.showTaskOptDlg = false;
    },
    finishTask(){
      this.$store.commit('taskFinish', {id:this.onEditTask.id, parentId:this.onEditTask.parentId, text:this.onEditTask.text});
      this.showTaskOptDlg = false;
    },
    putBackTask(){
      this.$store.commit('taskPutBack', {id:this.onEditTask.id});
      this.showTaskOptDlg = false;
    },
    deleteTask(){
      this.$store.commit('taskDelete', {id:this.onEditTask.id, parentId:this.onEditTask.parentId});
      this.showTaskOptDlg = false;
    },
    openTaskEditDlg(status){
      this.taskEditDlgStatus = status;
      this.onEditTaskFinish = this.onEditTask ? this.onEditTask.finish : false;
      this.showTaskOptDlg = false; 
      this.showTaskEditDlg = true;
    },
    closeTaskEditDlg(){
      this.showTaskEditDlg = false;
    },
    showTaskPool(){
      this.showTaskPoolDlg = true;
      this.view = 'taskPool';
    },
    onClickTaskItem(task){
      if(task.child && task.child.length > 0){
        this.taskExpandIndex = this.taskExpandIndex == task.id ? null : task.id;
      }else{
        this.showTaskOpt(task);
      }
    },
    taskClass(task){
      let c = {};
      if(task.child && task.child.length > 0){
        c['has-child'] = true;
        if(task.child.findIndex((i) => {return i.finish !=  true}) >= 0){
          c['has-todo-child'] = true;
        }
      }
      if(task.finish){
        c['finish'] = true;
      }
      let i = this.currentTasks.findIndex((i) => { return i.id == task.id});
      if(i >= 0){
        c['in-current-list'] = true;
      }
      return c;
    },
    taskCardClass(task){
      let c = this.taskClass(task);
      if(task.id == this.taskExpandIndex){
        c.expand = true;
      }
      return c;
    },
    topTaskText(task){
      if(task.child && task.child.length > 0){
        let t = task.child.find((i) => {return i.finish !=  true});
        return t ? t.text : task.text;
      }
      return task.text;
    },
    progressText(task){
      if(task.child && task.child.length > 0){
        let n = 0;
        task.child.forEach((i) => {
          if(i.finish != true){
            n = n + 1;
          }
        })
        if(task.finish == true){
          n = n + 1;
        }
        return '' + n + '/' + (task.child.length + 1);
      }
      return ''
    },
    showNextTimeOpt(){
      return this.view == 'current';
    },
    showFinishOpt(){
      if(!this.onEditTask || this.onEditTask.finish){
        return false;
      }
      if(this.onEditTask.child && this.onEditTask.child.length > 0){
        let i = this.onEditTask.child.find((i) => { return i.finish != true })
        if(i){
          return false;
        }
      }
      return true;
    },
    showPickUpOpt(){
      if(this.view == 'current'){
        return false;
      }
      if(!this.showFinishOpt()){
        return false;
      }
      let i = this.currentTasks.findIndex((i) => { return i.id == this.onEditTask.id});
      if(i >= 0){
        return false;
      }
      return true;
    }
  },
  watch: {

  },
  mounted() {
    this.$store.commit('init');
  }
};
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .v-list-item:before{
    /*background: transparent;*/
  }
  .task-opts{
    display: none;
  }
  .v-list-item:hover{
    .task-opts{
      display: inline;
    }
  }
  .v-list-item__title{
    color: #444;
  }
  .task-card{
    border-top: 1px solid #ddd; 
    .top-task-text{
      display: none;
      background: #e91e63;
      color: #fff;
      padding-top: 8px;
      padding-bottom: 8px;
      /*border-top: 1px solid #ccc;*/
      position: relative;
      left: 20%;
      width: 80%;
      border-radius: 20px 0 0 20px;
      font-size: 14px; 
      transition: all .2s;
      -moz-transition: all .2s; /* Firefox 4 */
      -webkit-transition: all .2s; /* Safari 和 Chrome */
      -o-transition: all .2s; /* Opera */
      p{
        margin: 0;
        padding-right: 32px;
      }
      i{
        position: absolute;
        right: 8px;
        top: 8px;
        display: block;
        width: 24px;
        height: 24px;
        text-align: center;
        background: #fff;
        color: #e91e63;
        border-radius: 100%;
        line-height: 24px;
        font-size: 12px;
        font-family: inherit;
      }
    }
    .task-text{
      p{
        padding-right: 40px;
        position: relative;
        margin: 0;
        span{
          position: absolute;
          right: 0;
          top: 0;
        }
      }
      .flag{
        display: none;
        font-size: 16px;
        position: absolute;
        left: -15px;
        top: -12px;
      }
    }
    &.in-current-list{
      .task-text .flag{
        display: block;
      }
    }
    &.has-todo-child{
      .top-task-text{
        display: block;
      }
      .task-text{
        padding-bottom: 8px;
      }
    }
    &.expand{
      .task-children{
        height: auto;
      }
      .task-text{
        background: #e91e63;
        color: #fff;
        border-radius: 0;
      }
      .top-task-text{
        display: none;
      }
    }
  } 

  .task-children{
    height: 0;
    overflow: hidden;
    padding: 0;
  }
  .task-children .v-chip{
    min-width: 60px;
    position: relative;
    .flag{
      display: none;
      font-size: 14px;
      position: absolute;
      left: -0;
      top: -2px;
    }
    &.finish{
      border: 1px solid green !important;
      color: green !important;
    }
    &.in-current-list{
      .flag{
        display: block;
      }
    }
  }
  .v-card--link.task-card:before{
    background: transparent;
  } 
</style>
