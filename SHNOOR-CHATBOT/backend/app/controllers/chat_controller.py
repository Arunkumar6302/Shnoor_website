from fastapi import APIRouter
from app.models.schemas import ChatRequest, ChatResponse
from app.services.nlp_service import NLPService

router = APIRouter()
nlp_service = NLPService()

@router.post("/message", response_model=ChatResponse)
async def chat(request: ChatRequest):
    answer = nlp_service.get_response(request.query, request.website_id)
    return ChatResponse(answer=answer)
