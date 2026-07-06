# Artem Kustikov

### Principal Consultant, KI/DevOps/FullStack Softwareentwickler

<div style="display: flex; flex-direction: row; justify-content: flex-start">
<div style="width: 160px">
<a href="assets/photo.jpg" target="_blank"><img src="assets/photo-preview-128.png" /></a>
</div>
<div>
<a href="https://www.linkedin.com/in/artem-kustikov-2635917/">LinkedIn</a>
| <a href="https://github.com/artiz/">GitHub</a>
| <a href="https://www.credly.com/users/artem-kustikov/badges">Credly</a>
| <a href="https://docs.microsoft.com/en-us/users/artemkustikov-7649/">Microsoft Learning</a>
<span class="hide-in-pdf">
| <a href="Artem_Kustikov_CV_DE.pdf">PDF</a>
| <a href="index.html">English Version</a>
</span>
<br/>
Wien ¤ Österreich <br/>
<a href="mailto:artem.kustikov@gmail.com">artem.kustikov@gmail.com</a> ¤ <a href="tel:+4366493106218">+43 664 9310 6218</a>

</div>
</div>

Principal Consultant und praxisorientierter Softwarearchitekt mit über 20 Jahren Erfahrung in der Konzeption und durchgängigen Umsetzung skalierbarer, cloud-nativer Systeme. Ich verantworte Architektur und Engineering für **KI/LLM-gestützte Anwendungen**, **verteilte ereignisgesteuerte Plattformen** und **Full-Stack-Webprodukte** und übersetze Geschäftsziele in widerstandsfähige, gut steuerbare Lösungen. Schwerpunkte: GenAI und agentische Systeme (LLM-Agenten, Evaluation und Observability, MCP), Solution- und Microservices-Architektur, Cloud-Infrastruktur (AWS, Azure, GCP), DevOps und Platform Engineering (Kubernetes, Terraform, CI/CD) sowie Echtzeit-Datenströme (Kafka, Flink). Ich verbinde technische Führung mit umfassender Liefererfahrung — Mentoring von Teams, Etablierung von Engineering-Best-Practices und die Bereitstellung skalierbarer Produktionssysteme.

### [Erfahrung](FullExperience.md)
<div style="display: flex; flex-direction: row; justify-content: space-between">
<div>Aug 2022 - Heute<br/><strong>Principal Consultant, KI/DevOps/FullStack Softwareentwickler</strong></div>
<div>
<a href="https://www.reply.com/machine-learning-reply/de">Machine Learning Reply</a>  <i>Wien, Österreich</i>
</div>
</div>

*Stack*: Node.js, React • Java, Quarkus, Flyway • Python • PostgreSQL, Redis • Apache Kafka, Flink, Confluent • AWS Bedrock, Langfuse, MCP • Terraform, Kubernetes, Helm • AWS, Azure

**AI/ML Engineer** - *GenAI-Demonstratoren für Vertriebs- und Angebotsprozesse*

* Aufbau einer LLM-as-a-Judge-Qualitätsschicht für kundenorientierte Chatbots: Jeder Gesprächsschritt wird in Langfuse erfasst und asynchron durch einen AWS Bedrock LLM-Judge in Kombination mit programmierten Metriken bewertet — 9 Live-Qualitätskennzahlen (Qualität, Kosten, Eskalationsrisiko), einsetzbar mit jedem Chatbot.
* Konzeption einer agentischen Multi-Workflow-Plattform: Alle Kommunikationskanäle senden Events in eine zentrale Queue, ein Workflow-bewusster Dispatcher verteilt sie an veröffentlichte KI-Agenten, die Anfragen klassifizieren und Antworten in der Sprache des Kunden entwerfen; Ergebnisse landen hinter einem Human-Review-Gate in Salesforce oder SAP — wiederverwendbar über Regionen und Kanäle hinweg.

**Senior DevOps/FullStack** - *Web-Client für KI-Chatbot-System*

* Entwicklung einer robusten und widerstandsfähigen CI/CD-Plattform mit integrierten Unit- und e2e-Tests (Playwright) und Feature-Umgebungen.
* Einführung nahtloser Benutzer-Authentifizierung und rollenbasierter Autorisierung gegen AWS Cognito.
* Unterstützung von kollaborativen Chats, Arbeitsbereichen, Dokumenten basierend auf WebSockets und WebRTC.

**Senior Java Entwickler/DevOps** - *Plattform für einheitliches Fahrzeugdaten-Streaming*

* Backend-Microservices-Design, Entwicklung und Bereitstellung (Github Actions, ArgoCD, Azure Kubernetes Service, Terraform)
* Design und Implementierung einer hochsicheren Java REST API auf Basis von Confluent Kafka und Flink-Pipelines. Einführung von NIST 8000 Sicherheitsanforderungen mit automatischer Confluence-Seitengenerierung.
* Entwicklung einer sicheren Integration mit externen REST-APIs für Fahrzeugdatenanbieter mit Azure SPN-Authentifizierung.

