const about = document.getElementById("about")
const contact =  document.getElementById("contact")
const aboutContent = document.getElementById("about-content")
const contactContent = document.getElementById("contact-content")


about.addEventListener('click', ()=>{
    const aboutBox = new WinBox({
        title : ' About Me',
        background : '#00aa00',
        width: '350px',
        height: '400px',
        top : 200,
        right: 50,
        bottom: 50,
        left : 10,
        mount: aboutContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },
    })
})




contact.addEventListener('click', ()=>{
    const contactBox = new WinBox({
        title : ' Contact Me',
        background : '#00aa00',
        width: '350px',
        height: '400px',
        top : 250,
        right: 50,
        bottom: 50,
        left : 10,
        mount: contactContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },
    })
})


