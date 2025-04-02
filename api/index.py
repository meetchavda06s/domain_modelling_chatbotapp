from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from openai import AzureOpenAI
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Import your function
from api.gpt2 import gpt_v2_interface  # Update with actual module name

# Initialize FastAPI
app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi.json")

# Setup Azure OpenAI client
api_key = os.getenv("AZURE_OPENAI_API_KEY")
api_version = os.getenv("GPT_API_VERSION")
endpoint = os.getenv("ENDPOINT")
model = os.getenv("GPT_MODEL")

if not all([api_key, api_version, endpoint, model]):
    raise ValueError("Missing one or more required environment variables")

client = AzureOpenAI(api_version=api_version, api_key=api_key, azure_endpoint=endpoint)

# Request Models
class ScenarioRequest(BaseModel):
    scenario: str

class ChatRequest(BaseModel):
    user_input: str

@app.get("/")
def healthchecker():
    return {"status": "success", "message": "FastAPI is running with Azure OpenAI"}

@app.post("/generate-uml")
def generate_uml(request: ScenarioRequest):
    try:
        plantuml_output = gpt_v2_interface(scenario=request.scenario, client=client)
        return {"plantuml": plantuml_output}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating UML: {str(e)}")

@app.post("/chat")
def chat_completion(request: ChatRequest):
    try:
        prompts = [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": request.user_input},
        ]
        
        response = client.chat.completions.create(model=model, messages=prompts)
        return {"response": response.choices[0].message.content.strip()}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Chat completion error: {str(e)}")
