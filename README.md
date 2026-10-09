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
<a href="https://www.gulp.de/gulp2/g/spezialisten/resume/artiz">Randstad</a>
| <a href="https://www.freelancermap.at/profil/principal-consultant-ki-devops-fullstack-softwareentwickler">freelancermap.at</a>
<br/>
Vienna ¤ Austria <br/>
<a href="mailto:artem.kustikov@gmail.com">artem.kustikov@gmail.com</a> ¤ <a href="tel:+4366493106218">+43 664 9310 6218</a>

</div>
</div>

Principal consultant and hands-on software architect with 15+ years of experience designing and delivering scalable, cloud-native systems end to end. I lead architecture and engineering across **AI/LLM-powered applications**, **distributed event-driven platforms**, and **full-stack web products**, translating business goals into resilient, well-governed solutions. Core focus areas: Azure-native AI and agent architecture (Azure AI Foundry, LLM agents, RAG and knowledge retrieval, human-in-the-loop workflows, evaluation and observability, MCP), enterprise solution and microservices architecture, infrastructure as code and platform engineering (Terraform, Kubernetes, CI/CD, managed identity and RBAC), cloud infrastructure (Azure, AWS, GCP), and real-time data streaming (Kafka, Flink). I pair technical leadership with deep delivery experience — mentoring teams, driving engineering best practices, and shipping production systems that scale.

