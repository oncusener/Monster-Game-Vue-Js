new Vue ({
el:'#app',
data:{
player_health:100,
monster_health:100,
game_is_on:false,
logs:[]

},

methods:{
    start_game(){
        this.game_is_on=true;
    },
    attack(){
        const point_player = Math.ceil(Math.random()*10);
        this.monster_health-=point_player;
        this.ad_to_log({turn:'P',text:"Oyuncu atağı(" + point_player + ")"})
      
        const point_monster=Math.ceil(Math.random()*18);
        this.player_health-=point_monster;
        this.ad_to_log({ turn:"M",text: "Canavar atağı(" + point_monster + ")"})

   
    },
    special_attack (){
        const point_player = Math.ceil(Math.random()*25);
        this.monster_health-=point_player;
        this.ad_to_log({turn:'P',text:"Özel oyuncu atağı(" + point_player + ")"})
        const point_monster=Math.ceil(Math.random()*12);
    
        this.player_health-=point_monster;

 

    },
    heal_up(){
        const point_player = Math.ceil(Math.random()*10);
        this.monster_health-=point_player;
        this.ad_to_log({turn:'P',text:"İlk Yardım(" + point_player + ")"})
     
        const point_monster=Math.ceil(Math.random()*25);
        this.player_health+=point_monster;
       


    },

    give_up(){
        this.player_health=0;
        this.ad_to_log({turn:'P',text:"Oyuncu pes etti"})
       

        
    },
    ad_to_log(log){
        this.logs.push(log);
    }

},

computed:{

},
watch:{
    player_health(value){
        if(value<=0){
            this.player_health=0;
            if(confirm('Oyunu kaybettiniz, yeniden denemek ister misiniz ?')){
            this.player_health=100;
            this.monster_health=100;
            this.logs =[]
        }

        } else if (value>=100){
            this.player_health=100;
            

        }

    },
    monster_health(value){
        if(value){
            if(value<=0){
                this.monster_health=0;
               if(confirm('Oyunu kazandınız !')) {
                this.player_health=100;
                this.monster_health=100;
                this.logs =[]
               }


        }


    }


},



}

})
