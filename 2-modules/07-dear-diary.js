// Dear Diary 📓
// Codédex

const fs = require('fs');

fs.readFile('seventh-grade.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log(data);
});

/*
            .-'-,-"-.          .-"-,-"-.          .-"-,-"-.
      _.-._(         ).-._.-._(         ).-._.-._(         ).-._
    .'_.-._.`.     .'_.-._.-._.`.     .'_.-._.-._.`.     .'_.-._`.
   ( (        `._.'              `._.'              `._.'       ) )
    ) )                                                        ( (
 .-"-,-"-.                                                   .-"-,-"-.
(         )                                                 (         )
 `.     .'                 dear diary,                       `.     .'
   `._.'                                                       `._.'
    ) )            i can’t believe I’m not allowed              ( (
   ( (              to go to sammi’s birthday party              ) )
    ) )          r my parents trying to ruin my life???         ( (
 .-"-,-"-.   the cafeteria food was really gross today btw   .-"-,-"-.
(         )           idk if it’s even people food          (         )
 `.     .'                                                   `.     .'
   `._.'           p.s. i miss my goldfish fluffy              `._.'
    ) )                                                         ( (
   ( (            p.p.s. this is my mad face  )-:<3              ) )
    ) )                                                         ( (
 .-"-,-"-.                                                   .-"-,-"-.
(         )                                                 (         )
 `.     .'                                                   `.     .'
   `._.'                                                       `._.'
    ( (                                                          ) )
     ) )     .-"-,-"-.          .-"-,-"-.          .-"-,-"-.    ( (
    ( (_.-._(         ).-._.-._(         ).-._.-._(         ).-._) )
     `._.-._.`.     .'_.-._.-._.`.     .'_.-._.-._.`.     .'_.-._,'
               `._.'              `._.'              `._.'

*/