## Reflektioner Lab 2 Modul 

**Kapitel 2 – Namngivning** 

| Namn och förklaring | Reflektion och regler från Clean Code |
|---------------------|---------------------------------------|
| `FilePath` Namn på txt-filens sökväg som ska analyseras i modulen. | `Use Intention-Revealing Names` Namngivningen är ganska kortfattad och berättar inte vilken typ av sökväg det är till filen (relativ/absolut etc), det berättar inte heller att det är filen som ska analyseras. |
|`count` En variabel som används i funktioner som räknar antal tecken/vokaler/konsonanter. | `Use Searchable Names/Add Meaningful Context` Variabeln count returneras (som unik variabel) av flera funktioner i klassen SignCounter för att räkna antalet tecken, konsonanter eller vokaler som finns i en vald fil. Enligt koncept i boken att det ska vara enkelt att söka efter namn kan count ha haft ett mer sökbart namn, till exempel countVowels. Det går även in i konceptet att lägga till en meningsfull till count. |
|`SignDisplayer `En klass med funktioner som ska visa tecken, vokaler eller konsonanter. |`Pick One Word per Concept` Med tanke på att klassen är döpt till `SignDisplayer` med display som ett konceptnamn borde även funktionerna i klassen följa det konceptet. Däremot har funktionerna namn med “show” istället för “display”. |
|`showVowelsFromFile` Funktion som ska returnera vokaler från en txt-fil som hanteras av funktionen. | `Don’t Add Gratuitous Context` Att kortare namn är bättre än långa och utdragna namn är något som nämns i kapitel två. Det kan upplevas som en svår balans mellan att ha namn som ska berätta men inte vara överdrivna. I detta fall hade man kunnat korta ner namnet till till exempel showVowels i och med att det är en fil som funktionen ska visa vokaler från. |
|`getTopSigns` Funktion som returnerar dom top fem mest använda tecknen i en fil. |`Avoid Disinformation` Namngivningen på funktionen är inte tillräckligt informativt eftersom det inte specificerar att det handlar om de fem mest använda tecknen, vilket är dess syfte. |

Efter att ha läst kapitel två i *Clean Code* blev min första spontana reflektion “Att namngivning kan ha en så pass stor effekt i kommunikation av kod”.  Precis som boken tar upp används namn till allt inom mjukvaruutveckling, närmare bestämt inom kodning och vad mycket enklare det blir att läsa och tyda kod om man har en tydlig linje i hur man namngiver klasser, funktioner, metoder och variabler med flera.  

I kapitlet togs det upp flera relevanta tankesätt om hur man bör förhålla sig till namngivning, men i avsnittet om *Avoid Mental Mapping* tas det upp om hur man som en smart programmerare kan namnge variabler kortfattat och enkelt, men skillnaden mellan en smart programmerare och en professionell är att den professionella vet att clarity is king. En lite rolig reflektion då jag själv kan känna igen mig i att försöka vara utförlig i kod. Däremot har jag, istället för att göra bra namngivningar, ofta lagt in radkommentarer som skulle kunna tas bort vid förbättring av namngivningar. 

Att våga köra på ett spår som ger tydlighet har jag upplevt som en utmaning, att faktiskt bestämma sig om att hålla sig till ett ord för ett koncept och sedan bibehålla det. Kapitlet lyfter *Pick One Word per Concept* som handlar om att inte blanda begrepp för ett och samma koncept. Det känns som min utmaning, som en relativt nyintroducerad student till kodning, är att hitta eller veta om det bästa begreppet för ett koncept och att det lätt blir en mix av olika begrepp. Detta är en utmaning som jag upplever blir enklare ju mer kod jag bemöter, men vid början av ett nytt projekt som jag ska jobba i kan det vara svårt att veta. Jag tyckte att konceptet med *Add Meaningful Context* var en bra riktlinje för att skapa ännu tydligare referenser till det man namngiver det skapar en tydlig bild och större förståelse. 

Kapitlet lyfte fram vikten att skriva kod till programmerare eller slutanvändare vilket jag reflekterade över. Att namnge något i koden som har en relevans till slutanvändaren behöver inte nödvändigtvis vara det bästa sättet att kommunicera sin kod till en annan programmerare som ska förstå vad namngivningen innebär. Jag själv kan tänka i spåren att en funktion, till exempel, ska ta fram något till en slutanvändare men då inte ge en innebörd i hur det relaterar i kodbasen med datavetenskapliga termer.  

Slutklämmen i kapitlet överraskade mig och gav mig en tankeställare. Att faktiskt ta sig tid att ändra namn för att förbättra koden är något jag inte har prioriterat tidigare. Jag har alltid velat fokusera på att skriva ny kod istället för att ägna mig åt att ändra i befintlig kod. 



**Kapitel 3 - Funktioner**

