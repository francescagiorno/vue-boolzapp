const myApp = new Vue({
   el: '#root',
   data:{
      concact: 0,
      message: '',
      user:{
            avatar: 'img/avatar_io.jpg',
            name: 'Nome Utente'
         },
      contactsArray: [
         {
            avatar: 'img/avatar_1.jpg',
            name: 'Michele',
            lastAccess: '',
            chat: []
         },
         {
            avatar: 'img/avatar_2.jpg',
            name: 'Fabio',
            lastAccess: '',
            chat: []
         },
         {
            avatar: 'img/avatar_3.jpg',
            name: 'Samuele',
            lastAccess: '',
            chat: []
         },
         {
            avatar: 'img/avatar_4.jpg',
            name: 'Luisa',
            lastAccess: '',
            chat: []
         }
      ]
   },
   methods:{
      writeMex: function(){
         this.contactsArray[this.concact].chat.push(this.message);
         this.message= '';
      },
      pickActive: function(contact,index){
         return this.concact = index;
      },
   }
})
