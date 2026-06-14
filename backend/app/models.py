from pydantic import BaseModel
from typing import Optional
from enum import Enum

class InterviewMode(str, Enum):
    HR = "hr"
    TECHNICAL = "technical"
    MOCK = "mock"
    ROADMAP = "roadmap"
    EVALUATION = "evaluation"
    TOP10 = "top10"

class InterviewRequest(BaseModel):
    role: str
    experience: str
    topic: str
    mode: InterviewMode
    user_answer: Optional[str] = None  # only for evaluation mode
    question: Optional[str] = None     # only for evaluation mode

class InterviewResponse(BaseModel):
    mode: str
    content: str
    role: str
    experience: str
    topic: str
