# Ernährungsbegleitung bei Mangelernährung im Alter — Demo-PWA

Klickbare Anschauungs-App für die Pilotphase (Kreis Stormarn). Zeigt alle vier
Rollen — Fachkraft (Diätassistenz/Ernährungsberatung), Pflege, Angehörige und
die betroffene Person selbst — in einer einzigen, leichtgewichtigen
Progressive Web App.

**Wichtig:** Dies ist eine **statische Demo mit Beispieldaten**, kein
Produktivsystem. Es gibt kein Backend, keine echte Authentifizierung und
keine echte Datenspeicherung — alle Eingaben (Screenings, Nachrichten,
Tagesprotokoll usw.) leben nur im Arbeitsspeicher des Browsers und sind nach
einem Neuladen der Seite wieder zurückgesetzt. Ziel ist, das Konzept für
Pflegedienste, Pflegeheime und Angehörige greifbar zu machen — nicht, echte
Patientendaten zu verarbeiten.

## Inhalt

```
demo-app/
├── index.html                  Anmeldung / Rollenwahl
├── manifest.json, sw.js        PWA-Grundgerüst (installierbar, offlinefähig)
├── assets/                     App-Icons
├── css/style.css               gemeinsames Design (Farben, Komponenten, Barrierefreiheit)
├── js/app.js, js/sidebar.js    gemeinsame Hilfsfunktionen, Fachkraft-Navigation
├── fachkraft/
│   ├── dashboard.html          Klient:innen-Übersicht, Filter, Suche
│   ├── klient.html             Klient:innen-Detail (Verlauf, Plan, Nachrichten, Änderungsverlauf)
│   ├── screening.html          NRS-2002-Screening-Assistent (4 Schritte)
│   ├── plan.html                Ernährungsplan mit Freigabe-Schalter für Angehörige
│   └── einstellungen.html      Organisationen, Team, Intervalle, Barrierefreiheit
└── mobile/
    ├── einwilligung.html       DSGVO-Einwilligung (Ersteinrichtung)
    ├── pflege.html              Tagesprotokoll für Pflegekräfte
    ├── angehoerige.html         Übersicht für Angehörige
    ├── kommunikation.html      Nachrichten zwischen Fachkraft, Pflege, Angehörigen
    └── betroffene.html          Sehr einfache Eingabe für die betroffene Person selbst
```

## Lokal ansehen

Die App braucht keinen Server-Unterbau, aber zum Testen der PWA-Funktionen
(Manifest, Service Worker) sollte sie über `http://` statt `file://`
aufgerufen werden:

```bash
cd demo-app
python3 -m http.server 8080
# dann im Browser öffnen: http://localhost:8080/index.html
```

Auf dem Smartphone lässt sie sich über „Zum Startbildschirm hinzufügen"
installieren, sobald sie über eine echte (https-)Adresse erreichbar ist.

## Veröffentlichung — der Punkt mit dem privaten Repository

Die App soll in einem **privaten** GitHub-Repository liegen, nicht
öffentlich. Dabei gibt es einen Punkt zu beachten: **GitHub Pages** (die
kostenlose Hosting-Funktion von GitHub) kann bei einem kostenlosen
GitHub-Account **nur aus öffentlichen Repositories** veröffentlichen. Aus
einem privaten Repository Pages zu nutzen, setzt einen kostenpflichtigen
Account voraus (GitHub Pro/Team/Enterprise).

Für die Pilotphase gibt es also drei sinnvolle Wege, sobald der
GitHub-Zugang eingerichtet ist:

1. **Privates Repository + GitHub Pro** — das Repo bleibt vollständig
   privat, Pages-Hosting funktioniert trotzdem (empfohlen, wenn ein
   kostenpflichtiger Account ohnehin sinnvoll ist).
2. **Privates Repository ohne Hosting** — der Code bleibt privat und dient
   nur als Ablage/Versionierung; die Demo wird stattdessen z. B. über einen
   anderen Hosting-Dienst mit Zugriffsschutz (Passwort-geschützter Link)
   bereitgestellt.
3. **Privates Repository + separates „öffentliches" Demo-Repo** — der
   eigentliche Quellcode/die Konzeptarbeit bleibt in einem privaten Repo;
   für die reine Anschauungs-Demo (ohne sensible Inhalte, da ohnehin nur
   Beispieldaten) wird ein einfaches Hosting für genau diese Demo-Dateien
   verwendet.

Diese Entscheidung sollte getroffen werden, sobald der GitHub-Zugang in
dieser Umgebung funktioniert — aktueller Status siehe Chat.

## Getestet

Alle 11 Bildschirme wurden automatisiert geladen und auf JavaScript-/Konsolen-
Fehler geprüft (Desktop-Breite für Fachkraft-Ansichten, Smartphone-Breite für
mobile Ansichten) — keine Fehler gefunden. Navigation zwischen allen
verlinkten Seiten wurde stichprobenartig geprüft.

## Nächste Schritte für eine echte Pilot-Version

- Backend/Datenbank statt Beispieldaten im Browser
- echte Benutzer-Authentifizierung je Rolle
- echte Einwilligungsdokumentation mit Protokollierung (Art. 9 DSGVO)
- Push-Benachrichtigungen für Screening-Erinnerungen
- Anbindung an Abrechnungs-/Pflegedokumentationssysteme
