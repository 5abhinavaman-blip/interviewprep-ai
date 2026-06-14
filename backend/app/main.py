from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.interview import router as interview_router

app = FastAPI(
    title="InterviewPrep AI",
    description="AI-powered interview preparation assistant",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(interview_router, prefix="/api/interview", tags=["Interview"])

@app.get("/")
async def root():
    return {"message": "InterviewPrep AI is running 🚀"}

@app.get("/health")
async def health():
    return {"status": "ok"}
