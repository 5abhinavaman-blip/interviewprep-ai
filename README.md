# ⚡ InterviewPrep AI

An AI-powered interview preparation assistant with 6 prompt engineering modes.

## Project Structure
```
interviewprep-ai/
├── backend/          # FastAPI + Python
│   ├── app/
│   │   ├── main.py        # FastAPI app entry
│   │   ├── models.py      # Pydantic models
│   │   ├── prompts.py     # All 6 prompt templates
│   │   ├── routes/
│   │   │   └── interview.py
│   │   └── services/
│   │       └── gemini_service.py
│   ├── requirements.txt
│   └── .env          # (create this, not committed)
└── frontend/         # React + Vite
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

## 🚀 Setup & Run

### Prerequisites
- Python 3.10+
- Node.js 18+
- Gemini API key (free at https://aistudio.google.com/app/apikey)

---

### Backend Setup (Terminal 1)

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
copy .env.example .env
# Open .env and paste your GEMINI_API_KEY

# Run the server
uvicorn app.main:app --reload --port 8000
```

Backend runs at: http://localhost:8000
API docs at: http://localhost:8000/docs

---

### Frontend Setup (Terminal 2)

```bash
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

Frontend runs at: http://localhost:5173

---

## 🧩 6 Prompt Modes

| Mode | Description |
|------|-------------|
| 👥 HR Interview | Behavioral & cultural fit questions |
| 💻 Technical Interview | Core technical questions with skill tags |
| 🎙️ Mock Interview | Live simulated interviewer session |
| 🗺️ Prep Roadmap | Personalized 4-week preparation plan |
| 📝 Answer Evaluation | AI scores your answer across 4 dimensions |
| 🏆 Top 10 Questions | Most critical questions with approach hints |

## Tech Stack
- **Backend**: FastAPI, Python, Google Gemini API
- **Frontend**: React 18, Vite
- **Design**: Custom dark theme with Space Grotesk + JetBrains Mono
