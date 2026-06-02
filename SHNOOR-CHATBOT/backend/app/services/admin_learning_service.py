import os
import json
import pandas as pd
from app.services.kb_service import KnowledgeBaseService

# Store unresolved queries in a simple JSON file in the data folder
UNRESOLVED_FILE = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "data", "unresolved_queries.json")

class AdminLearningService:
    def __init__(self):
        self.kb_service = KnowledgeBaseService()
        self._ensure_file_exists()

    def _ensure_file_exists(self):
        # Create the file with an empty list if it doesn't exist yet
        os.makedirs(os.path.dirname(UNRESOLVED_FILE), exist_ok=True)
        if not os.path.exists(UNRESOLVED_FILE):
            with open(UNRESOLVED_FILE, 'w', encoding='utf-8') as f:
                json.dump([], f)

    def log_unresolved_query(self, query: str, website_id: str):
        """Saves a query that the bot couldn't answer for admin review."""
        try:
            with open(UNRESOLVED_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
                
            # Avoid duplicate logging of the same exact query
            for item in data:
                if item['query'].lower().strip() == query.lower().strip() and item['website_id'] == website_id:
                    return

            data.append({"query": query, "website_id": website_id, "status": "pending"})
            
            with open(UNRESOLVED_FILE, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=4)
        except Exception as e:
            print(f"Failed to log unresolved query: {e}")

    def get_unresolved_queries(self):
        """Fetches all pending queries that need an admin's answer."""
        try:
            with open(UNRESOLVED_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            print(f"Failed to read unresolved queries: {e}")
            return []

    def teach_bot(self, query: str, answer: str, website_id: str):
        """Admin provides an answer to a query. It saves to the KB and removes from the unresolved list."""
        # 1. Add the new question and answer pair to the knowledge base (CSV)
        df = self.kb_service.load_kb(website_id)
        
        # Create a new DataFrame for the single row and concatenate it
        new_row = pd.DataFrame([{"Question": query, "Answer": answer}])
        df = pd.concat([df, new_row], ignore_index=True)
        
        # Save it directly back to the active knowledge base
        self.kb_service.save_kb(website_id, df)
        
        # 2. Remove this query from the unresolved list since it has been answered
        try:
            with open(UNRESOLVED_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
                
            data = [item for item in data if not (item['query'] == query and item['website_id'] == website_id)]
            
            with open(UNRESOLVED_FILE, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=4)
        except Exception as e:
            print(f"Failed to remove unresolved query after teaching: {e}")
            
        return {"success": True, "message": "Bot successfully learned the new response!"}
