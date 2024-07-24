
const { createApp } = Vue

  createApp({
    data() {
      return {
        todoUser : '',
        todolist : [

            {
                text : 'spesa', 
                done : false
            },

            {
                text : 'compere', 
                done : false
            },

            {
                text : 'faccende di casa',
                done : false
            }
        ]
      }
    },
    methods: {
        newTask(){
            if (this.todoUser.trim().length > 0) {

                let newlist = {}
                newlist.text = this.todoUser ;
                newlist.done = false;
                this.todolist.push(newlist)
                this.todoUser = '';

            }
        },
        addClass(index) {
            this.todolist[index].done = !this.todolist[index].done;
          },
          remove(index) {
            this.todolist.splice(index, 1);
          },
          showModal() {
            const modal = new bootstrap.Modal(document.getElementById('thankYouModal'));
            modal.show();
          } 
    },
    mounted() {
    const flowerIcon = document.getElementById('flower-icon');

    if (flowerIcon) {
      flowerIcon.addEventListener('mouseover', () => {
        flowerIcon.classList.add('petal-move');
      });

      flowerIcon.addEventListener('mouseout', () => {
        flowerIcon.classList.remove('petal-move');
      });
    }
  }
}).mount('#app');