class Form{
constructor(){
    this.input=createInput("name")
    this.button=createButton("play")
    this.greeting=createElement("h1")

}
hide(){
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
}
display(){
    var title=createElement("h1")
    title.html("car racing game")
    title.position(displayWidth/2-50,0)

    
    
   this. input.position(displayWidth/2-40,displayHeight/2-80)
   this. button.position(displayWidth/2+30,displayHeight/2)

   this. button.mousePressed(()=>{
       this. input.hide();
       this. button.hide();
        player. name=this.input.value();
        playerCount++;
        player.index=playerCount
        player.update()
        player.updateCount(playerCount)
       this. greeting.html("hello "+player.name)
       this. greeting.position(displayWidth/2-70,displayHeight/4)


    })

    
}
}