**DevOps Engineer/Senior Entwickler** - *Online Sales Forecasting Tool*

* Refactoring bestehender Microservices in Java (Spring Boot), Python (FastAPI) und R (plumber) zur Unterstützung der Skalierung in k8s. Entwicklung eines CI/CD-Frameworks basierend auf Github Actions.
* Migration der Legacy-Infrastruktur von AWS (RDS und EC2 verwaltet mit CloudFormation) zu privatem OpenShift-Cluster. Einrichtung eines kontinuierlichen Deployment-Systems basierend auf Helm-Charts/Templates und Tekton-Triggers und Pipelines.

---

<div style="display: flex; flex-direction: row; justify-content: space-between;">
<div>Mai 2018 - Feb 2022<br/><strong>Systemarchitekt/Senior FullStack Softwareentwickler</strong></div>
<div>
<a href="https://intetics.com/">Intetics</a>  <i>Minsk, Belarus</i>
</div>
</div>

*Stack*: Node.js (express, restify), ReactJS (TypeScript, redux, lerna, grpc-web), Go lang (GRPC, protobuf), Threedium, Rust, Docker, Kubernetes, Google Cloud Platform, MongoDB, PostgreSQL, Bigtable

Arbeit an großem B2B-Projekt in der Modebranche, bewertet als #1 auf dem US-Markt.
Teilnahme an verschiedenen Integrationsaufgaben und Entwicklung einer benutzerdefinierten ETL-Engine (Extract, Transform, Load).

