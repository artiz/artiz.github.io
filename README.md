# Artem Kustikov

### Principal Consultant, AI/DevOps/FullStack Software Developer

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
| <a href="Artem_Kustikov_CV.pdf">PDF</a>
| <a href="GermanVersion.html">Deutsche Version</a>
</span>
<br/>
Vienna ¤ Austria <br/>
<a href="mailto:artem.kustikov@gmail.com">artem.kustikov@gmail.com</a> ¤ <a href="tel:+4366493106218">+43 664 9310 6218</a>

</div>
</div>

Principal consultant and hands-on software architect with 20+ years of experience designing and delivering scalable, cloud-native systems end to end. I lead architecture and engineering across **AI/LLM-powered applications**, **distributed event-driven platforms**, and **full-stack web products**, translating business goals into resilient, well-governed solutions. Core focus areas: GenAI and agentic systems (LLM agents, evaluation and observability, MCP), solution and microservices architecture, cloud infrastructure (AWS, Azure, GCP), DevOps and platform engineering (Kubernetes, Terraform, CI/CD), and real-time data streaming (Kafka, Flink). I pair technical leadership with deep delivery experience — mentoring teams, driving engineering best practices, and shipping production systems that scale.

### [Experience](FullExperience.md)
<div style="display: flex; flex-direction: row; justify-content: space-between">
<div>Aug 2022 - Current<br/><strong>Principal Consultant, AI/DevOps/FullStack Software Developer</strong></div>
<div>
<a href="https://www.reply.com/machine-learning-reply/de">Machine Learning Reply</a>  <i>Vienna, Austria</i>
</div>
</div>

*Stack*: Node.js, React, Next.js • Java, Quarkus, Flyway • Python, PydanticAI • PostgreSQL, Cosmos DB, Redis • Apache Kafka, Flink, Confluent • Azure OpenAI, AWS Bedrock, Langfuse, MCP • Terraform, Kubernetes, Helm • AWS, Azure

**Solution Architect/AI Engineer** - *Self-service agentic AI platform*

* Owned end to end a self-service agentic platform where a non-engineer describes an AI agent in chat, gets it back as an editable visual workflow on a canvas, publishes it, and real inbound traffic runs it — triggered by a shared mailbox, embeddable web forms, live phone calls and cron schedules.
* Designed the full-stack architecture: a Next.js portal holding all server-side platform logic, two Python Azure Function Apps (dispatcher and executor) and four Storage Queues as the only seams between them, with a single workflow JSON contract shared by the ReactFlow canvas, the generation bot, the dispatcher and the executor — adding a capability means a new node type and a translator, not a new pipeline.
* Implemented the agent executor on PydanticAI against the Azure OpenAI Responses API with streamed output, retry/failure classification, scheduled runs and a Redis-backed human-in-the-loop pause/resume primitive; agents ground answers in Azure AI Foundry vector stores, call platform tools such as Salesforce case creation and reach customer systems through authenticated MCP servers.
* Built the realtime voice channel end to end: phone-number-to-workflow routing, browser WebRTC sessions minted with short-lived ephemeral tokens so the account key never leaves the server, caller-side transcription, in-call knowledge search and post-call handover of the full transcript to an agent.
* Delivered MCP integrations with a full OAuth2 authorization-code flow, tokens encrypted at rest with AES-256-GCM under a Key Vault data key, automatic refresh and per-person credentials bound to a single workflow, so a shared server never means a shared identity.
* Designed multi-tenancy across the whole data layer — domain-based tenant resolution, a tenant predicate on every query and a test that fails the build if any repository function omits the tenant id — so one codebase ships both as a multi-tenant portal with per-customer branding, users and data and as a single-tenant install inside the customer's own Azure subscription.
* Wrote the Terraform and GitHub Actions pipelines (OIDC federated credentials, bootstrap of the state backend) that stand the platform up from an empty subscription; onboarding a new customer is a GitHub Environment plus a tfvars file. Authored ADRs, runbooks and unit/integration tests across the TypeScript and Python sides.

**AI/ML Engineer** - *GenAI demonstrators for sales and offer processes*

* Built an LLM-as-a-Judge quality layer for customer-facing chatbots: every conversation turn is traced to Langfuse and scored asynchronously by an AWS Bedrock LLM judge combined with coded metrics, surfacing 9 live quality scores (quality, cost, escalation risk) — designed to plug into any chatbot.

**Solution Architect/FullStack** - *Scheduling, billing and contract platform for concert organisers*

