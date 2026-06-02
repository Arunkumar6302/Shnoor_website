from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from app.services.kb_service import KnowledgeBaseService
from app.services.admin_learning_service import AdminLearningService

class NLPService:
    def __init__(self):
        self.kb_service = KnowledgeBaseService()
        self.admin_learning = AdminLearningService()
        self.vectorizer = TfidfVectorizer()
        self.similarity_threshold = 0.3
        
    def get_response(self, user_query: str, website_id: str) -> str:
        df = self.kb_service.load_kb(website_id)
        
        if df.empty:
            return "I'm sorry, my knowledge base is currently empty. Please contact support."
            
        questions = df["Question"].tolist()
        answers = df["Answer"].tolist()
        
        all_texts = questions + [user_query]
        
        try:
            tfidf_matrix = self.vectorizer.fit_transform(all_texts)
            
            query_vector = tfidf_matrix[-1]
            question_vectors = tfidf_matrix[:-1]
            
            similarities = cosine_similarity(query_vector, question_vectors).flatten()
            
            best_match_index = similarities.argmax()
            best_score = similarities[best_match_index]
            
            if best_score >= self.similarity_threshold:
                return answers[best_match_index]
            else:
                # Log the out-of-knowledge query so an admin can teach the bot later
                self.admin_learning.log_unresolved_query(user_query, website_id)
                return "I'm not sure how to answer that. Could you please rephrase or contact our Admn-admin@shnoor.com?"
                
        except Exception as e:
            print(f"Error processing NLP request: {str(e)}")
            return "An internal error occurred while processing your request."
