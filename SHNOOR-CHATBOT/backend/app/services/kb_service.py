import pandas as pd
import os
from io import BytesIO

KB_DATA_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "data")

class KnowledgeBaseService:
    def __init__(self):
        self.data_dir = KB_DATA_DIR
        self.ensure_kb_exists("shnoor")
        self.ensure_kb_exists("other")
        self.ensure_kb_exists("lms")
        self.ensure_kb_exists("hrm")
        self.ensure_kb_exists("assessments")
        self.ensure_kb_exists("invoicing")

    def get_kb_path(self, website_id: str):
        safe_id = "".join(c for c in website_id if c.isalnum())
        if not safe_id:
            safe_id = "shnoor"
        return os.path.join(self.data_dir, f"{safe_id}_kb.csv")

    def ensure_kb_exists(self, website_id: str):
        kb_path = self.get_kb_path(website_id)
        os.makedirs(os.path.dirname(kb_path), exist_ok=True)
        if not os.path.exists(kb_path):
            df = pd.DataFrame(columns=["Question", "Answer"])
            df.to_csv(kb_path, index=False)

    def load_kb(self, website_id: str):
        kb_path = self.get_kb_path(website_id)
        try:
            df = pd.read_csv(kb_path)
            print(f"Loaded KB from {kb_path}. Shape: {df.shape}")
            return df
        except Exception as e:
            print(f"Error loading KB from {kb_path}: {e}")
            return pd.DataFrame(columns=["Question", "Answer"])

    def save_kb(self, website_id: str, df):
        kb_path = self.get_kb_path(website_id)
        df.to_csv(kb_path, index=False)

    def update_kb_from_file(self, content: bytes):
        try:
            df = pd.read_csv(BytesIO(content))
            if "Question" not in df.columns or "Answer" not in df.columns:
                raise ValueError("CSV must contain 'Question' and 'Answer' columns.")
            self.save_kb("shnoor", df) # Hardcoded for now, can be updated to accept website_id
            return True, "Knowledge base updated successfully."
        except Exception as e:
            return False, str(e)