* Designed and built a multi-tenant platform serving several legally separate companies and event formats: one login supports multiple roles with role-specific features, and every query is scoped through explicit per-company access grants that can be gated on a signed contract.
* Modelled recurring schedules that generate concerts with immutable composition snapshots; double-booking is prevented in the database itself. Added `.ICS` confirmation emails with confirm/cancel deep links and PDF participant and fee reports.
* End-to-end TypeScript on Bun — GraphQL Yoga API, Prisma/PostgreSQL, React/Redux/Mantine SPA, JWT with Google and Apple OAuth — deployed to AWS ECS Fargate with Terraform/Terragrunt, GitHub Actions continuous delivery, and SES mail via the task role.
* Built end-to-end with Claude Code — from requirements and data model through API, UI, infrastructure and CI/CD — as a production-scale AI-assisted development case study.

**Senior DevOps/FullStack** - *Web-client for artificial intelligence chatbot system*

* Develop robust and resilient CI/CD platform with integrated unit and e2e tests (Playwright) and support for feature environments.
* Introduce seamless user authentication and role-based authorization against AWS Cognito.
* Work on support for collaborative chats, workspaces, and documents based on WebSockets and WebRTC.

**Senior Java Developer/DevOps** - *Unified vehicles data streaming platform*

* Work on backend microservices design, development, and deployment (Github Actions, ArgoCD, Azure Kubernetes Service, Terraform)
* Design and implement highly secured Java REST API on top of Confluent Kafka and Flink pipelines. Automate Flink pipelines deployment and monitoring.

**DevOps Engineer/Senior Developer** - *Online Sales Forecasting Tool*

* Refactor existing API and ML inference microservices written on Java (Spring Boot), Python (FastAPI), and R (plumber) to support deployment into k8s. Optimize Docker images build and versioning, add health checks and external configuration. Develop CI/CD framework based on Github actions. Implement custom Github action to perform HTTP polling.
* Migrate legacy infrastructure from AWS (RDS and EC2 managed with CloudFormation) to private OpenShift cluster. Setup continuous deployment system based on Helm charts/templates and Tekton triggers and pipelines.

---

<div style="display: flex; flex-direction: row; justify-content: space-between;">
<div>May 2018 - Feb 2022<br/><strong>System Architect/Senior FullStack Software Developer</strong></div>
<div>
<a href="https://intetics.com/">Intetics</a>  <i>Minsk, Belarus</i>
</div>
</div>

*Stack*: Node.js (express, restify), ReactJS (TypeScript, redux, lerna, grpc-web), Go lang (GRPC, protobuf), Threedium, Rust, Docker, Kubernetes, Google Cloud Platform, MongoDB, PostgreSQL, Bigtable

Worked on a large B2B project in the fashion industry, evaluated as #1 in the US market.
Participated in various integration tasks and custom ETL (extract, transform, load) engine development.
Worked on migration of a legacy frontend application from an Ampersand.JS-based framework to ReactJS.

