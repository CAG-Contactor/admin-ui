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
- avbryta pågående tävling

### Leaderboard - Resultat
Resultatsida visar endast en tid per tävlande. Om en tävlande har tävlat flera gånger visas endast den snabbaste tiden.

## Arkitektur och State Management

### DataContext - Realtidsuppdateringar

Applikationen använder React Context API för centraliserad state-hantering med automatiska realtidsuppdateringar.

#### Hur det fungerar:

1. **DataContext** (`src/context/DataContext.tsx`) är hjärtat i state-hanteringen
   - Hanterar all data: contestants, queue och leaderboard
   - Pollar backend-API:et var 5:e sekund för uppdateringar
   - Delar state med alla komponenter som behöver den

2. **Polling-mekanism**:
   ```
   Backend Database (källa till sanning)
        ↓
   API endpoints (REST)
        ↓
   DataContext (pollar var 5:e sekund)
        ↓
   React Components (prenumererar på data)
   ```

3. **Fördelar**:
   - Flera admins kan använda systemet samtidigt och ser samma data
   - Data synkas automatiskt mellan alla öppna flikar/klienter
   - State är alltid konsistent med backend
   - Ingen manuell refresh behövs

4. **Komponenter som använder Context**:
   - `Register` - refreshar data efter registrering
   - `Contestants` - visar och hanterar tävlande
   - `Queue` - visar och hanterar kö
   - `Leaderboard` - visar resultat i realtid

#### Exempel på användning:

```typescript
// I en komponent
import { useData } from '../context/DataContext';

function MyComponent() {
  const { contestants, queue, leaderboard, loading } = useData();

  // Data uppdateras automatiskt var 5:e sekund
  return <div>{contestants.length} tävlande</div>;
}
```

#### Varför polling istället för WebSockets?

- Backend har REST API (inte WebSocket-stöd)
- 5 sekunders intervall är mer än tillräckligt för en tävling
- Enklare att implementera och underhålla
- Fungerar över alla nätverkskonfigurationer

## Installation och användning

För att installera och köra projektet lokalt, följ dessa steg:

1. Klona repositoryt:
   ```sh
   git clone git@github.com:CAG-Contactor/admin-ui.git