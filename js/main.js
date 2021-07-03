const about = document.getElementById("about")
const contact =  document.getElementById("contact")
const aboutContent = document.getElementById("about-content")
const contactContent = document.getElementById("contact-content")


about.addEventListener('click', ()=>{
    const aboutBox = new WinBox({
        title : ' About Me',
        background : '#00aa00',
        width: '400px',
        height: '400px',
        top : 50,
        right: 50,
        bottom: 50,
        left : 30,
        mount: aboutContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },
    })
})

about.addEventListener('touchmove', ()=>{
    const aboutBox = new WinBox({
        title : ' About Me',
        background : '#00aa00',
        width: '400px',
        height: '400px',
        top : 50,
        right: 50,
        bottom: 50,
        left : 30,
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
        width: '400px',
        height: '400px',
        top : 350,
        right: 50,
        bottom: 50,
        left : 80,
        mount: contactContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },
    })
})
contact.addEventListener('touchmove', ()=>{
    const contactBox = new WinBox({
        title : ' Contact Me',
        background : '#00aa00',
        width: '400px',
        height: '400px',
        top : 350,
        right: 50,
        bottom: 50,
        left : 80,
        mount: contactContent,
        onfocus: function(){
            this.setBackground('#00aa00')
        },
        onblur: function(){
            this.setBackground('#777')
        },
    })
})

