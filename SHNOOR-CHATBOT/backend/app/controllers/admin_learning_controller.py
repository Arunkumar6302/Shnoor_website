from fastapi import APIRouter
from pydantic import BaseModel
from app.services.admin_learning_service import AdminLearningService

router = APIRouter()
learning_service = AdminLearningService()

class TeachRequest(BaseModel):
    query: str
    answer: str
    website_id: str

@router.get("/unresolved")
def get_unresolved_queries():
    """Get all queries the bot didn't know how to answer."""
    queries = learning_service.get_unresolved_queries()
    return {"unresolved_queries": queries}

@router.post("/teach")
def teach_bot_new_answer(request: TeachRequest):
    """Provide an answer for an unresolved query so the bot learns it."""
    result = learning_service.teach_bot(request.query, request.answer, request.website_id)
    return result