| Metodnamn och länk eller kod | Reflektion |
|------------------------------|------------|
| getTopVowels | `Small!` Att funktioner ska vara små och ännu mindre än det stämmer inte överens med denna funktion som har flera rader i sig och till och med nestlade villkor. |
|getTopSigns |`Use Descriptive Names` Funktionen tar fram dom topp fem mest använda vokalerna i en textfil. I namngivningen framgår det att funktionen tar fram topp-vokalerna, men inte vilka. |
| showVowelsFromFile |`Dont repeat yourself` Egentligen är showVowelsFromFile och showConsonantsFromFile två likadana funktioner som ska returnera antingen vokaler eller konsonanter. Detta hade kunnat komprimerats. Dessutom hur konsonanter och vokaler definieras hade kunnat gjorts på annats vis, istället för att definiera det i varje funktion.|
|countSignsInFile |`Error handling` Hos samtliga funktioner saknas felhantering. En stor miss som gjorts, inte bara för att säkerställa att indatan kan hanteras men även ur säkerhetsaspekt över vilken indata som modulen hanterar. |
| countSignsInFile |`Verbs and Keywords` Att argument till en funktion kan krångla till förståelsen av en kod var något kapitel tre tog upp. Inga utav mina funktioner tar emot argument, men mina klasser gör som hanteras av mina funktioner. Något som kan verka smart men kanske oflexibelt. |

Kapitel tre i Clean Code hade ett klart och tydligt budskap från start till slut; funktioner ska vara korta och lättlästa. Funktioner ska göra en sak bra och endast den saken. Ett budskap som jag köper till varje pris. Min stora reflektion är hur jag ska kunna lyckas med detta upplägg. Att faktiskt låta koden få lösa en sak i taget, det låter rimligt i teorin men att göra det i praktiken är en annan femma. 

I avsnittet “Small!” redogör författaren, Robert C. “Uncle Bob” Martin, två regler: 

- Funktioner ska vara små. 
- Funktioner ska vara ännu mindre än det. 

Ett tydligt och smått humoristiskt sätt att poängtera vikten i att faktiskt ha korta funktioner. Det kändes som ett skönt sätt att se, skapa och hantera funktioner på. Frågan är om jag själv lever upp till reglerna och svaret blir nog att jag har förbättringspotential när det kommer till den delen. Genom att svepa genom mina funktioner i de tre klasser jag skapat till min modul kan man snabbt se att flera funktioner skulle kunna delas upp i fler funktioner.  

Att inte indentera mer än en gång (med vissa undantag) som togs upp i “Blocks and indenting” och att istället kalla på en funktion i en annan funktion skulle vara ett bättre tillvägagångsätt. Anledning till det var att inte få för stora och nestlade funktioner, dessutom kan funktioner vara beskrivande i sitt utförande. När jag läser det i boken är det något jag själv hade kunnat förbättra i min kod då det i flera funktioner förekommer if-satser inuti for-loopar. 

En aspekt som jag fortfarande har svårt att förstå (och som jag ännu inte helt har gripit) är konceptet att hålla sig på en och samma abstraktionsnivå per funktion. Detta är något som jag behöver fortsätta utforska och förstå djupare. 

Kapitlet tar även upp hur man ska tänka kring namngivning av funktioner, Use Descriptive Names, det är lättare att namnge funktioner som endast gör en sak. Ju mer komplicerad funktionen är desto svårare blir det att namnge den. Här har jag tagit lärdom om att våga använda längre namn på funktioner för att beskriva vad den gör. Det medför också ett mindre behov av att kommentera kod. Även avsnittet Verbs and Keywords går in på spåret om hur man kan med namngivning förklara vad en funktion med sin parameter utför. 

När det kommer till avsnitten om felhantering lägger jag märke till hur “Uncle Bob” närmare föraktar try/catch-hantering i kod. Något som jag tidigare har brukat nästintill allt som oftast, i alla fall när det kommer till tidigare kurser jag läst i JavaScript. Kan vara så att jag har ännu mer att fundera över. Dessutom är felhantering något jag helt och hållet missat i min modul, förbättringspotential finns. 

Att upprepa och duplicera kod är roten till all ondska inom mjukvara kan vara ett extremt och återigen humoristiskt sätt att uttala sig. Jag kan själv hitta delar i min kod där jag skulle kunna undvika upprepning, till exempel vid definieringen av vokaler och konsonanter som för övrigt kan snyggas till och modifieras. 

**Summering**

För att knyta ihop säcken vill jag sammanfatta de reflektioner jag kommit fram till under läsningen av kapitel ett och två. På ett sätt vill jag säga att det jag fått ut är att man inte ska krångla till det. Däremot är det inte alltid så lätt att inte krångla till det, konstigt nog. Jag tror nog mycket för mig är att låta mig själv ta tiden att bryta ut en funktion eller gå tillbaka till en variabel och fundera över om namngivning skulle kunna vara bättre. Hittills har mycket av min erfarenhet att skriva kod varit ämnad mot en deadline (vilket det förmodligen kommer fortsätta vara, även i arbetslivet) vilket medfört mitt tankesätt “funkar det så funkar det, jag vet vad som sker i alla fall”. Ett tankesätt som jag inte längre känner mig nöjd med.  

Övning ger färdighet och jag tror det är vad jag behöver göra, våga gå tillbaka till kod (som fungerar) och modifiera till det bättre.	 

