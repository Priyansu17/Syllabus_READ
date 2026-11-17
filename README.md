# 🌐 CS35302 Web Technology Studio & AI Doubt Solver

[![React](https://img.shields.io/badge/React-19-blue.svg?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-7.0-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![Gemini API](https://img.shields.io/badge/Google_Gemini-AI_Doubt_Solver-orange.svg?logo=google-gemini)](https://ai.google.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF.svg?logo=vite)](https://vitejs.dev/)

An interactive, modern learning and revision platform designed for the **CS35302 Web Technology** curriculum. Features structured editorial study notes, visual protocol simulations, interactive code playgrounds, curriculum progress tracking, and a real-time **AI Doubt Solver Assistant** powered by Google Gemini.

---

## 🚀 Key Features

### 1. 🤖 AI Doubt Solver Assistant
- **Context-Aware Assistance**: Automatically passes the currently active syllabus topic and reading context into the prompt.
- **3 Specialized Learning Modes**:
  - **Explain Concept**: Clear, conversational breakdowns with intuitive analogies.
  - **Exam Prep (2-Mark / 7-Mark)**: Structured, high-scoring university exam format with definitions, architectural diagrams, and key points.
  - **Code & Debug**: Practical, runnable code snippets with common student bugs highlighted.
- **Chat History**: Supports multi-turn follow-up queries.

### 2. 📖 Comprehensive Curriculum & Topic Reader
- Full coverage of **Units 1 through 5**:
  - **Unit 1**: Internet, WWW, HTTP/HTTPS, DNS, Email Protocols (SMTP, POP3, IMAP).
  - **Unit 2**: HTML5, Semantic Elements, CSS3, DHTML, DOM, XML, DTD, XML Schema, XSLT.
  - **Unit 3**: Web Services, Service Oriented Architecture (SOA), SOAP, WSDL, UDDI, CORBA, and AJAX.
  - **Unit 4**: Web 2.0 vs Web 3.0, Semantic Web, Microformats, Resource Description Framework (RDF), Web Search, Edge Computing.
  - **Unit 5**: Web 4.0, Decentralized Web (IPFS, Solid), WebXR, IoT Web Architectures, and 5G Web Services.
- Section-by-section completion tracking, reading progress bar, and comprehensive HTML tag reference.

### 3. 🔬 Visual Protocol & Technology Simulators
Interactive, visual simulations that turn theoretical concepts into hands-on demonstrations:
- **HTTP & DNS Resolution**: Step-by-step resolution from browser cache to root, TLD, and authoritative servers.
- **Email Protocol Simulator**: Trace SMTP sender-to-server and POP3/IMAP retrieval flows.
- **CSS Box Model Simulator**: Tweak margin, border, padding, and content dimensions dynamically.
- **XML Parser & Tree Inspector**: Parse XML strings into visual tree nodes and validate schema tags.
- **SOA & AJAX Request Lifecycle**: Visualize asynchronous requests, states (`0` to `4`), and response payloads.
- **Semantic Search & Knowledge Graph**: Experience keyword vs. semantic ontology querying.
- **5G & IoT Next-Gen Web Simulator**: Low-latency edge vs. cloud payload latency simulations.

### 4. 💻 Live Code Playground
- In-browser code editor with instant split-pane preview for HTML, CSS, and JavaScript.
- One-click transfer from AI Doubt Solver code snippets straight into the playground.

### 5. 📊 Exam Prep View & Analytics
- Rapid revision cheatsheet, high-yield exam question bank, and D3.js animated completion ring charts.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Motion (Framer Motion), Lucide Icons, D3.js
- **Backend**: Express.js (Node.js), `@google/genai` (Google Gemini SDK)
- **Tooling**: Vite 8, tsx, esbuild

---

## ⚙️ Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/)
- A [Google Gemini API Key](https://aistudio.google.com/app/apikey)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Priyansu17/Syllabus_READ.git
   cd Syllabus_READ
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   GEMINI_API_KEY="your_gemini_api_key_here"
   PORT=3000
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000`.

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## ☁️ Deployment on Render

This project runs as a full-stack Node.js server serving the built React frontend:

1. Create a new **Web Service** on [Render](https://render.com).
2. Connect this repository (`Priyansu17/Syllabus_READ`).
3. Set the following build and start commands:
   - **Build Command**: `npm install --legacy-peer-deps && npm run build`
   - **Start Command**: `npx tsx server.ts`
4. Add the required environment variables:
   - `GEMINI_API_KEY` = `<your-gemini-api-key>`
   - `NODE_ENV` = `production`
5. Click **Deploy Web Service** to get your public HTTPS link.

---

## 📜 License

This project is licensed under the MIT License.
