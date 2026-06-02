from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.kb_service import KnowledgeBaseService

router = APIRouter()
kb_service = KnowledgeBaseService()

@router.post("/upload")
async def upload_kb(file: UploadFile = File(...)):
    if not file.filename.endswith(".csv"):
        raise HTTPException(status_code=400, detail="Only CSV files are allowed.")
    
    content = await file.read()
    success, message = kb_service.update_kb_from_file(content)
    
    if not success:
        raise HTTPException(status_code=400, detail=message)
        
    return {"message": message}

@router.get("/status")
async def get_kb_status():
    df = kb_service.load_kb()
    return {
        "status": "active",
        "total_questions": len(df)
    }
