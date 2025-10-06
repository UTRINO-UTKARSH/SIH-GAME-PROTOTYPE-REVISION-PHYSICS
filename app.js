const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.set("view engine","ejs"); 

const user = "Utkarsh"; // get this from your authentication system
const subject = "Physics"; // example subject, get this dynamically as needed

app.get('/', (req, res) => {
    res.render('home', { 
        user: user, 
        showFullNav: true,
        activePage: 'home'
    })
})

app.get('/play', (req, res) => {
    res.render('intro', { 
        user: user, 
        showFullNav: false,
        activePage: 'play',
        subject: subject
    }) 
})
app.get('/quiz', (req, res) => {
  // Sample Level Data (reuse or move to a shared variable if needed)
  const gameLevels = [
      { id: 1, number: 1, unlocked: true, score: 350 },
      { id: 2, number: 2, unlocked: true, score: 480 },
      { id: 3, number: 3, unlocked: true, score: 210 },
      { id: 4, number: 4, unlocked: false, score: 0 },
      { id: 5, number: 5, unlocked: false, score: 0 },
      { id: 6, number: 6, unlocked: false, score: 0 },
      // ... more levels
  ];
  res.render('game', { 
    user: user, 
    showFullNav: false,
    levels: gameLevels,
    activePage: 'quiz',
  });
});

app.get('/profile', (req, res) => {
    res.render('profile', { 
        user: user, 
        showFullNav: false,
        activePage: 'profile',
        subject: subject
    }) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
