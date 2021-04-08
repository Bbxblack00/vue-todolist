function initVue() {
  new Vue({

    el: '#app',
    data: {
      points: [
        'appoint 1',
        'appoint 2'
      ],
      newPoint: ''
    },

    // creare le funzioni
    methods: {
      CreateNewPoint: function() {
        if (this.newTodo.length > 0) {
          this.points.push(this.newPoint);
          // dopo aver inserito l'elemento all'interno dell'array,
          // procediamo a cancellarlo all'interno della casella di testo.
          this.newPoint = '';
        }
      },
      deletePoint: function(index) {
        // splice ci permette di rimuovere o sostituire un elemento
        // la sua sintassi è formata da array.splice("indice dell'array", "numero di elementi da sostituire").
        this.points.splice(index, 1);
      }
    }



  });
}

initVue();
