from pydantic import BaseModel

class ChatRequest(BaseModel):
    query: str
    website_id: str = "shnoor"

class ChatResponse(BaseModel):
    answer: str
