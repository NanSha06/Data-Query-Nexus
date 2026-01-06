# Data Query Nexus  
### Natural Language Search Interface for PostgreSQL

Data Query Nexus is a full-stack application that allows users to query a PostgreSQL database using **natural language**.  
The system converts user queries into SQL using **LLMs**, executes them securely, and displays results via a modern **React + Vite frontend**.

The project demonstrates **AI-assisted database querying**, **hybrid search architecture**, and **production-grade backend design**.

---

##  Features

-  **Natural Language → SQL querying**
-  LLM-powered query understanding (OpenAI API)
-  PostgreSQL relational database
-  Drizzle ORM for type-safe database access
-  Secure query execution (SELECT-only enforcement)
-  Express backend + Vite frontend
-  Graceful fallback when LLM quota is exceeded
-  Modular architecture (easy to extend)

---

## 🏗️ System Architecture
User (Natural Language)
↓
React Frontend (Vite)
↓
Express API
↓
LLM (OpenAI API)
↓
Generated SQL (Validated)
↓
PostgreSQL Database
↓
Results → UI


---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- TypeScript
- Tailwind CSS

### Backend
- Node.js
- Express
- TypeScript
- Drizzle ORM

### Database
- PostgreSQL

### AI / LLM
- **OPEN AI API** (One time)
- Optional: Local LLM (Ollama + Llama 3)

---






