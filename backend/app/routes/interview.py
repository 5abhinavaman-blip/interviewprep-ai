from fastapi import APIRouter, HTTPException
from app.models import InterviewRequest, InterviewResponse
from app.prompts import build_prompt
from app.services.gemini_service import generate_response

router = APIRouter()

@router.post("/generate", response_model=InterviewResponse)
async def generate_interview_content(request: InterviewRequest):
    try:
        prompt = build_prompt(
            role=request.role,
            experience=request.experience,
            topic=request.topic,
            mode=request.mode,
            user_answer=request.user_answer,
            question=request.question
        )
        content = await generate_response(prompt)
        return InterviewResponse(
            mode=request.mode,
            content=content,
            role=request.role,
            experience=request.experience,
            topic=request.topic
        )
    except Exception as e:
             print("ERROR OCCURRED:")
             print(repr(e))
             raise HTTPException(status_code=500, detail=str(e))

@router.get("/modes")
async def get_modes():
    return {
        "modes": [
            {"id": "hr", "label": "HR Interview", "icon": "👥", "description": "Behavioral & cultural fit questions"},
            {"id": "technical", "label": "Technical Interview", "icon": "💻", "description": "Core technical questions"},
            {"id": "mock", "label": "Mock Interview", "icon": "🎙️", "description": "Live simulated interview session"},S
        ]
    }