* Performed Node.js microservices profiling and code refactoring/optimization.
* Developed a rich interactive UI for the ETL tool with [React Flow](https://reactflow.dev/), [dagre](https://www.findbestopensource.com/product/dagrejs-dagre), and GRPC.
* Designed and implemented [Box.com](https://www.box.com/) and [Dropbox](https://www.dropbox.com/) connectors for the ETL engine (Go lang).
* Integrated the excelize library into the ETL engine's XSL processor (Go lang), and fixed several [issues](https://github.com/qax-os/excelize/pulls?q=is%3Apr+is%3Amerged+artiz) in the library code.
* Worked on [Threedium](https://threedium.co.uk/) 3D models integration, covering it with a custom React component.

---

<div style="display: flex; flex-direction: row; justify-content: space-between">
<div>Oct 2008 - May 2018<br/><strong>System Architect/Senior Software Developer</strong></div>
<div>
<a href="https://www.effectivesoft.com/">EffectiveSoft</a>  <i>Minsk, Belarus</i>
</div>
</div>

Participated in 20+ projects including NLP and text mining tool Intellexer.

*Stack*: Node.js (express), React, Angular, Ext.js, AWS (EC2, ElasticBeanstalk, RDS, CloudFront), MySQL, Redis, MongoDB, .NET (C#/Managed C++), ASP.NET MVC, C++, COM, WinAPI, ActiveMQ, Python.

* **Crowdfunding software** — B2B platform for local businesses with tight integration of the [Dwolla](https://www.dwolla.com/) payments service: web client and admin app architecture, CI setup (Bitbucket Pipelines, AWS CloudFormation), and a Node.js background worker for money transfers, interest charges, and financial audit.
* **Medicine: DICOM/ECG parsing and analysis** — universal ECG data loader replacing duplicate per-format implementations (Physionet, EFS, ISHNE, HL7), a canvas-based web client to upload and view DICOM images (zoom, WL-transformation, interactive measuring), and an ASP.NET MVC/SignalR clinic personnel synchronization tool.

---

<div style="display: flex; flex-direction: row; justify-content: space-between;">
<div>Oct 2006 - Oct 2008<br/><strong>Senior Software Developer</strong></div>
<div>
InventionMachine/<a href="https://ihsmarkit.com/">IHS Markit</a>  <i>Minsk, Belarus</i>
</div>
</div>

*Stack*: .NET, C#, C++, ATL/MFC, JavaScript/AJAX, Java, ColdFusion

---

<div style="display: flex; flex-direction: row; justify-content: space-between">
<div>Jun 2004 - Sep 2006<br/><strong>Software Developer</strong></div>
<div>
<a href="https://scand.com/">SCAND</a>  <i>Minsk, Belarus</i>
</div>
</div>

*Stack*: ASP 3.0 (VBScript), JavaScript/AJAX, C#, C++/boost/pthread, Java/Spring, MS SQL Server, Oracle

---

<div style="display: flex; flex-direction: row; justify-content: space-between">
<div>Dec 2002 - Jun 2004<br/><strong>Postgraduate student, teacher</strong></div>
<div>
Belarusian National Technical University  <i>Minsk, Belarus</i>
</div>
</div>

Worked on robot simulation and analytical programming system – complex computer-aided modeling system for simulation of real industrial robots and their environment, calculation of robot kinematics, collision detection and analytical programming. Also worked as teacher in the staff of BNTU and taught several IT-related courses: Computer Networking Fundamentals, Mathematical Fundamentals of Programming of Robots.

### Skills
- **JavaScript Full Stack**: (2002-now) TypeScript, React/redux, Angular, Node.js, Express, Next.js, REST/GraphQL
- **DevOps**: (2015-now) Docker, Terraform, Kubernetes, AWS, Azure, GCP, Gitlab
- **Python**: (2008-now) Django, Flask, FastAPI, SQLAlchemy, Celery, NumPy, Pandas, nltk, Seaborn, Pytorch, scikit-learn
- **Java**: (2004-now) Java 1.3/21, Struts/FOP/JSTL/POI, JBoss, Tomcat, Spring Framework, Spring Boot, Quarkus, Gradle
- Performed 500+ technical interviews in JavaScript, DevOps, Java, .NET, and Golang

### Open Source Projects
- **[KateChat](https://github.com/artiz/kate-chat)** — Self-hosted, multi-provider LLM chat platform (open ChatGPT alternative). React/TypeScript frontend with Node.js and Rust backends; integrates AWS Bedrock, OpenAI, and Yandex AI with RAG (Docling), MCP tool servers, in-browser Python (Pyodide), and image generation. GraphQL API, WebSocket subscriptions, PostgreSQL/Redis, Docker.
- **[docling.rs](https://github.com/docling-project/docling.rs)** — High-performance Rust reimplementation of Python Docling, adopted into the official Docling project, that converts 20+ document formats (PDF, DOCX, PPTX, XLSX, HTML, EPUB, images, audio) into a unified `DoclingDocument` for AI/RAG pipelines. Pure-Rust PDF parser with an ONNX layout/TableFormer/OCR stack and Whisper ASR; 2–57× less memory and up to 46× faster than Python, with Node.js/TypeScript bindings. Emits Markdown, docling-JSON and DocLang (`.dclx`) conformant with upstream docling, and ships a pluggable RAG subsystem — chunking, swappable embedders and vector stores, hybrid/multi-query/HyDE retrieval, and an API-key-protected REST service.

### Education  
Belarusian National Technical University | Minsk, Belarus  *1997-2002* | Computer Science, Robotics

### Certifications
* Jun 2026: [Microsoft AI & ML Engineering](https://www.coursera.org/account/accomplishments/specialization/IJO7N1ZRIVU1)
* Jan 2026: [AWS Generative AI Applications](https://coursera.org/share/23b43449064c4afbf75a5720870662bd)
* Oct 2025: [Confluent Certified Developer for Apache Kafka](https://certificates.confluent.io/edc46443-cd6d-4df4-b16b-cf93cbb12127)
* May 2024: HashiCorp Certified: [Terraform Associate (003)](https://www.credly.com/badges/557b7fc7-3b7d-4e0e-a3e9-3b2ae33e5ba2)
* Oct 2023: [AWS Certified Solutions Architect – Associate](https://www.credly.com/badges/53834e5c-40db-46d0-a6b9-87f5f9e7f628)
* Aug 2022: [DevOps on AWS](https://coursera.org/share/245636d69ad3646f868b10d707509883)
* Apr 2017: [Machine Learning and Data Analysis from MIPT/Yandex](https://coursera.org/share/c643a772fe5ce8a01738afd8aff29a93)
* Sep 2016: [Microsoft Certified Solutions Associate](https://www.credly.com/badges/0daf0adb-71dc-4fc3-8c5a-203c3e0c0fdc): [Web Applications](assets/MCSA_Web_Applications.pdf)
* Feb 2013: Microsoft Certified Solutions Developer: Web Applications

### Languages

Russian (native) • English (full professional), IELTS 6.5, CEFR B2 • German (professional), OIF Integrationsprüfung B1