* Profiling und Refactoring von Node.js-Microservices.
* Entwicklung einer interaktiven UI für ETL-Tool mit [React Flow](https://reactflow.dev/), [dagre](https://www.findbestopensource.com/product/dagrejs-dagre) und GRPC.
* Design und Implementierung von [Box.com](https://www.box.com/) und [Dropbox](https://www.dropbox.com/) Konnektoren für ETL-Engine (Golang).
* Integration der excelize-Bibliothek in den ETL-Engine-XSL-Prozessor (Go lang), Behebung mehrerer [Probleme](https://github.com/qax-os/excelize/pulls?q=is%3Apr+is%3Amerged+artiz) im Bibliothekscode.
* Integration von [Threedium](https://threedium.co.uk/) 3D-Modellen mit benutzerdefiniertem React-Komponenten.

---

<div style="display: flex; flex-direction: row; justify-content: space-between">
<div>Okt 2008 - Mai 2018<br/><strong>Systemarchitekt/Senior Softwareentwickler</strong></div>
<div>
<a href="https://www.effectivesoft.com/">EffectiveSoft</a>  <i>Minsk, Belarus</i>
</div>
</div>

Teilnahme an 20+ Projekten, darunter NLP- und Textmining-Tool Intellexer.

*Stack*: Node.js (express), React, Angular, Ext.js, AWS (EC2, ElasticBeanstalk, RDS, Route 53, CloudFront), webpack, jest, pdfkit, aws-sdk, MySQL, Redis, MongoDB, SQLite, .NET (C#/Managed C++), Prism, Unity, WiX, ASP.NET MVC, C++, COM, MAPI, WinAPI, ActiveMQ, Python, Robot Framework.

**Crowdfunding-Software** - B2B-Software zur Unterstützung lokaler Unternehmen mit enger Integration des [Dwolla](https://www.dwolla.com/) Zahlungssystems.

* Architektur des Web-Clients/Admin-App
* Node.js-Background-Worker-Service für Geldtransfers, Zinsberechnung und Finanzprüfung
* Gemeinsames UT-System für Client/Server, CI-Setup (Bitbucket Pipelines, AWS CloudFormation)

**Medizin: DICOM/ECG-Dateien Parsen und Analyse**

* Implementierung neuer ECG-Dateiformate (Physionet, EFS, ISHNE, HL7)
* Refactoring der gesamten ECG-Dateiverarbeitungslogik durch Einführung eines universellen Datenladers anstelle von Duplikaten
* Web-Client zum Hochladen/Anzeigen von DICOM-Bildern, die serverseitig in PNG konvertiert werden (durch C++ CGI). Web-Client verwendet HTML-Canvas-Elemente zur Anzeige und einfachen Bearbeitung: Zoom, WL-Transformation, interaktive Größenmessung
* Entwicklung eines plattformübergreifenden Intranet-Klinik-Personalsynchronisationstools mit ASP.NET MVC/SignalR

---

<div style="display: flex; flex-direction: row; justify-content: space-between;">
<div>Okt 2006 - Okt 2008<br/><strong>Senior Softwareentwickler</strong></div>
<div>
InventionMachine/<a href="https://ihsmarkit.com/">IHS Markit</a>  <i>Minsk, Belarus</i>
</div>
</div>

*Stack*: .NET, C#, C++, ATL/MFC, JavaScript/AJAX, Java, ColdFusion

---

<div style="display: flex; flex-direction: row; justify-content: space-between">
<div>Jun 2004 - Sep 2006<br/><strong>Softwareentwickler</strong></div>
<div>
<a href="https://scand.com/">SCAND</a>  <i>Minsk, Belarus</i>
</div>
</div>

*Stack*: ASP 3.0 (VBScript), JavaScript/AJAX, C#, C++/boost/pthread, Java/Spring, MS SQL Server, Oracle

---

<div style="display: flex; flex-direction: row; justify-content: space-between">
<div>Dez 2002 - Jun 2004<br/><strong>Postgraduierter Student, Lehrer</strong></div>
<div>
Belarusian National Technical University  <i>Minsk, Belarus</i>
</div>
</div>

Arbeit an Robotersimulation und analytischem Programmiersystem – komplexes rechnergestütztes Modellierungssystem zur Simulation realer Industrieroboter und ihrer Umgebung, Berechnung der Roboterkinematik, Kollisionsdetektion und analytische Programmierung. Außerdem als Dozent an der BNTU tätig und mehrere IT-bezogene Kurse unterrichtet: Grundlagen der Computernetzwerke, Mathematische Grundlagen der Roboterprogrammierung.

### Fähigkeiten
- **JavaScript Full Stack**: (2002-heute) TypeScript, React/redux, Angular, Node.js, Express, Next.js, REST/GraphQL
- **DevOps**: (2015-heute) Docker, Terraform, Kubernetes, AWS, Azure, GCP, Gitlab
- **Python**: (2008-heute) Django, Flask, FastAPI, SQLAlchemy, Celery, NumPy, Pandas, nltk, Seaborn, Pytorch, scikit-learn
- **Java**: (2004-heute) Java 1.3/21, Struts/FOP/JSTL/POI, JBoss, Tomcat, Spring Framework, Spring Boot, Quarkus, Gradle
- Durchführung von 500+ technischen Interviews in JavaScript, DevOps, Java, .NET und Golang

### Open-Source-Projekte
- **[KateChat](https://github.com/artiz/kate-chat)** — Selbst-gehostete Multi-Provider-LLM-Chat-Plattform (offene ChatGPT-Alternative). React/TypeScript-Frontend mit Node.js- und Rust-Backend; integriert AWS Bedrock, OpenAI und Yandex AI mit RAG (Docling), MCP-Tool-Servern, In-Browser-Python (Pyodide) und Bildgenerierung. GraphQL-API, WebSocket-Subscriptions, PostgreSQL/Redis, Docker.
- **[Fleischwolf](https://github.com/artiz/fleischwolf)** — Performante Rust-Neuimplementierung von Python Docling, die über 20 Dokumentformate (PDF, DOCX, PPTX, XLSX, HTML, EPUB, Bilder, Audio) in eine einheitliche `DoclingDocument`-Struktur für KI/RAG-Pipelines umwandelt. Reiner Rust-PDF-Parser mit ONNX-Layout/TableFormer/OCR-Stack und Whisper-ASR; 2–57× weniger Speicher und bis zu 46× schneller als Python, mit Node.js/TypeScript-Bindings.

### Ausbildung  
Belarusian National Technical University | Minsk, Belarus  *1997-2002* | Informatik, Robotik

### Zertifikate
* Jun 2026: [Microsoft AI & ML Engineering](https://www.coursera.org/account/accomplishments/specialization/IJO7N1ZRIVU1)
* Jan 2026: [AWS Generative AI Applications](https://coursera.org/share/23b43449064c4afbf75a5720870662bd)
* Okt 2025: [Confluent Certified Developer for Apache Kafka](https://certificates.confluent.io/edc46443-cd6d-4df4-b16b-cf93cbb12127)
* Mai 2024: HashiCorp Certified: [Terraform Associate (003)](https://www.credly.com/badges/557b7fc7-3b7d-4e0e-a3e9-3b2ae33e5ba2)
* Okt 2023: [AWS Certified Solutions Architect – Associate](https://www.credly.com/badges/53834e5c-40db-46d0-a6b9-87f5f9e7f628)
* Aug 2022: [DevOps on AWS](https://coursera.org/share/245636d69ad3646f868b10d707509883)
* Apr 2017: [Machine Learning and Data Analysis from MIPT/Yandex](https://coursera.org/share/c643a772fe5ce8a01738afd8aff29a93)
* Sep 2016: [Microsoft Certified Solutions Associate](https://www.credly.com/badges/0daf0adb-71dc-4fc3-8c5a-203c3e0c0fdc): [Web Applications](assets/MCSA_Web_Applications.pdf)
* Feb 2013: Microsoft Certified Solutions Developer: Web Applications

### Sprachen

* Russisch (Muttersprache)
* Englisch (verhandlungssicher), IELTS 6.5, CEFR B2
* Deutsch (beruflich), OIF Integrationsprüfung B1
