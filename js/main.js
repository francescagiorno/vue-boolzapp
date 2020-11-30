const myApp = new Vue({
   el: '#root',
   data:{
      activeContact: 0,
      actualMsg: '',
      actualSearch: '',
      mainUser:{
            avatar: 'img/avatar_io.jpg',
            name: 'Nome Utente'
         },
      contactsArray: [
         {
            filt: 'show',
            avatar: 'img/avatar_1.jpg',
            name: 'Michele',
            lastAccess: '',
            isActive: true,
            chat: [
               {
               msg: 'ciao ciao ciao',
               dataMsg: '10/02/2020 16:24:02',
               status: 'received'
               },
               {
               msg: 'ciao ciao ciao',
               dataMsg: '24/10/2020 16:05:06',
               status: 'sent'
               }
            ],
         },
         {
            filt: 'show',
            avatar: 'img/avatar_2.jpg',
            name: 'Fabio',
            lastAccess: '',
            isActive: false,
            chat: [
              {
              msg: 'ciao ciao ciao',
              dataMsg: '24/10/2020 11:05:03',
              status: 'received'
              },
              {
              msg: 'ciao ciao ciao',
              dataMsg: '24/10/2020 16:05:06',
              status: 'sent'
              }
            ],
         },
         {
            filt: 'show',
            avatar: 'img/avatar_3.jpg',
            name: 'Samuele',
            lastAccess: '',
            isActive: false,
            chat: [
               {
               msg: 'ciao ciao ciao',
               dataMsg: '24/10/2020 18:03:02',
               status: 'received'
               },
               {
               msg: 'ciao ciao ciao',
               dataMsg: '24/10/2020 19:03:06',
               status: 'sent'
               }
            ],
         },
         {
            filt: 'show',
            avatar: 'img/avatar_4.jpg',
            name: 'Luisa',
            lastAccess: '',
            isActive: false,
            chat: [
              {
              msg: 'ciao ciao ciao',
              dataMsg: '24/10/2020 18:03:02',
              status: 'received'
              },
              {
              msg: 'ciao ciao ciao',
              dataMsg: '24/10/2020 19:03:06',
              status: 'sent'
              }
            ],
         }
      ]
   },
   methods:{
      setDate: function(){
         let a = new Date();
         let b = `${a.getDate()}/${a.getMonth() + 1}/${a.getFullYear()} ${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`
         return b;
      },
      write: function(){
         this.contactsArray[this.activeContact].chat.push(
           {msg: this.actualMsg, dataMsg: this.setDate(), status: 'sent'}
         );
         this.actualMsg = '';
         this.respond(this.contactsArray,this.activeContact);
      },
      pickActive: function(index){
         this.activeContact = index;
         this.contactsArray.forEach(e => e.isActive = false);
         this.contactsArray[this.activeContact].isActive = true;
      },
      show: function(){
         if(this.contactsArray[this.activeContact].chat.length != 0){
            return true;
         }
      },
      respond: function(array,active){
         const that = this;
         setTimeout(function(){
            let myTime = that.setDate();
            array[active].chat.push(
           {msg: 'ciao ciao ciao', dataMsg: myTime, status: 'received'}
        )},4000);
     },
      search: function(){
        const that = this;
        this.contactsArray.forEach(function(e){
           if (!e.name.toLowerCase().includes(that.actualSearch.toLowerCase())){
           e.filt = 'hide'
        }})
     },
      cancel: function(){
      this.actualSearch = ''
      this.contactsArray.forEach(e => e.filt = 'show')
     }
  },
})
