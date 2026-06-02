from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from app.controllers import chat_controller, kb_controller, admin_learning_controller

app = FastAPI(title="Company Chatbot API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat_controller.router, prefix="/api/chat", tags=["Chat"])
app.include_router(kb_controller.router, prefix="/api/kb", tags=["Knowledge Base"])
app.include_router(admin_learning_controller.router, prefix="/api/admin/learning", tags=["Admin Learning"])

@app.get("/")
def read_root():
    return {"message": "Chatbot API is running"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
