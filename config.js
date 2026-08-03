const APP_VERSION = "1.0";

const AUFTRAG_STATUS = [
  { id: "offen", label: "Offen" },
  { id: "wird-angelegt", label: "Wird angelegt…" },
  { id: "ordner-angelegt", label: "Ordner angelegt" },
  { id: "erledigt", label: "Erledigt" }
];

// Nach so vielen Tagen verschwindet ein Auftrag automatisch aus der Liste, damit
// sie nicht zulaeuft. NUR fuer die Anzeige ("wird am ... entfernt") -- entfernt
// wird serverseitig, siehe AUTO_PRUNE_APPS in admin-worker.js. Wert muss dort
// mit maxTageAlt uebereinstimmen, sonst zeigt die App ein falsches Datum an.
const AUFTRAG_AUFBEWAHRUNG_TAGE = 5;

const APP_CHANGELOG = [
  {
    version: "1.1",
    groups: [
      {
        title: "Benachrichtigung aufs Handy",
        items: [
          "Ein neuer Auftrag meldet sich direkt bei den Trainer:innen der betroffenen Mannschaft — nicht bei allen. Bisher gab es keinen Anlass, die App überhaupt zu öffnen.",
          "Ist zu der Mannschaft niemand hinterlegt, geht die Nachricht an die Zuständigen des Werkzeugs, damit eine Anfrage nicht lautlos untergeht.",
          "Die Nachricht nennt weder Mannschaft noch Gegner — sie steht auf dem Sperrbildschirm. Worum es geht, sieht man nach dem Antippen.",
          "Eingeschaltet wird das in der Tools-Übersicht unter „Mein Konto“, einzeln für dieses Werkzeug. Wer es nicht einschaltet, merkt keinen Unterschied."
        ]
      }
    ]
  },
  {
    version: "1.0",
    groups: [
      {
        title: "Fotoaufträge",
        items: [
          "Das Social-Media-Team legt einen Auftrag an: Mannschaft, Datum und wahlweise der Gegner.",
          "Der zuständige Trainer — erkannt über die eigenen Mannschaften im Profil — legt per Klick auf „Ordner anlegen“ einen eigenen Nextcloud-Ordner mit teilbarem Freigabelink an.",
          "Die Fotos werden direkt über diesen Link hochgeladen, nicht über diese App. Der Link lässt sich an alle weitergeben, die Bilder beisteuern.",
          "Sobald ein Ordner besteht, lässt sich ein Spielbericht eintippen. Er landet als Word-Datei im selben Ordner wie die Fotos.",
          "Sind die Fotos abgeholt und verarbeitet, markiert das Social-Media-Team den Auftrag als erledigt."
        ]
      },
      {
        title: "Die Liste bleibt kurz",
        items: [
          "Ein Auftrag verschwindet 5 Tage nach dem Anlegen von selbst aus der Liste. Bei jedem Auftrag steht, wann es so weit ist.",
          "„Löschen“ entfernt nur den Auftrag aus dieser Liste. Der Nextcloud-Ordner mit Fotos und Spielbericht bleibt erhalten — die Bilder sind das Archiv des Vereins und werden nie mitgelöscht.",
          "Nicht mehr benötigte Foto-Ordner räumt man bei Bedarf direkt in der Nextcloud auf."
        ]
      },
      {
        title: "Wer darf was",
        items: [
          "Sehen: die Auftragsliste, schreibgeschützt.",
          "Bearbeiten: Aufträge anlegen, Ordner anlegen, Spielbericht schreiben und Aufträge als erledigt markieren.",
          "Jeder Trainer sieht die Aufträge seiner eigenen Mannschaften. Der Freigabelink wird nur an den zuständigen Trainer ausgeliefert.",
          "Der Reiter „Info“ ist für alle sichtbar."
        ]
      },
      {
        title: "Bedienung am Handy",
        items: [
          "Die Reiterleiste bricht am Handy um, statt seitlich aus dem Bild zu laufen — auch die hinteren Reiter sind auf schmalen Bildschirmen erreichbar.",
          "Eingabefelder sind mindestens 16 Pixel groß, damit der iPhone-Browser beim Antippen nicht ungefragt in die Seite hineinzoomt und verschoben stehen bleibt."
        ]
      },
      {
        title: "Daten & Speicherung",
        items: [
          "Gespeichert wird in der Vereins-Nextcloud über die zentrale Anmeldung der Tools-Übersicht — ein eigenes Passwort braucht es nicht.",
          "Der Spielbericht wird im Browser als Word-Datei erzeugt und direkt hochgeladen."
        ]
      }
    ]
  }
];
