<template>
  <v-container>
    <v-card max-width="900" class="mx-auto">
     <v-textarea
          outlined
          label="tasks json"
          v-model="tasksJson"
        ></v-textarea>
        <v-textarea
          outlined
          label="index json"
          v-model="indexJson"
        ></v-textarea>
        <v-btn @click="save" text color="pink" dark>save</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    tasksJson: '',
    indexJson: ''
  }),
  computed: {
   
  },
  methods: {
    save(){
      localStorage.setItem('tasks', this.tasksJson);
      localStorage.setItem('currentTaskIndex', this.indexJson);
    }
  },
  watch: {

  },
  mounted() {
    this.$store.commit('init');
    this.tasksJson = localStorage.getItem('tasks');
    this.indexJson = localStorage.getItem('currentTaskIndex');
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
  .v-list-item{
    /*border-top: 1px solid #ddd;*/
  }
  .parent-task-text{
    background: #e91e63;
    color: #fff;
    padding: 2px 16px;
    margin: 0;
    font-size: 14px;
    width: 82%;
    border-radius: 10px 10px 0 0;
  }
  .task-card{
    border-top: 1px solid #eee; 
    .top-task-text{
      display: none;
      background: #e91e63;
      color: #fff;
      padding-top: 5px;
      padding-bottom: 5px;
      width: 82%;
      margin: 0;
      border-bottom: none;
      border-radius: 10px 10px 0 0 !important;
      font-size: 14px; 
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
    &.finish{
      .task-text{
        border-left: 6px solid #66BB6A;
      }
    }
    &.in-current-list{
      .task-text{
        border-left: 6px solid #40C4FF;
      }
    }
    &.has-todo-child{
      border-top: none;
      .top-task-text{
        display: block;
      }
      .task-text{
        border-top: 1px solid #eee;
      }
    }
    &.expand{
      .task-children{
        height: auto;
        border-top: 1px solid #ddd;
      }
      .task-text{
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
      border-left: 4px solid #66BB6A !important;
    }
    &.in-current-list{
      border-left: 4px solid #40C4FF !important;
    }
    &.final{
      border-left: 4px solid #e91e63 !important;
    }
  }
  .v-card--link.task-card:before{
    background: transparent;
  }
</style>