### Open Source Projects
- **[docling.rs](https://github.com/docling-project/docling.rs)** — High-performance Rust reimplementation of Python Docling, adopted into the official Docling project; converts 30+ document formats (PDF, DOCX, PPTX, XLSX, HTML, EPUB, images, audio) into a unified `DoclingDocument` for AI/RAG pipelines. Pure-Rust PDF parser with an ONNX layout/TableFormer/OCR stack, Node.js/TypeScript bindings and LangChain integration.
- **[KateChat](https://github.com/artiz/kate-chat)** — Self-hosted, multi-provider LLM chat platform (open ChatGPT alternative). React/TypeScript frontend with Node.js and Rust backends; integrates AWS Bedrock, OpenAI, and Yandex AI with RAG (Docling), MCP, in-browser Python (Pyodide), and image generation. GraphQL API, WebSocket subscriptions, PostgreSQL/Redis, Docker.

### [Experience](FullExperience.md)
<div style="display: flex; flex-direction: row; justify-content: space-between">
<div>08.2022 - Current<br/><strong>Principal Consultant, AI/DevOps/FullStack Software Developer</strong></div>
<div>
<a href="https://www.reply.com/machine-learning-reply/de">Machine Learning Reply</a>  <i>Vienna, Austria</i>
</div>
</div>

*Stack*: Node.js, React, Next.js • Java, Quarkus, Flyway • Python, PydanticAI • PostgreSQL, Cosmos DB, Redis • Apache Kafka, Flink, Confluent, Databricks • Azure AI Foundry/OpenAI, AWS Bedrock, LangChain, Langfuse, RAG, MCP, A2A • Terraform, Terragrunt, Kubernetes, Helm, Argo CD, Azure DevOps • Prometheus, Grafana • AWS, Azure

**Senior Java Developer/DevOps** ¤ *Unified vehicles data streaming platform* ¤ 06.2024-Current

* Designed and implemented the Quarkus platform services — a Management API for schemas, data orders, pipelines and provisioning, and a Deployment Service for Kafka topics, ACLs and identity pools on Confluent — integrated with Schema Registry and the customer's legacy vehicle-data services, with schema validation on ingestion; downstream, **Databricks** consumes the streams as **Apache Iceberg** tables.
* Owned the Flink layer: pipeline persistence on reactive Hibernate/Flyway with automatic restart of failed jobs, a byte-for-byte refactor of the core job, a Redis-backed rules cache and Flink Pipelines massive migration/update tooling; delivery with **Argo CD/Helm/Cilium** and monitoring with **Prometheus and Grafana**.
* Hardened and scaled the Azure edge: mTLS for consumers, in-app JWT validation behind an off/shadow/enforce switch, **managed identity instead of SPN credentials** and API Management JWT policies; **Terraform/Terragrunt** for five environments incl. Key Vaults and tfstate **RBAC** via GitHub Actions on federated credentials; currently introducing **Policy as Code** with **Kyverno** for the telemetry platform.

**Solution Architect/AI Engineer** ¤ *Self-service agentic AI platform* ¤ 01.2026-09.2026

* Owned end to end a self-service agentic platform where a non-engineer describes an AI agent in chat, gets it back as an editable visual workflow, publishes it, and real inbound traffic runs it over a shared mailbox, embeddable web forms, live phone calls (WebRTC) and cron schedules; agents and model deployments run on **Azure AI Foundry** and ground answers in its **vector stores** (upload, ingestion, run-time retrieval — a RAG knowledge layer), reply in the customer's language, hand results to Salesforce and SAP, and reach customer systems through OAuth2-secured **MCP** servers with tokens AES-256-GCM-encrypted under a Key Vault data key.
* Designed the architecture: a Next.js portal, Azure Function Apps (dispatcher and executor on **PydanticAI** over the Azure OpenAI Responses API) and Storage Queues as the only seams between portal, generation bot and runtime — streamed output, retry classification and a Redis-backed **human-in-the-loop** pause/resume primitive.
* Made it multi-tenant by construction (domain-based tenant resolution, a tenant predicate on every query, a build-failing test for any query that omits it) and shippable either as a shared portal with per-customer branding or as a single-tenant install in the customer's own Azure subscription; **Terraform** covers every Azure resource and **GitHub Actions with OIDC federated credentials** apply it — bootstrap workflow for the state backend, Entra ID app registrations and Key Vault, with customer onboarding reduced to one GitHub Environment plus a tfvars file.

**Solution Architect/FullStack** ¤ *Scheduling, billing and contract platform for concert organisers* ¤ 06.2026-09.2026

* Designed and built a multi-tenant platform serving several legally separate companies and event formats: one login supports multiple roles with role-specific features, and every query is scoped through explicit per-company access grants (**RBAC**) that can be gated on a signed contract.
* End-to-end **TypeScript** on **Bun** — **GraphQL**, **Prisma/PostgreSQL**, **React/Redux**, **Google OAuth** — on **AWS ECS Fargate** with **Terraform/Terragrunt** and **GitHub Actions**; built end to end with **Claude Code**, from requirements and data model to infrastructure, as a production-scale AI-assisted development case study.

**AI/ML Engineer** ¤ *LLM-as-a-Judge chatbot quality assessor* ¤ 04.2026-06.2026

* Built an LLM-as-a-Judge quality layer for customer-facing chatbots: every conversation turn is traced to Langfuse and scored asynchronously by an AWS Bedrock LLM judge combined with coded metrics, surfacing 9 live quality scores (quality, cost, escalation risk) — **LLM evaluation and observability** designed to plug into any chatbot.

**Senior DevOps/FullStack** ¤ *Web-client for artificial intelligence chatbot system* ¤ 01.2025-12.2025

* Develop robust and resilient CI/CD platform with integrated unit and e2e tests (Playwright) and support for feature environments.
* Introduce seamless user authentication and **role-based authorization (RBAC)** against AWS Cognito.
* Add pluggable AI model support (AWS Bedrock, OpenAI) with **RAG**, image-processing and code-interpretation plugins; support collaborative chats, workspaces and documents over WebSockets and WebRTC.

**DevOps Engineer/Senior Developer** ¤ *Online Sales Forecasting Tool* ¤ 01.2024-06.2024

* Refactor API and ML inference microservices in Java (Spring Boot), Python (FastAPI) and R (plumber) for k8s deployment, with a GitHub Actions CI/CD framework. Migrate legacy infrastructure from AWS (RDS and EC2 on CloudFormation) to a private OpenShift cluster with continuous deployment on Helm charts, Tekton triggers and pipelines.

**Senior FullStack Developer/DevOps Engineer** ¤ *Cashier-free store backend/infrastructure* ¤ 08.2022-12.2023

* Integrate an external in-store computer vision system into the shopping journey and the payment providers Fiserv, Adyen and PayPal; custom whitelist system to block unsupported payment methods.
* Backend microservices deployment (Azure Kubernetes Service, Terraform, Helm), performance work, Elasticsearch integration and on-site analytics; refactoring incl. distributed DB migrations as k8s jobs with init-containers to avoid conflicts at parallel deployments.

---

<div style="display: flex; flex-direction: row; justify-content: space-between;">
<div>05.2018 - 02.2022<br/><strong>System Architect/Senior FullStack Software Developer</strong></div>
<div>
<a href="https://intetics.com/">Intetics</a>  <i>Minsk, Belarus</i>
</div>
</div>

*Stack*: Node.js (express, restify), ReactJS (TypeScript, redux, lerna, grpc-web), Go lang (GRPC, protobuf), Threedium, Rust, Docker, Kubernetes, Google Cloud Platform, MongoDB, PostgreSQL, Bigtable

Large B2B project in the fashion industry, evaluated as #1 in the US market: integration tasks, a custom ETL engine, and migration of a legacy Ampersand.JS frontend to ReactJS.

* Profiled and optimised Node.js microservices; developed a rich interactive UI for the ETL tool with [React Flow](https://reactflow.dev/), [dagre](https://www.findbestopensource.com/product/dagrejs-dagre), and GRPC.
* Designed and implemented [Box.com](https://www.box.com/) and [Dropbox](https://www.dropbox.com/) connectors for the ETL engine (Go lang); integrated excelize into its XSL processor and upstreamed several [fixes](https://github.com/qax-os/excelize/pulls?q=is%3Apr+is%3Amerged+artiz).
* Integrated [Threedium](https://threedium.co.uk/) 3D models with a custom React component.

---

<div style="display: flex; flex-direction: row; justify-content: space-between">
<div>10.2008 - 05.2018<br/><strong>System Architect/Senior Software Developer</strong></div>
<div>
<a href="https://www.effectivesoft.com/">EffectiveSoft</a>  <i>Minsk, Belarus</i>
</div>
</div>

Participated in 20+ projects including NLP and text mining tool Intellexer.

*Stack*: Node.js (express), React, Angular, Ext.js, AWS (EC2, ElasticBeanstalk, RDS, CloudFront), MySQL, Redis, MongoDB, .NET (C#/Managed C++), ASP.NET MVC, C++, COM, WinAPI, ActiveMQ, Python.

* **Crowdfunding software** — B2B platform for local businesses integrating the [Dwolla](https://www.dwolla.com/) payments service: web client and admin app architecture, CI (Bitbucket Pipelines, AWS CloudFormation) and a Node.js worker for money transfers, interest charges and financial audit.
* **Medicine: DICOM/ECG parsing and analysis** — universal ECG data loader replacing per-format implementations (Physionet, EFS, ISHNE, HL7), a canvas-based web client for DICOM images (zoom, WL-transformation, measuring) and an ASP.NET MVC/SignalR clinic personnel sync tool.

---

<div style="display: flex; flex-direction: row; justify-content: space-between;">
<div>10.2006 - 10.2008<br/><strong>Senior Software Developer</strong></div>
<div>
InventionMachine/<a href="https://ihsmarkit.com/">IHS Markit</a>  <i>Minsk, Belarus</i>
</div>
</div>

*Stack*: .NET, C#, C++, ATL/MFC, JavaScript/AJAX, Java, ColdFusion

---

<div style="display: flex; flex-direction: row; justify-content: space-between">
<div>06.2004 - 09.2006<br/><strong>Software Developer</strong></div>
<div>
<a href="https://scand.com/">SCAND</a>  <i>Minsk, Belarus</i>
</div>
</div>

*Stack*: ASP 3.0 (VBScript), JavaScript/AJAX, C#, C++/boost/pthread, Java/Spring, MS SQL Server, Oracle

---

<div style="display: flex; flex-direction: row; justify-content: space-between">
<div>12.2002 - 06.2004<br/><strong>Postgraduate student, teacher</strong></div>
<div>
Belarusian National Technical University  <i>Minsk, Belarus</i>
</div>
</div>

Computer-aided modeling system for simulation of real industrial robots and their environment: robot kinematics, collision detection and analytical programming. Taught IT courses at BNTU (Computer Networking Fundamentals, Mathematical Fundamentals of Programming of Robots).

### Skills
- **JavaScript Full Stack**: (2002-now) TypeScript, React/redux, Angular, Node.js, Express, Next.js, REST/GraphQL
- **DevOps**: (2015-now) Docker, Terraform, Kubernetes, AWS, Azure, GCP, Gitlab
- **Python**: (2008-now) Django, Flask, FastAPI, SQLAlchemy, Celery, NumPy, Pandas, Pytorch, scikit-learn
- **Java**: (2004-now) Java 1.3/21, JBoss, Tomcat, Spring Framework, Spring Boot, Quarkus, Gradle
- Performed 500+ technical interviews in JavaScript, DevOps, Java, .NET, and Golang

### Education
Belarusian National Technical University | Minsk, Belarus  *1997-2002* | Computer Science, Robotics

### Certifications
* 06.2026: [Microsoft AI & ML Engineering](https://www.coursera.org/account/accomplishments/specialization/IJO7N1ZRIVU1)
* 01.2026: [AWS Generative AI Applications](https://coursera.org/share/23b43449064c4afbf75a5720870662bd)
* 10.2025: [Confluent Certified Developer for Apache Kafka](https://certificates.confluent.io/edc46443-cd6d-4df4-b16b-cf93cbb12127)
* 05.2024: HashiCorp Certified: [Terraform Associate (003)](https://www.credly.com/badges/557b7fc7-3b7d-4e0e-a3e9-3b2ae33e5ba2)
* 10.2023: [AWS Certified Solutions Architect – Associate](https://www.credly.com/badges/53834e5c-40db-46d0-a6b9-87f5f9e7f628)
* 08.2022: [DevOps on AWS](https://coursera.org/share/245636d69ad3646f868b10d707509883)
* 04.2017: [Machine Learning and Data Analysis from MIPT/Yandex](https://coursera.org/share/c643a772fe5ce8a01738afd8aff29a93)
* 09.2016: [MCSA: Web Applications](https://www.credly.com/badges/0daf0adb-71dc-4fc3-8c5a-203c3e0c0fdc) ([certificate](assets/MCSA_Web_Applications.pdf))
* 02.2013: Microsoft Certified Solutions Developer: Web Applications

### Languages

Russian (native) • English (full professional), IELTS 6.5, CEFR B2 • German (professional), OIF Integrationsprüfung B1



