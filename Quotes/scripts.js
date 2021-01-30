
const arrayOfQuotes = [
    {'author': 'Robin S. Sharma', 
     'quote': '“We are all here for some special reason. Stop being a prisoner of your past. Become the architect of your future.”'
    },
    {'author': 'Rhonda Byrne', 
     'quote': 'There is no such thing as a hopeless situation. Every single circumstances of your life can change!'
    },
    {'author': 'Frank Sinatra', 
     'quote': 'The best revenge is massive success.'
    },
    {'author': 'Robin S. Sharma', 
     'quote': 'You can’t make someone feel good about themselves until you feel good about yourself.'
     
    },
    {'author': 'Nelson Mandela', 
     'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },

];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `-${arrayOfQuotes[random].author}`;
    
}