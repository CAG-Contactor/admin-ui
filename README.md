# Admin UI

Ett generiskt admin UI byggt i React för att hantera tävlande. Applikationen är designad för att vara återanvändbar och flexibel, vilket gör det möjligt att anpassa och återanvända den från år till år för olika typer av tävlingar eller evenemang.

## Funktionalitet

Applikationen består av 4 vyer:

### Register - Registrera tävlande
Administratören kan registrera nya tävlande genom att fylla i ett formulär med:
- Namn
- E-post

### Contestants - Lista över alla tävlande
Visar lista med alla registrerade tävlande. Informationen inkluderar:
- Namn
- E-postadress

Här finns även möjlighet att:
- ta bort en användare
- lägga till en användare i kön för att tävla

### Queue - Kö av tävlande
Visar alla tävlande som står i kö för att tävla.

Här finns även möjlighet att:
- ta bort en användare från kön
- starta tävlingen för valfri användare (användaren tas då bort från kön)

### Leaderboard - Resultat
Resultatsida visar endast en tid per tävlande. Om en tävlande har tävlat flera gånger visas endast den snabbaste tiden.

## Installation och användning

För att installera och köra projektet lokalt, följ dessa steg:

1. Klona repositoryt:
   ```sh
   git clone git@github.com:CAG-Contactor/admin-ui.git